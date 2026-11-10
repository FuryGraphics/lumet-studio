/**
 * Validates every post file and checks that scheduled posts are absent from
 * the public sitemap, RSS feed, and client source.
 *
 *   node scripts/blog-check.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadPosts, publishedSnapshot } from "./lib/blog.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const failures = [];
const now = new Date();
const all = loadPosts(root);
const snap = publishedSnapshot(root, now);

for (const post of snap.posts) {
  if (post.date > snap.asOfDate) {
    failures.push(
      `${post.slug} is dated ${post.date}, after ${snap.asOfDate}, but it was included`
    );
  }
}

const scheduled = all.filter(post => post.date > snap.asOfDate);
const sitemapPath = path.join(root, "client", "public", "sitemap.xml");
const rssPath = path.join(root, "client", "public", "rss.xml");
const sitemap = fs.readFileSync(sitemapPath, "utf8");
const rss = fs.readFileSync(rssPath, "utf8");

if (!sitemap.includes("<loc>https://www.localcascade.com/blog</loc>")) {
  failures.push("sitemap is missing https://www.localcascade.com/blog");
}
if (sitemap.includes("https://localcascade.com/")) {
  failures.push("sitemap still uses the apex host https://localcascade.com");
}

for (const post of scheduled) {
  const loc = `https://www.localcascade.com/blog/${post.slug}`;
  if (sitemap.includes(loc))
    failures.push(`sitemap includes scheduled post ${post.slug}`);
  if (rss.includes(loc) || rss.includes(post.title)) {
    failures.push(`RSS includes scheduled post ${post.slug}`);
  }
  const publicDir = path.join(
    root,
    "client",
    "public",
    "images",
    "blog",
    post.slug
  );
  if (fs.existsSync(publicDir)) {
    failures.push(
      `client/public/images/blog/${post.slug} is on disk. Scheduled images must not be published.`
    );
  }
}

for (const post of snap.posts) {
  const loc = `<loc>https://www.localcascade.com/blog/${post.slug}</loc>`;
  if (!sitemap.includes(loc))
    failures.push(`sitemap is missing live post ${post.slug}`);
  if (!rss.includes(`${"https://www.localcascade.com"}${post.path}`)) {
    failures.push(`RSS is missing live post ${post.slug}`);
  }
}

const sample = all.find(post => post.slug === "example-format");
if (!sample) {
  failures.push("content/blog/example-format.md is missing");
} else if (sample.date !== "2099-01-01") {
  failures.push("example-format.md must stay dated 2099-01-01");
} else if (snap.posts.some(post => post.slug === "example-format")) {
  failures.push("example-format was included in the live set");
}

const marker = sample?.body.includes("UNPUBLISHED_FORMAT_SAMPLE_8f3c1a")
  ? "UNPUBLISHED_FORMAT_SAMPLE_8f3c1a"
  : "";
if (sample && !marker) {
  failures.push("example-format.md is missing its unpublished sample token");
}

if (marker) {
  const leaked = filesContaining(path.join(root, "client"), marker);
  const dist = path.join(root, "dist");
  if (fs.existsSync(dist)) leaked.push(...filesContaining(dist, marker));
  for (const file of leaked) {
    failures.push(`unpublished sample text is in ${path.relative(root, file)}`);
  }
}

if (failures.length) {
  console.error(
    `blog: check failed\n${failures.map(item => `- ${item}`).join("\n")}`
  );
  process.exit(1);
}

console.log(`blog: as of ${snap.asOfDate} (America/New_York)`);
console.log(
  snap.posts.length
    ? `live: ${snap.posts.map(post => post.slug).join(", ")}`
    : "live: none"
);
console.log(
  scheduled.length
    ? `scheduled (hidden until a production build on or after the date):\n${scheduled
        .map(post => `  ${post.date}  ${post.slug}`)
        .join("\n")}`
    : "scheduled: none"
);
console.log("sitemap: ok");
console.log("rss: ok");

function filesContaining(dir, needle) {
  const hits = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      hits.push(...filesContaining(full, needle));
      continue;
    }
    if (!/\.(tsx?|js|mjs|html|xml|css|json)$/.test(entry.name)) continue;
    if (fs.readFileSync(full, "utf8").includes(needle)) hits.push(full);
  }
  return hits;
}
