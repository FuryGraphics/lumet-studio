import { useState } from "react";
import { results, RESULTS_DISCLOSURE } from "@/data/results";

/**
 * ResultsSlider - before/after Google Maps ranking grids, one business at a
 * time. Arrows and dots move between them; the two grids sit side by side so
 * the change is visible without interaction (they stack on mobile).
 *
 * The disclosure line below the slider is required, see data/results.ts.
 */
export default function ResultsSlider({ dark = false }: { dark?: boolean }) {
  const [i, setI] = useState(0);
  const item = results[i];
  const go = (n: number) => setI((n + results.length) % results.length);

  const border = dark ? "border-[#262626]" : "border-[#E5E5E5]";
  const muted = dark ? "text-[#A3A3A3]" : "text-[#525252]";
  const faint = dark ? "text-[#525252]" : "text-[#A3A3A3]";
  const heading = dark ? "text-white" : "text-[#0D0D0D]";

  return (
    <div>
      {/* Caption row */}
      <div
        className={`flex flex-wrap items-end justify-between gap-4 pb-5 border-b ${border}`}
      >
        <div>
          <span className="font-mono-label text-[#1D4ED8] block mb-2">
            {String(i + 1).padStart(2, "0")} / {results.length}
          </span>
          <h3 className={`text-xl md:text-3xl font-semibold ${heading}`}>
            {item.industry}
          </h3>
          <p className={`lc-body mt-1 text-sm md:text-base ${muted}`}>
            Ranking for &ldquo;{item.keyword}&rdquo; ·{" "}
            {item.months === 1 ? "1 month" : `${item.months} months`} later
          </p>
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => go(i - 1)}
            aria-label="Previous result"
            className={`lc-cta w-11 h-11 flex items-center justify-center border ${border} ${heading} hover:border-[#1D4ED8] hover:text-[#1D4ED8] transition-colors`}
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => go(i + 1)}
            aria-label="Next result"
            className={`lc-cta w-11 h-11 flex items-center justify-center border ${border} ${heading} hover:border-[#1D4ED8] hover:text-[#1D4ED8] transition-colors`}
          >
            →
          </button>
        </div>
      </div>

      {/* Before / after grids */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-6">
        {(["before", "after"] as const).map(phase => (
          <figure key={phase}>
            <div
              className={`relative aspect-square overflow-hidden border ${border} bg-[#F5F5F5]`}
            >
              <img
                key={`${item.id}-${phase}`}
                src={`/images/results/${item.id}-${phase}.webp`}
                alt={`Google Maps ranking grid for a ${item.industry.toLowerCase()} ${phase} the service, searching "${item.keyword}"`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <span
                className={`absolute top-3 left-3 font-mono-label px-2 py-1 text-[0.625rem] md:text-xs text-white ${
                  phase === "before" ? "bg-black/50" : "bg-[#1D4ED8]"
                }`}
              >
                {phase === "before" ? "BEFORE" : "AFTER"}
              </span>
            </div>
          </figure>
        ))}
      </div>

      {/* Dots */}
      <div className="flex flex-wrap items-center gap-2 mt-6">
        {results.map((r, n) => (
          <button
            key={r.id}
            type="button"
            onClick={() => setI(n)}
            aria-label={`Show ${r.industry}`}
            aria-current={n === i}
            className={`h-1.5 transition-all ${
              n === i
                ? "w-8 bg-[#1D4ED8]"
                : `w-4 ${dark ? "bg-[#262626] hover:bg-[#525252]" : "bg-[#E5E5E5] hover:bg-[#A3A3A3]"}`
            }`}
          />
        ))}
      </div>

      <p className={`lc-body mt-6 text-xs md:text-sm ${faint} max-w-3xl`}>
        Each square is one point in the business&rsquo;s service area, numbered
        by its Google Maps position for that search. Green is the top of the
        results, red is buried. {RESULTS_DISCLOSURE}
      </p>
    </div>
  );
}
