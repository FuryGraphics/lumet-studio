import { useEffect } from "react";

const SITE = "https://lumetstudio.online";

/**
 * usePageMeta - sets the title, description, and canonical URL for a route.
 * The static tags in index.html describe the home page; every other route
 * overrides them on mount so each page is indexed under its own title.
 */
export function usePageMeta(title: string, description: string, path: string) {
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", SITE + path);
    setMeta('link[rel="canonical"]', "href", SITE + path);
  }, [title, description, path]);
}

function setMeta(selector: string, attr: string, value: string) {
  document.querySelector(selector)?.setAttribute(attr, value);
}
