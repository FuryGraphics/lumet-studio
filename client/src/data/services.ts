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
    title: "Local search for law firms",
    tagline: "The firm's Google listing and other listings, kept accurate",
    summary:
      "We look after the firm's listing on Google and the same details on other listing sites: name, address, phone, hours, and practice areas. The work is ongoing, because listings go stale when nobody updates them.",
    image: "/images/service-local-seo.webp",
    alt: "A person in a suit holding a phone with a map pin, standing in front of a columned stone building",
    points: ["Google listing", "Other listing sites", "Monthly updates"],
    metaTitle: "Local Search for Law Firms | Local Cascade",
    metaDescription:
      "Local Cascade looks after Google listings and other listings for attorneys and law firms in the United States, so the firm's name, address, and practice details stay accurate.",
    intro:
      "This is local search work from Local Cascade for attorneys and law firms in the United States. We keep the firm's name, address, and practice details accurate on Google and on other listing sites.",
    problem: {
      heading: "A listing that was set up once slowly becomes wrong.",
      body: "Hours change, a lawyer joins or leaves, and a practice area is added. If those details differ from site to site, people call the wrong number or arrive at an old address.",
    },
    features: [
      {
        title: "The Google listing",
        body: "Categories, services, description, hours, and photos, checked against what the firm actually offers.",
      },
      {
        title: "The same details elsewhere",
        body: "Name, address, and phone are sent to other listing sites and refreshed so they do not drift apart.",
      },
      {
        title: "What people search for",
        body: "We look at the words people use when they look for a lawyer in your city, and we use those words in the listing where they fit the practice.",
      },
      {
        title: "Posts on the listing",
        body: "A simple monthly note on the Google listing, written for the firm and approved in the same way as the website.",
      },
      {
        title: "A monthly note on what changed",
        body: "You get a short report of what was updated. It is a record of the work, not a promise about where the listing will appear.",
      },
      {
        title: "No position promised",
        body: "Search engines decide what to show. We do not promise a place in the results, a number of calls, or a number of clients.",
      },
    ],
    steps: [
      {
        title: "A short set of questions",
        body: "Practice areas, office address, phone, and hours. That is the part that needs you.",
      },
      {
        title: "We correct the listings",
        body: "The Google listing is updated first, then the same details go out to the other sites.",
      },
      {
        title: "We keep them current",
        body: "Each month we refresh the details and send you a note on what changed.",
      },
    ],
    faqs: [
      {
        q: "Why is this monthly if the listing can be filled in once?",
        a: "Because the details change, and sites rewrite how they want a listing formatted. A listing that nobody touches tends to go out of date.",
      },
      {
        q: "Can the firm do this itself?",
        a: "Yes, if someone has the time each month. Some listing sites do not offer a way for the firm to edit the record directly. Inconsistent details are the problem we are there to prevent.",
      },
      {
        q: "We only care about Google. Do the other sites matter?",
        a: "Google compares your details with other sites. When the name, address, and phone match, the listing is easier for Google to trust. We still do not promise where it will show.",
      },
      {
        q: "Do you promise a place in Google's results?",
        a: "No. We update the listings and tell you what we changed. We do not promise a position, a number of calls, or a number of clients.",
      },
      {
        q: "What happens if we stop?",
        a: "The plan is month to month. Updates stop when you cancel. The listing stays on the firm's Google account. Over time, details can go stale again if nobody else updates them.",
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
