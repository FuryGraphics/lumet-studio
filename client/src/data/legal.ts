/**
 * Legal pages - privacy policy and terms, as plain data.
 *
 * Written to describe what the site and the business actually do, so keep it
 * true when either changes: if analytics, cookies, or another processor are
 * ever added, the privacy page has to say so. LAST_UPDATED is shown to
 * visitors; move it whenever the wording changes.
 */
export const LAST_UPDATED = "9 October 2026";

export type LegalSection = {
  heading: string;
  /** Paragraphs; a nested array renders as a bulleted list. */
  body: (string | string[])[];
};

export const privacy: LegalSection[] = [
  {
    heading: "Who we are",
    body: [
      "Local Cascade builds and runs marketing systems for local businesses: websites, Google Business Profile optimization, review funnels, and AI missed-call text back.",
      "Local Cascade is a trading name. The business is operated from India and serves businesses primarily in the United States. For anything in this policy, write to hello@localcascade.com.",
    ],
  },
  {
    heading: "What we collect",
    body: [
      "Information you send us. When you fill in the contact form, use the chat widget, or book a call, we receive what you type: your name, email address, phone number, business name, what your business does and where, your preferred time for a call, and which plan interests you.",
      "Link tags. If you reach our booking page through a link that carries campaign tags (utm_source and similar), those tags arrive with your enquiry so we know which link you came from.",
      "Payment information. Subscriptions are taken through PayPal. PayPal handles the payment and we never see your card or bank details. We receive the subscription identifier, the plan, and whether it is active.",
      "Information for running your service. If you become a customer, we hold what we need to do the work: business details, access you grant us to your Google Business Profile or website, photos and content you give us, and the reviews and ranking reports the service produces.",
      "Technical information. Our hosting provider records standard server logs, including IP addresses and which pages were requested, to serve the site and keep it secure.",
    ],
  },
  {
    heading: "What we do not do",
    body: [
      "We do not run analytics, advertising pixels, or tracking of any kind on this site, and we set no tracking cookies.",
      "The site stores one display preference in your browser. It stays on your device and is never sent to us.",
      "We do not sell your personal information, and we do not share it for advertising.",
    ],
  },
  {
    heading: "Who else handles your information",
    body: [
      "We use a small number of providers to run the business. Each receives only what it needs:",
      [
        "Formspree, which delivers form and chat submissions to our inbox",
        "PayPal, which processes subscription payments",
        "Vercel, which hosts this website",
        "Google, which serves the fonts this site uses, and which operates Google Business Profile",
        "The listings and reviews platform we use to deliver the Local SEO Pack",
      ],
      "These providers operate in the United States and elsewhere, and we work from India, so your information may be processed outside your country.",
    ],
  },
  {
    heading: "Why we use it",
    body: [
      "To answer your enquiry and arrange a call. To provide, support, and improve the services you buy. To take payment and keep accounting records. To meet legal obligations.",
      "We contact you about your enquiry or your service. We do not add you to a marketing list without asking.",
    ],
  },
  {
    heading: "How long we keep it",
    body: [
      "Enquiries that do not become customers are kept while they are still relevant, and no longer than two years.",
      "Customer records are kept for as long as you are a customer, and afterwards for as long as tax and accounting rules require.",
    ],
  },
  {
    heading: "Your choices",
    body: [
      "You can ask us for a copy of what we hold about you, ask us to correct it, or ask us to delete it. Email hello@localcascade.com and we will respond within 30 days.",
      "If you are in California, you have the right to know what we collect, to ask for deletion, and not to be discriminated against for asking. We do not sell personal information, so there is nothing to opt out of.",
      "You can tell us to stop emailing you at any time, and we will.",
    ],
  },
  {
    heading: "Security",
    body: [
      "We limit who can reach your information and use reputable providers to store and transmit it. No website or service can promise perfect security, and we do not claim to.",
    ],
  },
  {
    heading: "Children",
    body: [
      "This site and these services are for businesses. They are not directed at children, and we do not knowingly collect information from anyone under 18.",
    ],
  },
  {
    heading: "Changes",
    body: [
      "If this policy changes, the date at the top changes with it. Material changes that affect customers will be sent by email.",
    ],
  },
];

