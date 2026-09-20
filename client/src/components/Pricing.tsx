import { Link } from "wouter";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { COMPLETE_SAVING } from "@/data/pricing";
import { plans as planData } from "@/data/plans";

/**
 * Pricing - three plans on warm paper: the monthly system, the Local SEO Pack
 * on its own, and the everything bundle between them. The bundle is the
 * featured card: centred, badged, and lifted, since it is the one we steer to.
 * Responsive: cards stack under the heading on mobile, three across on large
 * screens with the featured card first on mobile.
 */
/** Card copy per plan: the feature bullets are the card's own summary, and
 *  everything else (name, badge, price, blurb, link) comes from data/plans. */
const cards = [
  {
    slug: "growth-system",
    features: [
      "Custom-built professional website",
      "On-page local SEO and site structure",
      "Google review automation funnel",
      "AI missed-call text-back system",
      "Mobile-responsive design",
      "Ongoing updates & support",
      "No contracts, cancel anytime",
    ],
  },
  {
    slug: "complete-pack",
    features: [
      "Everything in the Growth System",
      "Everything in the Local SEO Pack",
      "Custom website, built and maintained",
      "Full Google Business Profile optimization",
      "Listings on 100+ platforms, kept in sync",
      "Review funnel and AI missed-call text back",
      "Monthly ranking scans of your area",
      "One invoice, one team, no contracts",
    ],
    order: "lg:order-2",
  },
  {
    slug: "local-seo-pack",
    order: "lg:order-3",
    features: [
      "Competitor and keyword research",
      "Full Google Business Profile optimization",
      "Listings pushed to 100+ platforms",
      "Monthly content calendar",
      "Profile posts and fresh content",
      "Monthly ranking scans of your area",
      "Review tool included",
      "No contracts, cancel anytime",
    ],
  },
].map(card => {
  const plan = planData.find(p => p.slug === card.slug)!;
  return { ...card, ...plan, features: card.features, order: card.order };
});

const plans = cards;

const assurances = [
  { label: "NO SETUP FEES", text: "The monthly price is the whole price." },
  { label: "NO UPSELLS", text: "Every feature listed is in the plan already." },
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
            <span className="font-mono-label text-[#A3A3A3]">07 / PRICING</span>
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
              className="lumet-display text-[#0D0D0D]"
              style={{ fontSize: "clamp(1.75rem, 5vw, 3.75rem)" }}
            >
              Pick a plan.
              <br />
              <span className="text-[#1D4ED8]">Everything</span>
              <br />
              included.
            </h2>
            <p className="lumet-body mt-6 md:mt-8 text-base md:text-lg text-[#525252] max-w-md">
              No hidden fees. No upsells. No long-term contracts. Take one
              piece or the lot, and we keep running it for as long as you want
              it.
            </p>
          </div>
          <div className="col-span-12 md:col-span-10 lg:col-span-4 lg:col-start-8">
            <div className="border-t border-[#E5E5E5]">
              {assurances.map(item => (
                <div key={item.label} className="py-4 border-b border-[#E5E5E5]">
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
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-2" />
          <div className="col-span-12 md:col-span-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 lg:items-start">
              {plans.map(plan => (
                <div
                  key={plan.name}
                  className={`relative bg-[#0D0D0D] text-white overflow-hidden flex flex-col ${plan.order ?? "lg:order-1"} ${
                    plan.featured
                      ? "ring-2 ring-[#1D4ED8] lg:-mt-6 lg:mb-[-1.5rem]"
                      : ""
                  }`}
                >
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
                      <span className="font-mono-label bg-[#1D4ED8] text-white px-2.5 py-1">
                        {plan.badge}
                      </span>
                      <span className="h-px flex-1 bg-[#262626]" />
                    </div>

                    <h3 className="text-xl md:text-2xl font-semibold text-white">
                      {plan.name}
                    </h3>

                    {/* Price */}
                    <div className="flex items-baseline gap-2 mt-3">
                      <span
                        className="lumet-display text-white"
                        style={{ fontSize: "clamp(2.75rem, 7vw, 4.5rem)" }}
                      >
                        ${plan.price}
                      </span>
                      <span className="font-mono-label text-[#A3A3A3]">
                        /MO
                      </span>
                    </div>
                    <p className="lumet-body mt-3 text-base text-[#A3A3A3]">
                      {plan.blurb}
                    </p>
                    {plan.featured && (
                      <p className="font-mono-label text-[#1D4ED8] mt-4">
                        SAVE ${COMPLETE_SAVING}/MO VS BOTH SEPARATELY
                      </p>
                    )}

                    {/* Features */}
                    <ul className="mt-8 space-y-3 border-t border-[#262626] pt-8">
                      {plan.features.map(feature => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check />
                          <span className="lumet-body text-sm md:text-base text-[#E5E5E5]">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="mt-auto pt-8 md:pt-10">
                      <a
                        href="#contact"
                        className="lumet-cta inline-flex items-center justify-center gap-2 w-full px-6 py-4 text-base font-semibold text-white bg-[#1D4ED8] hover:bg-[#1741B0] rounded-sm"
                      >
                        Get started
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M3 8H13M13 8L8 3M13 8L8 13"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="square"
                          />
                        </svg>
                      </a>
                      <Link
                        href={`/plans/${plan.slug}`}
                        className="lumet-link block text-center text-sm font-medium text-[#A3A3A3] hover:text-white mt-4"
                      >
                        See what's included →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="font-mono-label text-[#A3A3A3] mt-6 text-center">
              NO CREDIT CARD REQUIRED TO GET STARTED
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
