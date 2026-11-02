# pakhiatlas

# PakhiAtlas · পাখির যত্ন, জানার সবকিছু।

Bilingual, entirely static bird encyclopedia and care reference for Bangladesh. Astro 7, TypeScript, Tailwind 4, Markdown Content Collections and local multilingual Pagefind. No backend, accounts, analytics, AI/API runtime or paid service.

**Research edition, not a complete verified encyclopedia.** Eight species introductions and nine guides in both languages remain transparently labelled editorial drafts. Direct source research was network-blocked. No legal permission, local availability or veterinary review is claimed. See [coverage](docs/COVERAGE.md).

## Develop

Node 24 and npm: `npm ci`, `npm run dev`. Validate with `npm run check`, `npm run build`, `npm test`. In restricted machines set `ASTRO_TELEMETRY_DISABLED=1`. Build generates Pagefind indexes in both languages. Preview with `npm run preview`; dev mode has no generated search index.

## Edit

[Content guide](docs/CONTENT_GUIDE.md), [research standards](docs/RESEARCH_STANDARDS.md), [inventory](docs/research-inventory.json), [AI instructions](AGENTS.md). Use `npm run new:bird -- slug` or `npm run new:guide -- slug`, complete both language files, update source metadata and canonical bird facts, validate, commit and push.

## GitHub Pages only

In repository **Settings → Pages → Build and deployment → Source**, choose **GitHub Actions** if not already selected. The deployment workflow validates content, checks TypeScript, builds/indexes, validates internal links, uploads the official Pages artifact and uses `actions/deploy-pages`. No PAT is required by Actions. Read the deployed URL from the successful deployment; do not assume the account has no custom domain. No CNAME is created.

Local fallback origin/base is `https://tanzilamd.github.io` and `/pakhiatlas`. Actions uses actual `configure-pages` outputs so an inherited custom user domain is respected. For another deployment test set `SITE_URL` (origin) and `BASE_PATH` before build and tests.

The owner must verify current sources and law before treating this draft edition as a trusted care resource. See docs/AI_HANDOFF.md for external access blockers.
