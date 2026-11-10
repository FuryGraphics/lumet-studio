import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { CONTACT_EMAIL, FORMSPREE_ENDPOINT, FORMSPREE_ID } from "@/data/contact";

/**
 * Compact inquiry form for the homepage hero.
 * Same Formspree form and useForm handler as components/Contact.tsx.
 */
const field =
  "w-full bg-transparent text-base text-[#0D0D0D] focus:outline-none placeholder:text-[#D4D4D4]";
const labelClass = "font-mono-label text-[#737373] block mb-2";

export default function HeroForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);
  const [sent, setSent] = useState({ name: "", email: "" });

  if (state.succeeded) {
    return (
      <div className="border border-[#E5E5E5] bg-white p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0D0D0D]">
          Message received.
        </h2>
        <p className="lc-body mt-4 text-base text-[#525252]">
          Thanks for writing{sent.name ? `, ${sent.name.split(" ")[0]}` : ""}.
          We will read what you sent and reply within one business day
          {sent.email ? ` at ${sent.email}` : ""}.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-[#E5E5E5] bg-white p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#0D0D0D]">
        Tell us about your firm
      </h2>
      <p className="lc-body mt-3 text-sm md:text-base text-[#525252]">
        Name, firm, and email. We reply within one business day.
      </p>

      <form
        onSubmit={handleSubmit}
        action={FORMSPREE_ENDPOINT}
        method="POST"
        className="mt-6"
      >
        <input type="hidden" name="source" value="Homepage" />

        <div className="border-t border-[#E5E5E5] py-4">
          <label htmlFor="hero-name" className={labelClass}>
            Your name
          </label>
          <input
            id="hero-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={field}
            placeholder="Jane Doe"
            onChange={e => setSent(s => ({ ...s, name: e.target.value }))}
          />
          <ValidationError
            field="name"
            errors={state.errors}
            className="mt-2 block text-sm text-red-600"
          />
        </div>

        <div className="border-t border-[#E5E5E5] py-4">
          <label htmlFor="hero-firm" className={labelClass}>
            Firm name
          </label>
          <input
            id="hero-firm"
            name="business"
            type="text"
            required
            autoComplete="organization"
            className={field}
            placeholder="Example Law, LLC"
          />
          <ValidationError
            field="business"
            errors={state.errors}
            className="mt-2 block text-sm text-red-600"
          />
        </div>

        <div className="border-t border-[#E5E5E5] py-4">
          <label htmlFor="hero-email" className={labelClass}>
            Email
          </label>
          <input
            id="hero-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={field}
            placeholder="jane@examplelaw.com"
            onChange={e => setSent(s => ({ ...s, email: e.target.value }))}
          />
          <ValidationError
            field="email"
            errors={state.errors}
            className="mt-2 block text-sm text-red-600"
          />
        </div>

        <div className="border-t border-[#E5E5E5] py-4">
          <label htmlFor="hero-phone" className={labelClass}>
            Phone
          </label>
          <input
            id="hero-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={field}
            placeholder="(555) 123-4567"
          />
          <ValidationError
            field="phone"
            errors={state.errors}
            className="mt-2 block text-sm text-red-600"
          />
        </div>

        <div className="border-t border-[#E5E5E5] py-4">
          <label htmlFor="hero-message" className={labelClass}>
            Message
          </label>
          <textarea
            id="hero-message"
            name="message"
            rows={3}
            className={`${field} resize-none`}
            placeholder="Family law firm in Columbus, Ohio."
          />
          <ValidationError
            field="message"
            errors={state.errors}
            className="mt-2 block text-sm text-red-600"
          />
        </div>

        <div className="border-t border-[#E5E5E5] pt-5">
          <button
            type="submit"
            disabled={state.submitting}
            className="lc-cta inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[#004AAD] hover:bg-[#003A87] rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.submitting ? "Sending..." : "Send message"}
          </button>
          <ValidationError
            errors={state.errors}
            className="mt-4 block text-sm text-red-600"
          />
          {state.errors && (
            <p className="lc-body mt-3 text-sm text-[#525252]">
              If that keeps failing, email us at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="lc-link font-medium text-[#004AAD]"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
