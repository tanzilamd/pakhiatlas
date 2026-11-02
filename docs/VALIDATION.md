# Validation — 2026-11-02

Executed locally:
- npm run validate:content: 34 localized articles, translation parity passed.
- npm run check: 0 errors, 0 warnings, 0 hints on Astro 7.4.4.
- npm run build: 52 static HTML pages, Pagefind indexes 34 articles in bn/en.
- npm test: 1,073 internal links/assets resolve under /pakhiatlas.
- Rebuilt with SITE_URL=https://birds.example.org and empty BASE_PATH; all link checks passed. This is a configuration test, not a live domain claim.
- scripts/browser-test.mjs using system Chromium: viewports 360/768/1440; representative bilingual articles including budgie, green-cheeked conure and droppings; language context preserved; filters, comparison selection/cap, finder, food, unknown food, and five bilingual/alias/scientific-name search queries passed. No page errors and no document horizontal overflow on sampled routes.
- Mobile English homepage screenshot visually inspected. Typography, layout and all representative mobile routes were checked with the automated browser. No claim of exhaustive accessibility conformance or measured Core Web Vitals.
- npm audit: no vulnerabilities.
- Built output about 1.9 MB.

Not validated: authoritative factual source passages, photography (none included), current Bangladesh law, local availability, GitHub Actions execution, actual Pages configuration or live production URL. Network denies external source and GitHub API requests. Current drafts are not a verified public-care reference.
