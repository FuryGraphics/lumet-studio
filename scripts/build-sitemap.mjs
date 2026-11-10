/**
 * Writes client/public/sitemap.xml, client/public/rss.xml, and copies images
 * for posts that are already live. Runs before `vite build`. The Vite plugin
 * runs the same writer during the production build, which is what
 * `pnpm run build` does on Vercel.
 *
 * A post is included only when its date is on or before the America/New_York
 * calendar date of this run.
 *
 *   node scripts/build-sitemap.mjs
 */
import path from "node:path";
import { fileURLToPath } from "node:url";
import { writePublicArtifacts } from "./lib/sitemap.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const { snap, changed } = writePublicArtifacts(root, new Date());

console.log(
  changed
    ? `sitemap: wrote ${snap.posts.length} live blog posts`
    : `sitemap: unchanged (${snap.posts.length} live blog posts)`
);
