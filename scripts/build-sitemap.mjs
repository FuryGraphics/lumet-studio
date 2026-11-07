/**
 * Writes client/public/sitemap.xml, client/public/rss.xml, and copies images
 * for posts that are already live. Runs before `vite build` as well; the
 * Vite plugin runs the same writer, because Vercel invokes `vite build`
 * directly.
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
