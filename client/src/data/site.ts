import type { FAQPage, Organization, WithContext } from "schema-dts";

/** Public identity. Use these strings for the schema, the footer, and llms.txt. */
export const SITE_NAME = "Local Cascade";
export const SITE_URL = "https://www.localcascade.com";
export const CONTACT_EMAIL = "akash@localcascade.com";
export const SITE_DESCRIPTION =
  "Local Cascade is a web agency that builds and looks after websites, local search, client intake, review requests, and monthly blog posts for attorneys and law firms in the United States.";

export function pageUrl(path: string) {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

/**
 * Organization, not ProfessionalService. ProfessionalService is a local-business
 * type that expects a street address, and this site does not publish one.
 */
export const organizationJsonLd: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  email: CONTACT_EMAIL,
  logo: `${SITE_URL}/icon-512.png`,
  areaServed: "United States",
};

export function faqJsonLd(
  items: { q: string; a: string }[]
): WithContext<FAQPage> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(item => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