export const terms: LegalSection[] = [
  {
    heading: "These terms",
    body: [
      "These terms apply when you buy a plan from Local Cascade or use this website. Buying a plan means you accept them.",
      "Local Cascade is a trading name. The business is operated from India and serves businesses primarily in the United States.",
    ],
  },
  {
    heading: "What we provide",
    body: [
      "We provide the plan you buy, as described on this site at the time you buy it: the Growth System, the Local SEO Pack, or the Complete Pack.",
      "Work begins once your first payment clears and you have given us what we need. We aim to have a new website live within seven days of having your information and approvals. Ongoing work, including profile optimization, content, and ranking scans, continues each month while your subscription is active.",
    ],
  },
  {
    heading: "What we need from you",
    body: [
      "To do the work we need you to give us accurate business information, the access we ask for (such as your Google Business Profile or your domain), and timely answers and approvals.",
      "If we cannot get what we need, the work waits. Your subscription still runs, because we hold the capacity for you.",
      "You confirm that anything you give us to publish, including photos, logos, and text, is yours to use.",
    ],
  },
  {
    heading: "Price, billing, and cancellation",
    body: [
      "Plans are billed monthly in advance through PayPal, at the price shown when you subscribe. There is no setup fee and no minimum term.",
      "You can cancel at any time, from PayPal or by emailing hello@localcascade.com. Cancelling stops the next payment. The month you have already paid for is not refunded, and your service runs to the end of it.",
      "If a payment fails, we will tell you and may pause the service until it is settled.",
      "If we change the price of your plan, we will tell you at least 30 days beforehand, and you can cancel before it takes effect.",
    ],
  },
  {
    heading: "What we do not promise",
    body: [
      "We do not guarantee any particular Google ranking, position on the map, number of calls, reviews, or customers. Nobody can: Google decides what it shows, and your market and competitors change.",
      "What we do promise is the work itself, done properly and on schedule, with monthly ranking scans so you can see where you stand.",
      "Any example results shown on this site come from businesses using the same platform we run this service on, not from our own client list, and are labelled as such. They are not a prediction of your results.",
    ],
  },
  {
    heading: "Reviews",
    body: [
      "The review funnel asks your customers for honest reviews. We will not buy reviews, write fake ones, or filter out genuine negative ones, and we cannot do so on request. That protects your Google profile: those practices breach Google's policies and can get a profile suspended.",
    ],
  },
  {
    heading: "Who owns what",
    body: [
      "Your domain name, your business information, your content, your Google Business Profile, and the reviews your customers leave are yours, during the service and after it.",
      "The website we build is yours to keep using while you are subscribed. If you leave, we will help you move your domain and content to another provider. The underlying templates, code, and systems we build with remain ours.",
    ],
  },
  {
    heading: "Third-party platforms",
    body: [
      "Parts of the service depend on platforms we do not control, including Google, PayPal, and the listings platform behind the Local SEO Pack. Your use of them is subject to their own terms.",
      "We are not responsible for their decisions, such as a Google Business Profile being suspended or a listing being rejected, though we will help you sort it out.",
    ],
  },
  {
    heading: "Acceptable use",
    body: [
      "The services are for lawful businesses. We will not work on anything illegal, deceptive, or designed to mislead customers, and we may stop work and cancel the service if we find that is what it is.",
    ],
  },
  {
    heading: "Liability",
    body: [
      "If something goes wrong and we are at fault, our total liability is limited to the fees you paid us in the three months before the problem arose.",
      "We are not liable for indirect or consequential losses, including lost profit or lost business. Nothing here limits liability that cannot be limited by law.",
    ],
  },
  {
    heading: "Ending the service",
    body: [
      "You can cancel at any time, as set out above. We may end a service for non-payment, for abusive behaviour, or for use that breaches these terms, and we will tell you why.",
    ],
  },
  {
    heading: "Changes to these terms",
    body: [
      "If these terms change, the date at the top changes with it. If a change materially affects a customer, we will send it by email before it takes effect.",
    ],
  },
  {
    heading: "Governing law",
    body: [
      "These terms are governed by the laws of India, and the courts of India have jurisdiction over any dispute.",
      "Before anything formal, write to hello@localcascade.com. Most things are settled that way.",
    ],
  },
];
