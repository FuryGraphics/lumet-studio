import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * Stats - dark band of animated counters built on published research, each
 * credited to its source. These are industry figures, not Local Cascade results, and
 * the copy says so: the section frames the problem the system solves.
 * Responsive: 1 col on small phones, 2 col mobile, 4 col desktop.
 */
const stats = [
  {
    value: 7,
    suffix: "×",
    label:
      "More likely to qualify a lead when a business responds within an hour instead of later",
    source: "Harvard Business Review, 2011",
    href: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads",
  },
  {
    value: 23,
    suffix: "%",
    label: "Of companies audited never responded to an online sales lead at all",
    source: "Harvard Business Review, 2011",
    href: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads",
  },
  {
    value: 71,
    suffix: "%",
    label:
      "Of consumers regularly read online reviews when browsing local businesses",
    source: "BrightLocal, 2025",
    href: "https://www.brightlocal.com/research/local-consumer-review-survey-2025/",
  },
  {
    value: 83,
    suffix: "%",
    label: "Of consumers use Google to read reviews of local businesses",
    source: "BrightLocal, 2025",
    href: "https://www.brightlocal.com/research/local-consumer-review-survey-2025/",
  },
];

const DURATION = 1400;

/** Counts from 0 to `to` once `run` turns true. Skips straight to the end
 *  for users who prefer reduced motion. */
function useCountUp(to: number, run: boolean) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!run) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(to);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / DURATION, 1);
      setN(Math.round(to * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [to, run]);

  return n;
}

function Counter({
  stat,
  run,
}: {
  stat: (typeof stats)[number];
  run: boolean;
}) {
  const n = useCountUp(stat.value, run);

  return (
    <div className="bg-[#0D0D0D] p-5 md:p-8 lg:p-10 flex flex-col">
      <div
        className="lc-display text-white mb-2 md:mb-3 tabular-nums"
        style={{ fontSize: "clamp(2.5rem, 6vw, 4.25rem)" }}
        aria-label={`${stat.value}${stat.suffix}`}
      >
        <span aria-hidden="true">
          {n}
          <span className="text-[#004AAD]">{stat.suffix}</span>
        </span>
      </div>
      <p className="lc-body text-xs md:text-sm text-[#A3A3A3] max-w-[240px]">
        {stat.label}
      </p>
      <a
        href={stat.href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono-label text-[#525252] hover:text-[#A3A3A3] text-[0.625rem] mt-4 md:mt-auto md:pt-6 underline underline-offset-2 transition-colors"
      >
        SOURCE: {stat.source.toUpperCase()}
      </a>
    </div>
  );
}

export default function Stats({ index = "04 / THE NUMBERS" }: { index?: string }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative py-12 md:py-24 bg-[#0D0D0D] text-white overflow-hidden border-t border-[#1A1A1A]">
      {/* Subtle spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 30% 40% at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
      />
      <div
        ref={ref}
        className={`container relative ${isVisible ? "is-visible" : ""}`}
      >
        {/* Section header - left rail */}
        <div className="grid grid-cols-12 gap-4 mb-8 md:mb-14">
          <div className="col-span-12 md:col-span-2 flex items-center gap-3">
            <span className="font-mono-label text-[#525252]">{index}</span>
          </div>
          <div className="hidden md:block col-span-10">
            <span className="block h-px w-full bg-[#262626]" />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 mb-8 md:mb-14">
          <div className="col-span-12 md:col-span-2" />
          <div className="col-span-12 md:col-span-9">
            <h2
              className="lc-display text-white"
              style={{ fontSize: "clamp(1.75rem, 4.5vw, 3.25rem)" }}
            >
              Speed and reviews
              <br />
              <span className="text-[#737373]">decide who gets the job.</span>
            </h2>
          </div>
        </div>

        {/* Counters - offset */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-2" />
          <div className="col-span-12 md:col-span-10">
            <div className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1A1A1A]">
              {stats.map(stat => (
                <Counter key={stat.label} stat={stat} run={isVisible} />
              ))}
            </div>
            <p className="font-mono-label text-[#525252] mt-6 text-[0.625rem] md:text-xs">
              INDUSTRY RESEARCH FROM THE SOURCES LINKED ABOVE. NOT LOCAL CASCADE CLIENT
              RESULTS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
