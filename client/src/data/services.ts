/**
 * Services for US law firms. Slugs stay as they are so existing URLs keep working.
 * The home page and /services read title, tagline, summary, and points from here.
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
    title: "Law firm websites",
    tagline: "A site that explains the practice and how to get in touch",
    summary:
      "A website for your firm, written around the practice areas and the cities you serve. It is meant to be read on a phone, and each page tells a person how to call, write, or send a message.",
    image: "/images/system-website.webp",
    alt: "A laptop on a wooden desk showing a website with a columned courthouse, beside a mug and a pen",
    points: ["Practice pages", "Phone-friendly", "Contact on every page"],
    metaTitle: "Law Firm Websites | Local Cascade",
    metaDescription:
      "Local Cascade builds websites for attorneys and law firms in the United States. The site explains the practice and gives people a clear way to contact the firm.",
    intro:
      "This is the website service from Local Cascade for attorneys and law firms in the United States. The site explains the practice and gives people a clear way to contact the firm.",
    problem: {
      heading: "A firm site that hides the practice does not help anyone.",
      body: "Many firm sites are slow on a phone, mix every practice onto one page, or leave the reader without a clear way to write or call. People leave, and the firm has little to show for the visit.",
    },
    features: [
      {
        title: "Written for the practice",
        body: "Pages describe the work the firm actually does and the places it serves. The firm reviews the words before they go live.",
      },
      {
        title: "A page for each practice area",
        body: "Family law, criminal defense, estate planning, and the rest can each have a page, so a reader can find the one that fits.",
      },
      {
        title: "Readable on a phone",
        body: "Most people look a firm up on a phone. The site is built to load quickly and to be read on a small screen.",
      },
      {
        title: "A clear way to make contact",
        body: "Call, write, or send a message from any page. The next step is on the screen, not buried in a menu.",
      },
      {
        title: "No result claims in the copy",
        body: "We do not write that the firm wins cases, is the top choice, or promises an outcome. You approve every page.",
      },
      {
        title: "Hosting and edits included",
        body: "Changes after launch, fixes, and routine updates are part of the plan.",
      },
    ],
    steps: [
      {
        title: "Tell us about the firm",
        body: "Practice areas, offices or cities, and the way you want people to get in touch.",
      },
      {
        title: "We write and build a draft",
        body: "You get a full draft to review. We change it from your notes.",
      },
      {
        title: "You approve it, then it goes live",
        body: "We aim to have the first version ready within seven days of receiving your information and your approval. It goes on your domain only after you say so.",
      },
    ],
    faqs: [
      {
        q: "Does the firm own the website?",
        a: "The domain, the words, and the firm's information stay yours. If you leave, we help you move them.",
      },
      {
        q: "Can we change the site after it is up?",
        a: "Yes. Edits are part of the plan. Ask for the change and we make it.",
      },
      {
        q: "We already have a website. Can you work with it?",
        a: "Usually we build a new one that is faster and easier to read, then point your current domain at it. We will say so on the call if your current site is better left as it is.",
      },
      {
        q: "Will the pages make claims about case results?",
        a: "No. We describe the practice in plain language. We do not add testimonials, verdicts, or promises about outcomes. The firm reviews the words before they are published.",
      },
    ],
  },
  {
    slug: "local-seo-pack",
    num: "02",
    title: "A law firm website for US attorneys",
    tagline: "An attorney website, with the Google listing kept up to date",
    summary:
      "Local Cascade builds a law firm website for attorneys and law firms in the United States. The attorney website explains the practice and how to get in touch, and the Google listing is kept up to date.",
    image: "/images/service-local-seo.webp",
    alt: "A person in a suit holding a phone with a map pin, standing in front of a columned stone building",
    points: ["Law firm website", "Attorney website", "Google listing"],
    metaTitle: "Law Firm Website for US Attorneys | Local Cascade",
    metaDescription:
      "Local Cascade builds a law firm website and an attorney website for US law firms, and keeps the Google listing up to date.",
    intro:
      "Local Cascade builds a law firm website for attorneys and law firms in the United States. The attorney website explains the practice and how to get in touch. Google listing upkeep is part of what the firm gets.",
    problem: {
      heading: "People cannot call a firm they cannot find or read.",
      body: "Many firm sites are hard to read on a phone, mix every practice onto one page, or leave out a way to call. A Google listing with an old number or old hours causes the same problem. The law firm website and the listing should say the same thing.",
    },
    features: [
      {
        title: "A law firm website",
        body: "Pages describe the work the firm does and the cities it serves. The firm reviews the words before they go live.",
      },
      {
        title: "An attorney website people can read",
        body: "The attorney website is built for a phone. Call, write, or send a message from any page.",
      },
      {
        title: "A page for each practice area",
        body: "Family law, criminal defense, estate planning, and the rest can each have a page, so a reader can find the one that fits.",
      },
      {
        title: "Google listing upkeep",
        body: "Name, address, phone, hours, and practice details on the firm's Google listing are checked and updated when they change.",
      },
      {
        title: "The same details on other sites",
        body: "Name, address, and phone are refreshed on other listing sites so they do not drift apart from the law firm website.",
      },
      {
        title: "No place in search promised",
        body: "We do not promise where the site or the listing will appear, or a number of calls, or a number of clients. You approve the public words.",
      },
    ],
    steps: [
      {
        title: "Tell us about the firm",
        body: "Practice areas, cities, office address, phone, hours, and how you want people to get in touch.",
      },
      {
        title: "We write a draft and update the listing",
        body: "You get a draft of the law firm website. We change it from your notes. The Google listing is updated from the same details.",
      },
      {
        title: "You approve it, then it goes live",
        body: "We aim to have the first version of the attorney website ready within seven days of your information and your approval. It goes on your domain only after you say so. Listing updates continue while the plan is active.",
      },
    ],
    faqs: [
      {
        q: "Who is the law firm website for?",
        a: "Attorneys and law firms in the United States. Local Cascade builds the site. We do not give legal advice, and a message to us does not create an attorney-client relationship.",
      },
      {
        q: "What is an attorney website here?",
        a: "It is the firm's public site: practice pages, a way to call or write, and words the firm has approved. Google listing upkeep is part of what the firm gets with it.",
      },
      {
        q: "Does the firm own the website?",
        a: "The domain, the words, and the firm's information stay yours. If you leave, we help you move them. The Google listing stays on the firm's account.",
      },
      {
        q: "Can we change the site after it is up?",
        a: "Yes. Edits are part of the plan. Ask for the change and we make it.",
      },
      {
        q: "Do you promise where the firm will show on Google?",
        a: "No. We build the law firm website and update the listing. We do not promise a position, a number of calls, or a number of clients.",
      },
      {
        q: "What happens if we stop?",
        a: "Site edits and listing updates stop when you cancel. The plan is month to month. The domain and the Google listing stay with the firm.",
      },
    ],
  },
  {
    slug: "review-funnel",
    num: "03",
    title: "Review requests for law firms",
    tagline: "A request after the matter, with a link to Google",
    summary:
      "After a matter closes, the firm can send a short request by text or email. The message links straight to the firm's Google review page. We do not pay for reviews or offer anything in return.",
    image: "/images/system-reviews.webp",
    alt: "A hand holding a phone that shows five gold stars, with law books and a scale in the background",
    points: ["After the matter", "Link to Google", "No payment for reviews"],
    metaTitle: "Review Requests for Law Firms | Local Cascade",
    metaDescription:
      "Local Cascade sends review requests for attorneys and law firms in the United States after a matter, by text or email, with a direct link to the firm's Google review page.",
    intro:
      "This is the review request service from Local Cascade for attorneys and law firms in the United States. After a matter, the firm can send a request with a direct link to its Google review page.",
    problem: {
      heading: "Clients rarely leave a review unless someone asks.",
      body: "People compare firms by the recent public comments they can find. A firm that never asks will usually have fewer comments, even when clients were satisfied. Asking has to stay honest.",
    },
    features: [
      {
        title: "A request after the matter",
        body: "A text and an email go out when the firm marks a matter closed, with one reminder if there is no reply.",
      },
      {
        title: "A direct link",
        body: "The message opens the firm's Google review page. The client does not have to search for the firm.",
      },
      {
        title: "A private note to the firm",
        body: "The same message lets an unhappy client write to the firm directly. It does not block them from posting a public review.",
      },
      {
        title: "Nothing offered in return",
        body: "We do not pay for reviews, give discounts, or offer gifts. Google's rules forbid that, and so does a careful reading of lawyer advertising rules.",
      },
      {
        title: "A simple record",
        body: "You can see which requests went out and which new public reviews arrived.",
      },
      {
        title: "The firm still replies",
        body: "We can draft a short public reply for you to approve. We do not invent facts about a case.",
      },
    ],
    steps: [
      {
        title: "Connect the Google listing",
        body: "We set the review link and write the message in the firm's voice. You approve the wording.",
      },
      {
        title: "Tell us when a matter closes",
        body: "Add the client's name and number, or connect a tool you already use, if that is appropriate for your ethics rules.",
      },
      {
        title: "The request goes out",
        body: "One message and at most one reminder. The firm can turn a request off for any matter.",
      },
    ],
    faqs: [
      {
        q: "Is a firm allowed to ask a client for a review?",
        a: "Asking for an honest review is generally allowed. Paying for a review, or offering a discount or gift for one, is not. We never do either. Your jurisdiction may have extra rules, and the firm should apply those.",
      },
      {
        q: "Can you hide a negative review?",
        a: "No. Every client can post a public review. We also give the client a way to write to the firm, so a problem can be heard. We do not filter out real criticism.",
      },
      {
        q: "Will clients get a string of messages?",
        a: "No. One request, and at most one reminder. Then it stops.",
      },
      {
        q: "Do you write fake reviews?",
        a: "No. We do not write reviews, buy them, or ask staff to post as clients. The request goes to the client, and the client decides.",
      },
    ],
  },
  {
    slug: "ai-text-back",
    num: "04",
    title: "Client intake for law firms",
    tagline: "A first reply when a call is missed or someone writes in",
    summary:
      "When a call is missed, or someone writes through the website, an automated reply asks for a name, a number, and a short note about the matter. It does not give legal advice. The conversation is passed to the firm.",
    image: "/images/system-textback.webp",
    alt: "A phone on a law office desk showing a text conversation, with a scale and law books behind it",
    points: ["Missed-call reply", "Website messages", "Passed to the firm"],
    metaTitle: "Client Intake for Law Firms | Local Cascade",
    metaDescription:
      "Local Cascade sets up a first reply for attorneys and law firms in the United States when a call is missed or someone writes through the site, then passes the conversation to the firm.",
    intro:
      "This is client intake support from Local Cascade for attorneys and law firms in the United States. When a call is missed or someone writes through the site, a first reply collects contact details and what the person needs, then passes the conversation to the firm.",
    problem: {
      heading: "A missed call often means the person calls the next firm.",
      body: "Lawyers are in court, in meetings, or with a client. People who reach voicemail often do not leave a message. A first reply does not take the matter. It keeps the contact details so the firm can decide.",
    },
    features: [
      {
        title: "A reply after a missed call",
        body: "Within a short time, the caller gets a text from the firm's number asking how to reach them.",
      },
      {
        title: "The same reply on the website",
        body: "A person who writes through the site gets the same questions, so the firm sees one kind of message.",
      },
      {
        title: "Only the facts you approved",
        body: "Hours, cities served, and what the firm handles come from a sheet you approve. The reply does not invent fees or outcomes.",
      },
      {
        title: "No legal advice",
        body: "The reply says it is an automated message from the firm. It asks for contact details and a short description. It does not say whether the person has a case.",
      },
      {
        title: "The firm takes over",
        body: "You get the full conversation and can reply yourself at any point. The assistant steps back when you do.",
      },
      {
        title: "No attorney-client relationship",
        body: "The message says that writing in does not mean the firm has agreed to represent the person. The firm decides that later.",
      },
    ],
    steps: [
      {
        title: "Tell us how the firm works",
        body: "Practice areas, hours, cities, and the questions people ask before you can call them back.",
      },
      {
        title: "We write the replies and test them",
        body: "You read every prompt. We connect the number you already use when that is possible, and we test before it is on.",
      },
      {
        title: "Messages come to the firm",
        body: "Missed calls and website messages are collected and sent to you, including outside office hours.",
      },
    ],
    faqs: [
      {
        q: "Is the reply legal advice?",
        a: "No. It collects a name, a way to call back, and a short description of the matter. It does not evaluate a case or tell the person what to do.",
      },
      {
        q: "Will people think they have hired the firm?",
        a: "The reply says it is automated and that sending it does not create an attorney-client relationship. The firm decides whether to take the matter.",
      },
      {
        q: "Do we need a new phone number?",
        a: "Usually no. We try to use the number the firm already publishes. We will tell you if your phone setup needs a different step.",
      },
      {
        q: "What if the reply does not know the answer?",
        a: "It says so, takes the contact details, and tells the person the firm will follow up. You are notified.",
      },
      {
        q: "Can it discuss fees or results?",
        a: "Only if you wrote that language and approved it. By default it does not quote a fee and it does not talk about outcomes.",
      },
    ],
  },
];

export function getService(slug: string | undefined) {
  return services.find(service => service.slug === slug);
}
