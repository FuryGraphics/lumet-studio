/**
 * Ranking results - before/after Google Maps grids for the Local SEO Pack.
 *
 * These come from the Google Business Profile platform this service runs on,
 * not from Local Cascade's own client list. Every surface that renders them says so
 * (see RESULTS_DISCLOSURE), and that line is not optional: presenting another
 * company's client results as our own would be a false claim.
 *
 * Each grid is a geogrid scan: the business's Google Maps position for one
 * keyword, measured from points across its service area. Green is a top spot,
 * red is buried.
 */
export type RankingResult = {
  id: string;
  industry: string;
  keyword: string;
  months: number;
};

export const RESULTS_DISCLOSURE =
  "Ranking scans from businesses using the same Google Business Profile platform we run this service on, not Local Cascade clients. Results vary by market, competition, and starting point.";

export const results: RankingResult[] = [
  { id: "contractor", industry: "Contractor", keyword: "water damage repair", months: 1 },
  { id: "salon", industry: "Salon", keyword: "hair extensions", months: 1 },
  { id: "solar", industry: "Solar Installation", keyword: "solar panel sales", months: 1 },
  { id: "laundry", industry: "Laundry Service", keyword: "wash and fold", months: 1 },
  { id: "golf", industry: "Golf Simulator", keyword: "golf simulator", months: 2 },
  { id: "french", industry: "French Restaurant", keyword: "french restaurant", months: 3 },
  { id: "agency", industry: "Marketing Agency", keyword: "local seo", months: 3 },
  { id: "spa", industry: "Spa", keyword: "hot stone massage", months: 4 },
  { id: "puppy", industry: "Puppy Trainer", keyword: "puppy classes near me", months: 6 },
];
