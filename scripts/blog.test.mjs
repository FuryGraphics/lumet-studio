import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import {
  advertisingIssues,
  applyPageMeta,
  calendarDate,
  loadPosts,
  moduleSource,
  prerenderPages,
  publishedSnapshot,
  renderMarkdown,
  rssXml,
  snapshot,
  syncImages,
  unpublishedPreviewEnabled,
} from "./lib/blog.mjs";
import { buildSitemapXml } from "./lib/sitemap.mjs";

const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

test("the gate uses the America/New_York calendar date", () => {
  assert.equal(
    calendarDate(new Date("2026-11-08T03:30:00.000Z")),
    "2026-11-07"
  );
  assert.equal(
    calendarDate(new Date("2026-11-08T05:30:00.000Z")),
    "2026-11-08"
  );
});

test("a post is included on its date and hidden the evening before", () => {
  const root = writeFixture({
    "boundary-note.md": postFile({
      title: "A note for the eighth",
      description: "Dated the day the calendar turns in New York.",
      date: "2026-11-08",
      slug: "boundary-note",
      body: "BOUNDARY_BODY",
    }),
  });
  const before = publishedSnapshot(root, new Date("2026-11-08T03:30:00.000Z"));
  const onDay = publishedSnapshot(root, new Date("2026-11-08T05:30:00.000Z"));
  assert.deepEqual(
    before.posts.map(post => post.slug),
    []
  );
  assert.equal(before.asOfDate, "2026-11-07");
  assert.deepEqual(
    onDay.posts.map(post => post.slug),
    ["boundary-note"]
  );
  assert.equal(moduleSource(before).includes("BOUNDARY_BODY"), false);
  assert.equal(moduleSource(onDay).includes("BOUNDARY_BODY"), true);
  fs.rmSync(root, { recursive: true, force: true });
});

test("scheduled posts stay out of the module, images, feed, and sitemap entries", () => {
  const root = writeFixture({
    "live-note.md": postFile({
      title: "A live note about firm websites",
      description: "A short note about the pages a firm site needs.",
      date: "2020-01-02",
      slug: "live-note",
      cover: "images/live.svg",
      coverAlt: "A blank square.",
      body: "The live note body.\n\n![A blank square](images/live.svg)",
    }),
    "later-note.md": postFile({
      title: "A note that waits",
      description: "This note is dated after the sample build.",
      date: "2099-06-01",
      slug: "later-note",
      body: "FUTURE_ONLY_TOKEN should stay out of the bundle.",
    }),
  });
  fs.mkdirSync(path.join(root, "content", "blog", "images"), {
    recursive: true,
  });
  fs.writeFileSync(
    path.join(root, "content", "blog", "images", "live.svg"),
    `<svg xmlns="http://www.w3.org/2000/svg"></svg>`
  );

  const now = new Date("2026-11-07T15:00:00.000Z");
  const snap = publishedSnapshot(root, now);
  assert.deepEqual(
    snap.posts.map(post => post.slug),
    ["live-note"]
  );
  const source = moduleSource(snap);
  assert.equal(source.includes("FUTURE_ONLY_TOKEN"), false);
  assert.equal(source.includes("later-note"), false);
  assert.equal(source.includes("/images/blog/live-note/live.svg"), true);
  assert.equal(source.includes("The live note body."), true);

  syncImages(root, snap.internal);
  assert.equal(
    fs.existsSync(
      path.join(root, "client/public/images/blog/live-note/live.svg")
    ),
    true
  );
  assert.equal(
    fs.existsSync(path.join(root, "client/public/images/blog/later-note")),
    false
  );

  const rss = rssXml(snap);
  assert.equal(rss.includes("/blog/live-note"), true);
  assert.equal(rss.includes("later-note"), false);
  assert.equal(rss.includes("FUTURE_ONLY_TOKEN"), false);
  fs.rmSync(root, { recursive: true, force: true });
});

test("preview of scheduled posts is dev-only and never a production build", () => {
  assert.equal(
    unpublishedPreviewEnabled("serve", { BLOG_PREVIEW_UNPUBLISHED: "1" }),
    true
  );
  assert.equal(
    unpublishedPreviewEnabled("serve", {
      BLOG_PREVIEW_UNPUBLISHED: "1",
      VERCEL_ENV: "production",
    }),
    false
  );
  assert.equal(
    unpublishedPreviewEnabled("build", { BLOG_PREVIEW_UNPUBLISHED: "1" }),
    false
  );
  assert.equal(unpublishedPreviewEnabled("serve", {}), false);
});

