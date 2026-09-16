import { Link, useParams } from "wouter";
import PageShell, { CtaBand, Faq, Section } from "@/components/PageShell";
import NotFound from "@/pages/NotFound";
import { getService, services } from "@/data/services";
import { usePageMeta } from "@/hooks/usePageMeta";

/**
 * ServicePage - /services/:slug. One template, content from data/services.
 * Order: problem → what's included → how it works → FAQ → other services → CTA.
 */
export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = getService(slug);

  if (!service) return <NotFound />;
  return <ServiceContent slug={slug} />;
}

function ServiceContent({ slug }: { slug: string }) {
  const service = getService(slug)!;
  usePageMeta(
    service.metaTitle,
    service.metaDescription,
    `/services/${service.slug}`
  );
  const others = services.filter(s => s.slug !== service.slug);

  return (
    <PageShell
      label={`SERVICE ${service.num}`}
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: service.title },
      ]}
      title={service.title}
      intro={service.intro}
    >
      {/* Image + problem statement */}
      <section className="pb-16 md:pb-28 bg-[#FAFAF9]">
        <div className="container">
          <div className="grid grid-cols-12 gap-6 lg:gap-12 items-center">
            <div className="col-span-12 lg:col-span-7">
              <div className="aspect-[4/3] overflow-hidden border border-[#E5E5E5] bg-[#F5F5F5]">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover"
                  fetchPriority="high"
                />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <span className="font-mono-label text-[#A3A3A3] block mb-4">
                THE PROBLEM
              </span>
              <h2
                className="lumet-display text-[#0D0D0D]"
                style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.5rem)" }}
              >
                {service.problem.heading}
              </h2>
              <p className="lumet-body mt-5 text-base md:text-lg text-[#525252]">
                {service.problem.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Section label="WHAT'S INCLUDED">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E5E5] border border-[#E5E5E5]">
          {service.features.map((f, i) => (
            <div key={f.title} className="bg-[#FAFAF9] p-6 md:p-8">
              <span className="font-mono-label text-[#1D4ED8] block mb-3">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg md:text-xl font-semibold text-[#0D0D0D]">
                {f.title}
              </h3>
              <p className="lumet-body mt-2 text-sm md:text-base text-[#525252]">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section label="HOW IT WORKS" dark>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#262626]">
          {service.steps.map((step, i) => (
            <div key={step.title} className="bg-[#0D0D0D] p-6 md:p-10">
              <div className="flex items-baseline gap-4 mb-4 md:mb-6">
                <span className="font-mono-label text-[#1D4ED8]">
                  STEP {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-[#262626]" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="lumet-body text-sm md:text-base text-[#A3A3A3]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section label="QUESTIONS">
        <Faq items={service.faqs} />
      </Section>

      <Section label="THE REST OF THE SYSTEM">
        <p className="lumet-body mb-8 text-base md:text-lg text-[#525252] max-w-2xl">
          {service.title} is one of four parts. Every plan includes all of
          them, built to work together.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {others.map(o => (
            <Link key={o.slug} href={`/services/${o.slug}`} className="group block">
              <div className="aspect-[4/3] overflow-hidden border border-[#E5E5E5] bg-[#F5F5F5]">
                <img
                  src={o.image}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <span className="font-mono-label text-[#A3A3A3] block mt-4">
                {o.num}
              </span>
              <h3 className="mt-1 text-lg font-semibold text-[#0D0D0D] group-hover:text-[#1D4ED8] transition-colors">
                {o.title} →
              </h3>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand />
    </PageShell>
  );
}
