import { useEffect } from "react";

const SITE = "https://www.localcascade.com";
const DEFAULT_IMAGE = `${SITE}/og-image.png`;

type PageMetaExtras = {
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  jsonLd?: unknown;
  rss?: boolean;
  keywords?: string;
};

let defaultKeywords: string | null = null;

/**
 * usePageMeta - sets the title, description, canonical, Open Graph, and
 * Twitter tags for a route. The static tags in index.html describe the home
 * page; every other route overrides them on mount.
 *
 * Canonicals use https://www.localcascade.com. The apex host redirects there.
 */
export function usePageMeta(
  title: string,
  description: string,
  path: string,
  extras?: PageMetaExtras
) {
  const extrasKey = JSON.stringify(extras ?? null);

  useEffect(() => {
    const extra: PageMetaExtras =
      extrasKey === "null" ? {} : (JSON.parse(extrasKey) as PageMetaExtras);
    const image = absoluteImage(extra.image);
    const type = extra.type ?? "website";
    const url = SITE + path;

    if (defaultKeywords === null) {
      defaultKeywords =
        document
          .querySelector('meta[name="keywords"]')
          ?.getAttribute("content") ?? "";
    }

    document.title = title;
    setMeta("name", "description", description);
    setMeta("name", "title", title);
    setMeta("name", "keywords", extra.keywords ?? defaultKeywords);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:type", type);
    setMeta("property", "og:image", image);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:url", url);
    setMeta("name", "twitter:image", image);
    setLink("canonical", url);

    if (extra.publishedTime) {
      setMeta("property", "article:published_time", extra.publishedTime);
    } else {
      document
        .querySelector('meta[property="article:published_time"]')
        ?.remove();
    }

    upsertJsonLd(extra.jsonLd);
    upsertRss(extra.rss === true);

    return () => {
      document.getElementById("lc-page-jsonld")?.remove();
      document.querySelector('link[data-lc-rss="true"]')?.remove();
      document
        .querySelector('meta[property="article:published_time"]')
        ?.remove();
    };
  }, [title, description, path, extrasKey]);
}

function absoluteImage(image: string | undefined) {
  if (!image) return DEFAULT_IMAGE;
  if (image.startsWith("https://") || image.startsWith("http://")) return image;
  return SITE + (image.startsWith("/") ? image : `/${image}`);
}

function setMeta(attr: "name" | "property", key: string, value: string) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(data: unknown) {
  const existing = document.getElementById("lc-page-jsonld");
  if (data == null) {
    existing?.remove();
    return;
  }
  const el = existing ?? document.createElement("script");
  el.id = "lc-page-jsonld";
  el.setAttribute("type", "application/ld+json");
  el.textContent = JSON.stringify(data);
  if (!existing) document.head.appendChild(el);
}

function upsertRss(enabled: boolean) {
  const existing = document.querySelector('link[data-lc-rss="true"]');
  if (!enabled) {
    existing?.remove();
    return;
  }
  const el = existing ?? document.createElement("link");
  el.setAttribute("rel", "alternate");
  el.setAttribute("type", "application/rss+xml");
  el.setAttribute("title", "Local Cascade");
  el.setAttribute("href", `${SITE}/rss.xml`);
  el.setAttribute("data-lc-rss", "true");
  if (!existing) document.head.appendChild(el);
}
