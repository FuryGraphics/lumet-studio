import { Link } from "wouter";
import PageShell, { CtaBand, Section } from "@/components/PageShell";
import OfferCards from "@/components/OfferCards";
import { services } from "@/data/services";
import PageMeta from "@/components/PageMeta";

/**
 * Services - /services. Overview of the four parts with a link to each page.
 */
export default function Services() {
  return (
    <>
    <PageMeta
      title="Law Firm Website, Search, Intake, and Review Services | Local Cascade"
      description="What Local Cascade does for attorneys and law firms in the United States: a firm website, local search, Google Business Profile management, review requests, client intake, and monthly blog posts."
      path="/services"
    />
    <PageShell
      label="SERVICES"
      crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      title={
        <>
          Services for
          <br />
          law firms.
        </>
      }
      intro="Local Cascade does four kinds of work for attorneys and law firms in the United States: the firm website, local search, review requests, and client intake. The same plan also includes Google Business Profile management and monthly blog posts written for search. This page says what each part is."
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
                <span className="font-mono-label text-[#A3A3A3] group-hover:text-[#004AAD] transition-colors">
                  {s.num}
                </span>
                <h2 className="mt-2 text-2xl md:text-4xl font-semibold text-[#0D0D0D] group-hover:text-[#004AAD] transition-colors">
                  {s.title}
                </h2>
                <p className="lc-body mt-1.5 text-sm md:text-base text-[#004AAD]">
                  {s.tagline}
                </p>
                <p className="lc-body mt-4 text-sm md:text-base text-[#525252] max-w-2xl">
                  {s.summary}
                </p>
                <span className="lc-link mt-5 inline-block text-sm font-medium text-[#0D0D0D]">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section label="ALSO IN THE PLAN">
        <OfferCards />
      </Section>

      <CtaBand />
    </PageShell>
    </>
  );
}
