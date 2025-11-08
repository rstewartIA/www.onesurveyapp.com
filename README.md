# www.onesurveyapp.com

Marketing starter for the OneSurvey platform built with the Next.js App Router, Tailwind v4, and an SEO-first content architecture.

## Stack

- Next.js 16 / React 19 with the App Router and TypeScript  
- Tailwind v4 for utility-first styling plus custom gradient theming  
- Route grouping for marketing pages (`/(marketing)/...`) with shared header/footer components  
- Built-in Next.js metadata API + custom JSON-LD helpers for Organization and Product schema  
- `next-sitemap` + `robots.txt` to auto-generate crawlable sitemaps post-build  
- `@vercel/analytics` injected globally for GA4-ready event tracking

## Key Routes

| Route | Purpose |
| --- | --- |
| `/` | Home hero, feature grid, personas, lifecycle overview, CTA band |
| `/features` | Module deep dives tied to SEO keyword map |
| `/solutions` | Persona/industry storytelling with CTA scaffolding |
| `/pricing` | Plan grid + FAQ (FAQ schema-ready) |
| `/resources` | Content pillar planner & asset teasers |
| `/about` | Mission, milestones, trust signals |
| `/contact` | Demo/pilot request form stub + contact info |

All sections pull copy from `src/data/marketing.ts` so messaging updates stay centralized.

## Scripts

```bash
npm run dev        # local development on http://localhost:3000
npm run lint       # ESLint
npm run build      # production build
# postbuild hook runs next-sitemap to generate sitemap.xml + robots.txt
```

## SEO & Analytics

- Global metadata configured in `src/app/layout.tsx`; page-level metadata exported per route.  
- JSON-LD helpers live in `src/lib/structured-data.ts` and `src/components/seo/json-ld.tsx` (Home page already outputs Organization + Product schema).  
- Update `public/og-image.png` with the real hero artwork before launch.  
- After deployments, submit the generated `sitemap.xml` to Google Search Console & Bing Webmaster Tools as part of the measurement plan.

## Next Steps

1. Swap placeholder copy/stats with real data (personas, ROI metrics, CTA destinations).  
2. Implement CMS/MDX pipeline for the `/resources` hub + blog posts.  
3. Wire GA4 or another analytics/consent manager via tag manager / consent banner.  
4. Add integration logos, testimonial quotes, and hero video assets per the messaging framework.  
5. Layer in tests (unit + visual regression) once UI solidifies.
