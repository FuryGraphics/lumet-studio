import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * Hero — bold, tight display headline with positioning statement.
 * Light background, accent used once in the wordmark dot.
 * Mono tags below the headline.
 */
const tags = [
  "GOHIGHLEVEL",
  "WEB DESIGN",
  "REVIEW FUNNELS",
  "WHITE-LABEL OPS",
];

export default function Hero() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="top"
      className="relative pt-32 md:pt-40 pb-20 md:pb-32 bg-[#FAFAF9] overflow-hidden"
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

      <div ref={ref} className={`container relative ${isVisible ? "is-visible" : ""}`}>
        {/* Section index */}
        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <span className="font-mono-label text-[#A3A3A3]">00 / INTRO</span>
          <span className="h-px w-12 bg-[#E5E5E5]" />
        </div>

        {/* Headline */}
        <h1 className="lumet-display text-[2.75rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] text-[#0D0D0D] max-w-5xl">
          You sell it.
          <br />
          <span className="text-[#0D0D0D]">We build it,</span>
          <br />
          <span className="text-[#1D4ED8]">run it,</span>{" "}
          <span className="text-[#0D0D0D]">and keep</span>
          <br />
          <span className="text-[#0D0D0D]">your clients happy.</span>
        </h1>

        {/* Subhead */}
        <p className="lumet-body mt-8 md:mt-10 text-lg md:text-xl text-[#525252] max-w-2xl">
          Lumet Studios is the invisible fulfillment partner behind marketing
          agencies and niche-service businesses. We handle GoHighLevel buildouts,
          website design, Google review funnels, and backend operations — so you
          can scale and stay client-facing.
        </p>

        {/* CTA */}
        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="#contact"
            className="lumet-cta inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-[#1D4ED8] hover:bg-[#1741B0] rounded-sm"
          >
            Book a call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
          </a>
          <a
            href="#work"
            className="lumet-link text-base font-medium text-[#404040] hover:text-[#0D0D0D] transition-colors"
          >
            See our work
          </a>
        </div>

        {/* Mono tags */}
        <div className="mt-16 md:mt-20 flex flex-wrap items-center gap-x-6 gap-y-3">
          {tags.map((tag, i) => (
            <div key={tag} className="flex items-center gap-6">
              {i > 0 && <span className="text-[#D4D4D4] text-xs">·</span>}
              <span className="font-mono-label text-[#737373]">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
