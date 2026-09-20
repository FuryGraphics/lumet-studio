import { Link } from "wouter";
import PageShell, { CtaBand, Section } from "@/components/PageShell";
import Stats from "@/components/Stats";
import { services } from "@/data/services";
import { usePageMeta } from "@/hooks/usePageMeta";

/**
 * Services - /services. Overview of the four parts with a link to each page.
 */
export default function Services() {
  usePageMeta(
    "Services: Websites, Local SEO, Reviews & AI Text Back | Rise with Local",
    "Everything a local business needs to get found and get hired: a custom website, local SEO, an automated Google review funnel, and AI missed-call text back. $297/mo.",
    "/services"
  );

  return (
    <PageShell
      label="SERVICES"
      crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      title={
        <>
          Four parts.
          <br />
          One system.
        </>
      }
      intro="Get found, get trusted, get hired. Every business we work with gets all four, built together so each one makes the others work harder."
    >
      <Section label="WHAT YOU GET">
        <div className="border-t border-[#E5E5E5]">
          {services.map(s => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-12 border-b border-[#E5E5E5] items-center"
            >
              <div className="col-span-12 md:col-span-4">
                <div className="aspect-[4/3] overflow-hidden border border-[#E5E5E5] bg-[#F5F5F5]">
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8">
                <span className="font-mono-label text-[#A3A3A3] group-hover:text-[#1D4ED8] transition-colors">
                  {s.num}
                </span>
                <h2 className="mt-2 text-2xl md:text-4xl font-semibold text-[#0D0D0D] group-hover:text-[#1D4ED8] transition-colors">
                  {s.title}
                </h2>
                <p className="rwl-body mt-1.5 text-sm md:text-base text-[#1D4ED8]">
                  {s.tagline}
                </p>
                {s.price && (
                  <p className="font-mono-label text-[#737373] mt-3">
                    ${s.price}/MO STANDALONE
                  </p>
                )}
                <p className="rwl-body mt-4 text-sm md:text-base text-[#525252] max-w-2xl">
                  {s.summary}
                </p>
                <span className="rwl-link mt-5 inline-block text-sm font-medium text-[#0D0D0D]">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Stats index="02 / THE NUMBERS" />
      <CtaBand />
    </PageShell>
  );
}
