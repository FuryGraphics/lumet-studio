import { Link, useParams } from "wouter";
import PageShell from "@/components/PageShell";
import BlogClose from "@/components/BlogClose";
import NotFound from "@/pages/NotFound";
import { blogIndex, formatBlogDate, getPost, type BlogPost } from "@/data/blog";
import { usePageMeta } from "@/hooks/usePageMeta";

/**
 * One note at /blog/:slug. Slugs that were not included in this build,
 * including anything dated after the build, render the site 404.
 */
export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPost(slug);
  if (!post) return <NotFound />;
  return <BlogPostView post={post} />;
}

function BlogPostView({ post }: { post: BlogPost }) {
  usePageMeta(post.pageTitle, post.description, post.path, {
    image: post.image,
    type: "article",
    publishedTime: post.date,
    jsonLd: post.jsonLd,
    keywords: blogIndex.keywords,
  });

  return (
    <PageShell
      label={formatBlogDate(post.date)}
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: post.title },
      ]}
      title={post.title}
      intro={post.description}
    >
      <article className="pb-16 md:pb-28 bg-[#FAFAF9]">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-8 md:col-start-3">
              <p className="font-mono-label text-[#A3A3A3] pb-8 border-b border-[#E5E5E5]">
                <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                <span className="text-[#D4D4D4]"> / </span>
                {post.author}
              </p>

              {post.cover && (
                <img
                  src={post.cover}
                  alt={post.coverAlt ?? ""}
                  className="mt-8 md:mt-10 w-full border border-[#E5E5E5]"
                />
              )}

              <div
                className="lc-prose mt-8 md:mt-12"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />

              <p className="lc-body mt-12 pt-8 border-t border-[#E5E5E5] text-sm text-[#737373] max-w-2xl">
                This is general information about a firm&apos;s website, not
                legal advice.
              </p>

              <Link
                href="/blog"
                className="lc-link mt-8 inline-block text-sm font-medium text-[#0D0D0D]"
              >
                All notes
              </Link>
            </div>
          </div>
        </div>
      </article>
      <BlogClose />
    </PageShell>
  );
}
