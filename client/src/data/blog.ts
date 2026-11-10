import type { Blog, BlogPosting, WithContext } from "schema-dts";
import { blogIndex, posts, type BlogPost } from "virtual:blog";
import { SITE_NAME, SITE_URL, pageUrl } from "@/data/site";

export type { BlogPost };
export { blogIndex, posts };

/** BlogPosting for one note. No credentials, ratings, or reviews. */
export function blogPostingLd(post: BlogPost): WithContext<BlogPosting> {
  const url = pageUrl(post.path);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author:
      post.author === SITE_NAME
        ? { "@type": "Organization", name: post.author, url: SITE_URL }
        : { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: url,
    url,
    image: post.image,
  };
}

export function blogIndexLd(): WithContext<Blog> {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: blogIndex.heading,
    description: blogIndex.description,
    url: pageUrl("/blog"),
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/** Format YYYY-MM-DD as a calendar date, without parsing it as a UTC instant. */
export function formatBlogDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  const name = MONTHS[month - 1];
  if (!year || !name || !day) return iso;
  return `${name} ${day}, ${year}`;
}

export function getPost(slug: string | undefined) {
  if (!slug) return undefined;
  return posts.find(post => post.slug === slug);
}
