import { Link } from "wouter";
import PageShell from "@/components/PageShell";
import BlogClose from "@/components/BlogClose";
import { blogIndex, formatBlogDate, posts } from "@/data/blog";
import { usePageMeta } from "@/hooks/usePageMeta";

/**
 * Blog index at /blog. The post list is whatever the production build
 * included. An empty list is the finished state until a note is published.
 */
export default function BlogIndex() {
  usePageMeta(blogIndex.pageTitle, blogIndex.description, blogIndex.path, {
    image: blogIndex.image,
    type: "website",
    jsonLd: blogIndex.jsonLd,
    keywords: blogIndex.keywords,
    rss: true,
  });

  return (
    <PageShell
      label="BLOG"
      crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      title={
        <>
          Notes for
          <br />
          law firms.
        </>
      }
      intro={blogIndex.description}
    >
      <section className="pb-16 md:pb-24 bg-[#FAFAF9]">
        <div className="container">
          <div className="grid grid-cols-12 gap-4 items-baseline border-b border-[#E5E5E5] pb-4">
            <span className="col-span-4 md:col-span-3 font-mono-label text-[#A3A3A3]">
              Date
            </span>
            <span className="col-span-6 md:col-span-7 font-mono-label text-[#A3A3A3]">
              Note
            </span>
            <a
              href="/rss.xml"
              className="col-span-2 font-mono-label text-[#737373] hover:text-[#004AAD] text-right"
            >
              RSS
            </a>
          </div>

          {posts.length === 0 ? (
            <div className="grid grid-cols-12 gap-4 py-10 md:py-14 border-b border-[#E5E5E5]">
              <div className="col-span-4 md:col-span-3">
                <span className="font-mono-label text-[#A3A3A3]">—</span>
              </div>
              <div className="col-span-8 md:col-span-7">
                <p className="text-xl md:text-2xl font-semibold text-[#0D0D0D]">
                  No published notes.
                </p>
              </div>
            </div>
          ) : (
            posts.map(post => (
              <Link
                key={post.slug}
                href={post.path}
                className="group grid grid-cols-12 gap-4 py-8 md:py-10 border-b border-[#E5E5E5]"
              >
                <div className="col-span-12 md:col-span-3">
                  <time
                    dateTime={post.date}
                    className="font-mono-label text-[#A3A3A3] group-hover:text-[#004AAD] transition-colors"
                  >
                    {formatBlogDate(post.date)}
                  </time>
                </div>
                <div className="col-span-12 md:col-span-7">
                  <h2 className="text-2xl md:text-3xl font-semibold text-[#0D0D0D] group-hover:text-[#004AAD] transition-colors">
                    {post.title}
                  </h2>
                  <p className="lc-body mt-3 text-sm md:text-base text-[#525252] max-w-2xl">
                    {post.description}
                  </p>
                  <p className="font-mono-label text-[#A3A3A3] mt-4">
                    {post.author}
                  </p>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>

      <section className="py-16 md:py-28 bg-[#FAFAF9] border-t border-[#E5E5E5]">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-2">
              <span className="font-mono-label text-[#A3A3A3]">The notes</span>
            </div>
            <div className="col-span-12 md:col-span-8">
              <p className="lc-body text-base md:text-lg text-[#525252] max-w-2xl">
                Local Cascade builds websites for US attorneys and law firms.
                These notes are about that work: the pages a firm site needs,
                the way a practice is described, and the path from a visit to a
                conversation.
              </p>
              <p className="lc-body mt-4 text-base md:text-lg text-[#525252] max-w-2xl">
                They are general information about a firm&apos;s website, not
                legal advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BlogClose />
    </PageShell>
  );
}
