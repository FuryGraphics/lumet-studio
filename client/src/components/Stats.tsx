import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * Stats — dark proof band with key metrics.
 * Near-black background, large numbers, mono labels.
 * Editorial grid alignment with left rail index.
 */
const stats = [
  { value: "48h", label: "Average turnaround on standard client requests" },
  { value: "200+", label: "GoHighLevel buildouts completed" },
  { value: "100%", label: "White-label — your clients never see us" },
  { value: "5★", label: "Review funnels deployed across niches" },
];

export default function Stats() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative py-16 md:py-24 bg-[#0D0D0D] text-white overflow-hidden border-t border-[#1A1A1A]">
      {/* Subtle spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 30% 40% at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
      />
      <div ref={ref} className={`container relative ${isVisible ? "is-visible" : ""}`}>
        {/* Section header — left rail */}
        <div className="grid grid-cols-12 gap-4 mb-10 md:mb-14">
          <div className="col-span-12 md:col-span-2 flex items-center gap-3">
            <span className="font-mono-label text-[#525252]">04 / PROOF</span>
          </div>
          <div className="hidden md:block col-span-10">
            <span className="block h-px w-full bg-[#262626]" />
          </div>
        </div>

        {/* Stats grid — offset */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-2" />
          <div className="col-span-12 md:col-span-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#1A1A1A]">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-[#0D0D0D] p-6 md:p-8 lg:p-10">
                  <div className="lumet-display text-4xl md:text-5xl lg:text-6xl text-white mb-3">
                    {stat.value}
                  </div>
                  <p className="lumet-body text-sm text-[#A3A3A3] max-w-[200px]">
                    {stat.label}
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
