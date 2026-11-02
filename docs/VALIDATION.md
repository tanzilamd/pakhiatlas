# Validation — image completion, 2026-11-02

Current implementation: 26 companion profiles + 5 native profiles + 18 guides, each in Bangla and English (98 articles). 17 variety groups. All 31 bird species have real photographs: 38 distinct photos, 109 responsive WebP variants. The three cockatiel colour examples shown photographically are normal grey, lutino and pied; other unpictured varieties use descriptions, never fake images.

Executed locally:

- `npm run validate:content`: translation parity, known source IDs, canonical taxonomy, all-species photo coverage, unique photo/variety IDs, correct species–variety associations and honest rights-state records passed.
- `npm run check`: 0 errors, 0 warnings, 0 hints (33 Astro files).
- `npm run build`: 122 static HTML pages, 98 articles indexed by Pagefind in separate bn/en indexes.
- `npm test`: 3,526 internal assets/links resolve under `/pakhiatlas`.
- Rebuilt with `SITE_URL=https://birds.example.org BASE_PATH=''`; all 3,526 internal asset/link checks also passed at the root. This is a configuration test, not a live domain claim. Restored the normal project-subpath build afterwards.
- `npm run test:browser`: system Chromium at 360/768/1440px, representative bilingual budgie/conure/cockatiel/droppings pages, varieties and tools; all 62 localized bird-profile routes; no document horizontal overflow on sampled routes and no page errors.
- All 38 gallery photographs decode. Captions/credit links are present. Cockatiel card and first profile image use the primary lutino photograph. Grey/lutino variety matching is asserted; pied matching is covered by metadata validation and visual inspection. Card credit overlays are absent.
- Photo enlargement opens with the correct image/alt, closes with Escape and restores focus. Ordinary image anchors remain usable without JavaScript. Mobile article TOC initially collapses; desktop opens it.
- Shared-slug language switch, saved-list save/reload/locale/migration/removal, remembered root language, no-JavaScript language navigation and disabled-browser-storage fallback passed.
- Filters, two/three-bird compare and cap, cleaning comparison notes, finder required-answer/experience/welfare paths, food checker and unknown-food fallback passed.
- Seven Pagefind queries passed: English alias, Bangla alias, conure spelling variant, scientific name, droppings, myna and yellow-parrot queries. Search results retain the correct language and repository base.
- Mobile bird listing, varieties and cockatiel gallery were visually inspected. Source images were opened individually; watermarked previews, wrong-species images and generated art were excluded. Cropping is documented where used.
- `git diff --check` passed. Published build is about 11 MB; local image directory about 6.4 MB including the original GFDL JPEG.

Limits: These are functional, visual and content-structure checks. They do not certify medical-source passages, Bangladesh availability/legal permissions, clinical review, exhaustive accessibility or measured Core Web Vitals. Explicit photo rights evidence is distinguished from collection credits/source-only records in MEDIA_SOURCES.md; not every image has a confirmed reuse grant. No permission or photographer identity is invented.

Deployment: GitHub’s public repository metadata reports `http://tanzilahmed.tech/pakhiatlas/`. Configure-pages supplies the actual origin/base during the official Pages workflow; no CNAME/custom-domain settings were changed. Check the exact commit in Actions for deployment evidence; the final delivery report records the observed result. A direct production-host request remains subject to the environment network policy and is separate from Actions success.
