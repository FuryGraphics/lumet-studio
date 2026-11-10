import { Link, useParams } from "wouter";
import PageShell, { Faq, Section } from "@/components/PageShell";
import OfferCards from "@/components/OfferCards";
import PageMeta from "@/components/PageMeta";
import BookingWidget from "@/components/BookingWidget";
import NotFound from "@/pages/NotFound";
import { getPlan } from "@/data/plans";
import { getService } from "@/data/services";

/**
 * PlanPage - /plans/:slug. The plan: the price, who it suits, everything it
 * contains, and the form that starts it.
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

  return (
    <>
    <PageMeta
      title={plan.metaTitle}
      description={plan.metaDescription}
      path={`/plans/${plan.slug}`}
    />
    <PageShell
      label={plan.badge}
      crumbs={[
        { label: "Home", href: "/" },
        { label: plan.name },
      ]}
      title={plan.name}
      intro={plan.intro}
    >
      <section className="pb-14 md:pb-20 bg-[#FAFAF9]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-end">
            <div className="md:col-span-4">
              <div className="flex items-baseline gap-2">
                <span
                  className="lc-display text-[#0D0D0D]"
                  style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}
                >
                  ${plan.price}
                </span>
                <span className="font-mono-label text-[#A3A3A3]">/MO</span>
              </div>
              <span className="font-mono-label text-[#737373] block mt-2">
                NO SETUP FEE · CANCEL ANY TIME
              </span>
            </div>
            <div className="md:col-span-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <a
                href="#book"
                className="lc-cta inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-[#004AAD] hover:bg-[#003A87] rounded-sm"
              >
                Book your call
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
                href="/#contact"
                className="lc-link text-sm font-medium text-[#404040] hover:text-[#0D0D0D]"
              >
                Questions first? Talk to us →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Section label="ALSO IN THE PLAN">
        <OfferCards />
      </Section>

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

      <Section label="BOOK A CALL">
        <div id="book" className="scroll-mt-24">
          <h2
            className="lc-display text-[#0D0D0D] mb-3"
            style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.5rem)" }}
          >
            Start with a call.
          </h2>
          <p className="lc-body mb-8 text-base md:text-lg text-[#525252] max-w-2xl">
            Pick a time. We go through the practice, the cities you serve, and
            what you want the site to say. Nothing is set up until you agree.
          </p>
          <BookingWidget />
        </div>
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
          {plan.blurb} No setup fee. Month to month. Cancel by email.
        </p>
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="#book"
            className="lc-cta inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-[#004AAD] hover:bg-[#003A87] rounded-sm w-full sm:w-auto"
          >
            Book your call
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
            href="#book"
            className="lc-link text-base font-medium text-[#A3A3A3] hover:text-white"
          >
            Book a call
          </a>
        </div>
      </Section>
    </PageShell>
    </>
  );
}
