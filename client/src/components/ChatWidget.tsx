import { useEffect, useRef, useState } from "react";
import {
  CONTACT_EMAIL,
  FORMSPREE_ENDPOINT,
  questions,
  type QuestionName,
} from "@/data/contact";

/**
 * ChatWidget - the contact questions asked one at a time in a corner panel,
 * posting to the same Formspree form as the contact section (see data/contact).
 * The email names the widget as the source so the two are tellable apart.
 *
 * If the post fails the panel does not swallow the enquiry: it shows the
 * answers and a mailto link carrying them, so the visitor can still send it.
 */
type Msg = { from: "bot" | "user"; text: string };

const FIRST_PROMPT = questions[0].ask;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [msgs, setMsgs] = useState<Msg[]>([{ from: "bot", text: FIRST_PROMPT }]);
  const [draft, setDraft] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"asking" | "sending" | "sent" | "failed">(
    "asking"
  );

  const scroller = useRef<HTMLDivElement>(null);
  const field = useRef<HTMLInputElement>(null);

  // Keep the newest message in view, and the caret where the visitor types
  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight });
    if (open && status === "asking") field.current?.focus();
  }, [msgs, open, status]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const current = questions[step];

  const ask = (text: string) =>
    setMsgs(m => [...m, { from: "bot", text }]);

  const submit = async (final: Record<string, string>) => {
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...final,
          source: "Chat widget",
          _subject: `New chat enquiry from ${final.name || "the website"}`,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      ask("Got it. We'll come back to you within 24 hours.");
    } catch {
      setStatus("failed");
      ask(
        "Something went wrong sending that. Your answers are safe below, send them straight to us and we'll pick it up."
      );
    }
  };

  const answer = (raw: string) => {
    const value = raw.trim();
    if (current.required && !value) {
      setError("This one we do need.");
      return;
    }
    if (
      current.type === "email" &&
      value &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ) {
      setError("That email doesn't look right.");
      return;
    }
    setError(null);

    const next = { ...answers, [current.name as QuestionName]: value };
    setAnswers(next);
    setMsgs(m => [...m, { from: "user", text: value || "Skip" }]);
    setDraft("");

    if (step + 1 < questions.length) {
      const q = questions[step + 1];
      const first = (next.name || "").split(" ")[0];
      setStep(step + 1);
      setTimeout(
        () => ask(q.ask.replace("{first}", first ? ` ${first}` : "")),
        260
      );
    } else {
      setTimeout(() => submit(next), 200);
    }
  };

  const mailto = () => {
    const body = questions
      .map(q => `${q.label}: ${answers[q.name] || "-"}`)
      .join("\n");
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      "Website enquiry"
    )}&body=${encodeURIComponent(body)}`;
  };

  const progress = Math.round((step / questions.length) * 100);

  return (
    <>
      {/* Launcher */}
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-controls="lumet-chat"
        className="lumet-cta fixed bottom-5 right-5 z-[60] flex items-center gap-2 pl-4 pr-5 py-3 text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#1741B0] shadow-[0_10px_30px_rgba(29,78,216,0.35)] rounded-sm"
      >
        {open ? (
          <>
            <span aria-hidden="true" className="text-base leading-none">
              ×
            </span>
            Close
          </>
        ) : (
          <>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M2 3h12v8H6l-4 3V3Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            Chat with us
          </>
        )}
      </button>

      {/* Panel */}
      {open && (
        <div
          id="lumet-chat"
          role="dialog"
          aria-label="Chat with Lumet Studios"
          className="fixed bottom-20 right-5 z-[60] w-[calc(100vw-2.5rem)] sm:w-[23rem] max-h-[min(32rem,calc(100vh-7rem))] flex flex-col bg-[#FAFAF9] border border-[#E5E5E5] shadow-[0_20px_60px_rgba(13,13,13,0.18)]"
        >
          {/* Head */}
          <div className="bg-[#0D0D0D] text-white p-4">
            <div className="flex items-center justify-between gap-3">
              <span className="font-bold text-lg tracking-tight">
                Lumet<span className="text-[#1D4ED8]">.</span>
              </span>
              <span className="font-mono-label text-[#525252]">
                REPLIES WITHIN 24H
              </span>
            </div>
            <div className="mt-3 h-px w-full bg-[#262626]">
              <div
                className="h-px bg-[#1D4ED8] transition-all duration-300"
                style={{ width: `${status === "sent" ? 100 : progress}%` }}
              />
            </div>
          </div>

          {/* Transcript */}
          <div
            ref={scroller}
            className="flex-1 overflow-y-auto p-4 space-y-3"
            aria-live="polite"
          >
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <p
                  className={`lumet-body text-sm max-w-[85%] px-3 py-2 ${
                    m.from === "user"
                      ? "bg-[#1D4ED8] text-white"
                      : "bg-white border border-[#E5E5E5] text-[#404040]"
                  }`}
                >
                  {m.text}
                </p>
              </div>
            ))}

            {status === "failed" && (
              <a
                href={mailto()}
                className="lumet-cta block text-center text-sm font-semibold text-white bg-[#0D0D0D] hover:bg-[#1D4ED8] px-4 py-3"
              >
                Email it to us instead →
              </a>
            )}
          </div>

          {/* Composer */}
          {status === "asking" || status === "sending" ? (
            <form
              onSubmit={e => {
                e.preventDefault();
                if (status === "asking") answer(draft);
              }}
              className="border-t border-[#E5E5E5] p-3"
            >
              {error && (
                <p className="lumet-body text-xs text-red-600 mb-2">{error}</p>
              )}
              <div className="flex items-end gap-2">
                <label htmlFor="lumet-chat-input" className="sr-only">
                  {current.label}
                </label>
                <input
                  id="lumet-chat-input"
                  ref={field}
                  type={current.type === "textarea" ? "text" : current.type}
                  inputMode={current.type === "tel" ? "tel" : undefined}
                  value={draft}
                  disabled={status === "sending"}
                  onChange={e => setDraft(e.target.value)}
                  placeholder={current.placeholder}
                  className="flex-1 min-w-0 bg-white border border-[#E5E5E5] px-3 py-2.5 text-sm text-[#0D0D0D] placeholder:text-[#D4D4D4] focus:outline-none focus:border-[#1D4ED8]"
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="lumet-cta shrink-0 px-4 py-2.5 text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#1741B0] disabled:opacity-50"
                >
                  {status === "sending" ? "..." : "Send"}
                </button>
              </div>
              {!current.required && status === "asking" && (
                <button
                  type="button"
                  onClick={() => answer("")}
                  className="lumet-link mt-2 text-xs text-[#737373]"
                >
                  Skip this
                </button>
              )}
            </form>
          ) : (
            <div className="border-t border-[#E5E5E5] p-3">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="lumet-link text-xs text-[#737373]"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          )}
        </div>
      )}
    </>
  );
}
