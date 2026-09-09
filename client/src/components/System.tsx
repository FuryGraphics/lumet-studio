import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * System - the three pillars included in every build.
 * Left rail index, offset heading, hairline-separated rows.
 * Responsive: stacks to single column on mobile, adjusts spacing.
 */
const pillars = [
  {
    num: "01",
    title: "Professional Website",
    tagline: "SEO-Optimized & Built to Convert",
    desc: "A custom site built for your practice areas and your city. Fast, mobile-first, and structured so Google understands who you are and who you serve. Every page is written to turn a visitor into a booked consultation.",
    points: [
      "Local SEO foundation",
      "Practice area pages",
      "Consultation booking",
    ],
  },
  {
    num: "02",
    title: "Google Review Funnel",
    tagline: "5-Star Reputation on Autopilot",
    desc: "Every closed case triggers a review request by text and email. Happy clients are routed straight to your Google profile. Your rating climbs on its own, and prospects see it before they ever call.",
    points: [
      "Automated request sequences",
      "Direct-to-Google routing",
      "Reputation dashboard",
    ],
  },
  {
    num: "03",
    title: "AI Missed-Chat Bot",
    tagline: "Never Lose a Lead Again",
    desc: "When a call goes unanswered, the caller gets a text within seconds. The AI answers common questions, qualifies the case, and books the consultation while you are in court, in a deposition, or asleep.",
    points: [
      "Instant missed-call text back",
      "Case qualification",
      "24/7 response",
    ],
  },
];

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
            <h2 className="lumet-display text-2xl md:text-4xl lg:text-5xl text-[#0D0D0D]">
              Three parts.
              <br />
              One system.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:pt-2">
            <p className="lumet-body text-sm md:text-base text-[#525252]">
              Get found, get trusted, get hired. Every firm we work with gets
              all three, built together so they feed each other.
            </p>
          </div>
        </div>

        {/* Pillar rows - grid aligned */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-2" />
          <div className="col-span-12 md:col-span-10">
            <div className="border-t border-[#E5E5E5]">
              {pillars.map(pillar => (
                <div
                  key={pillar.num}
                  className="group grid grid-cols-12 gap-2 md:gap-4 py-6 md:py-10 border-b border-[#E5E5E5] hover:bg-white/50 transition-colors px-2 md:px-4 -mx-2 md:-mx-4"
                >
                  <div className="col-span-2 md:col-span-1">
                    <span className="font-mono-label text-[#A3A3A3] group-hover:text-[#1D4ED8] transition-colors">
                      {pillar.num}
                    </span>
                  </div>
                  <div className="col-span-10 md:col-span-4">
                    <h3 className="text-lg md:text-2xl font-semibold text-[#0D0D0D] group-hover:text-[#1D4ED8] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="lumet-body mt-1.5 text-sm md:text-base text-[#1D4ED8]">
                      {pillar.tagline}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-7 mt-3 md:mt-0">
                    <p className="lumet-body text-sm md:text-base text-[#525252]">
                      {pillar.desc}
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
