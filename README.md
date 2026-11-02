# pakhiatlas

# PakhiAtlas · পাখির যত্ন, জানার সবকিছু।

Bilingual, entirely static bird encyclopedia and care reference for Bangladesh. Astro 7, TypeScript, Tailwind 4, Markdown Content Collections and local multilingual Pagefind. No backend, accounts, analytics, AI/API runtime or paid service.

**Research edition, not a complete verified encyclopedia.** Forty companion profiles, five native-bird identification entries and twenty-four guides in both languages are presented as reader-facing articles, with internal research status recorded in docs/COVERAGE.md. Direct source research was network-blocked. No legal permission, local availability or veterinary review is claimed. See [coverage](docs/COVERAGE.md).

All 45 published bird profiles have real local photographs: 65 photos, 180 responsive variants. Blue budgie and bird-focused lutino cockatiel covers, five photographed cockatiel colour forms, full-frame card previews and natural-ratio profile photos and local PhotoSwipe galleries are included. [Photo provenance](docs/MEDIA_SOURCES.md) distinguishes explicit license evidence from source-only credits; all public attribution is on one localized Sources & acknowledgements page.

The main-navigation Feeding hub highlights the cockatiel plan, cockatiel seed planner with ingredient selection, stock, cost and measured-use calculations, balanced diet, gradual food transition, species chapters and all 26 foods with practical filters. A second new guide covers backup care and transport. Four priority profiles have expanded bilingual arrival, housing, daily care, behaviour and FAQ chapters. The bird explorer combines synchronized group, name, sound, size and interaction filters.

## Develop

Node 24 and npm: `npm ci`, `npm run dev`. Validate with `npm run check`, `npm run build`, `npm test`. In restricted machines set `ASTRO_TELEMETRY_DISABLED=1`. Build generates Pagefind indexes in both languages. Preview with `npm run preview`; dev mode has no generated search index.

## Edit

[Content guide](docs/CONTENT_GUIDE.md), [research standards](docs/RESEARCH_STANDARDS.md), [inventory](docs/research-inventory.json), [AI instructions](AGENTS.md). Use `npm run new:bird -- slug` or `npm run new:guide -- slug`, complete both language files, update source metadata and canonical bird facts, validate, commit and push.

## GitHub Pages only

In repository **Settings → Pages → Build and deployment → Source**, choose **GitHub Actions** if not already selected. The deployment workflow validates content, checks TypeScript, builds/indexes, validates internal links, uploads the official Pages artifact and uses `actions/deploy-pages`. No PAT is required by Actions. Read the deployed URL from the successful deployment; do not assume the account has no custom domain. No CNAME is created.

Local fallback origin/base is `https://tanzilamd.github.io` and `/pakhiatlas`. Actions uses actual `configure-pages` outputs so an inherited custom user domain is respected. For another deployment test set `SITE_URL` (origin) and `BASE_PATH` before build and tests.

The owner must verify current sources and law before treating this draft edition as a trusted care resource. See docs/AI_HANDOFF.md for external access blockers.

## Photos, tools and evidence limits

Reading lists work entirely in browser storage, migrate older saved entries and retain article identity across languages. Run `npm run test:browser` with preview running for functional checks, including photo decoding, viewer controls, food filters, feeding routes and central attribution.

The explorer includes every canonical species; varieties stay inside profiles. Tools compare practical care differences, build a readiness-based shortlist, check foods and calculate user-entered taka budgets. prices.json records one scoped, archived secondary Bangladesh budgie range (2025–2026 per adult bird). It is not a current Dhaka survey. Current prices for cockatiel, lovebirds and conures remain a research gap; no demo/foreign rates were substituted. See [price research](docs/PRICE_RESEARCH.md) and [feeding corrections](docs/FEEDING_REVIEW.md).

Public GitHub Actions data confirms previous Pages deployments succeeded. GitHub reports the Pages URL as http://tanzilahmed.tech/pakhiatlas/; direct live-host requests remain denied by the runner network. Exact latest workflow evidence is recorded in docs/VALIDATION.md. Environment Publish and GitHub Pages deployment are separate operations.

The [seed planner](docs/SEED_PLANNER.md) preserves the owner's10.7kg note separately from dietary evidence. Single or multiple ingredients can be excluded while retaining the remaining relative ratios. Common care procedures are centralized in guides instead of copied across profiles; see [content ownership](docs/CONTENT_OWNERSHIP.md). Duplicate-paragraph validation runs during builds.
