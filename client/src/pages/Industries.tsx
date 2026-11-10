import PageShell, { CtaBand, Section } from "@/components/PageShell";
import PageMeta from "@/components/PageMeta";
import { industries } from "@/data/industries";

/**
 * Industries - /industries. Who the system is built for.
 */
export default function Industries() {
  return (
    <>
    <PageMeta
      title="Practice Areas for Law Firm Websites | Local Cascade"
      description="Local Cascade works with attorneys and law firms in the United States across practice areas. The work is the same. The pages are written for the firm's practice."
      path="/industries"
    />
    <PageShell
      label="PRACTICE AREAS"
      crumbs={[{ label: "Home", href: "/" }, { label: "Practice areas" }]}
      title={
        <>
          Law firms across
          <br />
          practice areas.
        </>
      }
      intro="Local Cascade works with attorneys and law firms in the United States. The website, the listings, the review requests, and the intake replies are written for the firm's practice. The list below is not a client list, and it is not limited to one area of law."
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
          Don't see the practice?{" "}
          <a href="/#contact" className="lc-link font-medium text-[#004AAD]">
            Tell us what the firm handles
          </a>
          . If it is a US law firm, we can write the pages for that practice.
        </p>
      </Section>

      <CtaBand />
    </PageShell>
    </>
  );
}
