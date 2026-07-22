# Lumet Studios

White-label fulfillment partner for marketing agencies and niche-service businesses.

**You sell it. We build it, run it, and keep your clients happy.**

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
