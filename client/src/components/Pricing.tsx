import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * Pricing - single-plan offer presented as a dark card on warm paper.
 * Left rail index and offset heading keep the editorial grid; the card
 * is the one dark element in a light section, so it carries the focus.
 * Responsive: heading stacks above the card on mobile.
 */
const features = [
  "Custom-built professional website",
  "Local SEO & Google Business Profile setup",
  "Google review automation funnel",
  "AI missed-call text-back system",
  "Mobile-responsive design",
  "Ongoing updates & support",
  "Analytics dashboard",
  "No contracts, cancel anytime",
];

const assurances = [
  { label: "NO SETUP FEES", text: "The monthly price is the whole price." },
  { label: "NO UPSELLS", text: "Every feature above is in the plan already." },
  { label: "NO LOCK-IN", text: "Month to month. Cancel whenever you want." },
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
        stroke="#1D4ED8"
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
            <span className="font-mono-label text-[#A3A3A3]">06 / PRICING</span>
          </div>
          <div className="hidden md:block col-span-10">
            <span className="block h-px w-full bg-[#E5E5E5]" />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 lg:gap-12">
          {/* Left - heading and assurances */}
          <div className="col-span-12 md:col-span-2 lg:col-span-5 mb-8 lg:mb-0">
            <h2
              className="lumet-display text-[#0D0D0D]"
              style={{ fontSize: "clamp(1.75rem, 5vw, 3.75rem)" }}
            >
              One plan.
              <br />
              <span className="text-[#1D4ED8]">Everything</span>
              <br />
              included.
            </h2>
            <p className="lumet-body mt-6 md:mt-8 text-base md:text-lg text-[#525252] max-w-md">
              No hidden fees. No upsells. No long-term contracts. You get the
              whole system for one monthly price, and we keep running it for as
              long as you want it.
            </p>

            <div className="mt-8 md:mt-10 border-t border-[#E5E5E5]">
              {assurances.map(item => (
                <div
                  key={item.label}
                  className="py-4 border-b border-[#E5E5E5]"
                >
                  <span className="font-mono-label text-[#1D4ED8] block mb-1.5">
                    {item.label}
                  </span>
                  <p className="lumet-body text-sm text-[#525252]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - the plan card */}
          <div className="col-span-12 md:col-span-10 lg:col-span-6 lg:col-start-7">
            <div className="relative bg-[#0D0D0D] text-white overflow-hidden">
              {/* Spotlight beam, echoing the dark sections */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 45% 50% at 50% 0%, rgba(255,255,255,0.07) 0%, transparent 70%)",
                }}
              />

              <div className="relative p-6 md:p-10 lg:p-12">
                {/* Badge */}
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <span className="font-mono-label bg-[#1D4ED8] text-white px-2.5 py-1">
                    MOST POPULAR
                  </span>
                  <span className="h-px flex-1 bg-[#262626]" />
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span
                    className="lumet-display text-white"
                    style={{ fontSize: "clamp(3rem, 9vw, 5rem)" }}
                  >
                    $297
                  </span>
                  <span className="font-mono-label text-[#A3A3A3]">/MO</span>
                </div>
                <p className="lumet-body mt-3 text-base text-[#A3A3A3]">
                  Everything your business needs to grow online.
                </p>

                {/* Features */}
                <ul className="mt-8 md:mt-10 space-y-3 md:space-y-4 border-t border-[#262626] pt-8 md:pt-10">
                  {features.map(feature => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check />
                      <span className="lumet-body text-sm md:text-base text-[#E5E5E5]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-8 md:mt-10">
                  <a
                    href="#contact"
                    className="lumet-cta inline-flex items-center justify-center gap-2 w-full px-6 py-4 text-base font-semibold text-white bg-[#1D4ED8] hover:bg-[#1741B0] rounded-sm"
                  >
                    Get started today
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8H13M13 8L8 3M13 8L8 13"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="square"
                      />
                    </svg>
                  </a>
                  <p className="font-mono-label text-[#525252] mt-4 text-center">
                    NO CREDIT CARD REQUIRED TO GET STARTED
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
