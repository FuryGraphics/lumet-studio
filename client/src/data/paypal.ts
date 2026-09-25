/**
 * PayPal subscriptions.
 *
 * The client id is a public value: it identifies the merchant to the browser
 * SDK and is safe in the bundle. The secret lives only in the PayPal
 * dashboard and must never appear here.
 *
 * Plan ids come from PayPal (Subscriptions -> Plans). A plan without an id
 * here falls back to the contact form, so adding one is all it takes to make
 * that plan payable.
 */
export const PAYPAL_CLIENT_ID =
  "BAAzjjHEJDUoNCi9K5FN_j_vmMSOBcNWNTNK8wmkWHJJN2wnLR_Z8ZBLA5x01hwH-Niu0MMb_GCqCe_Y1M";

/** Keyed by plan slug (see data/plans.ts). */
export const PAYPAL_PLAN_IDS: Record<string, string> = {
  "growth-system": "P-44534110N1616763BNKX4ESY",

  // Held back on purpose (2026-09-26). These two PayPal plans were created at
  // the old prices, $797 and $569, and a PayPal plan's price is fixed when the
  // plan is made. The site now advertises $597 and $497, so wiring these up
  // would charge a customer more than the page quotes. Both plans fall back to
  // the contact form until new PayPal plans exist at the current prices; paste
  // the new ids here and the buttons return.
  //
  // "complete-pack": "P-1C1138413L386393VNKX4H6I",   // $797 plan
  // "local-seo-pack": "P-9UU777672C4630350NKX4G4I",  // $569 plan
};

export function paypalPlanId(slug: string) {
  return PAYPAL_PLAN_IDS[slug];
}

/** One SDK load for the whole page, whatever renders a button. */
export const PAYPAL_SDK_SRC =
  `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}` +
  `&vault=true&intent=subscription`;
