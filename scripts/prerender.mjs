/**
 * Writes one HTML file per route after `vite build`.
 *
 * react-snap was not used. It last shipped in 2019 against Puppeteer 1 and
 * React 16, and it does not run a Vite + React 19 build on Vercel without a
 * downloaded browser. This script renders the same wouter app with
 * react-dom/server and react-helmet-async, then checks the files on disk.
 *
 * Run with NODE_ENV=production so vite.config skips the dev-only plugins.
 */
import { createServer } from "vite";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist/public");
const templatePath = join(dist, "index.html");
const template = readFileSync(templatePath, "utf8");

/** React 19 renderToString puts hoisted title, meta, link, and script tags first. */
function splitHoisted(html) {
  const parts = [];
  let rest = html;
  const re = /^<(link|meta|title|script)\b[\s\S]*?(?:\/>|<\/\1>)/i;
  while (re.test(rest)) {
    const match = rest.match(re);
    parts.push(match[0]);
    rest = rest.slice(match[0].length);
  }
  return { head: parts.join("\n"), body: rest };
}

const vite = await createServer({
  configFile: join(root, "vite.config.ts"),
  server: { middlewareMode: true },
  appType: "custom",
});

try {
  const { render, prerenderPaths } = await vite.ssrLoadModule(
    "/src/entry-server.tsx"
  );

  const titles = new Map();
  const descriptions = new Map();
  for (const path of prerenderPaths) {
    const { appHtml } = await render(path);
    const { head, body } = splitHoisted(appHtml);
    if (!body || body.length < 500) {
      throw new Error(`${path} rendered almost no page text`);
    }
    let html = template.replace(
      /<!--page-meta-->[\s\S]*?<!--\/page-meta-->/,
      head
    );
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root" data-prerender-path="${path}">${body}</div>`
    );
    const title = html.match(/<title[^>]*>([^<]*)<\/title>/)?.[1] ?? "";
    if (!title || titles.has(title)) {
      throw new Error(`Missing or repeated title for ${path}: ${title}`);
    }
    titles.set(title, path);
    const described = head.match(
      /<meta\b[^>]*name="description"[^>]*>/i
    )?.[0];
    const descriptionText = described?.match(/content="([^"]*)"/)?.[1] ?? "";
    if (!descriptionText) throw new Error(`No description for ${path}`);
    if (descriptions.has(descriptionText)) {
      throw new Error(
        `Repeated description for ${path} and ${descriptions.get(descriptionText)}`
      );
    }
    descriptions.set(descriptionText, path);
    const canonical =
      path === "/"
        ? "https://www.localcascade.com/"
        : `https://www.localcascade.com${path}`;
    const canonicalTag = head.match(/<link\b[^>]*rel="canonical"[^>]*>/i)?.[0] ?? "";
    if (!canonicalTag.includes(`href="${canonical}"`)) {
      throw new Error(`Canonical for ${path} is not ${canonical}`);
    }
    const ogUrl = head.match(/<meta\b[^>]*property="og:url"[^>]*>/i)?.[0] ?? "";
    if (!ogUrl.includes(`content="${canonical}"`)) {
      throw new Error(`og:url for ${path} is not ${canonical}`);
    }
    if (!body.includes("<h1")) throw new Error(`No h1 in ${path}`);
    const visible = `${head}\n${body}`;
    if (/\$\s*\d/.test(visible) || visible.includes("697")) {
      throw new Error(`A price slipped into ${path}`);
    }
    const outDir = path === "/" ? dist : join(dist, path.slice(1));
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, "index.html"), html);
    console.log(`prerender: ${path} (${title})`);
  }
} finally {
  await vite.close();
}
