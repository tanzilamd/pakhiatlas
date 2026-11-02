# Whole-site inspection — 2026-11-02

Scope: existing bilingual static publication, its content structure, routes, mobile layouts, keyboard controls, tools and build/deployment. No new species, photograph, medication instruction, market-price claim or asserted source verification was added. Existing45 species/24 guides per language remain138 localized articles,65 photos and27 variety records.

## Improvements

- A dedicated bilingual `/health/` hub replaces the navigation link that previously opened only the droppings article. It groups existing observation, prevention and veterinary-transport guides; urgent help is easy to find. It adds no diagnosis engine or medical treatment.
- The24-guide library now has seven topics, local title/topic search, URL-based filters, empty/reset states and ordinary topic anchors. Both language titles are searchable. New `topic` frontmatter is required for guides; schema/content validation enforces supported topics and translation parity. Scaffolding includes a valid initial topic to review.
- `src/data/guide-topics.ts` owns labels; `src/lib/related-reading.ts` supplies topic-aware related reading. Links come from stable slugs and automatically localized collections. Do not duplicate care articles to make hub pages.
- One native details/summary navigation works as an expandable menu on widths up to900px, with Enter/Escape and focus handling. No-JS navigation remains open/usable. Desktop navigation stays visible. Current section, active language and theme state have accessible indicators.
- Bird filters, guide filters, comparison selection and typed search queries are reflected in the URL. Equivalent-page language changes preserve supported filters and shared anchors such as daily-food, varieties and seed-usage. Arbitrary translated heading hashes are not falsely mapped between languages.
- Light-theme muted text and guide numbers now meet the contrast thresholds flagged by the initial audit. Dark hero accent and Bangla multi-line heading spacing were improved. Reader-visible origin wording was simplified without adding biological claims.
- Fixed an actual search-page event collision: the search container also used data-language, so the global language-switch handler could run on search-box clicks. The handler now selects anchors only; typed and cleared queries update their shareable URL.
- Search, browser-local reading lists and the root language redirect are noindex and excluded from the sitemap; sitemap tests check real targets and reject noindex entries.
- The404 page now has bilingual recovery guidance and direct bird/search/library links.

## Maintainable checks

`scripts/test-built.mjs` now checks every static document for one H1, unique IDs, valid image attributes, responsive-image asset paths, internal fragments, locale metadata and JSON-LD. `scripts/test-navigation.mjs`, included in `npm run test:browser`, checks topics, filters/reload/language, empty states, health links, comparison/search persistence, shared anchors, theme state, keyboard menu and no-JS behavior.

An additional temporary axe-core4.11.0 audit checks all158 nonredirect localized routes at360px in light and dark themes (316 checks). The auditor is a development-only tool installed under `/tmp`, not a shipped dependency or site runtime. Existing regression scripts cover representative360/768/1440px layouts, all90 localized species routes, all65 photo assets/viewer functions and ten multilingual search queries. See VALIDATION.md for final executed results.

## Limits

Automated rules do not establish full WCAG conformance, verify every factual claim, certify photo rights or measure Core Web Vitals. Existing evidence gaps remain in COVERAGE.md, PRICE_RESEARCH.md and MEDIA_SOURCES.md. GitHub Pages remains the only host; no domain setting was changed. Direct production-host retrieval remains dependent on the environment's network policy; successful deployment is verified separately against the exact GitHub workflow commit.
