import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SITE_DESCRIPTION } from "@/data/site";

/**
 * About - why the system exists, plus the three operating principles.
 * Editorial two-column split with left rail index.
 * Responsive: fluid font sizing, mobile-optimized spacing.
 */
const principles = [
  {
    num: "PRINCIPLE 01",
    text: "One plan covers the website, local search, review requests, and intake.",
  },
  {
    num: "PRINCIPLE 02",
    text: "Month to month. The firm can cancel by email.",
  },
  {
    num: "PRINCIPLE 03",
    text: "We build the site and we keep the public details updated.",
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
            <span className="font-mono-label text-[#A3A3A3]">03 / ABOUT</span>
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
              className="lc-display text-[#0D0D0D] leading-snug max-w-4xl"
              style={{ fontSize: "clamp(1.25rem, 3.5vw, 2.25rem)" }}
            >
              {SITE_DESCRIPTION}{" "}
              <span className="text-[#A3A3A3] font-normal">
                Firms are often sold a website, a search retainer, a review
                tool, and a chat tool as four separate projects. This is one
                plan, looked after by one team, for attorneys and law firms in
                the United States.
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
                alt="People sitting around a table in a meeting"
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
                  <span className="font-mono-label text-[#004AAD] block mb-3 md:mb-4">
                    {p.num}
                  </span>
                  <p className="lc-body text-sm md:text-base text-[#404040]">
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
