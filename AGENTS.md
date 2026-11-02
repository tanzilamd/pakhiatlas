# PakhiAtlas contributor contract

Static Astro 7 + TypeScript + Tailwind 4 + Pagefind. GitHub Pages only. No backend, accounts, analytics, runtime APIs or AI services. Use the current isolated checkout; do not create worktrees unless requested.

## Architecture
- `src/data/birds.json`: canonical taxonomy, aliases, display traits. One slug per species; morphs and domestic breeds are not species.
- `src/content/{birds,guides}/{bn,en}/*.md`: paired localized prose with JSON frontmatter (valid YAML). Content Collections validate records.
- `src/data/references.ts`: reference ledger; links are currently unverified leads. Never treat the existing drafts as verified source material.
- `src/data/foods.json`: qualified food entries, sources and bilingual text.
- `src/data/site.ts`: base-aware URL helper. Every local path must use it.
- `src/pages/[lang]`: static routes; shared-slug language switch. `Layout.astro` provides global controls and metadata.

## Non-negotiable editorial rules
All current articles are editorial drafts because source retrieval was blocked. Preserve useful detail; remove repetition rather than shortening for a word-count target. Keep source status visible in the footer and article reference section; the owner explicitly requested no header research banner. Never claim verification without evidence. Read docs/COVERAGE.md and docs/RESEARCH_STANDARDS.md first. Keep legal information brief, avoid unverified legal assurances, and do not equate CITES with domestic legality. No wild-caught pet promotion. No diagnosis by droppings colour, medication doses, amateur hand-feeding procedures, invented measurements or veterinarian endorsements. Passage-level source mapping and review are required before promoting a draft. No fake or misidentified photos. Keep English/Bangla essential information equivalent and natural, with a stable shared slug. Do not replace Bangla prose with untranslated English.

## Commands and delivery
`npm ci`; `npm run dev`; `npm run check`; `npm run build`; `npm test`. Set ASTRO_TELEMETRY_DISABLED=1 in restricted machines. Scaffolds: `npm run new:bird -- slug`, `npm run new:guide -- slug` (templates intentionally fail validation until written). Check browser behavior at 360, 768 and 1440px. Test language links, local search, tools and keyboard use. Never claim tests you did not execute.
Actions uses configure-pages origin/base outputs and official deploy-pages. Do not change CNAME or custom domains. Verify actual API and deployed URL before claiming deployment. Preserve legitimate repository author identity; no AI coauthor trailers. See docs/CONTENT_GUIDE.md.
