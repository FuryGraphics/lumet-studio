/**
 * The plan - one offer, one price, with its own page at /plans/<slug>.
 *
 * Services (data/services.ts) describe the work; this describes the offer.
 * It lists the services it contains by slug, so the two never drift: the plan
 * page links through to the service page for the detail.
 *
 * There were three plans until November 2026. ALIASES keeps their URLs alive
 * in the app; vercel.json redirects them properly in production.
 */
import { PRICE } from "@/data/pricing";

export type Plan = {
  slug: string;
  name: string;
  badge: string;
  price: number;
  /** Sits on the pricing card and at the top of the plan page. */
  blurb: string;
  intro: string;
  /** Service slugs this plan contains, in order. */
  services: string[];
  forWho: string[];
  /** Grouped so a buyer can see what each part of the fee covers. */
  includes: { title: string; items: string[] }[];
  steps: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
};

export const plans: Plan[] = [
  {
    slug: "complete-system",
    name: "The Complete System",
    badge: "EVERYTHING INCLUDED",
    price: PRICE,
    blurb:
      "The whole customer-getting system for your business, built and run for one monthly fee.",
    intro:
      "One fee, everything in it. A website built to rank and convert, your Google Business Profile run for you, an AI chat widget that answers and captures leads around the clock, and a review funnel that keeps your rating climbing.",
    services: ["website", "local-seo-pack", "ai-text-back", "review-funnel"],
    forWho: [
      "You want to be found on the map and convert the traffic you get",
      "Enquiries arrive at all hours and you cannot always answer",
      "You would rather one team ran all of it than stitch suppliers together",
    ],
    includes: [
      {
        title: "SEO-optimized website",
        items: [
          "Custom design around your services and service area",
          "A page for each service you offer",
          "Built to rank locally, fast and mobile-first",
          "Tap-to-call, booking, and quote forms throughout",
          "Hosting, updates, fixes, and support included",
        ],
      },
      {
        title: "Automated Google Business Profile",
        items: [
          "Competitor and keyword research first",
          "Categories, services, attributes, and description rebuilt around what customers search",
          "Profile posts and updates published for you every month",
          "Review replies handled automatically",
          "Listings pushed to 100+ platforms and kept in sync",
          "Monthly ranking scans across your service area",
        ],
      },
      {
        title: "AI chat widget",
        items: [
          "Answers enquiries on your site 24/7, from information you approve",
          "Captures the lead's name, number, and what they need",
          "Qualifies the job and books appointments, day or night",
          "Every conversation passed to you, and you can take over",
        ],
      },
      {
        title: "5-star Google review funnel",
        items: [
          "Automatic review requests by text and email",
          "One tap through to your Google review form",
          "A private route for unhappy customers to reach you first",
          "Dashboard for new reviews and your rating over time",
        ],
      },
    ],
    steps: [
      {
        title: "One onboarding call",
        body: "Your services, your area, and the questions customers ask most. Ten minutes.",
      },
      {
        title: "We build and research in parallel",
        body: "The site goes up while the profile and listings work begins, and the chat widget is trained and tested.",
      },
      {
        title: "Live in 7 days, then monthly",
        body: "The site launches, and the profile work, content, and scans continue every month.",
      },
    ],
    faqs: [
      {
        q: "Do I own the website?",
        a: "Your domain, your content, and your business information are yours. If you leave, we help you take them.",
      },
      {
        q: "Do you guarantee I will rank number one?",
        a: "No. Anyone guaranteeing a Google position is guessing. We do the work that improves local visibility and show you the ranking map each month so you can judge it.",
      },
      {
        q: "How long before I see movement on the map?",
        a: "It depends on your market and how competitive the keywords are. The scans on the Local SEO page show businesses moving over one to six months.",
      },
      {
        q: "Is there a setup fee?",
        a: "No. The monthly price is the whole price, and the build is part of it.",
      },
      {
        q: "Am I tied into a contract?",
        a: "No. It is month to month. Cancel any time and you are billed no further.",
      },
    ],
    metaTitle:
      "The Complete System, $697/mo: Website, Local SEO, AI Chat & Reviews | Local Cascade",
    metaDescription:
      "$697/mo for everything Local Cascade does: an SEO-optimized website, your Google Business Profile run for you, an AI chat widget that captures leads 24/7, and a 5-star review funnel. No setup fee, no contract.",
  },
];

/** The three plan URLs we used until November 2026, all pointing here now. */
const ALIASES = ["growth-system", "complete-pack", "local-seo-pack"];

export function getPlan(slug: string) {
  return (
    plans.find(p => p.slug === slug) ??
    (ALIASES.includes(slug) ? plans[0] : undefined)
  );
}

/** The one plan, for the places that just need it without a slug. */
export const plan = plans[0];
