import { posts } from "@/data/blog";
import { plans } from "@/data/plans";
import { services } from "@/data/services";

/** Paths that get their own HTML file at build time. `/book` is included and marked noindex. */
export const prerenderPaths = [
  "/",
  "/services",
  ...services.map(service => `/services/${service.slug}`),
  ...plans.map(plan => `/plans/${plan.slug}`),
  "/industries",
  "/blog",
  ...posts.map(post => post.path),
  "/privacy",
  "/terms",
  "/book",
];
