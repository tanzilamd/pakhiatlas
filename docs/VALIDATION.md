# Validation — feeding, photo and filtering revision, 2026-11-02

Current library: 38 companion + 5 native species and 21 guides, EACH in bn/en: 128 localized articles. 43 unique species, all photographed; 56 distinct photos / 157 responsive variants; 20 in-profile variety records; 26 foods. PhotoSwipe 5.4.4 is pinned and local.

Executed successfully for this revision:

- `npm run validate:content`: bilingual parity, valid reference IDs, canonical species, unique and correctly associated varieties/photos, every species photographed, honest rights records, complete care traits, food groups/categories and scoped price records.
- `npm run check`: 0 errors, warnings or hints across 41 Astro files.
- `npm run build`: 154 static HTML files; Pagefind indexes 128 articles in two languages. No server/runtime backend.
- `npm test`: 4,744 local links/assets resolve under `/pakhiatlas`, including relative Markdown links.
- Separate `SITE_URL=https://birds.example.org BASE_PATH=''` build and all 4,744 root-path checks passed. The normal project-base build was restored before browser tests. This tests configuration, not a real domain.
- `npm run test:browser`: all 86 localized species routes, galleries and context-preserving language links. At 360/768/1440px representative home, explorer, profiles, droppings/feeding/seed guides, all tools, the new Feeding hub and centralized sources page had no sampled document overflow or page errors.
- Explorer: all 43 records; synchronized priority-group shortcuts/select; finch/dove/quail/native groups; sound and size combined; text/alias queries; reset and empty state. “আগে দেখুন” and generic care-overview card tags are absent. Old wildlife/variety indexes redirect.
- Eight Pagefind searches in English/Bangla, including aliases, scientific names, myna, yellow parrot and seed mix, passed with correct language/base result links.
- All four priority profiles have stable food anchors and expanded chapters in bn/en. Feeding hub links reach those chapters, and cockatiel/seed-mix guides are prominent. Blue budgie cover and published budget scope/amount asserted.
- Food list shows all 26 entries initially. Bengali spinach query, grit and herbal-use qualifications, unknown-food empty state, combined fruit/danger filters and reset passed. Canned keyword buttons were removed; duplicate banana/papaya entries consolidated.
- All 56 photos decoded with the expected selected-photo alt text/caption. No external credit links remain in gallery captions. Sources page has a per-image credit entry, exact source links, full GFDL text and received-original link.
- PhotoSwipe: open/next/zoom/Escape/focus restoration and thumbnail synchronization passed. Cockatiel lutino cover and at least 24px gallery/fact separation asserted. All five cockatiel variety cards have real photo links; each opens the corresponding PhotoSwipe item.
- Comparison: three defaults, useful dust differences, shared-row visibility, optional third bird and duplicate rejection. Finder: explicit answers; experience/noise/dust preferences; silent-home and inadequate-care readiness gates. Budget: user-entered taka arithmetic and reset. No test value is represented as a market price.
- Bookmark save/reload/language/legacy migration/removal, root language preference, no-JS photo/language links and storage-disabled fallback passed. Tools preserve the selected budget tab across language switch.
- Mobile and desktop home, explorer, Feeding hub, cockatiel profile/varieties and sources screenshots inspected. Full-frame card/home images and primary-aware variety selection corrected after visual review. No claim of exhaustive accessibility certification, real-device gesture testing or measured Core Web Vitals.
- `git diff --check` passed. Static output about 15MB; images about 9.7MB including the GFDL original. No dependency changes in this revision; the previous pinned-dependency production audit reported zero vulnerabilities.

Research limits: original veterinary-source passages and current Dhaka market quotations remain inaccessible. No clinical review or current Dhaka survey is claimed. One actual archived secondary Bangladesh budgie range is published with historic period, per-adult-bird unit and explicit scope. Other numeric species prices and some morph photos remain incomplete. Six source-only and three collective-stock-credit photographs lack confirmed per-file reuse evidence; see MEDIA_SOURCES.md.

Deployment uses the official configure-pages/upload-pages-artifact/deploy-pages workflow. No custom-domain setting changed. GitHub reports http://tanzilahmed.tech/pakhiatlas/; direct production-host requests remain network-limited. Exact commit and Actions evidence are recorded in the release note below, separately from local browser verification.
