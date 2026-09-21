import { useEffect, useMemo, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { CONTACT_EMAIL, FORMSPREE_ID } from "@/data/contact";
import { plans } from "@/data/plans";
import { usePageMeta } from "@/hooks/usePageMeta";

/**
 * Book - /book, a standalone page for booking a call.
 *
 * Unlisted on purpose: it is for links you send out (ads, email, DMs), not for
 * browsing. Nothing on the site links here, it is not in the sitemap, and it
 * is marked noindex twice over: a robots meta set while the page is mounted,
 * and an X-Robots-Tag header on the route in vercel.json, so search engines
 * skip it whether or not they run the page's JavaScript. It deliberately has
 * no site navigation either, so a visitor's only move is the form.
 *
 * Submissions go to the same Formspree form as the contact section, tagged
 * source "Booking page" so they read differently in the inbox. Any utm_*
 * parameters on the link are carried into the submission, so you can see
 * which link a lead came from.
 */
const TIMES = [
  "Morning (9am to 12pm)",
  "Afternoon (12pm to 5pm)",
  "Evening (5pm to 7pm)",
  "Any time",
];

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];

/** Keep search engines off this page while it is on screen, then put back
 *  whatever the rest of the site uses. */
function useNoIndex() {
  useEffect(() => {
    let tag = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const created = !tag;
    const previous = tag?.getAttribute("content") ?? null;
    if (!tag) {
      tag = document.createElement("meta");
      tag.name = "robots";
      document.head.appendChild(tag);
    }
    tag.content = "noindex, nofollow";
    return () => {
      if (created) tag?.remove();
      else if (previous !== null) tag?.setAttribute("content", previous);
    };
  }, []);
}

const input =
  "w-full bg-transparent text-base md:text-lg text-[#0D0D0D] focus:outline-none placeholder:text-[#D4D4D4]";
const label = "font-mono-label text-[#737373] block mb-2 md:mb-3";
const cell = "border-b border-[#E5E5E5] p-4 md:p-6";

