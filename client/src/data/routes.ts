import { plans } from "@/data/plans";
import { services } from "@/data/services";

/** Paths that get their own HTML file at build time. `/book` is included and marked noindex. */
export const prerenderPaths = [
  "/",
  "/services",
  ...services.map(service => `/services/${service.slug}`),
  ...plans.map(plan => `/plans/${plan.slug}`),
  "/industries",
  "/privacy",
  "/terms",
  "/book",
];
