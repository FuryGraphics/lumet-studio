import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { toast } from "sonner";

/**
 * Contact — editorial form wired to Formspree (endpoint: mqerlrjr).
 * Hairline fields, mono labels, no boxed card.
 * Responsive: fluid font sizing, mobile-optimized form layout.
 */
const FORMSPREE_ID = "mqerlrjr";

export default function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [state, handleSubmit] = useForm(FORMSPREE_ID);
  const [form, setForm] = useState({ name: "", email: "", agency: "", message: "" });

  if (state.succeeded) {
    toast.success("Thanks — we'll be in touch within 24 hours.");
  }

  const handleChange = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [field]: e.target.value });
  };

  if (state.succeeded) {
    return (
      <section id="contact" className="py-16 md:py-32 bg-[#FAFAF9] border-t border-[#E5E5E5]">
        <div ref={ref} className={`container ${isVisible ? "is-visible" : ""}`}>
          <div className="grid grid-cols-12 gap-4 mb-8 md:mb-16">
            <div className="col-span-12 md:col-span-2 flex items-center gap-3">
              <span className="font-mono-label text-[#A3A3A3]">06 / CONTACT</span>
            </div>
            <div className="hidden md:block col-span-10">
              <span className="block h-px w-full bg-[#E5E5E5]" />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 lg:gap-12">
            <div className="col-span-12 md:col-span-2 lg:col-span-4">
              <h2
                className="lumet-display text-[#0D0D0D]"
                style={{ fontSize: "clamp(1.75rem, 5vw, 3.75rem)" }}
              >
                Message
                <br />
                received.
              </h2>
              <p className="lumet-body mt-6 md:mt-8 text-base md:text-lg text-[#525252] max-w-md">
                Thanks for reaching out. We'll review your message and get back
                to you within 24 hours.
              </p>
              <button
                onClick={() => {
                  setForm({ name: "", email: "", agency: "", message: "" });
                  window.location.hash = "contact";
                  window.location.reload();
                }}
                className="lumet-cta mt-6 md:mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#1D4ED8] border border-[#1D4ED8] hover:bg-[#1D4ED8] hover:text-white rounded-sm"
              >
                Send another message
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 md:py-32 bg-[#FAFAF9] border-t border-[#E5E5E5]">
      <div ref={ref} className={`container ${isVisible ? "is-visible" : ""}`}>
        {/* Section header — left rail */}
        <div className="grid grid-cols-12 gap-4 mb-8 md:mb-16">
          <div className="col-span-12 md:col-span-2 flex items-center gap-3">
            <span className="font-mono-label text-[#A3A3A3]">06 / CONTACT</span>
          </div>
          <div className="hidden md:block col-span-10">
            <span className="block h-px w-full bg-[#E5E5E5]" />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 lg:gap-12">
          {/* Left — headline */}
          <div className="col-span-12 md:col-span-2 lg:col-span-4 mb-6 md:mb-0">
            <h2
              className="lumet-display text-[#0D0D0D]"
              style={{ fontSize: "clamp(1.75rem, 5vw, 3.75rem)" }}
            >
              Let's talk
              <br />
              about your
              <br />
              <span className="text-[#1D4ED8]">workload.</span>
            </h2>
            <p className="lumet-body mt-6 md:mt-8 text-base md:text-lg text-[#525252] max-w-md">
              Tell us what you're handling in-house and what's slowing you down.
              We'll show you exactly how we'd take it off your plate.
            </p>

            <div className="mt-8 md:mt-10 space-y-3">
              <a
                href="mailto:hello@lumetstudios.com"
                className="lumet-link block text-base font-medium text-[#0D0D0D]"
              >
                hello@lumetstudios.com
              </a>
              <p className="font-mono-label text-[#A3A3A3]">
                RESPONSE WITHIN 24H · MON–FRI
              </p>
            </div>
          </div>

          {/* Right — form, editorial style */}
          <div className="col-span-12 md:col-span-10 lg:col-span-7 lg:col-start-6">
            <form onSubmit={handleSubmit} className="space-y-0">
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-[#E5E5E5]">
                <div className="border-b border-[#E5E5E5] sm:border-r sm:border-[#E5E5E5] p-4 md:p-6">
                  <label className="font-mono-label text-[#737373] block mb-2 md:mb-3">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange("name")}
                    className="w-full bg-transparent text-base md:text-lg text-[#0D0D0D] focus:outline-none placeholder:text-[#D4D4D4]"
                    placeholder="Jane Doe"
                  />
                  <ValidationError
                    field="name"
                    errors={state.errors}
                    className="mt-2 text-sm text-red-600"
                  />
                </div>
                <div className="border-b border-[#E5E5E5] p-4 md:p-6">
                  <label className="font-mono-label text-[#737373] block mb-2 md:mb-3">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange("email")}
                    className="w-full bg-transparent text-base md:text-lg text-[#0D0D0D] focus:outline-none placeholder:text-[#D4D4D4]"
                    placeholder="jane@agency.com"
                  />
                  <ValidationError
                    field="email"
                    errors={state.errors}
                    className="mt-2 text-sm text-red-600"
                  />
                </div>
              </div>

              {/* Agency */}
              <div className="border-b border-[#E5E5E5] p-4 md:p-6">
                <label className="font-mono-label text-[#737373] block mb-2 md:mb-3">
                  AGENCY / COMPANY
                </label>
                <input
                  type="text"
                  name="agency"
                  value={form.agency}
                  onChange={handleChange("agency")}
                  className="w-full bg-transparent text-base md:text-lg text-[#0D0D0D] focus:outline-none placeholder:text-[#D4D4D4]"
                  placeholder="Your agency name"
                />
                <ValidationError
                  field="agency"
                  errors={state.errors}
                  className="mt-2 text-sm text-red-600"
                />
              </div>

              {/* Message */}
              <div className="border-b border-[#E5E5E5] p-4 md:p-6">
                <label className="font-mono-label text-[#737373] block mb-2 md:mb-3">
                  WHAT DO YOU NEED HELP WITH?
                </label>
                <textarea
                  required
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange("message")}
                  className="w-full bg-transparent text-base md:text-lg text-[#0D0D0D] focus:outline-none placeholder:text-[#D4D4D4] resize-none"
                  placeholder="GHL buildouts, website design, review funnels, ongoing backend support..."
                />
                <ValidationError
                  field="message"
                  errors={state.errors}
                  className="mt-2 text-sm text-red-600"
                />
              </div>

              {/* Submit */}
              <div className="pt-5 md:pt-8">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="lumet-cta inline-flex items-center gap-2 px-6 md:px-8 py-3.5 md:py-4 text-base font-semibold text-white bg-[#1D4ED8] hover:bg-[#1741B0] rounded-sm disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto justify-center sm:justify-start"
                >
                  {state.submitting ? "Sending..." : "Send message"}
                  {!state.submitting && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                    </svg>
                  )}
                </button>
                <ValidationError errors={state.errors} className="mt-4 block text-sm text-red-600" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
