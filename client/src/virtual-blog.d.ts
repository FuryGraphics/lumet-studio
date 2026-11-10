declare module "virtual:blog" {
  type JsonValue =
    | string
    | number
    | boolean
    | null
    | JsonValue[]
    | { [key: string]: JsonValue };

  export type BlogJsonLd = { [key: string]: JsonValue };

  export type BlogPost = {
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    cover?: string;
    coverAlt?: string;
    html: string;
    path: string;
    pageTitle: string;
    image: string;
    jsonLd: BlogJsonLd;
  };

  export type BlogIndex = {
    heading: string;
    description: string;
    path: "/blog";
    pageTitle: string;
    image: string;
    keywords: string;
    jsonLd: BlogJsonLd;
  };

  export const blogBuiltAt: string;
  export const blogAsOfDate: string;
  export const blogIndex: BlogIndex;
  export const posts: BlogPost[];
}
