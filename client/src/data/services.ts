/**
 * Services - single source for the four parts of the system.
 * The home page System section lists them; each also gets its own page at
 * /services/<slug>, so copy lives here once instead of drifting between two
 * places.
 */
export type Service = {
  slug: string;
  num: string;
  title: string;
  tagline: string;
  summary: string;
  image: string;
  alt: string;
  points: string[];
  /** Monthly price when the service is sold on its own. */
  price?: number;
  /** Page-only content below. */
  metaTitle: string;
  metaDescription: string;
  intro: string;
  problem: { heading: string; body: string };
  features: { title: string; body: string }[];
  steps: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  /** Page extras: the ranking animation, the results slider, the calculator. */
  animation?: { src: string; alt: string; caption: string };
  showResults?: boolean;
  showRoi?: boolean;
};

export const services: Service[] = [
  {
    slug: "website",
    num: "01",
    title: "Professional Website",
    tagline: "Built to Convert Visitors Into Customers",
    summary:
      "A custom site built for your services and your city. Fast, mobile-first, and structured so Google understands who you are and who you serve. Every page is written to turn a visitor into a call, a booking, or a quote request.",
    image: "/images/system-website.webp",
    alt: "A laptop on a bright office desk showing a clean business website",
    points: ["Custom design", "Service pages", "Online booking"],
    metaTitle: "Websites for Local Businesses | Local Cascade",
    metaDescription:
      "A custom, fast, mobile-first website built to turn visitors into calls and bookings. Designed, written, hosted, and maintained for you. Part of the $297/mo Local Cascade system.",
    intro:
      "Most small business websites look fine and do nothing. Yours is built around one job: getting the person who lands on it to call, book, or ask for a quote.",
    problem: {
      heading: "A website that doesn't bring in work is just a business card.",
      body: "Templates that load slowly, pages that don't say what you do or where you do it, and no clear next step. Visitors leave, and Google has little reason to send more of them.",
    },
    features: [
      {
        title: "Custom design, not a template",
        body: "Built around your services, your service area, and the way your customers actually decide.",
      },
      {
        title: "A page for every service",
        body: "Each service gets its own page, so you show up for the specific thing people search for.",
      },
      {
        title: "Fast and mobile-first",
        body: "Most local searches happen on a phone. Your site loads fast and reads cleanly on every screen.",
      },
      {
        title: "Clear calls to action",
        body: "Tap-to-call, booking, and quote forms on every page, so the next step is never more than a thumb away.",
      },
      {
        title: "Copy written for you",
        body: "We write the words. You review them. No blank pages waiting on you for weeks.",
      },
      {
        title: "Hosting and updates included",
        body: "Changes, fixes, and security updates are part of the plan, not a separate invoice.",
      },
    ],
    steps: [
      {
        title: "Tell us about the business",
        body: "Services, service area, and what makes you the right choice.",
      },
      {
        title: "We design and write it",
        body: "You get a finished site to review, not a questionnaire.",
      },
      {
        title: "Live in under 7 days",
        body: "Launched on your domain, connected to your review funnel and text-back.",
      },
    ],
    faqs: [
      {
        q: "Do I own my website?",
        a: "Your domain, your content, and your business information are yours. If you ever leave, we help you move them.",
      },
      {
        q: "Can I ask for changes after launch?",
        a: "Yes. Updates and edits are included in the monthly plan.",
      },
      {
        q: "I already have a website. Can you work with it?",
        a: "Usually we rebuild it so it's fast and structured properly, then point your existing domain at the new site.",
      },
    ],
  },
  {
    slug: "local-seo-pack",
    num: "02",
    title: "Local SEO Pack",
    tagline: "Own the Map When Customers Search Nearby",
    summary:
      "Deep Google Business Profile optimization, plus your business details pushed to 100+ platforms and a monthly calendar of posts and content. Built to move you up the map results where the calls come from.",
    image: "/images/service-local-seo.webp",
    alt: "A person on a city sidewalk looking at local search results on a phone map",
    points: [
      "Google Business Profile",
      "100+ platform listings",
      "Monthly content calendar",
    ],
    price: 569,
    metaTitle: "Local SEO Pack: Google Business Profile Optimization | Local Cascade",
    metaDescription:
      "Google Business Profile optimization for local businesses: competitor and keyword research, listings on 100+ platforms, a monthly content calendar, and monthly ranking scans. $569/mo, month to month.",
    intro:
      "The businesses at the top of Google Maps get the calls. The Local SEO Pack is the ongoing work that moves you up there: your profile optimized around what customers actually search, and your business details kept accurate everywhere they look.",
    problem: {
      heading: "A profile you set up once quietly decays.",
      body: "Platforms favour businesses that stay active, and they change how they want business data formatted. Details that are stale or inconsistent across the web push you down the results, below competitors who keep theirs current.",
    },
    features: [
      {
        title: "Competitor and keyword research",
        body: "We find the searches that bring you customers, and what the businesses above you are doing to win them.",
      },
      {
        title: "Full profile optimization",
        body: "Categories, services, attributes, description, photos, and Q&A rebuilt around those keywords.",
      },
      {
        title: "Listings on 100+ platforms",
        body: "One master profile, pushed out to Google, Apple Maps, Bing, Yelp, Facebook, Waze, voice assistants, and in-car GPS systems.",
      },
      {
        title: "Monthly content calendar",
        body: "A planned month of Google Business Profile posts and articles that reference your business, so the profile keeps producing fresh signals.",
      },
      {
        title: "Listings kept in sync",
        body: "Your details are re-sent and refreshed on an ongoing basis, so platforms see an active business and your data stays consistent.",
      },
      {
        title: "Monthly ranking scans",
        body: "A map of where you rank across your service area for your key searches, so progress is something you can see.",
      },
    ],
    steps: [
      {
        title: "Ten minutes of questions",
        body: "We learn your services, service area, and what matters to you. That is the only part that needs your time.",
      },
      {
        title: "Research and rebuild",
        body: "Competitor and keyword research, then your profile and listings are built out properly.",
      },
      {
        title: "Ongoing upkeep, monthly scans",
        body: "Content and listing updates keep going out, and each month you see your ranking map.",
      },
    ],
    faqs: [
      {
        q: "Why is there a monthly fee if the profiles are set up once?",
        a: "Because the upkeep is the work. Your details are re-sent to the platforms, a fresh month of posts and content goes out, and the formats platforms want change over time. Profiles left alone go stale and slide down the results.",
      },
      {
        q: "Can I not just do this myself?",
        a: "Some of it, yes, if you have the time each month. But a few platforms, in-car GPS systems among them, have no way for a business owner to submit or update a listing directly, and inconsistent details across sites are what drags rankings down in the first place.",
      },
      {
        q: "I only care about Google. Does the rest matter?",
        a: "It does, because Google cross-checks your business details against other sources. Consistent information across the web makes your Google profile look more trustworthy, which is what gets it shown more often.",
      },
      {
        q: "How long before I see movement?",
        a: "It depends on your market and how competitive your keywords are. The scans above show businesses moving over one to six months. Nobody can promise a position or a date, and we do not.",
      },
      {
        q: "Do you guarantee I will rank number one?",
        a: "No. Anyone guaranteeing a Google position is guessing. We do the work that improves local visibility and show you the ranking map each month so you can judge it yourself.",
      },
      {
        q: "What happens if I cancel?",
        a: "Nothing is locked in, it is month to month. The posts and updates stop, so over time the profile drifts back toward where it started, but the optimization work stays on your profile and it is yours.",
      },
    ],
    animation: {
      src: "/images/ranking-improvement.webp",
      alt: "An animated map grid where a business's Google Maps rankings improve from scattered numbers to green number ones",
      caption: "ONE BUSINESS'S MAP RANKINGS, SCAN AFTER SCAN",
    },
    showResults: true,
    showRoi: true,
  },
  {
    slug: "review-funnel",
    num: "03",
    title: "Google Review Funnel",
    tagline: "5-Star Reputation on Autopilot",
    summary:
      "Every finished job triggers a review request by text and email. Happy customers are sent straight to your Google profile. Your rating climbs on its own, and prospects see it before they ever call.",
    image: "/images/system-reviews.webp",
    alt: "A customer holding a phone showing a five-star review",
    points: [
      "Automated request sequences",
      "Direct-to-Google routing",
      "Reputation dashboard",
    ],
    metaTitle: "Google Review Funnel for Local Businesses | Local Cascade",
    metaDescription:
      "Automatically ask every customer for a Google review by text and email, and send them straight to your profile. Part of the $297/mo Local Cascade system.",
    intro:
      "Most happy customers would leave a review. They just never get asked at the right moment. The review funnel asks every one of them, automatically.",
    problem: {
      heading: "Your best work is invisible without reviews.",
      body: "People compare businesses on Google before they call. A handful of old reviews loses to a competitor with a steady stream of recent ones, even if your work is better.",
    },
    features: [
      {
        title: "Automatic requests",
        body: "A text and email go out after each job, with a gentle reminder if they don't respond.",
      },
      {
        title: "One tap to Google",
        body: "Customers land directly on your review form. No searching, no friction.",
      },
      {
        title: "Private feedback first",
        body: "Customers can send concerns straight to you, so you can make things right.",
      },
      {
        title: "Review dashboard",
        body: "Track new reviews and your rating over time in one place.",
      },
      {
        title: "Reply prompts",
        body: "Get notified about new reviews so responding takes a minute, not a to-do list.",
      },
      {
        title: "Works with your site",
        body: "Recent reviews help your local rankings and give website visitors a reason to call.",
      },
    ],
    steps: [
      {
        title: "Connect your Google profile",
        body: "We set up the direct review link and your message templates.",
      },
      {
        title: "Add customers after each job",
        body: "Or connect the tools you already use so it happens on its own.",
      },
      {
        title: "Watch reviews come in",
        body: "Requests and reminders run automatically in the background.",
      },
    ],
    faqs: [
      {
        q: "Is it allowed to ask for Google reviews?",
        a: "Yes. Asking customers for honest reviews is fine. Google prohibits paying for reviews or offering incentives, and we never do either.",
      },
      {
        q: "Does it block negative reviews?",
        a: "No. Every customer can leave a public Google review. We give unhappy customers an easy way to reach you too, so issues can be resolved.",
      },
      {
        q: "Will it annoy my customers?",
        a: "One request and at most one reminder. That's it.",
      },
    ],
  },
  {
    slug: "ai-text-back",
    num: "04",
    title: "AI Missed-Call Text Back",
    tagline: "Never Lose a Lead Again",
    summary:
      "When a call goes unanswered, the caller gets a text within seconds. The AI answers common questions, collects the details, and books the appointment while you're on a job, with a customer, or asleep.",
    image: "/images/system-textback.webp",
    alt: "A phone lighting up with a text message while a tradesperson works under a sink",
    points: [
      "Instant missed-call text back",
      "Lead qualification",
      "24/7 response",
    ],
    metaTitle: "AI Missed-Call Text Back for Small Businesses | Local Cascade",
    metaDescription:
      "Every missed call gets an instant text. An AI assistant answers questions, qualifies the lead, and books the appointment 24/7. Part of the $297/mo Local Cascade system.",
    intro:
      "You can't answer every call when you're working. The people calling don't wait. The text-back makes sure a missed call is never a lost customer.",
    problem: {
      heading: "A missed call is usually a customer calling your competitor.",
      body: "People who reach voicemail rarely leave a message. They try the next business on the list. The first one to respond usually gets the job.",
    },
    features: [
      {
        title: "Instant text back",
        body: "Seconds after a missed call, the caller gets a friendly text from your business number.",
      },
      {
        title: "Answers common questions",
        body: "Hours, service area, pricing ranges, and what you do, answered from information you approve.",
      },
      {
        title: "Qualifies the lead",
        body: "Collects the job details and contact info, so you call back ready.",
      },
      {
        title: "Books appointments",
        body: "Offers open times and books directly, day or night.",
      },
      {
        title: "Hands off to you",
        body: "You get the full conversation and can take over at any point.",
      },
      {
        title: "Website chat too",
        body: "The same assistant can answer visitors on your website.",
      },
    ],
    steps: [
      {
        title: "Tell us how you work",
        body: "Services, hours, service area, and the questions you get most.",
      },
      {
        title: "We set up and test it",
        body: "Connected to your business number and calendar, tested before it goes live.",
      },
      {
        title: "It answers every missed call",
        body: "24/7, with every conversation sent to you.",
      },
    ],
    faqs: [
      {
        q: "Do I need a new phone number?",
        a: "Usually not. We connect to the number you already use, and we'll walk you through the options for your setup.",
      },
      {
        q: "Will customers know it's automated?",
        a: "The assistant is clear and friendly, and it never pretends to be a specific person on your team.",
      },
      {
        q: "What if it doesn't know an answer?",
        a: "It takes the details and tells the customer you'll follow up. You get notified right away.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find(s => s.slug === slug);
}
