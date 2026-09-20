import { Link } from "wouter";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import ResultsSlider from "@/components/ResultsSlider";
import { LOCAL_SEO_PRICE } from "@/data/pricing";

/**
 * ResultsBand - the map-ranking proof on the home page: the animation, the
 * before/after slider, and a link through to the Local SEO Pack page where
 * the calculator and the detail live.
 */
export default function ResultsBand() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="results"
      className="py-16 md:py-32 bg-[#FAFAF9] border-t border-[#E5E5E5]"
    >
      <div ref={ref} className={`container ${isVisible ? "is-visible" : ""}`}>
        {/* Section header - left rail */}
        <div className="grid grid-cols-12 gap-4 mb-8 md:mb-16">
          <div className="col-span-12 md:col-span-2 flex items-center gap-3">
            <span className="font-mono-label text-[#A3A3A3]">
              05 / ON THE MAP
            </span>
          </div>
          <div className="hidden md:block col-span-10">
            <span className="block h-px w-full bg-[#E5E5E5]" />
          </div>
        </div>

        {/* Heading + animation */}
        <div className="grid grid-cols-12 gap-6 lg:gap-12 mb-12 md:mb-20 items-center">
          <div className="col-span-12 md:col-span-2" />
          <div className="col-span-12 lg:col-span-5">
            <h2 className="rwl-display text-2xl md:text-4xl lg:text-5xl text-[#0D0D0D]">
              Red means nobody
              <br />
              finds you there.
            </h2>
            <p className="rwl-body mt-6 text-base md:text-lg text-[#525252] max-w-xl">
              A ranking scan searches your keyword from points across your
              service area and records where your business lands. Green is the
              top of the map, red is out of sight. The Local SEO Pack is the
              ongoing work that turns those squares green.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/services/local-seo-pack"
                className="rwl-cta inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[#1D4ED8] hover:bg-[#1741B0] rounded-sm"
              >
                See the Local SEO Pack
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8H13M13 8L8 3M13 8L8 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                </svg>
              </Link>
              <span className="font-mono-label text-[#737373]">
                ${LOCAL_SEO_PRICE}/MO · MONTH TO MONTH
              </span>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <div className="aspect-square overflow-hidden border border-[#E5E5E5] bg-[#F5F5F5]">
              <img
                src="/images/ranking-improvement.webp"
                alt="An animated map grid where a business's Google Maps rankings improve from scattered numbers to green number ones"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="font-mono-label text-[#A3A3A3] mt-3 text-[0.625rem] md:text-xs">
              ONE BUSINESS'S MAP RANKINGS, SCAN AFTER SCAN
            </p>
          </div>
        </div>

        {/* Before / after slider */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-2" />
          <div className="col-span-12 md:col-span-10">
            <ResultsSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
