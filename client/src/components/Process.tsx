import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * Process — dark section with a strong statement and 3-step workflow.
 * Spotlight motif at top, near-black background.
 * Editorial grid with left rail indices.
 */
const steps = [
  {
    num: "01",
    title: "Onboard",
    desc: "We integrate into your workflow in days, not weeks. You introduce us to your systems, we learn your standards, and we're ready to receive work.",
  },
  {
    num: "02",
    title: "Build",
    desc: "Whether it's a GHL snapshot, a full website, or a review funnel — we execute to a senior standard. You review, approve, and deliver to your client under your brand.",
  },
  {
    num: "03",
    title: "Handle requests",
    desc: "Ongoing client requests flow to us. Edits, fixes, new builds, automations — we manage the backend while you focus on growth and relationships.",
  },
];

export default function Process() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="process"
      className="relative py-20 md:py-32 bg-[#0D0D0D] text-white overflow-hidden"
    >
      {/* Spotlight beam — stronger, more ownable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 35% 55% at 50% -5%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 40%, transparent 70%)",
        }}
      />
      {/* Subtle vertical grid lines for editorial consistency */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #FFFFFF 1px, transparent 1px)",
          backgroundSize: "120px 100%",
        }}
      />

      <div ref={ref} className={`container relative ${isVisible ? "is-visible" : ""}`}>
        {/* Section header — left rail */}
        <div className="grid grid-cols-12 gap-4 mb-12 md:mb-16">
          <div className="col-span-12 md:col-span-2 flex items-center gap-3">
            <span className="font-mono-label text-[#525252]">02 / PROCESS</span>
          </div>
          <div className="hidden md:block col-span-10">
            <span className="block h-px w-full bg-[#262626]" />
          </div>
        </div>

        {/* Statement — offset on grid */}
        <div className="grid grid-cols-12 gap-4 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-2" />
          <div className="col-span-12 md:col-span-9">
            <h2 className="lumet-display text-3xl md:text-5xl lg:text-6xl text-white">
              We're the team
              <br />
              behind your team.
            </h2>
            <p className="lumet-body mt-8 text-lg md:text-xl text-[#A3A3A3] max-w-2xl">
              White-label, reliable, senior-level execution. Your clients never
              see us — they only see the quality of your work going up.
            </p>
          </div>
        </div>

        {/* 3-step process — grid aligned */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-2" />
          <div className="col-span-12 md:col-span-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#262626]">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="bg-[#0D0D0D] p-8 md:p-10 lg:p-12 group hover:bg-[#111111] transition-colors"
                >
                  <div className="flex items-baseline gap-4 mb-6">
                    <span className="font-mono-label text-[#1D4ED8]">{step.num}</span>
                    <span className="h-px flex-1 bg-[#262626] group-hover:bg-[#1D4ED8]/30 transition-colors" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="lumet-body text-base text-[#A3A3A3]">
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
