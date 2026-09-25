/**
 * Plans - what you can actually buy, one entry per payment plan, each with its
 * own page at /plans/<slug>.
 *
 * Services (data/services.ts) describe the work; plans describe the offer.
 * A plan lists the services it contains by slug, so the two never drift: the
 * plan page links through to the service page for the detail.
 */
import { COMPLETE_PRICE, LOCAL_SEO_PRICE, SYSTEM_PRICE } from "@/data/pricing";

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
  /** Said plainly, so nobody buys the wrong plan. */
  notIncluded: { text: string; upgradeTo?: string }[];
  steps: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  featured?: boolean;
  metaTitle: string;
  metaDescription: string;
};

const BILLING_FAQS = [
  {
    q: "Is there a setup fee?",
    a: "No. The monthly price is the whole price, and the build is part of it.",
  },
  {
    q: "Am I tied into a contract?",
    a: "No. It is month to month. Cancel any time and you are billed no further.",
  },
  {
    q: "Can I switch plans later?",
    a: "Yes, up or down, from the start of your next billing month. Nothing is rebuilt from scratch when you move.",
  },
];

export const plans: Plan[] = [
  {
    slug: "growth-system",
    name: "Growth System",
    badge: "THE FOUNDATION",
    price: SYSTEM_PRICE,
    blurb: "Everything your business needs to get found and get hired online.",
    intro:
      "The website and the follow-up around it. A site built to turn visitors into calls, a review funnel that keeps your rating climbing, and an AI assistant that answers the calls you miss.",
    services: ["website", "review-funnel", "ai-text-back"],
    forWho: [
      "You have no website, or one that brings in nothing",
      "Customers reach you by phone and you cannot always answer",
      "You want one monthly bill instead of three suppliers",
    ],
    includes: [
      {
        title: "A website built to convert",
        items: [
          "Custom design around your services and service area",
          "A page for each service you offer",
          "Written for you, fast, and mobile-first",
          "Tap-to-call, booking, and quote forms throughout",
          "On-page local SEO and site structure",
          "Hosting, updates, fixes, and support included",
        ],
      },
      {
        title: "Google review funnel",
        items: [
          "Automatic review requests by text and email",
          "One tap through to your Google review form",
          "A private route for unhappy customers to reach you first",
          "Dashboard for new reviews and your rating over time",
        ],
      },
      {
        title: "AI missed-call text back",
        items: [
          "An instant text from your number when a call goes unanswered",
          "Answers to your common questions, from information you approve",
          "Collects job details and books appointments, day or night",
          "Every conversation passed to you, and you can take over",
        ],
      },
    ],
    notIncluded: [
      {
        text: "Deep Google Business Profile optimization, listings on 100+ platforms, and monthly ranking scans",
        upgradeTo: "local-seo-pack",
      },
    ],
    steps: [
      {
        title: "Tell us about the business",
        body: "Ten minutes on your services, your area, and how customers reach you.",
      },
      {
        title: "We build the whole thing",
        body: "Site written and designed, review funnel connected, assistant trained and tested.",
      },
      {
        title: "Live in under 7 days",
        body: "On your domain, answering your missed calls, asking for reviews.",
      },
    ],
    faqs: [
      {
        q: "Do I own the website?",
        a: "Your domain, your content, and your business information are yours. If you leave, we help you take them.",
      },
      {
        q: "Will this get me to the top of Google Maps?",
        a: "This plan does the on-page groundwork, and reviews help. Moving up the map results is the Local SEO Pack's job, and that runs every month.",
      },
      ...BILLING_FAQS,
    ],
    metaTitle: "Growth System, $297/mo: Website, Reviews & AI Text Back | Local Cascade",
    metaDescription:
      "$297/mo for a custom website built to convert, an automated Google review funnel, and AI missed-call text back. Built and running in under 7 days. No setup fee, no contract.",
  },
  {
    slug: "complete-pack",
    name: "Complete Pack",
    badge: "BEST VALUE",
    price: COMPLETE_PRICE,
    featured: true,
    blurb:
      "Both plans together: the whole website system and the full Google Business Profile programme.",
    intro:
      "Everything we do, under one fee. The website system that turns visitors into customers, and the ongoing Google Business Profile work that puts you in front of them in the first place.",
    services: ["website", "local-seo-pack", "review-funnel", "ai-text-back"],
    forWho: [
      "You want to be found on the map and convert the traffic you get",
      "You are in a competitive area where the top three get the calls",
      "You would rather one team ran all of it than stitch suppliers together",
    ],
    includes: [
      {
        title: "Everything in the Growth System",
        items: [
          "Custom website, built, hosted, and maintained",
          "Google review funnel on autopilot",
          "AI missed-call text back, 24/7",
        ],
      },
      {
        title: "Everything in the Local SEO Pack",
        items: [
          "Competitor and keyword research",
          "Full Google Business Profile optimization",
          "Listings pushed to 100+ platforms and kept in sync",
          "Monthly content calendar of posts and articles",
          "Monthly ranking scans of your service area",
        ],
      },
      {
        title: "Run as one system",
        items: [
          "Reviews from the funnel feed your map rankings",
          "Map traffic lands on a site built to convert it",
          "Calls that site generates are caught by the text back",
          "One invoice, one team, no contracts",
        ],
      },
    ],
    notIncluded: [],
    steps: [
      {
        title: "One onboarding call",
        body: "Your services, area, and the questions customers ask most. Ten minutes.",
      },
      {
        title: "We build and research in parallel",
        body: "The site goes up while the profile and listings work begins.",
      },
      {
        title: "Live in 7 days, then monthly",
        body: "The site launches, and the profile work and scans continue every month.",
      },
    ],
    faqs: [
      {
        q: "What does this save against buying both?",
        a: `The two plans separately are $${SYSTEM_PRICE + LOCAL_SEO_PRICE} a month. This is $${COMPLETE_PRICE}, so $${SYSTEM_PRICE + LOCAL_SEO_PRICE - COMPLETE_PRICE} a month less, and one invoice instead of two.`,
      },
      {
        q: "Can I start with one plan and add the other?",
        a: "Yes. Plenty of businesses start with the website system and add the map work once it is live. You move onto this price when you take both.",
      },
      ...BILLING_FAQS,
    ],
    metaTitle: "Complete Pack, $597/mo: Website, Local SEO, Reviews & AI | Local Cascade",
    metaDescription:
      "Everything Local Cascade does for $597/mo: a custom website, deep Google Business Profile optimization, listings on 100+ platforms, a review funnel, and AI missed-call text back. Save $197/mo against both plans separately.",
  },
  {
    slug: "local-seo-pack",
    name: "Local SEO Pack",
    badge: "RANK ON THE MAP",
    price: LOCAL_SEO_PRICE,
    blurb:
      "Deep Google Business Profile optimization for businesses that live on map results.",
    intro:
      "The ongoing work that moves you up Google Maps: your profile rebuilt around what customers search, your details consistent everywhere, and a fresh month of content every month.",
    services: ["local-seo-pack"],
    forWho: [
      "Your website is fine, but nobody finds you on the map",
      "Competitors with worse work rank above you",
      "You want to see where you rank, not be told it is improving",
    ],
    includes: [
      {
        title: "Research first",
        items: [
          "The searches that actually bring you customers",
          "What the businesses ranking above you are doing",
        ],
      },
      {
        title: "Your profile, rebuilt",
        items: [
          "Categories, services, attributes, and description around those keywords",
          "Photos and Q&A filled out properly",
          "Listings pushed to 100+ platforms, from Google and Apple Maps to voice assistants and in-car GPS",
          "Details kept in sync so platforms see one consistent business",
        ],
      },
      {
        title: "Every month after",
        items: [
          "A content calendar of profile posts and articles",
          "Ranking scans across your service area for your key searches",
          "Review tool included, so fresh reviews keep feeding rankings",
        ],
      },
    ],
    notIncluded: [
      {
        text: "A website, the automated review funnel, and AI missed-call text back",
        upgradeTo: "growth-system",
      },
    ],
    steps: [
      {
        title: "Ten minutes of questions",
        body: "Services, service area, and what matters to you.",
      },
      {
        title: "Research and rebuild",
        body: "Competitors and keywords first, then the profile and listings.",
      },
      {
        title: "Ongoing upkeep, monthly scans",
        body: "Content goes out, and each month you get the ranking map.",
      },
    ],
    faqs: [
      {
        q: "Do you guarantee I will rank number one?",
        a: "No. Anyone guaranteeing a Google position is guessing. We do the work that improves local visibility and show you the ranking map each month so you can judge it.",
      },
      {
        q: "How long before I see movement?",
        a: "It depends on your market and how competitive the keywords are. The scans on the service page show businesses moving over one to six months.",
      },
      {
        q: "Do I need a website with you for this?",
        a: "No. This works on the site you already have. If that site is weak, the Growth System or the Complete Pack fixes that side too.",
      },
      ...BILLING_FAQS,
    ],
    metaTitle: "Local SEO Pack, $497/mo: Google Business Profile Optimization | Local Cascade",
    metaDescription:
      "$497/mo for Google Business Profile optimization: competitor and keyword research, listings on 100+ platforms, a monthly content calendar, and monthly ranking scans of your service area.",
  },
];

export function getPlan(slug: string) {
  return plans.find(p => p.slug === slug);
}

/** Pricing-card order: the featured plan sits in the middle on desktop. */
export const planOrder = ["growth-system", "complete-pack", "local-seo-pack"];
