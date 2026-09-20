import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * Process - dark section with the 7-day promise and 3-step workflow.
 * Spotlight motif at top, near-black background.
 * Editorial grid with left rail indices.
 * Responsive: fluid font sizing, mobile-optimized spacing.
 */
const steps = [
  {
    num: "01",
    title: "We build everything",
    desc: "Tell us about your business and we build your entire system: website, local SEO, review funnel, and AI text-back, customized for what you do. Live in under 7 days.",
  },
  {
    num: "02",
    title: "Customers start finding you",
    desc: "Your SEO-optimized site starts ranking locally. Your Google reviews grow automatically. Missed calls get instant follow-up. The system works 24/7.",
  },
  {
    num: "03",
    title: "You win more jobs",
    desc: "More calls answered. More appointments booked. More 5-star reviews. You focus on running your business, we handle the rest.",
  },
];

export default function Process() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="process"
      className="relative py-16 md:py-32 bg-[#0D0D0D] text-white overflow-hidden"
    >
      {/* Spotlight beam */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 35% 55% at 50% -5%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 40%, transparent 70%)",
        }}
      />
      {/* Subtle vertical grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #FFFFFF 1px, transparent 1px)",
          backgroundSize: "120px 100%",
        }}
      />

      <div
        ref={ref}
        className={`container relative ${isVisible ? "is-visible" : ""}`}
      >
        {/* Section header - left rail */}
        <div className="grid grid-cols-12 gap-4 mb-8 md:mb-16">
          <div className="col-span-12 md:col-span-2 flex items-center gap-3">
            <span className="font-mono-label text-[#525252]">
              02 / HOW IT WORKS
            </span>
          </div>
          <div className="hidden md:block col-span-10">
            <span className="block h-px w-full bg-[#262626]" />
          </div>
        </div>

        {/* Statement - offset on grid */}
        <div className="grid grid-cols-12 gap-4 mb-12 md:mb-24">
          <div className="col-span-12 md:col-span-2" />
          <div className="col-span-12 md:col-span-9">
            <h2
              className="lc-display text-white"
              style={{ fontSize: "clamp(1.75rem, 5vw, 3.75rem)" }}
            >
              Up and running
              <br />
              in under 7 days.
            </h2>
            <p className="lc-body mt-6 md:mt-8 text-base md:text-xl text-[#A3A3A3] max-w-2xl">
              No project meetings, no design committees, no six-week build
              cycle. You answer a few questions about your business and we
              handle every piece of it from there.
            </p>
          </div>
        </div>

        {/* 3-step process - grid aligned */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-2" />
          <div className="col-span-12 md:col-span-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#262626]">
              {steps.map(step => (
                <div
                  key={step.num}
                  className="bg-[#0D0D0D] p-6 md:p-10 lg:p-12 group hover:bg-[#111111] transition-colors"
                >
                  <div className="flex items-baseline gap-4 mb-4 md:mb-6">
                    <span className="font-mono-label text-[#004AAD]">
                      {step.num}
                    </span>
                    <span className="h-px flex-1 bg-[#262626] group-hover:bg-[#004AAD]/30 transition-colors" />
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-3 md:mb-4">
                    {step.title}
                  </h3>
                  <p className="lc-body text-sm md:text-base text-[#A3A3A3]">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
