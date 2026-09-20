# Rise with Local

The complete customer-getting system for local businesses.

**Turn Missed Calls Into Customers for $297/mo.**

One plan at $297/mo, live in under 7 days, no contracts. Every business gets the
same four pieces, built together so they feed each other:

| Service | Promise |
| --- | --- |
| Professional website | Built to convert visitors into customers |
| Local SEO Pack | Google Business Profile optimization, $569/mo standalone |
| Google review funnel | 5-star reputation on autopilot |
| AI missed-call text back | Never lose a lead again |

## Pages

| Route | File |
| --- | --- |
| `/` | `client/src/pages/Home.tsx` |
| `/services` | `client/src/pages/Services.tsx` |
| `/services/:slug` | `client/src/pages/ServicePage.tsx` |
| `/plans/:slug` | `client/src/pages/PlanPage.tsx` |
| `/industries` | `client/src/pages/Industries.tsx` |

The home page runs `Hero` → `System` → `Process` (dark) → `Work` → `Stats`
(dark) → `About` → `Pricing` → `Contact` → `Footer`.

`data/services.ts` describes the work; `data/plans.ts` describes what can be
bought, listing the service slugs each plan contains, so the pricing cards and
the plan pages read from one place and the plan page links through for detail.

Service copy lives once in `client/src/data/services.ts`: the home page System
section and every `/services/*` page render from it. Industries live in
`client/src/data/industries.ts`.

`client/public/sitemap.xml` is generated, not hand-edited: `pnpm build` runs
`scripts/build-sitemap.mjs` first, which reads the service slugs out of
`data/services.ts` and writes every route with today's date. Add a static
route to the `paths` array in that script; new services need nothing.

Prices live in `client/src/data/pricing.ts` (`SYSTEM_PRICE` $297,
`LOCAL_SEO_PRICE` $569, `COMPLETE_PRICE` $797 for both together)
and are used by the pricing cards, the ROI calculator, and the service pages.
The hero and the JSON-LD offers in `client/index.html` still spell them out, so
change those by hand at the same time.

## Contact

The contact section and the chat widget both post to the Formspree form named
by `FORMSPREE_ID` in `client/src/data/contact.ts`, and both ask the questions
listed there, so the two stay in step. The chat widget sends `source: "Chat
widget"` so the emails are tellable apart, and if a post fails it offers a
mailto carrying the answers rather than losing the enquiry.

**The current form id returns 404 FORM_NOT_FOUND** (checked 2026-09-20), so
nothing submitted through the site reaches anyone. Put a live form id from the
Formspree account that owns the domain into `contact.ts`, then send one real
submission through the site to confirm the email lands.

## Ranking proof and the calculator

`ResultsSlider.tsx` shows before/after Google Maps geogrid scans from
`client/public/images/results/`, and `ResultsBand.tsx` puts it on the home page
with the ranking animation. Those scans come from the Google Business Profile
platform the Local SEO Pack runs on, **not** from Rise with Local clients, and
`RESULTS_DISCLOSURE` in `client/src/data/results.ts` says so wherever they
appear. Do not remove that line or relabel the scans as our own client results.

`RoiCalculator.tsx` multiplies the visitor's own numbers (customers × increase
× value, minus the fee). It is an estimate, not a projection of what the
service will deliver, and the footnote says that.

`Stats.tsx` shows published industry research, each figure linked to its
source. They are not Rise with Local client results, and the section says so. Keep it
that way: only add a figure you can link to.

## Photography (Unsplash)

Work-card images come from Unsplash. The site is a static build with no server,
so an access key compiled into the frontend would ship inside the JS bundle and
be readable by every visitor. Instead the key stays on your machine and only the
resulting URLs and credits are committed:

```bash
UNSPLASH_ACCESS_KEY=xxx pnpm fetch:unsplash
```

That writes `client/src/data/unsplash-photos.ts`. Commit the result; never
commit the key. The script also triggers Unsplash's download endpoint, which
their API guidelines require whenever a photo is actually used.

Which photos get fetched is set by `SLOTS` in `scripts/fetch-unsplash.mjs`. A
slot is either a search query or a pinned `{ id }`. Search returns whatever is
trending for that query that day, so once a photo looks right, replace the query
with its id from the output to freeze it.

Attribution is not optional and is not manual: `Work.tsx` renders
"Photo by <photographer> on Unsplash" with both links UTM-tagged, built by
`client/src/lib/unsplash.ts`. Set `UNSPLASH_APP_NAME` there to match the app
name registered at https://unsplash.com/oauth/applications.

Until the script has been run the generated data is empty, and each card falls
back to its existing screenshot with no credit shown, so the site renders
correctly either way.

## Tech Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- Wouter (client-side routing)
- Formspree (contact form)

## Local Development

```bash
pnpm install
pnpm dev
```

Server runs on `http://localhost:3000`.

## Build

```bash
pnpm build
```

Output is in `dist/public/`.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Vercel will auto-detect Vite — the `vercel.json` config handles the rest:
   - **Build Command:** `vite build`
   - **Output Directory:** `dist/public`
   - **Rewrites:** All routes serve `index.html` (SPA routing)
4. Click **Deploy**.
5. Once deployed, go to **Settings → Domains** in Vercel to connect your custom domain.

No environment variables are required — the contact form uses Formspree's public endpoint.

## Contact Form

The contact form is wired to Formspree (endpoint: `mqerlrjr`). Submissions are sent to the email associated with the Formspree account. To change the destination, update the `FORMSPREE_ID` in `client/src/components/Contact.tsx`.

## SEO

- Optimized meta tags (title, description, keywords)
- Open Graph + Twitter Card tags
- JSON-LD structured data (Organization + ProfessionalService)
- `robots.txt` and `sitemap.xml` included
- Semantic HTML with proper heading hierarchy
- Mobile-responsive with fluid typography

## License

MIT
