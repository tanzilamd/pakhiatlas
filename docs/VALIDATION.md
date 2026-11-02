# Validation — full-width photos, colour forms and seed weights, 2026-11-02

Current library:40 companion +5 native species and23 guides, EACH in bn/en:136 localized articles.45 unique species, all photographed;65 distinct photos/180 responsive variants;27 in-profile colour/variety records,20 pictured;26 foods. Dependencies remain pinned and unchanged.

Executed successfully:

- `npm run validate:content`: language parity; canonical identities and no companion/native duplicates; unique photos/varieties and valid associations; honest source-only/collective rights records; complete comparison traits; food groups/categories/source IDs; price scope; seed-example species/source IDs, positive shares summing100 and completeDiet:false.
- `npm run check`:0 errors, warnings or hints across42 Astro files.
- `npm run build`:162 static HTML files;136 articles indexed in two Pagefind languages. No server/runtime backend.
- `npm test`:5,120 local links/assets resolve under `/pakhiatlas`, including relative Markdown links. A separate `SITE_URL=https://birds.example.org BASE_PATH=''` build passed all5,120 root-path checks, then project-subpath output was restored. This tests configuration, not a real domain.
- `npm run test:browser`:all90 localized species routes, full-width profile galleries, context-preserving language links, legacy index redirects and ten English/Bangla/scientific/alias searches. New Thectocercus and Bengali macaw queries passed with language/base-aware result links.
- Representative home, explorer, core profiles, droppings/feeding/seed guides, new species, new food-transition/travel guides, all tools, Feeding hub and sources at360/768/1440px: no sampled horizontal document overflow or page errors.
- Full-frame cards:computed cover mode and image/container width AND height match, preventing the screenshot's side gutters. Profile photos use width100% and natural height; full original frames remain in the viewer. Screenshots of card grid, seed table, lovebird/monk varieties and macaw page inspected at all three widths. Relaxed lutino cover replaced the yawning cover.
- All65 gallery photographs decoded with expected selected-photo identity/caption. PhotoSwipe open/next/zoom/Escape/focus restoration, thumbnail sync, minimum24px gallery/facts separation and all five cockatiel variety links passed. Both new peach-faced-lovebird variety links open the correct viewer photo.
- Seed selector tested in bn/en:250g→125+125g;2000g→1000+1000g; localized totals correct and species/complete-food limitation present. Initial1000g table is statically rendered. Without JS the selector stays disabled and the1000g total remains correct; it cannot display a changed batch choice with stale quantities.
- Print media verified:main gallery image height200px, avoiding a full-page portrait printout.
- Explorer filters:all45 records; group shortcut/select sync; family-equivalent group choices; combined sound/size; names/aliases; reset and empty state. No “আগে দেখুন”, generic care-overview card tag or duplicate mutation index.
- Comparison:three defaults, useful species traits, shared-row visibility, optional third bird and duplicate rejection. Finder:required answers, experience/noise/dust preferences, silent-home and insufficient-care gates. Food:all26 initially, name queries and safety qualifications, unknown-food state, combined fruit/danger filters and reset. Budget:user-entered taka arithmetic and reset, without treating test values as market prices.
- Bookmarks:save/reload/language/legacy migration/removal; root language preference; no-JS localized/native image links; storage-disabled fallback; tools' cross-language budget-tab context. No page errors.
- `git diff --check` passed. Static output about17MB; images about11MB including GFDL original. No dependency changes; prior production dependency audit reported0 vulnerabilities. No measured Core Web Vitals or exhaustive accessibility/gesture certification is claimed.

Evidence limits remain explicit in development records:primary clinical-source review and current Dhaka price survey are incomplete. The50/50 seed example is secondary manufacturer-composition evidence for budgies only, not a clinically balanced formula, daily ration or cockatiel recipe. Twelve source-only and three collective-stock-credit photos lack confirmed per-file reuse evidence. See MEDIA_SOURCES.md and evidence/seed-composition-5050.json.

Photo coverage:20/27 variety groups pictured. Seven gaps remain:budgie English/exhibition, ino and pied/spangle; turquoise GCC; Giribaz/Tumbler and Fantail pigeon; lutino ringneck. Unpictured forms use compact editorial notes, not empty image cards or generated substitutes.

GitHub Pages uses unchanged official configure-pages/upload-pages-artifact/deploy-pages actions, with real origin/base outputs. No CNAME/custom-domain setting was changed. Actual GitHub-reported Pages URL:http://tanzilahmed.tech/pakhiatlas/. Local browser checks are separate from production-host verification, which the runner's proxy has denied.

Previous observed deployment:a88dce6794ee13aebe7cea1c9e39920bb046d941, run https://github.com/tanzilamd/pakhiatlas/actions/runs/41471140633, SUCCESS. This historical success does not establish the status of a newer commit; verify the exact pushed commit's run.
