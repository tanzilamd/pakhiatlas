# PakhiAtlas contributor contract

Static Astro 7 + TypeScript + Tailwind 4 + Pagefind. GitHub Pages only. No backend, accounts, analytics, runtime APIs or AI services. Use the current isolated checkout; do not create worktrees unless requested.

## Architecture
- `src/data/birds.json`: canonical taxonomy, aliases, display traits. One slug per species; morphs and domestic breeds are not species.
- `src/content/{birds,guides}/{bn,en}/*.md`: paired localized prose with JSON frontmatter (valid YAML). Content Collections validate records.
- `src/data/references.ts`: reference ledger; links are currently unverified leads. Never treat the existing drafts as verified source material.
- `src/data/wildlife.json` + `src/content/wildlife`: native educational entries, excluded from companion recommendations.
- `src/data/varieties.json`: colour/domestic varieties linked to canonical species.
- `src/data/photos.json` + `PhotoGallery.astro`: real local photos only; use `npm run media:add` after species/provenance review. Follow the owner’s latest preference: compact credits BELOW profile photos, never over card photos. Preferred cover selection lives in data/media.ts and primary:true metadata; cockatiel cover is lutino. Read docs/MEDIA_SOURCES.md: 38 distinct real photos cover all 31 published species; GFDL assets need full text + received original copy as well as credits. Never restore generic artwork as a species photograph.
- `src/data/foods.json`: qualified food entries, sources and bilingual text.
- `src/data/site.ts`: base-aware URL helper. Every local path must use it.
- `src/pages/[lang]`: static routes; shared-slug language switch. `Layout.astro` provides global controls and metadata.

## Non-negotiable editorial rules
All current articles are editorial drafts because source retrieval was blocked. Preserve useful detail; remove repetition rather than shortening for a word-count target. The owner requests reader-facing editorial presentation without draft labels, network diagnostics or missing-information filler. Keep actual research/access status in docs and metadata. Omit unsupported claims; never label unchecked content as verified or veterinarian-reviewed. Never claim verification without evidence. Read docs/COVERAGE.md and docs/RESEARCH_STANDARDS.md first. Keep legal information brief, avoid unverified legal assurances, and do not equate CITES with domestic legality. No wild-caught pet promotion. No diagnosis by droppings colour, medication doses, amateur hand-feeding procedures, invented measurements or veterinarian endorsements. Passage-level source mapping and review remain required before claiming a verified review. No fake or misidentified photos. Keep English/Bangla essential information equivalent and natural, with a stable shared slug. Do not replace Bangla prose with untranslated English.

## Commands and delivery
`npm ci`; `npm run dev`; `npm run check`; `npm run build`; `npm test`. Set ASTRO_TELEMETRY_DISABLED=1 in restricted machines. Scaffolds: `npm run new:bird -- slug`, `npm run new:guide -- slug` (templates intentionally fail validation until written). Check browser behavior at 360, 768 and 1440px. Test language links, local search, tools and keyboard use. Never claim tests you did not execute.
Actions uses configure-pages origin/base outputs and official deploy-pages. Do not change CNAME or custom domains. Verify actual API and deployed URL before claiming deployment. Preserve legitimate repository author identity; no AI coauthor trailers. See docs/CONTENT_GUIDE.md.

## Photo-first revision
PhotoCredit.astro centralises compact attribution. VarietyGuide.astro links real photos to explicitly matched varietyIds; do not guess genetic mutations from a pale individual. Photographs are enlarged through a keyboard-accessible native dialog with ordinary links as no-JS fallback. Mobile TOC is collapsed initially so the photo appears sooner. New published species require real photos. Prefer clearly licensed sources. The owner explicitly requested completing source-attributed images without waiting for further license research: four records honestly retain rightsStatus:not-stated, licenseConfirmed:false and Source credit; this is not a reuse grant. Never relabel those CC/public-domain or invent a photographer. Three cockatiel stock files retain collection-level credits, with no invented per-file author mapping. See docs/MEDIA_SOURCES.md.
