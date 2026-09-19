import type { ReactNode } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

/**
 * PageShell - header, footer, and the shared page-top block for every route
 * other than home. The header is fixed, so the page head carries the top
 * padding that the home hero would otherwise provide.
 */
export default function PageShell({
  label,
  crumbs,
  title,
  intro,
  children,
}: {
  label: string;
  crumbs: { label: string; href?: string }[];
  title: ReactNode;
  intro: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <Header />
      <main>
        <section className="relative pt-28 md:pt-40 pb-12 md:pb-20 bg-[#FAFAF9] overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#0D0D0D 1px, transparent 1px), linear-gradient(90deg, #0D0D0D 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          <div className="container relative">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 mb-6 md:mb-12 font-mono-label text-[#A3A3A3]"
            >
              {crumbs.map((c, i) => (
                <span key={c.label} className="flex items-center gap-2">
                  {i > 0 && <span className="text-[#D4D4D4]">/</span>}
                  {c.href ? (
                    <Link href={c.href} className="hover:text-[#0D0D0D]">
                      {c.label.toUpperCase()}
                    </Link>
                  ) : (
                    <span className="text-[#737373]">
                      {c.label.toUpperCase()}
                    </span>
                  )}
                </span>
              ))}
            </nav>
            <span className="font-mono-label text-[#1D4ED8] block mb-4">
              {label}
            </span>
            <h1
              className="lumet-display text-[#0D0D0D] max-w-5xl"
              style={{ fontSize: "clamp(2.25rem, 6vw, 4.75rem)" }}
            >
              {title}
            </h1>
            <p className="lumet-body mt-6 md:mt-10 text-base md:text-xl text-[#525252] max-w-2xl">
              {intro}
            </p>
          </div>
        </section>
        {children}
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

/** Section - hairline-topped content block with the left-rail label. */
export function Section({
  label,
  dark = false,
  children,
}: {
  label: string;
  dark?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      className={
        dark
          ? "py-16 md:py-28 bg-[#0D0D0D] text-white"
          : "py-16 md:py-28 bg-[#FAFAF9] border-t border-[#E5E5E5]"
      }
    >
      <div className="container">
        <div className="grid grid-cols-12 gap-4 mb-8 md:mb-14">
          <div className="col-span-12 md:col-span-2 flex items-center">
            <span
              className={`font-mono-label ${dark ? "text-[#525252]" : "text-[#A3A3A3]"}`}
            >
              {label}
            </span>
          </div>
          <div className="hidden md:block col-span-10">
            <span
              className={`block h-px w-full ${dark ? "bg-[#262626]" : "bg-[#E5E5E5]"}`}
            />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-2" />
          <div className="col-span-12 md:col-span-10">{children}</div>
        </div>
      </div>
    </section>
  );
}

/** CtaBand - closing call to action shared by every inner page. */
export function CtaBand() {
  return (
    <Section label="GET STARTED" dark>
      <h2
        className="lumet-display text-white"
        style={{ fontSize: "clamp(1.75rem, 5vw, 3.75rem)" }}
      >
        The whole system.
        <br />
        <span className="text-[#1D4ED8]">$297</span> a month.
      </h2>
      <p className="lumet-body mt-6 text-base md:text-xl text-[#A3A3A3] max-w-2xl">
        Website, local SEO, review funnel, and AI text-back, built for your
        business and live in under 7 days. No setup fees, no contracts.
      </p>
      <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <a
          href="/#contact"
          className="lumet-cta inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-[#1D4ED8] hover:bg-[#1741B0] rounded-sm w-full sm:w-auto"
        >
          Get started
          <Arrow />
        </a>
        <a
          href="/#pricing"
          className="lumet-link text-base font-medium text-[#A3A3A3] hover:text-white"
        >
          See what's included
        </a>
      </div>
    </Section>
  );
}

export function Arrow({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8H13M13 8L8 3M13 8L8 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

/** Faq - native details/summary, so it works without JS and is accessible. */
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="border-t border-[#E5E5E5]">
      {items.map(item => (
        <details key={item.q} className="group border-b border-[#E5E5E5]">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 md:py-6 text-base md:text-xl font-semibold text-[#0D0D0D] [&::-webkit-details-marker]:hidden">
            {item.q}
            <span className="font-mono-label text-[#1D4ED8] transition-transform group-open:rotate-45 text-xl">
              +
            </span>
          </summary>
          <p className="lumet-body pb-6 text-sm md:text-base text-[#525252] max-w-3xl">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