test("markdown renders the supported subset and escapes raw html", () => {
  const html = renderMarkdown(
    [
      "A <script>alert(1)</script> paragraph with **bold** and [a page](/services).",
      "",
      "## Heading",
      "",
      "- One",
      "- Two",
      "",
      "[click](javascript:alert(1))",
    ].join("\n")
  );
  assert.equal(html.includes("<script>"), false);
  assert.match(html, /&lt;script&gt;/);
  assert.match(html, /<strong>bold<\/strong>/);
  assert.match(html, /<a href="\/services">a page<\/a>/);
  assert.match(html, /<h2>Heading<\/h2>/);
  assert.match(html, /<ul><li>One<\/li><li>Two<\/li><\/ul>/);
  assert.equal(html.includes("javascript:"), false);
});

test("a post file is rejected when the schema, path, or wording is wrong", () => {
  const root = writeFixture({
    "bad-slug.md": postFile({
      title: "Wrong file name",
      description: "The slug does not match the file.",
      date: "2026-01-01",
      slug: "other-name",
      body: "Body.",
    }),
  });
  assert.throws(() => loadPosts(root), /must match the filename/);
  fs.rmSync(root, { recursive: true, force: true });

  const priced = writeFixture({
    "priced.md": postFile({
      title: "A priced note",
      description: "This one names a fee.",
      date: "2026-01-01",
      slug: "priced",
      body: "The fee is $5.",
    }),
  });
  assert.throws(() => loadPosts(priced), /dollar sign/);
  fs.rmSync(priced, { recursive: true, force: true });

  assert.deepEqual(advertisingIssues("Call our experts."), [
    'the word "expert"',
  ]);
  assert.ok(advertisingIssues("A calm note about pages.").length === 0);
});

test("the committed sample stays unpublished and out of the public files", () => {
  const now = new Date("2026-11-07T15:00:00.000Z");
  const all = loadPosts(repo);
  const sample = all.find(post => post.slug === "example-format");
  assert.ok(sample);
  assert.equal(sample.date, "2099-01-01");
  assert.equal(sample.body.includes("UNPUBLISHED_FORMAT_SAMPLE_8f3c1a"), true);

  const snap = publishedSnapshot(repo, now);
  assert.equal(
    snap.posts.some(post => post.slug === "example-format"),
    false
  );
  const source = moduleSource(snap);
  assert.equal(source.includes("UNPUBLISHED_FORMAT_SAMPLE_8f3c1a"), false);
  assert.equal(source.includes("example-format"), false);

  const { xml } = buildSitemapXml(repo, now);
  assert.match(xml, /<loc>https:\/\/www\.localcascade\.com\/blog<\/loc>/);
  assert.equal(xml.includes("https://localcascade.com/"), false);
  assert.equal(xml.includes("/blog/example-format"), false);
  assert.equal(rssXml(snap).includes("example-format"), false);
});

test("prerendered blog html uses the www origin and does not keep the home page offer", () => {
  const index = fs.readFileSync(
    path.join(repo, "client", "index.html"),
    "utf8"
  );
  const snap = publishedSnapshot(repo, new Date("2026-11-07T15:00:00.000Z"));
  const pages = prerenderPages(index, snap);
  assert.equal(pages.length, 1);
  const blog = pages[0].html;
  assert.match(
    blog,
    /<link rel="canonical" href="https:\/\/www\.localcascade\.com\/blog" \/>/
  );
  assert.match(blog, /<title>Notes for law firms \| Local Cascade<\/title>/);
  assert.match(blog, /"@type":"Blog"/);
  assert.equal(blog.includes("$"), false);
  assert.equal(blog.includes("697"), false);
  assert.match(blog, /application\/rss\+xml/);
  const untouched = applyPageMeta(index, {
    title: 'Quote "test" & title',
    description: "A & B",
    path: "/blog",
    image: "https://www.localcascade.com/og-image.png",
    type: "website",
    jsonLd: { "@type": "Blog" },
  });
  assert.match(untouched, /Quote &quot;test&quot; &amp; title/);
});

function writeFixture(files) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "lc-blog-"));
  fs.mkdirSync(path.join(root, "content", "blog"), { recursive: true });
  for (const [name, contents] of Object.entries(files)) {
    fs.writeFileSync(path.join(root, "content", "blog", name), contents);
  }
  return root;
}

function postFile({ title, description, date, slug, body, cover, coverAlt }) {
  const coverLines = cover
    ? `cover: "${cover}"\ncoverAlt: "${coverAlt}"\n`
    : "";
  return `---
title: "${title}"
description: "${description}"
date: "${date}"
slug: "${slug}"
author: "Local Cascade"
${coverLines}---

${body}
`;
}
