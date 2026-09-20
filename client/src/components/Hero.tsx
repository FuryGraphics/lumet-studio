import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * Hero - bold, tight display headline with positioning statement.
 * Light background, accent used once in the wordmark dot.
 * Mono tags below the headline.
 * Responsive: fluid font sizing, mobile-optimized spacing.
 */
const tags = [
  "CUSTOM WEBSITE",
  "LOCAL SEO",
  "GOOGLE REVIEW FUNNEL",
  "AI MISSED-CALL TEXT BACK",
  "LIVE IN 7 DAYS",
];

export default function Hero() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="top"
      className="relative pt-28 md:pt-40 pb-16 md:pb-32 bg-[#FAFAF9] overflow-hidden"
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#0D0D0D 1px, transparent 1px), linear-gradient(90deg, #0D0D0D 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div
        ref={ref}
        className={`container relative ${isVisible ? "is-visible" : ""}`}
      >
        {/* Section index */}
        <div className="flex items-center gap-3 mb-6 md:mb-12">
          <span className="font-mono-label text-[#A3A3A3]">00 / INTRO</span>
          <span className="h-px w-8 md:w-12 bg-[#E5E5E5]" />
        </div>

        {/* Headline - fluid sizing with clamp for smooth scaling */}
        <h1
          className="rwl-display text-[#0D0D0D] max-w-6xl"
          style={{ fontSize: "clamp(2rem, 6.2vw, 5.25rem)" }}
        >
          Turn Missed Calls Into
          <br />
          Customers for{" "}
          <span className="text-[#1D4ED8] whitespace-nowrap">$297/mo</span>
        </h1>

        {/* Secondary headline */}
        <p
          className="rwl-display mt-3 md:mt-4 text-[#525252]"
          style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
        >
          Up and running in{" "}
          <span className="text-[#1D4ED8]">under 7 days.</span>
        </p>

        {/* Subhead */}
        <p className="rwl-body mt-6 md:mt-10 text-base md:text-xl text-[#525252] max-w-2xl">
          Rise with Local builds and runs the entire customer-getting system for your
          business. A custom website, local SEO, an automated Google review
          funnel, and an AI assistant that texts back every missed call. One
          flat monthly fee. No contracts.
        </p>

        {/* CTA */}
        <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="#pricing"
            className="rwl-cta inline-flex items-center gap-2 px-6 md:px-7 py-3 md:py-3.5 text-base font-semibold text-white bg-[#1D4ED8] hover:bg-[#1741B0] rounded-sm w-full sm:w-auto justify-center sm:justify-start"
          >
            Get started
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8H13M13 8L8 3M13 8L8 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
          </a>
          <a
            href="#system"
            className="rwl-link text-base font-medium text-[#404040] hover:text-[#0D0D0D] transition-colors"
          >
            See what's included
          </a>
        </div>

        {/* Mono tags - wrap nicely on mobile */}
        <div className="mt-12 md:mt-20 flex flex-wrap items-center gap-x-4 gap-y-2 md:gap-x-6 md:gap-y-3">
          {tags.map((tag, i) => (
            <div key={tag} className="flex items-center gap-4 md:gap-6">
              {i > 0 && <span className="text-[#D4D4D4] text-xs">·</span>}
              <span className="font-mono-label text-[#737373]">{tag}</span>
            </div>
          ))}
        </div>

        {/* Hero image - wide, cropped band beneath the copy */}
        <div className="mt-10 md:mt-16 relative aspect-[4/3] sm:aspect-[21/9] overflow-hidden border border-[#E5E5E5] bg-[#F5F5F5]">
          <img
            src="/images/hero.webp"
            alt="The front counter of a local business at golden hour with a phone lit up on it"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <span className="absolute bottom-3 left-3 font-mono-label text-white/90 bg-black/40 px-2 py-1 text-[0.625rem] md:text-xs">
            EVERY MISSED CALL, ANSWERED
          </span>
        </div>
      </div>
    </section>
  );
}
