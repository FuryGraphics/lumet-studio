import { blogIndex, posts, type BlogPost } from "virtual:blog";

export type { BlogPost };
export { blogIndex, posts };

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