export default function Book() {
  usePageMeta(
    "Book a call | Local Cascade",
    "Book a free call with Local Cascade about getting more customers from Google.",
    "/book"
  );
  useNoIndex();

  const [state, handleSubmit] = useForm(FORMSPREE_ID);
  const [name, setName] = useState("");

  // Captured once from the link the visitor arrived on
  const utm = useMemo(() => {
    const q = new URLSearchParams(window.location.search);
    return UTM_KEYS.map(k => [k, q.get(k)] as const).filter(([, v]) => v);
  }, []);

  if (state.succeeded) {
    return (
      <Shell>
        <div className="max-w-2xl">
          <span className="font-mono-label text-[#004AAD] block mb-4">
            CALL REQUESTED
          </span>
          <h1
            className="lc-display text-[#0D0D0D]"
            style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)" }}
          >
            You're booked in{name ? `, ${name.split(" ")[0]}` : ""}.
          </h1>
          <p className="lc-body mt-6 text-base md:text-xl text-[#525252]">
            We'll be in touch within one business day to confirm a time that
            works. Keep an eye on your inbox, and your phone if you left a
            number.
          </p>
          <p className="lc-body mt-6 text-sm text-[#737373]">
            Anything to add before then? Email{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="lc-link font-medium text-[#004AAD]"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <div className="grid grid-cols-12 gap-8 lg:gap-14">
        {/* Pitch */}
        <div className="col-span-12 lg:col-span-5">
          <span className="font-mono-label text-[#004AAD] block mb-4">
            FREE 15-MINUTE CALL
          </span>
          <h1
            className="lc-display text-[#0D0D0D]"
            style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)" }}
          >
            Let's get you more customers from Google.
          </h1>
          <p className="lc-body mt-6 text-base md:text-lg text-[#525252]">
            Tell us about your business and pick a time. On the call we'll look
            at where you show up today, what's costing you calls, and what we'd
            change. No pressure and no obligation.
          </p>

          <ul className="mt-8 border-t border-[#E5E5E5]">
            {[
              ["WHAT WE'LL COVER", "Your Google visibility, reviews, and missed calls"],
              ["HOW LONG", "About 15 minutes, by phone"],
              ["WHAT IT COSTS", "Nothing. Plans start at $297/mo if you go ahead"],
            ].map(([k, v]) => (
              <li key={k} className="py-4 border-b border-[#E5E5E5]">
                <span className="font-mono-label text-[#004AAD] block mb-1">
                  {k}
                </span>
                <span className="lc-body text-sm md:text-base text-[#404040]">
                  {v}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <div className="col-span-12 lg:col-span-7">
          <form onSubmit={handleSubmit} className="border-t border-[#E5E5E5]">
            {/* Tells the two apart in the inbox */}
            <input type="hidden" name="source" value="Booking page" />
            <input
              type="hidden"
              name="_subject"
              value={`New call booking${name ? ` from ${name}` : ""}`}
            />
            {utm.map(([k, v]) => (
              <input key={k} type="hidden" name={k} value={v ?? ""} />
            ))}

            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className={`${cell} sm:border-r`}>
                <label htmlFor="b-name" className={label}>
                  YOUR NAME *
                </label>
                <input
                  id="b-name"
                  name="name"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className={input}
                  placeholder="Jane Doe"
                />
                <ValidationError field="name" errors={state.errors} className="mt-2 text-sm text-red-600" />
              </div>
              <div className={cell}>
                <label htmlFor="b-phone" className={label}>
                  PHONE *
                </label>
                <input
                  id="b-phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  className={input}
                  placeholder="(555) 123-4567"
                />
                <ValidationError field="phone" errors={state.errors} className="mt-2 text-sm text-red-600" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className={`${cell} sm:border-r`}>
                <label htmlFor="b-email" className={label}>
                  EMAIL *
                </label>
                <input
                  id="b-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={input}
                  placeholder="jane@yourbusiness.com"
                />
                <ValidationError field="email" errors={state.errors} className="mt-2 text-sm text-red-600" />
              </div>
              <div className={cell}>
                <label htmlFor="b-business" className={label}>
                  BUSINESS NAME
                </label>
                <input
                  id="b-business"
                  name="business"
                  autoComplete="organization"
                  className={input}
                  placeholder="Doe Plumbing Co."
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className={`${cell} sm:border-r`}>
                <label htmlFor="b-time" className={label}>
                  BEST TIME TO CALL
                </label>
                <select id="b-time" name="best_time" className={`${input} cursor-pointer`} defaultValue={TIMES[0]}>
                  {TIMES.map(t => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className={cell}>
                <label htmlFor="b-plan" className={label}>
                  INTERESTED IN
                </label>
                <select id="b-plan" name="plan" className={`${input} cursor-pointer`} defaultValue="Not sure yet">
                  <option>Not sure yet</option>
                  {plans.map(p => (
                    <option key={p.slug}>
                      {p.name} (${p.price}/mo)
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={cell}>
              <label htmlFor="b-message" className={label}>
                WHAT YOU DO AND WHERE *
              </label>
              <textarea
                id="b-message"
                name="message"
                required
                rows={3}
                className={`${input} resize-none`}
                placeholder="Residential plumbing, Dallas. Most jobs come from referrals right now..."
              />
              <ValidationError field="message" errors={state.errors} className="mt-2 text-sm text-red-600" />
            </div>

            <div className="pt-6 md:pt-8">
              <button
                type="submit"
                disabled={state.submitting}
                className="lc-cta inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-[#004AAD] hover:bg-[#003A87] rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? "Booking..." : "Book my free call"}
              </button>
              <ValidationError errors={state.errors} className="mt-4 block text-sm text-red-600" />
              {state.errors && (
                <p className="lc-body mt-3 text-sm text-[#525252]">
                  If that keeps failing, email{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="lc-link font-medium text-[#004AAD]">
                    {CONTACT_EMAIL}
                  </a>{" "}
                  and we'll set it up.
                </p>
              )}
              <p className="font-mono-label text-[#A3A3A3] mt-4">
                WE REPLY WITHIN ONE BUSINESS DAY
              </p>
            </div>
          </form>
        </div>
      </div>
    </Shell>
  );
}

/** Logo only, no navigation: this page's single job is the form. */
function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FAFAF9] flex flex-col">
      <header className="border-b border-[#E5E5E5]">
        <div className="container h-16 md:h-20 flex items-center">
          <span className="flex items-center gap-2.5 font-bold text-lg md:text-xl tracking-tight text-[#0D0D0D]">
            <img src="/logo-mark.svg" alt="" className="h-6 w-6 md:h-7 md:w-7 shrink-0" />
            Local Cascade
          </span>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-12 md:py-20">{children}</div>
      </main>
      <footer className="border-t border-[#E5E5E5]">
        <div className="container py-6 flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono-label text-[#A3A3A3]">
            © {new Date().getFullYear()} LOCAL CASCADE
          </span>
          <a href={`mailto:${CONTACT_EMAIL}`} className="lc-link text-sm text-[#737373]">
            {CONTACT_EMAIL}
          </a>
        </div>
      </footer>
    </div>
  );
}
