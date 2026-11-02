# PakhiAtlas continuation — 2026-11-02

Start with AGENTS.md, COVERAGE.md, CONTENT_GUIDE.md, PRICE_RESEARCH.md and MEDIA_SOURCES.md. The repository itself, not historical chat, is authoritative. Work is on /workspace/pakhiatlas, branch work; production is main in https://github.com/tanzilamd/pakhiatlas. User authorized edits, fixes, commits, push and GitHub Pages deployment. No custom-domain settings may be changed. Preserve legitimate Git identity Tanzil Ahmed <mdtanzil858@gmail.com>; never add AI coauthor trailers.

## Current product

Astro 7 static, TypeScript, Tailwind 4, Markdown Content Collections, two local Pagefind indexes, GitHub Pages ONLY. No backend, accounts, runtime AI/API, analytics or external CMS. 38 companion + 5 native species and 21 guides in EACH bn/en; 128 localized articles. 56 real photos/157 responsive variants; 20 in-profile colour/variety records; 26 food entries. Native species remain educational and excluded from companion tools, but appear in the unified explorer. Legacy wildlife/varieties indexes redirect there.

The latest user wants useful group/noise/size/interaction filters, no “আগে দেখুন”; new budgie cover; obvious cockatiel/seed-mix food guidance; all food entries initially and meaningful category/precaution filters; one acknowledgements page; bird-focused photos and missing morphs; A-to-Z detail for budgie, cockatiel, lovebird and conure; realistic Dhaka price guidance. These changes are implemented where evidence permits. Feeding is a main-navigation route; four priority profiles have stable #daily-food anchors and expanded paired chapters/FAQs. Cockatiel Pearl and Whiteface photos were added. Budgie uses the blue bird, cockatiel a single lutino on a perch. All cards preserve full frames. Shared primary-aware selection also powers variety photos.

References, creator/license/original/GFDL links now live on /[lang]/sources/ only; /media/ redirects there. Keep metadata/ledgers intact. No photo overlays or WebP conversion captions. Captions describe the bird. Preserve useful detail and natural Bangla; do not add public draft labels, missing-source filler or network diagnostics. Internal editorial-draft status remains honest; no fabricated “verified” or veterinarian review.

## Remaining research gaps

No direct primary medical-source passage verification or clinical review. No current verified Dhaka price survey. The archived KinBird table was actually read at exact commit 5c06cd37a68af16f8c7e226df8fbfa0c48dbd50b: Bangladesh pet-quality adult budgie BDT300–1,200, common mutations1,500–6,000, per bird, 2025–2026. Only publish as this scoped secondary historic example, not a current Dhaka quote. Other requested numeric species prices remain incomplete; budget helpers are not market rates.

All species have real photographs, but some morphs still lack matching photos (e.g. budgie exhibition/ino/pied and turquoise GCC). Never recolour, generate or misidentify photos to fill gaps. Six source-only and three collective-stock-credit photos have unconfirmed per-file rights. New Pearl/Whiteface images come from mauricioc08/Sitas-e-Peculiar pinned at 0459c1f85d16d4854b8fc27c9aa8f2141355d1c9; README names Unsplash collectively but does not supply individual creators or original pages. Do not falsely label them CC or permission-cleared.

## Tools and network

Read cloud-environment runtime skill first. Network requests and Chromium need shell escalation. Proxy allows ordinary github.com public HTML/Git and raw.githubusercontent.com existing files; rejects Commons, veterinary sources, local market sources, api.github.com and the production host. Use legitimate public source files, not relay/proxy bypasses. No broad Full Access/menu guessing: the user already tried. Saved network drafts did not activate; allowed_hosts remained empty and no publication tool was available.

Git HTTPS push works despite unavailable API/CLI auth. Public GitHub Actions HTML exposes exact commit run status. /tmp/verify_pakhi_actions.py was used to match exact HEAD; do not rely on an older successful run. Actual Pages URL from public GitHub run/sidebar metadata is http://tanzilahmed.tech/pakhiatlas/. Configure-pages origin/base outputs stay authoritative; no CNAME changes. A successful Actions deployment is distinct from fetching the live host, which remains blocked.

## Verification and commands

Use Node24, npm ci, ASTRO_TELEMETRY_DISABLED=1 npm run check, npm run build, npm test. Preview port4321 with /pakhiatlas base; npm run test:browser uses system Chromium. Tests cover all species in both languages, multilingual alias queries, synchronized filters, four feeding anchors, all foods and combined filters, gallery decoding, PhotoSwipe/variety zoom, central source/original/license links, comparison/finder/budget, bookmarks, no-JS/storage fallbacks and three widths. Test root/custom-origin build separately, then restore project-subpath output. See VALIDATION.md for actual results and deployment evidence.
