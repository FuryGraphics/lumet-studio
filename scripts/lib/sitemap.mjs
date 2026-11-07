/**
 * Sitemap, RSS, and live blog images. Called from `pnpm sitemap` and from
 * the Vite build, which is what Vercel runs.
 */
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import {
  ORIGIN,
  blogSitemapEntries,
  publishedSnapshot,
  syncImages,
  writeRss,
} from "./blog.mjs";

export function buildSitemapXml(root, now = new Date()) {
  const snap = publishedSnapshot(root, now);
  const today = now.toISOString().slice(0, 10);
  const services = slugsIn(root, "client/src/data/services.ts");
  const plans = slugsIn(root, "client/src/data/plans.ts");
  for (const [what, list] of [
    ["service", services],
    ["plan", plans],
  ]) {
    if (list.length === 0) {
      throw new Error(`build-sitemap: no ${what} slugs found`);
    }
  }

  const staticPaths = [
    "/",
    "/services",
    ...services.map(slug => `/services/${slug}`),
    ...plans.map(slug => `/plans/${slug}`),
    "/industries",
    "/privacy",
    "/terms",
  ];
  const entries = [
    ...staticPaths.map(urlPath => ({ path: urlPath, lastmod: today })),
    ...blogSitemapEntries(snap, today),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    entry => `  <url>
    <loc>${ORIGIN}${entry.path}</loc>
    <lastmod>${entry.lastmod}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>
`;
  return { xml, snap };
}

/** Writes sitemap.xml, rss.xml, and the live-post image copies. */
export function writePublicArtifacts(root, now = new Date()) {
  const built = buildSitemapXml(root, now);
  const sitemapPath = path.join(root, "client", "public", "sitemap.xml");
  const before = readFileSync(sitemapPath, "utf8");
  writeFileSync(sitemapPath, built.xml);
  writeRss(root, built.snap);
  syncImages(root, built.snap.internal);
  return { ...built, changed: before !== built.xml };
}

function slugsIn(root, file) {
  return [
    ...readFileSync(path.join(root, file), "utf8").matchAll(
      /^\s{4}slug:\s*"([^"]+)"/gm
    ),
  ].map(match => match[1]);
}
