#!/usr/bin/env node
/**
 * Fetches Unsplash photo metadata at build time and writes it into the repo as
 * a typed module, so the access key never reaches the browser bundle.
 *
 * The site is a static build with no server, so a key compiled into the
 * frontend would be readable by every visitor and their rate limit would be
 * anyone's to burn. Running this locally keeps the key on the machine that has
 * it and commits only the resulting URLs and credits.
 *
 *   UNSPLASH_ACCESS_KEY=xxx pnpm fetch:unsplash
 *
 * A slot is either pinned to a photo id or resolved by search. Search picks
 * whatever is trending for that query today, so once a photo looks right,
 * replace the query with `{ id: "..." }` from the output to freeze it.
 */
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const SLOTS = {
  "work-contractors": { query: "construction contractor working site" },
  "work-roofing": { query: "roofer working on house roof" },
};

const API = "https://api.unsplash.com";
const OUT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../client/src/data/unsplash-photos.ts"
);

const KEY = process.env.UNSPLASH_ACCESS_KEY;
if (!KEY) {
  console.error(
    "UNSPLASH_ACCESS_KEY is not set.\n" +
      "Get the Access Key from https://unsplash.com/oauth/applications and run:\n" +
      "  UNSPLASH_ACCESS_KEY=xxx pnpm fetch:unsplash\n" +
      "Do not commit the key. .env is already gitignored if you prefer a file."
  );
  process.exit(1);
}

const auth = { Authorization: `Client-ID ${KEY}`, "Accept-Version": "v1" };

async function api(url) {
  let res;
  try {
    res = await fetch(url, { headers: auth });
  } catch (err) {
    throw new Error(
      `could not reach ${new URL(url).host} (${err.cause?.code ?? err.message}). ` +
        "Check network access to api.unsplash.com."
    );
  }
  if (res.status === 401) {
    throw new Error("401 Unauthorized - the access key was rejected.");
  }
  if (res.status === 403) {
    // Unsplash sends rate-limit headers on its own 403s. A 403 without them
    // came from something between here and Unsplash (a corporate proxy or
    // egress filter), which is a very different fix.
    const remaining = res.headers.get("x-ratelimit-remaining");
    if (remaining !== null) {
      throw new Error(
        `403 - Unsplash rate limit reached (remaining: ${remaining}). ` +
          "Demo apps get 50 requests/hour and the limit resets on the hour."
      );
    }
    throw new Error(
      "403 with no Unsplash rate-limit headers, so this was refused before " +
        "reaching Unsplash. Check for a proxy or network egress policy " +
        "blocking api.unsplash.com."
    );
  }
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
  return res.json();
}

/**
 * The guidelines require triggering this endpoint whenever a photo is actually
 * used, which is how a photographer's download count reflects real usage. It
 * does not download anything itself.
 */
async function triggerDownload(photo) {
  const location = photo.links?.download_location;
  if (!location) return false;
  await api(location);
  return true;
}

async function resolve(slot, spec) {
  if (spec.id) {
    process.stdout.write(`  ${slot}: fetching pinned id ${spec.id}... `);
    return api(`${API}/photos/${encodeURIComponent(spec.id)}`);
  }
  process.stdout.write(`  ${slot}: searching "${spec.query}"... `);
  const params = new URLSearchParams({
    query: spec.query,
    per_page: "1",
    orientation: "landscape",
    content_filter: "high",
  });
  const data = await api(`${API}/search/photos?${params}`);
  const hit = data.results?.[0];
  if (!hit) throw new Error(`no results for query "${spec.query}"`);
  // Search results omit some fields, so re-read the full photo record.
  return api(`${API}/photos/${hit.id}`);
}

function shape(photo) {
  return {
    id: photo.id,
    alt: photo.alt_description || photo.description || "",
    color: photo.color || "#E5E5E5",
    width: photo.width,
    height: photo.height,
    urls: {
      small: photo.urls.small,
      regular: photo.urls.regular,
      full: photo.urls.full,
    },
    photographer: {
      name: photo.user.name,
      username: photo.user.username,
      profileUrl: photo.user.links.html,
    },
  };
}

const out = {};
let failed = 0;

for (const [slot, spec] of Object.entries(SLOTS)) {
  try {
    const photo = await resolve(slot, spec);
    out[slot] = shape(photo);
    const triggered = await triggerDownload(photo);
    console.log(
      `ok - "${photo.user.name}" (${photo.id})${triggered ? "" : " [no download link]"}`
    );
  } catch (err) {
    failed++;
    console.log(`FAILED\n    ${err.message}`);
  }
}

if (Object.keys(out).length === 0) {
  console.error("\nNothing fetched. Leaving the existing file untouched.");
  process.exit(1);
}

const banner = `/**
 * GENERATED FILE - do not edit by hand.
 *
 * Written by \`pnpm fetch:unsplash\` (scripts/fetch-unsplash.mjs), which reads
 * UNSPLASH_ACCESS_KEY from the environment and triggers the download endpoint
 * that the Unsplash API guidelines require on use.
 *
 * Regenerate rather than editing. Consumers treat a missing slot as "no photo
 * yet" and fall back, so the site renders correctly either way.
 */
import type { UnsplashPhoto } from "@/lib/unsplash";

export const unsplashPhotos: Record<string, UnsplashPhoto> = ${JSON.stringify(out, null, 2)};
`;

await writeFile(OUT, banner, "utf8");
console.log(
  `\nWrote ${Object.keys(out).length} photo(s) to ${path.relative(process.cwd(), OUT)}` +
    (failed ? `\n${failed} slot(s) failed and were left out.` : "")
);
