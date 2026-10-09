import PageShell from "@/components/PageShell";
import { CONTACT_EMAIL } from "@/data/contact";
import { LAST_UPDATED, privacy, terms, type LegalSection } from "@/data/legal";
import { usePageMeta } from "@/hooks/usePageMeta";

/**
 * Legal - the privacy policy at /privacy and the terms at /terms, from the
 * same template. Narrow measure and plain prose: these are meant to be read,
 * not scrolled past.
 */
function LegalPage({
  kind,
  title,
  description,
  path,
  intro,
  sections,
}: {
  kind: string;
  title: string;
  description: string;
  path: string;
  intro: string;
  sections: LegalSection[];
}) {
  usePageMeta(title, description, path);

  return (
    <PageShell
      label={kind}
      crumbs={[{ label: "Home", href: "/" }, { label: kind }]}
      title={kind === "PRIVACY" ? "Privacy policy" : "Terms of service"}
      intro={intro}
    >
      <section className="pb-20 md:pb-28 bg-[#FAFAF9]">
        <div className="container">
          <p className="font-mono-label text-[#A3A3A3] border-b border-[#E5E5E5] pb-6">
            LAST UPDATED {LAST_UPDATED.toUpperCase()}
          </p>

          {/* Contents: these run long, so let people jump */}
          <nav aria-label="Contents" className="py-8 border-b border-[#E5E5E5]">
            <p className="font-mono-label text-[#737373] mb-4">CONTENTS</p>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
              {sections.map((s, i) => (
                <li key={s.heading} className="flex gap-3">
                  <span className="font-mono-label text-[#A3A3A3] shrink-0 pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <a
                    href={`#${slug(s.heading)}`}
                    className="lc-link text-sm md:text-base text-[#404040] hover:text-[#004AAD]"
                  >
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="max-w-3xl">
            {sections.map((s, i) => (
              <section key={s.heading} id={slug(s.heading)} className="pt-10 md:pt-14">
                <span className="font-mono-label text-[#004AAD] block mb-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-xl md:text-3xl font-semibold text-[#0D0D0D]">
                  {s.heading}
                </h2>
                {s.body.map((part, j) =>
                  Array.isArray(part) ? (
                    <ul key={j} className="mt-4 space-y-2 border-l border-[#E5E5E5] pl-5">
                      {part.map(item => (
                        <li
                          key={item}
                          className="lc-body text-base md:text-lg text-[#525252]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p
                      key={j}
                      className="lc-body mt-4 text-base md:text-lg text-[#525252]"
                    >
                      {part}
                    </p>
                  )
                )}
              </section>
            ))}

            <div className="mt-14 md:mt-20 border-t border-[#E5E5E5] pt-8">
              <p className="lc-body text-base text-[#525252]">
                Questions about this page? Email{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="lc-link font-medium text-[#004AAD]"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function slug(heading: string) {
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function Privacy() {
  return (
    <LegalPage
      kind="PRIVACY"
      title="Privacy Policy | Local Cascade"
      description="What Local Cascade collects, who handles it, how long we keep it, and how to ask for a copy or have it deleted. No analytics, no tracking cookies, no selling data."
      path="/privacy"
      intro="What we collect, who else handles it, and what you can ask us to do with it. We run no analytics and set no tracking cookies on this site."
      sections={privacy}
    />
  );
}

export function Terms() {
  return (
    <LegalPage
      kind="TERMS"
      title="Terms of Service | Local Cascade"
      description="The terms for Local Cascade plans: what we provide, what we need from you, billing and cancellation, what we do not promise, and who owns what."
      path="/terms"
      intro="What you get, what we need from you, how billing and cancellation work, and what we do and do not promise. Month to month, cancel any time."
      sections={terms}
    />
  );
}
