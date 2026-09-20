import PageShell, { CtaBand, Section } from "@/components/PageShell";
import { industries } from "@/data/industries";
import { usePageMeta } from "@/hooks/usePageMeta";

/**
 * Industries - /industries. Who the system is built for.
 */
export default function Industries() {
  usePageMeta(
    "Industries We Serve | Local Cascade",
    "Websites, local SEO, review funnels, and AI text back for home services, contractors, medical and dental, legal, beauty, auto, cleaning, fitness, and more.",
    "/industries"
  );

  return (
    <PageShell
      label="INDUSTRIES"
      crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      title={
        <>
          Built for businesses
          <br />
          that run on the phone.
        </>
      }
      intro="If your customers find you on Google, call before they buy, and check your reviews first, the system fits. We tailor the pages, the wording, and the AI's answers to your industry."
    >
      <Section label="WHO WE WORK WITH">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#E5E5E5] border border-[#E5E5E5]">
          {industries.map((ind, i) => (
            <div key={ind.name} className="bg-[#FAFAF9] p-6 md:p-10">
              <span className="font-mono-label text-[#004AAD] block mb-3">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="text-xl md:text-2xl font-semibold text-[#0D0D0D]">
                {ind.name}
              </h2>
              <p className="font-mono-label text-[#A3A3A3] mt-2 text-[0.625rem] md:text-xs">
                {ind.examples.toUpperCase()}
              </p>
              <p className="lc-body mt-4 text-sm md:text-base text-[#525252]">
                {ind.body}
              </p>
            </div>
          ))}
        </div>
        <p className="lc-body mt-8 text-base text-[#525252]">
          Don't see your industry?{" "}
          <a href="/#contact" className="lc-link font-medium text-[#004AAD]">
            Tell us what you do
          </a>
          . If you get customers from local search and phone calls, it works.
        </p>
      </Section>

      <CtaBand />
    </PageShell>
  );
}
