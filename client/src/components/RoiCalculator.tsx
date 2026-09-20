import { useState } from "react";
import { LOCAL_SEO_PRICE } from "@/data/pricing";

/**
 * RoiCalculator - what a lift in customers is worth against the monthly fee.
 *
 * Deliberately simple arithmetic, shown on screen, so a prospect can check it:
 *   extra customers = current customers × lift%
 *   extra revenue   = extra customers × revenue per customer
 *   net             = extra revenue − monthly cost
 *   return          = net ÷ monthly cost
 * It is an estimate from the visitor's own numbers, not a projection of what
 * the service will do, and the footnote says that.
 */
const fields = [
  {
    key: "customers",
    label: "NEW CUSTOMERS PER MONTH",
    hint: "How many you win now",
    prefix: "",
    min: 0,
    max: 200,
    step: 1,
  },
  {
    key: "value",
    label: "AVERAGE CUSTOMER VALUE",
    hint: "What one is worth to you",
    prefix: "$",
    min: 0,
    max: 5000,
    step: 25,
  },
  {
    key: "lift",
    label: "EXPECTED INCREASE",
    hint: "Percent more customers",
    prefix: "",
    suffix: "%",
    min: 0,
    max: 100,
    step: 5,
  },
  {
    key: "cost",
    label: "MONTHLY COST",
    hint: "What you pay us",
    prefix: "$",
    min: 0,
    max: 2000,
    step: 1,
  },
] as const;

type Key = (typeof fields)[number]["key"];

const money = (n: number) =>
  "$" + Math.round(n).toLocaleString("en-US");

export default function RoiCalculator({
  dark = false,
  defaultCost = LOCAL_SEO_PRICE,
}: {
  dark?: boolean;
  /** The plan the visitor is looking at, so the sum starts from its fee. */
  defaultCost?: number;
}) {
  const [v, setV] = useState<Record<Key, number>>({
    customers: 20,
    value: 400,
    lift: 25,
    cost: defaultCost,
  });

  const set = (key: Key, raw: string) => {
    const f = fields.find(x => x.key === key)!;
    const n = Number(raw);
    setV(prev => ({
      ...prev,
      [key]: Number.isFinite(n) ? Math.min(Math.max(n, f.min), f.max) : 0,
    }));
  };

  const extraCustomers = (v.customers * v.lift) / 100;
  const extraRevenue = extraCustomers * v.value;
  const net = extraRevenue - v.cost;
  const roi = v.cost > 0 ? (net / v.cost) * 100 : 0;

  const border = dark ? "border-[#262626]" : "border-[#E5E5E5]";
  const label = dark ? "text-[#737373]" : "text-[#737373]";
  const input = dark ? "text-white" : "text-[#0D0D0D]";
  const muted = dark ? "text-[#A3A3A3]" : "text-[#525252]";
  const faint = dark ? "text-[#525252]" : "text-[#A3A3A3]";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      {/* Inputs */}
      <div className={`border-t ${border}`}>
        {fields.map(f => (
          <div key={f.key} className={`border-b ${border} p-4 md:p-6`}>
            <label
              id={`roi-label-${f.key}`}
              htmlFor={`roi-${f.key}`}
              className={`font-mono-label block mb-2 ${label}`}
            >
              {f.label}
            </label>
            <div className="flex items-baseline gap-1">
              {f.prefix && (
                <span className={`text-xl md:text-2xl ${muted}`}>
                  {f.prefix}
                </span>
              )}
              <input
                id={`roi-${f.key}`}
                type="number"
                inputMode="numeric"
                min={f.min}
                max={f.max}
                value={v[f.key]}
                onChange={e => set(f.key, e.target.value)}
                className={`lumet-number w-full bg-transparent text-xl md:text-2xl font-semibold ${input} focus:outline-none focus:text-[#1D4ED8]`}
              />
              {"suffix" in f && f.suffix && (
                <span className={`text-xl md:text-2xl ${muted}`}>
                  {f.suffix}
                </span>
              )}
            </div>
            <input
              type="range"
              min={f.min}
              max={f.max}
              step={f.step}
              value={Math.min(v[f.key], f.max)}
              onChange={e => set(f.key, e.target.value)}
              aria-labelledby={`roi-label-${f.key}`}
              className="lumet-range mt-3"
            />
            <div className="flex items-baseline justify-between gap-4">
              <p className={`lumet-body text-xs ${faint}`}>{f.hint}</p>
              <span className={`font-mono-label text-[0.625rem] ${faint}`}>
                {f.prefix}
                {f.max.toLocaleString("en-US")}
                {"suffix" in f && f.suffix ? f.suffix : ""}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Results */}
      <div className="relative bg-[#0D0D0D] text-white overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 45% 50% at 50% 0%, rgba(255,255,255,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="relative p-6 md:p-10 h-full flex flex-col">
          <span className="font-mono-label text-[#525252]">
            ESTIMATED MONTHLY RETURN
          </span>
          <div
            className="lumet-display mt-3 tabular-nums"
            style={{ fontSize: "clamp(2.5rem, 7vw, 4.5rem)" }}
          >
            <span className={net >= 0 ? "text-white" : "text-[#F87171]"}>
              {net >= 0 ? money(net) : "-" + money(Math.abs(net))}
            </span>
          </div>
          <p className="lumet-body mt-2 text-sm text-[#A3A3A3]">
            after the {money(v.cost)} monthly fee
          </p>

          <dl className="mt-8 border-t border-[#262626]">
            {[
              [
                "Extra customers a month",
                extraCustomers.toLocaleString("en-US", {
                  maximumFractionDigits: 1,
                }),
              ],
              ["Extra revenue a month", money(extraRevenue)],
              ["Extra revenue a year", money(extraRevenue * 12)],
              [
                "Return on spend",
                v.cost > 0
                  ? `${roi >= 0 ? "" : "-"}${Math.abs(Math.round(roi)).toLocaleString("en-US")}%`
                  : "-",
              ],
            ].map(([k, val]) => (
              <div
                key={k}
                className="flex items-baseline justify-between gap-4 py-3 border-b border-[#262626]"
              >
                <dt className="lumet-body text-sm text-[#A3A3A3]">{k}</dt>
                <dd className="text-base md:text-lg font-semibold tabular-nums">
                  {val}
                </dd>
              </div>
            ))}
          </dl>

          <p className="lumet-body mt-6 text-xs text-[#525252]">
            Your numbers, multiplied out: customers × increase × value, minus
            the fee. An estimate to think with, not a promise of results.
          </p>
        </div>
      </div>
    </div>
  );
}
