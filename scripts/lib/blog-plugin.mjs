/**
 * Vite plugin. Vercel runs `vite build`, so the publish gate, sitemap, RSS,
 * image copy, and HTML shells all happen here. Scheduled post bodies are
 * never returned from the virtual module during a build.
 */
import fs from "node:fs";
import path from "node:path";
import {
  countScheduled,
  moduleSource,
  prerenderPages,
  publishedSnapshot,
  snapshot,
  syncImages,
  unpublishedPreviewEnabled,
} from "./blog.mjs";
import { writePublicArtifacts } from "./sitemap.mjs";

const IMAGE_TYPES = {
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
};

export function localCascadeBlogPlugin(root) {
  let command = "build";
  let gateNow = null;

  const nowFor = () => {
    if (command === "build") {
      if (!gateNow) gateNow = new Date();
      return gateNow;
    }
    return new Date();
  };

  const devSnapshot = () =>
    snapshot(root, new Date(), {
      includeUnpublished: unpublishedPreviewEnabled("serve"),
    });

  return {
    name: "local-cascade-blog",
    enforce: "pre",
    config(_config, env) {
      command = env.command;
    },
    resolveId(id) {
      if (id === "virtual:blog") return "\0virtual:blog";
    },
    load(id) {
      if (id !== "\0virtual:blog") return null;
      if (command === "build" && process.env.BLOG_PREVIEW_UNPUBLISHED === "1") {
        console.warn(
          "blog: BLOG_PREVIEW_UNPUBLISHED is ignored for builds. A scheduled post stays hidden until a build on or after its date."
        );
      }
      const includeUnpublished = unpublishedPreviewEnabled(command);
      return moduleSource(snapshot(root, nowFor(), { includeUnpublished }));
    },
    buildStart() {
      // Dev also triggers this hook. Public files are written only for a
      // build, so a local preview cannot be wiped or written into the sitemap.
      if (command !== "build") return;
      const now = nowFor();
      const { snap } = writePublicArtifacts(root, now);
      const hidden = countScheduled(root, now);
      console.log(
        `blog: ${snap.posts.length} live as of ${snap.asOfDate} (America/New_York); ${hidden} scheduled and hidden until a later production build`
      );
    },
    configureServer(server) {
      const contentDir = path.join(root, "content", "blog");
      const imageRoot = path.join(root, "client", "public", "images", "blog");
      // Vite records public files before this hook, so a cover copied for a
      // local preview would otherwise fall through to the SPA shell.
      server.middlewares.use((req, res, next) => {
        const url = (req.url ?? "").split("?")[0];
        if (!url.startsWith("/images/blog/")) return next();
        const rel = path.normalize(decodeURIComponent(url.slice(1)));
        if (rel.startsWith("..") || path.isAbsolute(rel)) return next();
        const file = path.resolve(root, "client", "public", rel);
        if (file !== imageRoot && !file.startsWith(imageRoot + path.sep))
          return next();
        if (!fs.existsSync(file) || !fs.statSync(file).isFile()) return next();
        res.setHeader(
          "Content-Type",
          IMAGE_TYPES[path.extname(file).toLowerCase()] ??
            "application/octet-stream"
        );
        res.setHeader("Cache-Control", "no-cache");
        fs.createReadStream(file).pipe(res);
      });
      const refresh = () => {
        try {
          const snap = devSnapshot();
          syncImages(root, snap.internal);
          const mod = server.moduleGraph.getModuleById("\0virtual:blog");
          if (mod) {
            server.moduleGraph.invalidateModule(mod);
            server.reloadModule(mod);
          }
          if (snap.includeUnpublished) {
            console.warn(
              "blog: local preview is showing scheduled posts. Dev server only. Sitemap and RSS are unchanged."
            );
          }
        } catch (error) {
          console.error(error instanceof Error ? error.message : error);
        }
      };
      refresh();
      server.watcher.add(contentDir);
      const onContent = file => {
        if (
          typeof file === "string" &&
          file.includes(`${path.sep}content${path.sep}blog${path.sep}`)
        ) {
          refresh();
        }
      };
      server.watcher.on("add", onContent);
      server.watcher.on("change", onContent);
      server.watcher.on("unlink", onContent);
    },
    closeBundle() {
      if (command !== "build") return;
      const indexPath = path.join(root, "dist", "public", "index.html");
      if (!fs.existsSync(indexPath)) return;
      const html = fs.readFileSync(indexPath, "utf8");
      const snap = publishedSnapshot(root, nowFor());
      const pages = prerenderPages(html, snap);
      for (const page of pages) {
        const dir = path.join(root, "dist", "public", page.path.slice(1));
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, "index.html"), page.html);
      }
      console.log(`blog: wrote ${pages.length} prerendered route shells`);
    },
  };
}
