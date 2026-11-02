# Validation — unified UX/care update, 2026-11-02

Current release: 38 companion + 5 native species, 21 guides, EACH in bn/en: 128 localized articles. 43 unique species, all photographed; 54 distinct photos / 151 responsive WebP variants; 20 in-profile variety records; 28 food entries. PhotoSwipe 5.4.4 is pinned and bundled locally.

Executed successfully:

- `npm run validate:content`: paired-language parity; reference IDs; canonical taxonomy; no companion/native duplicates; every species photographed; unique photo/variety IDs; valid species/variety mapping; honest rights records; complete companion care-trait vocabulary; valid food categories and sources.
- `npm run check`: 0 errors, 0 warnings, 0 hints across 38 Astro files.
- `npm run build`: 152 static HTML pages; 128 articles in two Pagefind language indexes. No server/runtime backend.
- `npm test`: 4,628 internal assets and links resolve under `/pakhiatlas`, including relative Markdown article links. Shared-slug language alternates exist for species profiles.
- A separate `SITE_URL=https://birds.example.org BASE_PATH=''` build passed all 4,628 root-path link checks. The project-subpath build was restored afterwards. This tests configuration, not a real domain.
- `npm run test:browser` passed with system Chromium: 360/768/1440px; all 86 localized species routes; unified explorer contains all 43 species; priority/conure/lovebird/family filters; native/variety legacy indexes redirect; no care-overview card badge or standalone variety chip.
- Eight English/Bangla/alias/scientific-name Pagefind searches passed, with language/base-aware result links, including myna, yellow parrot and seed-mix queries.
- All 54 gallery photographs decoded with the expected bilingual photo identity and selected-photo credit. Lutino cover asserted. Gallery/facts spacing is at least 24px.
- PhotoSwipe: open, next image, zoom, Escape, focus restoration, thumbnail-stage synchronisation and in-profile variety-image opening/close all passed. The keyboard test waits for PhotoSwipe’s opening transition before Escape; an initial animation race was diagnosed independently and corrected in the test.
- Comparison: three defaults; species-specific dust difference; shared-row hiding/showing; optional third bird; duplicate rejection. Finder: required answers, new/experienced paths, noise/silent-home readiness and dust exclusion/caveat. Food: spinach qualification, grit correction, herbal medicinal-use evidence category, unknown food and full-list toggle.
- Tools hash navigation and cross-language budget-tab preservation passed. Budget arithmetic: test inputs initial 2,000 + 4,000 and monthly 500 produce a first-year allocation of 12,000 taka; reset hides the result. These are test values, not market rates.
- Bookmark save/reload/language/legacy migration/removal, root language preference, no-JS native photo/language links and storage-disabled fallback passed.
- No page errors or sampled document horizontal overflow. Mobile profile/gallery, conure, comparison, food and home screenshots visually inspected. Modal zoom/next/keyboard tested; no claim of exhaustive gesture-device or accessibility certification.
- `npm audit --omit=dev`: 0 vulnerabilities. `git diff --check` passed. Built output about 15 MB; images about 9.4 MB including GFDL original. No measured Core Web Vitals score is claimed.

Research limits: direct veterinary-source passages and current numeric Dhaka prices were not retrieved; no clinical review or market-price verification is claimed. See PRICE_RESEARCH.md and FEEDING_REVIEW.md. Secondary-data numeric errors and mislabelled photo examples were rejected rather than copied. Photo rights evidence remains distinguished from existing source-only/collective credits in MEDIA_SOURCES.md.

Deployment uses the unchanged official GitHub Pages workflow. Repository metadata reports http://tanzilahmed.tech/pakhiatlas/; configure-pages supplies actual origin/base. No CNAME/custom-domain setting changed. The final delivery report records the exact pushed commit’s observed workflow result; direct live-host access is a separate network-limited check.
