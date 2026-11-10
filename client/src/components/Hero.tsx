import { useScrollReveal } from "@/hooks/useScrollReveal";
import HeroForm from "@/components/HeroForm";
import { PRICE } from "@/data/pricing";
import { SITE_DESCRIPTION } from "@/data/site";

/**
 * Hero - bold, tight display headline with positioning statement.
 * Light background, accent used once in the wordmark dot.
 * Mono tags below the headline.
 * Responsive: fluid font sizing, mobile-optimized spacing.
 */
const tags = [
  "LAW FIRM WEBSITES",
  "LOCAL SEARCH",
  "REVIEW REQUESTS",
  "CLIENT INTAKE",
  "UNITED STATES",
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7">
            <h1
              className="lc-display text-[#0D0D0D]"
              style={{ fontSize: "clamp(2rem, 4.6vw, 4.5rem)" }}
            >
              Websites for
              <br />
              US law firms
              <br />
              for{" "}
              <span className="text-[#004AAD] whitespace-nowrap">
                ${PRICE}/mo
              </span>
            </h1>

            <p className="lc-body mt-6 md:mt-8 text-base md:text-xl text-[#525252] max-w-xl">
              {SITE_DESCRIPTION} It is for firms across practice areas. It is
              not a law firm, and it does not give legal advice.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="#system"
                className="lc-link text-base font-medium text-[#404040] hover:text-[#0D0D0D] transition-colors"
              >
                See what's included
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <HeroForm />
          </div>
        </div>

        {/* Mono tags - wrap nicely on mobile */}
        <div className="mt-12 md:mt-16 flex flex-wrap items-center gap-x-4 gap-y-2 md:gap-x-6 md:gap-y-3">
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
            alt="A desk with a laptop showing a courthouse website, a phone with a map, and a phone with five stars"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <span className="absolute bottom-3 left-3 font-mono-label text-white/90 bg-black/40 px-2 py-1 text-[0.625rem] md:text-xs">
            THE WEBSITE, THE LISTING, THE REVIEWS, THE INTAKE
          </span>
        </div>
      </div>
    </section>
  );
}
