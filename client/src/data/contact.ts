/**
 * Contact wiring, shared by the contact section and the chat widget so both
 * always post to the same place.
 *
 * FORMSPREE_ID is the hashid from the form's endpoint in the Formspree
 * dashboard (https://formspree.io/f/<id>). Change it here and both surfaces
 * follow.
 *
 * Checked 2026-09-20: posting to the id below returns 404 FORM_NOT_FOUND, so
 * submissions are not reaching anyone. Replace it with a live form id from the
 * Formspree account that owns risewithlocal.com, then submit once through the
 * site to confirm the email arrives.
 */
export const FORMSPREE_ID = "mqerlrjr";

export const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`;

/** Where enquiries go if a submission fails, so a lead is never lost in a
 *  toast message. */
export const CONTACT_EMAIL = "hello@risewithlocal.com";

/** The questions, asked identically by the form and the chat widget. The
 *  `name` values are the field names that arrive in the email. */
export const questions = [
  {
    name: "name",
    label: "Your name",
    placeholder: "Jane Doe",
    type: "text",
    required: true,
    ask: "Hi. What's your name?",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "jane@yourbusiness.com",
    type: "email",
    required: true,
    ask: "Thanks{first}. What email should we reply to?",
  },
  {
    name: "phone",
    label: "Phone",
    placeholder: "(555) 123-4567",
    type: "tel",
    required: false,
    ask: "A phone number, if you'd rather we call? You can skip this.",
  },
  {
    name: "business",
    label: "Business name",
    placeholder: "Doe Plumbing Co.",
    type: "text",
    required: false,
    ask: "What's the business called?",
  },
  {
    name: "message",
    label: "What you do and where",
    placeholder: "Residential plumbing, Dallas. Most jobs come from referrals.",
    type: "textarea",
    required: true,
    ask: "Last one: what do you do, and where? A line is plenty.",
  },
] as const;

export type QuestionName = (typeof questions)[number]["name"];
