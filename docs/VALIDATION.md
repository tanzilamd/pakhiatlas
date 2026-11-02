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

## Expanded library revision

20 species/domestic-lineage profiles per language; 12 guides per language (64 localized articles total). The header notice was moved to the footer, source details moved to an expandable article-end section, and native-bird notes were kept separate and concise. Three sampled English profiles remain about 600–630 words versus about 635–645 before: generic repetition was replaced by species-level identification, husbandry and reproductive considerations. No word-count target was imposed. Numerical recommended breeding ages and real licensed photographs remain explicitly incomplete due to denied reference/media access.

Revised build: 82 HTML pages, 1,905 internal links/assets resolved. Chromium checks cover all 40 localized bird profiles, footer-only research notice, new family filters, comparison, finder, food and multilingual search, with representative 360/768/1440 viewport checks. No independently source-verified release is claimed.

## Reader-facing editorial revision

26 companion/aviary profiles + 5 native educational entries + 14 guides, each in both languages. Build: 110 static HTML pages, 90 indexed localized articles, 2 Pagefind language indexes, 2,392 internal links/assets resolved under /pakhiatlas. Browser checks cover all companion and wildlife profile routes, shared-slug language switching, 3 representative viewports, varieties, filters, compare/cleaning notes, finder, food checker and 7 multilingual searches (including myna and yellow-parrot queries). No page errors. Public draft/process labels and demo species artwork were removed; internal research records remain honest.

Added attributed responsive photo-gallery/import support. No actual bird photos were downloaded: Commons and veterinary source domains remain denied by the runtime proxy. The import script passed syntax checking, but a real licensed-asset import and live gallery branch have not been validated. No source research or live deployment verification is claimed by these functional tests.

Final dependency audit: zero vulnerabilities. Final root/custom-origin rebuild and default project-subpath rebuild both passed all link checks. Bangla budgerigar profile was visually inspected at 390px; removed duplicated overview text and compacted mobile quick facts. Final reading/layout adjustments retain the content body.
