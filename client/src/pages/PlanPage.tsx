import { Link, useParams } from "wouter";
import PageShell, { Faq, Section } from "@/components/PageShell";
import RoiCalculator from "@/components/RoiCalculator";
import NotFound from "@/pages/NotFound";
import { getPlan, plans } from "@/data/plans";
import { getService } from "@/data/services";
import { usePageMeta } from "@/hooks/usePageMeta";

/**
 * PlanPage - /plans/:slug. One page per payment plan: the price, who it suits,
 * everything it contains, what it does not contain, and how the three compare.
 *
 * The services it contains are linked rather than re-described, so the detail
 * lives on the service pages and this page stays about the offer.
 */
export default function PlanPage() {
  const { slug } = useParams<{ slug: string }>();
  if (!getPlan(slug)) return <NotFound />;
  return <PlanContent slug={slug} />;
}

function PlanContent({ slug }: { slug: string }) {
  const plan = getPlan(slug)!;
  usePageMeta(plan.metaTitle, plan.metaDescription, `/plans/${plan.slug}`);

  return (
    <PageShell
      label={plan.badge}
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Pricing", href: "/#pricing" },
        { label: plan.name },
      ]}
      title={plan.name}
      intro={plan.intro}
    >
      {/* Price + CTA */}
      <section className="pb-14 md:pb-20 bg-[#FAFAF9]">
        <div className="container">
          <div className="flex flex-wrap items-end gap-x-8 gap-y-5">
            <div className="flex items-baseline gap-2">
              <span
                className="lc-display text-[#0D0D0D]"
                style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}
              >
                ${plan.price}
              </span>
              <span className="font-mono-label text-[#A3A3A3]">/MO</span>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="/#contact"
                className="lc-cta inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-[#004AAD] hover:bg-[#003A87] rounded-sm"
              >
                Get started
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8H13M13 8L8 3M13 8L8 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                </svg>
              </a>
              <span className="font-mono-label text-[#737373] self-center">
                NO SETUP FEE · CANCEL ANY TIME
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <Section label="WHO IT'S FOR">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E5E5] border border-[#E5E5E5]">
          {plan.forWho.map((line, i) => (
            <div key={line} className="bg-[#FAFAF9] p-6 md:p-8">
              <span className="font-mono-label text-[#004AAD] block mb-3">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="lc-body text-sm md:text-base text-[#404040]">
                {line}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Everything included, grouped */}
      <Section label="WHAT'S INCLUDED" dark>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[#262626]">
          {plan.includes.map(group => (
            <div key={group.title} className="bg-[#0D0D0D] p-6 md:p-8">
              <h2 className="text-lg md:text-xl font-semibold text-white">
                {group.title}
              </h2>
              <ul className="mt-5 space-y-3">
                {group.items.map(item => (
                  <li key={item} className="flex items-start gap-3">
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
                    <span className="lc-body text-sm text-[#E5E5E5]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* The services behind it */}
        <div className="mt-10 md:mt-14">
          <p className="font-mono-label text-[#525252] mb-4">
            THE SERVICES IN THIS PLAN
          </p>
          <div className="flex flex-wrap gap-3">
            {plan.services.map(s => {
              const service = getService(s);
              if (!service) return null;
              return (
                <Link
                  key={s}
                  href={`/services/${s}`}
                  className="lc-cta inline-flex items-center gap-2 border border-[#262626] px-4 py-2.5 text-sm font-medium text-[#A3A3A3] hover:border-[#004AAD] hover:text-white transition-colors"
                >
                  {service.title} →
                </Link>
              );
            })}
          </div>
        </div>

        {/* What it does not cover */}
        {plan.notIncluded.length > 0 && (
          <div className="mt-10 md:mt-14 border-t border-[#262626] pt-8">
            <p className="font-mono-label text-[#525252] mb-4">NOT IN THIS PLAN</p>
            <ul className="space-y-3">
              {plan.notIncluded.map(item => (
                <li key={item.text} className="flex items-start gap-3">
                  <span
                    className="text-[#525252] mt-0.5 shrink-0"
                    aria-hidden="true"
                  >
                    ×
                  </span>
                  <span className="lc-body text-sm md:text-base text-[#A3A3A3]">
                    {item.text}
                    {item.upgradeTo && (
                      <>
                        {" · "}
                        <Link
                          href={`/plans/${item.upgradeTo}`}
                          className="lc-link font-medium text-[#004AAD]"
                        >
                          See the {getPlan(item.upgradeTo)?.name}
                        </Link>
                      </>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Section>

      {/* Getting started */}
      <Section label="GETTING STARTED">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E5E5] border border-[#E5E5E5]">
          {plan.steps.map((step, i) => (
            <div key={step.title} className="bg-[#FAFAF9] p-6 md:p-8">
              <span className="font-mono-label text-[#004AAD] block mb-3">
                STEP {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg md:text-xl font-semibold text-[#0D0D0D]">
                {step.title}
              </h3>
              <p className="lc-body mt-2 text-sm md:text-base text-[#525252]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section label="COMPARE THE PLANS">
        <PlanTable current={plan.slug} />
      </Section>

      <Section label="WHAT IT IS WORTH">
        <h2
          className="lc-display text-[#0D0D0D] mb-6 md:mb-10"
          style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.5rem)" }}
        >
          Do the math on your own numbers.
        </h2>
        <RoiCalculator defaultCost={plan.price} />
      </Section>

      <Section label="QUESTIONS">
        <Faq items={plan.faqs} />
      </Section>

      {/* Closing CTA, this plan's price */}
      <Section label="GET STARTED" dark>
        <h2
          className="lc-display text-white"
          style={{ fontSize: "clamp(1.75rem, 5vw, 3.75rem)" }}
        >
          {plan.name}.
          <br />
          <span className="text-[#004AAD]">${plan.price}</span> a month.
        </h2>
        <p className="lc-body mt-6 text-base md:text-xl text-[#A3A3A3] max-w-2xl">
          {plan.blurb} No setup fee, no contract, cancel any time.
        </p>
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="/#contact"
            className="lc-cta inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-[#004AAD] hover:bg-[#003A87] rounded-sm w-full sm:w-auto"
          >
            Get started
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8H13M13 8L8 3M13 8L8 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
          </a>
          <a
            href="/#pricing"
            className="lc-link text-base font-medium text-[#A3A3A3] hover:text-white"
          >
            All plans
          </a>
        </div>
      </Section>
    </PageShell>
  );
}

/** The rows a buyer actually decides on, and which plans carry them. */
const rows: { label: string; in: string[] }[] = [
  { label: "Custom website, built and maintained", in: ["growth-system", "complete-pack"] },
  { label: "On-page local SEO and site structure", in: ["growth-system", "complete-pack"] },
  { label: "Google review funnel", in: ["growth-system", "complete-pack"] },
  { label: "AI missed-call text back", in: ["growth-system", "complete-pack"] },
  { label: "Google Business Profile optimization", in: ["local-seo-pack", "complete-pack"] },
  { label: "Listings on 100+ platforms", in: ["local-seo-pack", "complete-pack"] },
  { label: "Monthly content calendar", in: ["local-seo-pack", "complete-pack"] },
  { label: "Monthly ranking scans", in: ["local-seo-pack", "complete-pack"] },
  { label: "Review tool", in: ["growth-system", "local-seo-pack", "complete-pack"] },
  {
    label: "No setup fee, no contract",
    in: ["growth-system", "local-seo-pack", "complete-pack"],
  },
];

export function PlanTable({ current }: { current?: string }) {
  const cols = ["growth-system", "complete-pack", "local-seo-pack"]
    .map(s => plans.find(p => p.slug === s)!)
    .filter(Boolean);

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[34rem] border-collapse text-left">
        <thead>
          <tr className="border-b border-[#E5E5E5]">
            <th className="py-4 pr-4 align-bottom">
              <span className="font-mono-label text-[#A3A3A3]">PLAN</span>
            </th>
            {cols.map(p => (
              <th
                key={p.slug}
                className={`py-4 px-3 align-bottom ${
                  p.slug === current ? "bg-[#004AAD]/5" : ""
                }`}
              >
                <Link href={`/plans/${p.slug}`} className="group block">
                  <span
                    className={`block text-sm md:text-base font-semibold ${
                      p.slug === current ? "text-[#004AAD]" : "text-[#0D0D0D]"
                    } group-hover:text-[#004AAD] transition-colors`}
                  >
                    {p.name}
                  </span>
                  <span className="font-mono-label text-[#737373]">
                    ${p.price}/MO
                  </span>
                </Link>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.label} className="border-b border-[#E5E5E5]">
              <th
                scope="row"
                className="py-3.5 pr-4 lc-body text-sm font-normal text-[#404040]"
              >
                {row.label}
              </th>
              {cols.map(p => (
                <td
                  key={p.slug}
                  className={`py-3.5 px-3 text-center ${
                    p.slug === current ? "bg-[#004AAD]/5" : ""
                  }`}
                >
                  {row.in.includes(p.slug) ? (
                    <span className="text-[#004AAD]" aria-label="Included">
                      ✓
                    </span>
                  ) : (
                    <span className="text-[#D4D4D4]" aria-label="Not included">
                      –
                    </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
