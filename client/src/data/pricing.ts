/**
 * Prices in one place. They appear in the hero, the pricing section, the ROI
 * calculator, the service pages, and the JSON-LD offers in index.html; keep
 * index.html in step by hand when either number changes.
 */
export const SYSTEM_PRICE = 297;
export const LOCAL_SEO_PRICE = 569;
export const COMPLETE_PRICE = 797;

/** What the bundle saves against buying both plans separately. */
export const COMPLETE_SAVING = SYSTEM_PRICE + LOCAL_SEO_PRICE - COMPLETE_PRICE;
