import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * About - why the system exists, plus the three operating principles.
 * Editorial two-column split with left rail index.
 * Responsive: fluid font sizing, mobile-optimized spacing.
 */
const principles = [
  {
    num: "PRINCIPLE 01",
    text: "One system, one fee. No setup costs, no upsells, no surprise invoices.",
  },
  {
    num: "PRINCIPLE 02",
    text: "You are never locked in. Month to month, cancel any time.",
  },
  {
    num: "PRINCIPLE 03",
    text: "We build it and we run it. Updates, fixes, and support are included.",
  },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="about"
      className="py-16 md:py-32 bg-[#FAFAF9] border-t border-[#E5E5E5]"
    >
      <div ref={ref} className={`container ${isVisible ? "is-visible" : ""}`}>
        {/* Section header - left rail */}
        <div className="grid grid-cols-12 gap-4 mb-8 md:mb-16">
          <div className="col-span-12 md:col-span-2 flex items-center gap-3">
            <span className="font-mono-label text-[#A3A3A3]">05 / ABOUT</span>
          </div>
          <div className="hidden md:block col-span-10">
            <span className="block h-px w-full bg-[#E5E5E5]" />
          </div>
        </div>

        {/* Ethos statement - offset */}
        <div className="grid grid-cols-12 gap-4 mb-12 md:mb-24">
          <div className="col-span-12 md:col-span-2 mb-2 md:mb-0">
            <span className="font-mono-label text-[#737373]">
              WHY WE BUILT THIS
            </span>
          </div>
          <div className="col-span-12 md:col-span-9">
            <p
              className="lumet-display text-[#0D0D0D] leading-snug max-w-4xl"
              style={{ fontSize: "clamp(1.25rem, 3.5vw, 2.25rem)" }}
            >
              Most firms get sold three separate things: a web designer, a
              reputation tool, and a chat widget.{" "}
              <span className="text-[#A3A3A3] font-normal">
                Three invoices, three logins, and nothing that talks to each
                other. We built Lumet so a firm gets one system, one fee, and
                one team that keeps it running long after launch day.
              </span>
            </p>
          </div>
        </div>

        {/* Team image - offset to the content column */}
        <div className="grid grid-cols-12 gap-4 mb-12 md:mb-24">
          <div className="col-span-12 md:col-span-2" />
          <div className="col-span-12 md:col-span-10">
            <div className="aspect-[3/2] md:aspect-[21/9] overflow-hidden border border-[#E5E5E5] bg-[#F5F5F5]">
              <img
                src="/images/about-team.webp"
                alt="A small law firm team reviewing results together in a conference room"
                className="w-full h-full object-cover object-[center_35%]"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Principles - grid aligned */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-2" />
          <div className="col-span-12 md:col-span-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E5E5]">
              {principles.map(p => (
                <div key={p.num} className="bg-[#FAFAF9] p-5 md:p-8">
                  <span className="font-mono-label text-[#1D4ED8] block mb-3 md:mb-4">
                    {p.num}
                  </span>
                  <p className="lumet-body text-sm md:text-base text-[#404040]">
                    {p.text}
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
