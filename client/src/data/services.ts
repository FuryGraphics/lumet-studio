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
  /** Page-only content below. */
  metaTitle: string;
  metaDescription: string;
  intro: string;
  problem: { heading: string; body: string };
  features: { title: string; body: string }[];
  steps: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
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
    metaTitle: "Websites for Local Businesses | Lumet Studios",
    metaDescription:
      "A custom, fast, mobile-first website built to turn visitors into calls and bookings. Designed, written, hosted, and maintained for you. Part of the $297/mo Lumet system.",
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
    slug: "local-seo",
    num: "02",
    title: "Local SEO",
    tagline: "Show Up When Customers Search Nearby",
    summary:
      "The groundwork that helps you appear when people nearby search for what you do. Your Google Business Profile, site structure, local pages, and business listings, set up properly and kept consistent.",
    image: "/images/service-local-seo.webp",
    alt: "A person on a city sidewalk looking at local search results on a phone map",
    points: [
      "Google Business Profile",
      "Local service pages",
      "Listing consistency",
    ],
    metaTitle: "Local SEO for Small Businesses | Lumet Studios",
    metaDescription:
      "Local SEO for service businesses: Google Business Profile optimization, local service pages, on-page SEO, and consistent listings. Included in the $297/mo Lumet system.",
    intro:
      "When someone nearby searches for what you do, the businesses at the top of Google get the calls. Local SEO is the work that puts you in that list and keeps you there.",
    problem: {
      heading: "If they can't find you, they call someone else.",
      body: "An incomplete Google Business Profile, inconsistent business details across the web, and a site Google can't read are the most common reasons good local businesses stay invisible.",
    },
    features: [
      {
        title: "Google Business Profile optimization",
        body: "Categories, services, hours, photos, and description set up completely and accurately.",
      },
      {
        title: "Local service pages",
        body: "Pages for your services and the areas you cover, so you're relevant to what people actually search.",
      },
      {
        title: "On-page SEO",
        body: "Titles, headings, structured data, and internal links done properly on every page of your site.",
      },
      {
        title: "Consistent business listings",
        body: "Your name, address, and phone number kept identical across the directories that matter.",
      },
      {
        title: "Reviews that feed rankings",
        body: "Fresh Google reviews from the review funnel are a local ranking signal, and they work together.",
      },
      {
        title: "Plain-English reporting",
        body: "See calls, visits, and how customers find you, without the jargon.",
      },
    ],
    steps: [
      {
        title: "Audit where you stand",
        body: "Your profile, your listings, and what shows up when customers search.",
      },
      {
        title: "Fix the foundation",
        body: "Profile, site structure, service pages, and listing details, done right.",
      },
      {
        title: "Keep it working",
        body: "Ongoing updates and new reviews keep your presence active and accurate.",
      },
    ],
    faqs: [
      {
        q: "How long does local SEO take to work?",
        a: "Foundational fixes take effect as Google recrawls, which often takes weeks. Competitive markets take longer. Anyone promising the #1 spot by a date is guessing.",
      },
      {
        q: "Do you guarantee rankings?",
        a: "No. Nobody controls Google's results. We do the work that consistently improves local visibility and show you what changes.",
      },
      {
        q: "Do I need a physical location?",
        a: "No. Service-area businesses that travel to customers can rank locally too. The setup is slightly different, and we handle it.",
      },
    ],
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
    metaTitle: "Google Review Funnel for Local Businesses | Lumet Studios",
    metaDescription:
      "Automatically ask every customer for a Google review by text and email, and send them straight to your profile. Part of the $297/mo Lumet system.",
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
    metaTitle: "AI Missed-Call Text Back for Small Businesses | Lumet Studios",
    metaDescription:
      "Every missed call gets an instant text. An AI assistant answers questions, qualifies the lead, and books the appointment 24/7. Part of the $297/mo Lumet system.",
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
