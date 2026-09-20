/**
 * Writes client/public/sitemap.xml from the routes the site actually has, so
 * adding a service can't leave the sitemap behind. Runs before every build.
 *
 * Service slugs are read out of client/src/data/services.ts rather than
 * imported, since this is plain node with no TypeScript loader.
 *
 *   node scripts/build-sitemap.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://localcascade.com";

const slugsIn = file =>
  [
    ...readFileSync(resolve(root, file), "utf8").matchAll(
      /^\s{4}slug:\s*"([^"]+)"/gm
    ),
  ].map(m => m[1]);

const services = slugsIn("client/src/data/services.ts");
const plans = slugsIn("client/src/data/plans.ts");

for (const [what, list] of [
  ["service", services],
  ["plan", plans],
]) {
  if (list.length === 0) {
    console.error(`build-sitemap: no ${what} slugs found`);
    process.exit(1);
  }
}

/** Static routes, in the order they matter. `priority` and `changefreq` are
 *  advisory only; Google ignores them, so the file stays minimal. */
const paths = [
  "/",
  "/services",
  ...services.map(slug => `/services/${slug}`),
  ...plans.map(slug => `/plans/${slug}`),
  "/industries",
];

const today = new Date().toISOString().slice(0, 10);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    path => `  <url>
    <loc>${SITE}${path}</loc>
    <lastmod>${today}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>
`;

const out = resolve(root, "client/public/sitemap.xml");
const before = readFileSync(out, "utf8");
writeFileSync(out, xml);

console.log(
  before === xml
    ? `sitemap: unchanged (${paths.length} urls)`
    : `sitemap: wrote ${paths.length} urls, lastmod ${today}`
);
