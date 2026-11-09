import { Helmet } from "react-helmet-async";
import { SITE_NAME, SITE_URL, pageUrl } from "@/data/site";

/**
 * Title, description, canonical, and social tags for one route.
 * Rendered in the tree so the build can write them into static HTML.
 */
export default function PageMeta({
  title,
  description,
  path,
  robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
}: {
  title: string;
  description: string;
  path: string;
  robots?: string;
}) {
  const url = pageUrl(path);
  const image = `${SITE_URL}/og-image.png`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="title" content={title} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={robots} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
