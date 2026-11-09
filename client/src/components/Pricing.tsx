import { Link } from "wouter";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { plan } from "@/data/plans";

/**
 * Pricing - the one plan, on warm paper. A single dark card against the
 * heading and the three assurances.
 * Responsive: the card sits under the heading on mobile, beside it on large
 * screens.
 */
/** The card's own summary of the plan; everything else (name, badge, price,
 *  blurb, link) comes from data/plans. */
const features = [
  "Law firm website, with a page for each practice area",
  "Google listing kept in line with the practice",
  "Name, address, and phone checked on other listing sites",
  "Review requests after a matter, with nothing offered in return",
  "A first reply when a call is missed or someone writes in",
  "The reply does not give legal advice",
  "You approve the public words before they go live",
  "Month to month, with edits included",
];

const assurances = [
  {
    label: "NO SETUP FEE",
    text: "The fee is agreed before any work starts. There is no separate setup fee.",
  },
  {
    label: "ONE PLAN",
    text: "The website, local search, review requests, and intake are in the same plan.",
  },
  {
    label: "NO LONG CONTRACT",
    text: "Month to month. Cancel by email.",
  },
];

function Check() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="mt-1 shrink-0"
      aria-hidden="true"
    >
      <path
        d="M3 8.5L6.5 12L13 4"
        stroke="#004AAD"
        strokeWidth="1.75"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default function Pricing() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="pricing"
      className="py-16 md:py-32 bg-[#FAFAF9] border-t border-[#E5E5E5]"
    >
      <div ref={ref} className={`container ${isVisible ? "is-visible" : ""}`}>
        {/* Section header - left rail */}
        <div className="grid grid-cols-12 gap-4 mb-8 md:mb-16">
          <div className="col-span-12 md:col-span-2 flex items-center gap-3">
            <span className="font-mono-label text-[#A3A3A3]">04 / THE PLAN</span>
          </div>
          <div className="hidden md:block col-span-10">
            <span className="block h-px w-full bg-[#E5E5E5]" />
          </div>
        </div>

        {/* Heading + assurances */}
        <div className="grid grid-cols-12 gap-4 lg:gap-12 mb-10 md:mb-16">
          <div className="col-span-12 md:col-span-2" />
          <div className="col-span-12 md:col-span-5">
            <h2
              className="lc-display text-[#0D0D0D]"
              style={{ fontSize: "clamp(1.75rem, 5vw, 3.75rem)" }}
            >
              One plan
              <br />
              for the
              <br />
              <span className="text-[#004AAD]">whole firm site.</span>
            </h2>
            <p className="lc-body mt-6 md:mt-8 text-base md:text-lg text-[#525252] max-w-md">
              The website, local search, review requests, and client intake
              for a US law firm. We agree the fee with you before any work
              starts.
            </p>
          </div>
          <div className="col-span-12 md:col-span-10 lg:col-span-4 lg:col-start-8">
            <div className="border-t border-[#E5E5E5]">
              {assurances.map(item => (
                <div key={item.label} className="py-4 border-b border-[#E5E5E5]">
                  <span className="font-mono-label text-[#004AAD] block mb-1.5">
                    {item.label}
                  </span>
                  <p className="lc-body text-sm text-[#525252]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The plan */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-2" />
          <div className="col-span-12 md:col-span-10 lg:col-span-7">
            <div className="relative bg-[#0D0D0D] text-white overflow-hidden flex flex-col ring-2 ring-[#004AAD]">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 45% 50% at 50% 0%, rgba(255,255,255,0.07) 0%, transparent 70%)",
                }}
              />
              <div className="relative p-6 md:p-10 flex flex-col h-full">
                {/* Badge */}
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <span className="font-mono-label bg-[#004AAD] text-white px-2.5 py-1">
                    {plan.badge}
                  </span>
                  <span className="h-px flex-1 bg-[#262626]" />
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  {plan.name}
                </h3>

                <p className="lc-body mt-3 text-base text-[#A3A3A3]">
                  {plan.blurb}
                </p>

                {/* Features */}
                <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3 border-t border-[#262626] pt-8">
                  {features.map(feature => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check />
                      <span className="lc-body text-sm md:text-base text-[#E5E5E5]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto pt-8 md:pt-10">
                  <Link
                    href={`/plans/${plan.slug}`}
                    className="lc-cta inline-flex items-center justify-center gap-2 w-full px-6 py-4 text-base font-semibold text-white bg-[#004AAD] hover:bg-[#003A87] rounded-sm"
                  >
                    See the plan
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8H13M13 8L8 3M13 8L8 13"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="square"
                      />
                    </svg>
                  </Link>
                  <a
                    href="#contact"
                    className="lc-link block text-center text-sm font-medium text-[#A3A3A3] hover:text-white mt-4"
                  >
                    Questions first? Talk to us
                  </a>
                </div>
              </div>
            </div>
            <p className="font-mono-label text-[#A3A3A3] mt-6">
              NO CREDIT CARD REQUIRED TO GET STARTED
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
