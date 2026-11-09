import { CONTACT_EMAIL, SITE_DESCRIPTION } from "@/data/site";

/**
 * Legal pages - privacy policy and terms, as plain data.
 *
 * Written to describe what the site and the business actually do, so keep it
 * true when either changes: if analytics, cookies, or another processor are
 * ever added, the privacy page has to say so. LAST_UPDATED is shown to
 * visitors; move it whenever the wording changes.
 */
export const LAST_UPDATED = "9 November 2026";

export type LegalSection = {
  heading: string;
  /** Paragraphs; a nested array renders as a bulleted list. */
  body: (string | string[])[];
};

export const privacy: LegalSection[] = [
  {
    heading: "Who we are",
    body: [
      SITE_DESCRIPTION,
      `Local Cascade is a trading name. The business is operated from India and serves attorneys and law firms in the United States. For anything in this policy, write to ${CONTACT_EMAIL}.`,
    ],
  },
  {
    heading: "What we collect",
    body: [
      "Information you send us. When you fill in the contact form, use the chat widget, book a call, or submit one of our lead forms on Facebook or Instagram, we receive what you type: your name, email address, phone number, business name, what your business does and where, your preferred time for a call, and which plan interests you.",
      "Lead forms on Facebook and Instagram. If you submit one of our forms there, Meta passes us the answers you gave and the contact details Meta filled in for you from your profile. Meta also handles that information under its own privacy policy, and you can review or delete your submissions in your Meta account settings.",
      "Link tags. If you reach our booking page through a link that carries campaign tags (utm_source and similar), those tags arrive with your enquiry so we know which link you came from.",
      "Booking a call. Our call booking form is an embedded scheduling tool. What you enter there, including the time you pick, reaches us through that provider.",
      "Payment information. We take no card or bank details on this website. Billing is arranged with you directly once you decide to go ahead.",
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
        "The scheduling platform behind our call booking form",
        "Vercel, which hosts this website",
        "Google, which serves the fonts this site uses, and which operates Google Business Profile",
        "Meta, which hosts the lead forms we run on Facebook and Instagram and passes us their answers",
        "The listings platform we use to update law firm listings",
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
      `You can ask us for a copy of what we hold about you, ask us to correct it, or ask us to delete it. Email ${CONTACT_EMAIL} and we will respond within 30 days.`,
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
      "This site and these services are for law firms. They are not directed at children, and we do not knowingly collect information from anyone under 18.",
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
      "Local Cascade is a trading name. The business is operated from India and serves attorneys and law firms in the United States.",
    ],
  },
  {
    heading: "What we provide",
    body: [
      "We provide the plan you buy, as described on this site at the time you buy it.",
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
      "The plan is billed monthly in advance, at the fee agreed with you before you start. There is no setup fee and no minimum term. We set billing up with you directly and tell you the method before you pay anything.",
      `You can cancel at any time by emailing ${CONTACT_EMAIL}. Cancelling stops the next payment. The month you have already paid for is not refunded, and your service runs to the end of it.`,
      "If a payment fails, we will tell you and may pause the service until it is settled.",
      "If we change the fee for your plan, we will tell you at least 30 days beforehand, and you can cancel before it takes effect.",
    ],
  },
  {
    heading: "What we do not promise",
    body: [
      "We do not promise any particular placement in search results, number of calls, reviews, or clients. Search engines decide what they show, and each market is different.",
      "What we agree to do is the work itself: the website, the listings, the review requests, and the intake replies, carried out with reasonable care.",
      "We do not publish client results or testimonials. Work for one firm is not a prediction for another.",
    ],
  },
  {
    heading: "Reviews",
    body: [
      "Review requests ask clients for honest reviews. We will not buy reviews, write fake ones, or filter out genuine negative ones, and we cannot do so on request. Those practices breach Google's policies and can get a profile suspended.",
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
      "Parts of the service depend on platforms we do not control, including Google, the listings platform behind the Google Business Profile work, and the scheduling platform behind our booking form. Your use of them is subject to their own terms.",
      "We are not responsible for their decisions, such as a Google Business Profile being suspended or a listing being rejected, though we will help you sort it out.",
    ],
  },
  {
    heading: "Acceptable use",
    body: [
      "The services are for law firms and are offered for lawful use. We will not work on anything illegal, deceptive, or designed to mislead people, and we may stop work and cancel the service if we find that is what it is.",
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
      `Before anything formal, write to ${CONTACT_EMAIL}. Most things are settled that way.`,
    ],
  },
];
