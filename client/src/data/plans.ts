/**
 * The plan. One offer, with its own page at /plans/<slug>.
 * Services describe the work. This page describes how they are sold together.
 *
 * Three older plan URLs are redirected in vercel.json. They are not pages here.
 */
import { PRICE } from "@/data/pricing";

export type Plan = {
  slug: string;
  name: string;
  badge: string;
  price: number;
  blurb: string;
  intro: string;
  services: string[];
  forWho: string[];
  includes: { title: string; items: string[] }[];
  steps: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
};

export const plans: Plan[] = [
  {
    slug: "complete-system",
    name: "The complete system",
    badge: "ONE PLAN",
    price: PRICE,
    blurb:
      "The website, local search, Google Business Profile management, review requests, client intake, and monthly blog posts for a US law firm. $697 a month.",
    intro:
      "This is the Local Cascade plan for attorneys and law firms in the United States. It is $697 a month. It includes the firm website, local search, Google Business Profile management, review requests, client intake, and monthly blog posts written for search. There is no setup fee and no long contract.",
    services: ["website", "local-seo-pack", "ai-text-back", "review-funnel"],
    forWho: [
      "You want the public website, the listings, the review requests, and the first reply handled together",
      "People contact the firm at all hours and someone cannot always pick up",
      "You would rather brief one team than coordinate separate vendors",
    ],
    includes: [
      {
        title: "Law firm website",
        items: [
          "Pages for the practice areas and the cities you serve",
          "Written for a phone screen",
          "Call, email, and message links on every page",
          "You approve the words before they go live",
          "Hosting, edits, and fixes included",
        ],
      },
      {
        title: "Local search",
        items: [
          "Google listing checked against the practice",
          "Name, address, and phone kept consistent on other listing sites",
          "A short post on the Google listing each month",
          "A monthly note on what was updated",
          "No promise of a position in search results",
        ],
      },
      {
        title: "Client intake",
        items: [
          "A reply when a call is missed",
          "The same questions on the website",
          "Collects a name, a number, and a short description",
          "Says that the message is automated and is not legal advice",
          "The conversation is sent to the firm",
        ],
      },
      {
        title: "Review requests",
        items: [
          "A text and email after the firm closes a matter",
          "One link to the firm's Google review page",
          "A private way for an unhappy client to write to the firm",
          "No payment, discount, or gift for a review",
        ],
      },
      {
        title: "Google Business Profile management",
        items: [
          "The firm's Google listing, looked after for you",
          "Name, hours, photos, and posts kept current",
          "The map pin and public details checked each month",
        ],
      },
      {
        title: "Monthly blog posts",
        items: [
          "Blog posts written for search each month",
          "Written for the practice and the cities you serve",
          "You approve each post before it is published",
        ],
      },
    ],
    steps: [
      {
        title: "One call",
        body: "Practice areas, cities, and how people reach the firm today.",
      },
      {
        title: "We prepare the pieces",
        body: "The site draft, the listing updates, the review message, the intake replies, and the first blog posts. You approve the public words.",
      },
      {
        title: "Then it runs monthly",
        body: "We aim to have the first version of the site ready within seven days of your information and approval. Listing updates, Google Business Profile management, review requests, and monthly blog posts continue while the plan is active.",
      },
    ],
    faqs: [
      {
        q: "Does the firm own the website?",
        a: "The domain, the words, and the firm's information stay yours. If you leave, we help you move them.",
      },
      {
        q: "Do you promise a position on Google?",
        a: "No. We do the listing work and show you what changed. Search engines decide what they show.",
      },
      {
        q: "Is there a separate setup fee?",
        a: "No. $697 a month is the whole price, and the build is part of it.",
      },
      {
        q: "Is there a long contract?",
        a: "No. The plan is month to month. Cancel by email and the next period is not billed.",
      },
    ],
    metaTitle: "The Complete System for Law Firms | Local Cascade",
    metaDescription:
      "The Local Cascade plan for attorneys and law firms in the United States includes the website, local search, Google Business Profile management, review requests, client intake, and monthly blog posts.",
  },
];

/** Older plan URLs. vercel.json redirects them. This keeps the app from showing a 404 if a redirect is skipped. */
const ALIASES = ["growth-system", "complete-pack", "local-seo-pack"];

export function getPlan(slug: string | undefined) {
  return (
    plans.find(plan => plan.slug === slug) ??
    (slug && ALIASES.includes(slug) ? plans[0] : undefined)
  );
}

export const plan = plans[0];
