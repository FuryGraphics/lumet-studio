import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { toast } from "sonner";

/**
 * Contact — clear "Book a call" section with contact form.
 * Editorial styling: hairlines, strict alignment, mono labels.
 * No boxed card — form lives directly in the grid.
 */
export default function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [form, setForm] = useState({ name: "", email: "", agency: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks — we'll be in touch within 24 hours.");
    setForm({ name: "", email: "", agency: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#FAFAF9] border-t border-[#E5E5E5]">
      <div ref={ref} className={`container ${isVisible ? "is-visible" : ""}`}>
        {/* Section header — left rail */}
        <div className="grid grid-cols-12 gap-4 mb-12 md:mb-16">
          <div className="col-span-12 md:col-span-2 flex items-center gap-3">
            <span className="font-mono-label text-[#A3A3A3]">06 / CONTACT</span>
          </div>
          <div className="hidden md:block col-span-10">
            <span className="block h-px w-full bg-[#E5E5E5]" />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 lg:gap-12">
          {/* Left — headline */}
          <div className="col-span-12 md:col-span-2 lg:col-span-4">
            <h2 className="lumet-display text-3xl md:text-5xl lg:text-6xl text-[#0D0D0D]">
              Let's talk
              <br />
              about your
              <br />
              <span className="text-[#1D4ED8]">workload.</span>
            </h2>
            <p className="lumet-body mt-8 text-lg text-[#525252] max-w-md">
              Tell us what you're handling in-house and what's slowing you down.
              We'll show you exactly how we'd take it off your plate.
            </p>

            <div className="mt-10 space-y-3">
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
                  <label className="font-mono-label text-[#737373] block mb-3">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent text-lg text-[#0D0D0D] focus:outline-none placeholder:text-[#D4D4D4]"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="border-b border-[#E5E5E5] p-4 md:p-6">
                  <label className="font-mono-label text-[#737373] block mb-3">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent text-lg text-[#0D0D0D] focus:outline-none placeholder:text-[#D4D4D4]"
                    placeholder="jane@agency.com"
                  />
                </div>
              </div>

              {/* Agency */}
              <div className="border-b border-[#E5E5E5] p-4 md:p-6">
                <label className="font-mono-label text-[#737373] block mb-3">
                  AGENCY / COMPANY
                </label>
                <input
                  type="text"
                  value={form.agency}
                  onChange={(e) => setForm({ ...form, agency: e.target.value })}
                  className="w-full bg-transparent text-lg text-[#0D0D0D] focus:outline-none placeholder:text-[#D4D4D4]"
                  placeholder="Your agency name"
                />
              </div>

              {/* Message */}
              <div className="border-b border-[#E5E5E5] p-4 md:p-6">
                <label className="font-mono-label text-[#737373] block mb-3">
                  WHAT DO YOU NEED HELP WITH?
                </label>
                <textarea
                  required
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent text-lg text-[#0D0D0D] focus:outline-none placeholder:text-[#D4D4D4] resize-none"
                  placeholder="GHL buildouts, website design, review funnels, ongoing backend support..."
                />
              </div>

              {/* Submit */}
              <div className="pt-6 md:pt-8">
                <button
                  type="submit"
                  className="lumet-cta inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#1D4ED8] hover:bg-[#1741B0] rounded-sm"
                >
                  Send message
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
