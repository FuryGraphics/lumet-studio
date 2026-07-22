import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * About — studio ethos section with principles.
 * Editorial two-column split with left rail index.
 */
const principles = [
  {
    num: "PRINCIPLE 01",
    text: "We are invisible by design. Your clients see your brand, not ours.",
  },
  {
    num: "PRINCIPLE 02",
    text: "Senior-level work, every time. No juniors learning on your clients.",
  },
  {
    num: "PRINCIPLE 03",
    text: "Fast, clear communication. You always know where things stand.",
  },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-20 md:py-32 bg-[#FAFAF9] border-t border-[#E5E5E5]">
      <div ref={ref} className={`container ${isVisible ? "is-visible" : ""}`}>
        {/* Section header — left rail */}
        <div className="grid grid-cols-12 gap-4 mb-12 md:mb-16">
          <div className="col-span-12 md:col-span-2 flex items-center gap-3">
            <span className="font-mono-label text-[#A3A3A3]">05 / ABOUT</span>
          </div>
          <div className="hidden md:block col-span-10">
            <span className="block h-px w-full bg-[#E5E5E5]" />
          </div>
        </div>

        {/* Ethos statement — offset */}
        <div className="grid grid-cols-12 gap-4 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-2">
            <span className="font-mono-label text-[#737373]">STUDIO ETHOS</span>
          </div>
          <div className="col-span-12 md:col-span-9">
            <p className="lumet-display text-2xl md:text-3xl lg:text-4xl text-[#0D0D0D] leading-snug max-w-4xl">
              We built Lumet Studios because agencies and niche-service
              businesses need a delivery partner they can trust without
              managing.{" "}
              <span className="text-[#A3A3A3] font-normal">
                No hand-holding, no missed deadlines, no quality drift. Just
                senior-level execution that shows up every time — quietly,
                reliably, under your brand.
              </span>
            </p>
          </div>
        </div>

        {/* Principles — grid aligned */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-2" />
          <div className="col-span-12 md:col-span-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E5E5]">
              {principles.map((p) => (
                <div key={p.num} className="bg-[#FAFAF9] p-6 md:p-8">
                  <span className="font-mono-label text-[#1D4ED8] block mb-4">
                    {p.num}
                  </span>
                  <p className="lumet-body text-base text-[#404040]">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
