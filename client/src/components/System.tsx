import { Link } from "wouter";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { services as pillars } from "@/data/services";

/**
 * System - the four parts included in every build, from data/services.
 * Left rail index, offset heading, hairline-separated rows. Each row links to
 * that service's own page.
 * Responsive: stacks to single column on mobile, adjusts spacing.
 */
export default function System() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="system"
      className="py-16 md:py-32 bg-[#FAFAF9] border-t border-[#E5E5E5]"
    >
      <div ref={ref} className={`container ${isVisible ? "is-visible" : ""}`}>
        {/* Section header - left rail */}
        <div className="grid grid-cols-12 gap-4 mb-8 md:mb-16">
          <div className="col-span-12 md:col-span-2 flex items-center gap-3">
            <span className="font-mono-label text-[#A3A3A3]">
              01 / THE SYSTEM
            </span>
          </div>
          <div className="hidden md:block col-span-10">
            <span className="block h-px w-full bg-[#E5E5E5]" />
          </div>
        </div>

        {/* Heading + intro - offset */}
        <div className="grid grid-cols-12 gap-4 mb-8 md:mb-16">
          <div className="col-span-12 md:col-span-2" />
          <div className="col-span-12 md:col-span-6">
            <h2 className="lc-display text-2xl md:text-4xl lg:text-5xl text-[#0D0D0D]">
              Four parts.
              <br />
              One system.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:pt-2">
            <p className="lc-body text-sm md:text-base text-[#525252]">
              Get found, get trusted, get hired. Every business we work with
              gets all four, built together so they feed each other.
            </p>
          </div>
        </div>

        {/* Pillar rows - grid aligned */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-2" />
          <div className="col-span-12 md:col-span-10">
            <div className="border-t border-[#E5E5E5]">
              {pillars.map(pillar => (
                <Link
                  key={pillar.num}
                  href={`/services/${pillar.slug}`}
                  className="group grid grid-cols-12 gap-2 md:gap-4 py-6 md:py-10 border-b border-[#E5E5E5] hover:bg-white/50 transition-colors px-2 md:px-4 -mx-2 md:-mx-4"
                >
                  <div className="col-span-2 md:col-span-1">
                    <span className="font-mono-label text-[#A3A3A3] group-hover:text-[#004AAD] transition-colors">
                      {pillar.num}
                    </span>
                  </div>
                  <div className="col-span-10 md:col-span-4">
                    <h3 className="text-lg md:text-2xl font-semibold text-[#0D0D0D] group-hover:text-[#004AAD] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="lc-body mt-1.5 text-sm md:text-base text-[#004AAD]">
                      {pillar.tagline}
                    </p>
                    <div className="mt-4 md:mt-6 aspect-[4/3] overflow-hidden border border-[#E5E5E5] bg-[#F5F5F5] md:mr-6">
                      <img
                        src={pillar.image}
                        alt={pillar.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-7 mt-3 md:mt-0">
                    <p className="lc-body text-sm md:text-base text-[#525252]">
                      {pillar.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 md:gap-x-6">
                      {pillar.points.map(point => (
                        <span
                          key={point}
                          className="font-mono-label text-[#A3A3A3] text-[0.625rem] md:text-xs"
                        >
                          {point.toUpperCase()}
                        </span>
                      ))}
                    </div>
                    <span className="lc-link mt-5 inline-block text-sm font-medium text-[#0D0D0D] group-hover:text-[#004AAD]">
                      Learn more →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
