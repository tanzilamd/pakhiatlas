# Validation — whole-site audit, 2026-11-02

Current library:40 companion +5 native species and24 guides, EACH in bn/en:138 localized articles.45 unique species, all photographed;65 distinct photos/180 responsive variants;27 in-profile colour/variety records,20 pictured;26 foods. Dependencies remain pinned and unchanged.

Executed successfully:

- `npm run validate:content`: language parity; canonical identities and no companion/native duplicates; unique photos/varieties and valid associations; honest source-only/collective rights records; complete comparison traits; food groups/categories/source IDs; price scope; seed-example species/source IDs, positive original gram weights matching the stated total and completeDiet:false.
- `npm run check`:0 errors, warnings or hints across50 Astro/TypeScript files.
- `npm run build`:166 static HTML files;138 articles indexed in two Pagefind languages. No server/runtime backend.
- `npm test`:166 HTML pages,7,172 internal links/assets including630 responsive-image candidates, and1,002 fragment targets resolve under `/pakhiatlas`. One H1, unique IDs, image alt/dimensions, localized metadata and JSON-LD also pass. Seed math covers the original note, exclusions, costs, stock and measured-use forecasts.
- `npm run test:browser`:all90 localized species routes, full-width profile galleries, context-preserving language links, legacy index redirects and ten English/Bangla/scientific/alias searches. New Thectocercus and Bengali macaw queries passed with language/base-aware result links.
- Representative home, explorer, core profiles, droppings/feeding/seed guides, new species, new food-transition/travel guides, all tools, Feeding hub and sources at360/768/1440px: no sampled horizontal document overflow or page errors.
- Full-frame cards:computed cover mode and image/container width AND height match, preventing the screenshot's side gutters. Profile photos use width100% and natural height; full original frames remain in the viewer. Screenshots of card grid, seed table, lovebird/monk varieties and macaw page inspected at all three widths. Relaxed lutino cover replaced the yawning cover.
- All65 gallery photographs decoded with expected selected-photo identity/caption. PhotoSwipe open/next/zoom/Escape/focus restoration, thumbnail sync, minimum24px gallery/facts separation and all five cockatiel variety links passed. Both new peach-faced-lovebird variety links open the correct viewer photo.
- Seed planner in bn/en: exact10.7kg original12-item note and1.07kg scaling; target/limiting-stock modes, missing-vs-zero prices/stock, partial totals, daily-use duration/capacity, invalid input, optional save/reload, recipe switching, reset and storage-disabled fallback. Ingredient omissions preserve remaining pairwise ratios, exclude stock/cost constraints and survive save/reload. All-excluded hides results. Single-omission stock math also passes. Shopping-list copy omits unchecked ingredients, retains the total/scope and provides visible text when clipboard access fails. Static1kg owner table remains available with JS disabled and controls disabled.
- Print media verified:main gallery image height200px, avoiding a full-page portrait printout.
- Explorer filters:all45 records; group shortcut/select sync; family-equivalent group choices; combined sound/size; names/aliases; reset and empty state. No “আগে দেখুন”, generic care-overview card tag or duplicate mutation index.
- Comparison:three defaults, useful species traits, shared-row visibility, optional third bird and duplicate rejection. Finder:required answers, experience/noise/dust preferences, silent-home and insufficient-care gates. Food:all26 initially, name queries and safety qualifications, unknown-food state, combined fruit/danger filters and reset. Budget:user-entered taka arithmetic and reset, without treating test values as market prices.
- Bookmarks:save/reload/language/legacy migration/removal; root language preference; no-JS localized/native image links; storage-disabled fallback; tools' cross-language budget-tab context. No page errors.
- `git diff --check` passed. Static output about17MB; images about11MB including GFDL original. No dependency changes; prior production dependency audit reported0 vulnerabilities. No measured Core Web Vitals or exhaustive accessibility/gesture certification is claimed.

Evidence limits remain explicit in development records:primary clinical-source review and current Dhaka price survey are incomplete. The default cockatiel plan records the owner's note and preferences, not nutritional validation; গুজিতিল has no confirmed botanical identity. A secondary manufacturer budgie50/50 example remains separately scoped. Neither is a complete diet, prescribed daily ration or cross-species approval. Twelve source-only and three collective-stock-credit photos lack confirmed per-file reuse evidence. See MEDIA_SOURCES.md and both seed evidence files.

Photo coverage:20/27 variety groups pictured. Seven gaps remain:budgie English/exhibition, ino and pied/spangle; turquoise GCC; Giribaz/Tumbler and Fantail pigeon; lutino ringneck. Unpictured forms use compact editorial notes, not empty image cards or generated substitutes.

GitHub Pages uses unchanged official configure-pages/upload-pages-artifact/deploy-pages actions, with real origin/base outputs. No CNAME/custom-domain setting was changed. Actual GitHub-reported Pages URL:http://tanzilahmed.tech/pakhiatlas/. Local browser checks are separate from production-host verification, which the runner's proxy has denied.

Previous observed deployment:77d6989e8511433e83e8d04bfd9cad2afe62c403, run https://github.com/tanzilamd/pakhiatlas/actions/runs/41489783039, SUCCESS. This historical success does not establish the status of a newer commit; verify the exact pushed commit's run.

## Repetition audit

The content build now validates relatedGuides targets and rejects repeated prose paragraphs longer than180 characters.501 repeated copies were consolidated across86 localized profiles;216 link-only headings became related-reading metadata. Species-specific prose remains. The audit reports zero repeated long paragraphs; this does not claim semantic duplicate detection or clinical fact verification. The new paired wildlife-observation guide is included in138 indexed articles.

## Whole-site accessibility and navigation audit

Axe-core4.11.0 was temporarily installed under `/tmp` for inspection, with no dependency added to the project. All158 nonredirect localized routes were checked at360px in both light and dark themes:316 page/theme checks,0 reported WCAG2A/AA/2.1AA violations,0 sampled horizontal document overflows and0 browser page errors. The initial audit found insufficient light muted-text/guide-number contrast; those values were corrected before the complete final crawl. This does not establish full WCAG conformance or clinical correctness.

The navigation regression adds all24 guides/seven topics, bilingual title searches, topic/empty/reset/jump states, persistent filters after reload/language changes, dedicated health links, stable food/variety/planner anchors, comparison/search URL state, theme aria-pressed, native mobile-menu Enter/Escape/focus/desktop behavior and no-JS fallbacks. Health and library layouts were visually inspected at mobile/tablet widths; representative layouts also run at360/768/1440px. See SITE_AUDIT.md for changes and maintenance boundaries.

The alternate root build (`SITE_URL=https://birds.example.org BASE_PATH=''`) also passed7,172 local-link/asset and1,002 fragment checks, including sitemap validation. Project-subpath output was then restored. This is configuration testing, not a deployed custom-domain claim. Automated accessibility summary: evidence/site-audit-2026-11-02.json.
