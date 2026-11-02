# PakhiAtlas — continuation handoff

Updated 2026-11-02. This file preserves the user’s project request, latest preferences, actual results and blockers for a new chat. Read it before making changes. Implementation baseline: `43defc8d332736c9d6811ae7c05013da6248aba5`, pushed to main. Later commits may update this handoff; inspect the actual checkout and remote first.

## Latest continuation update — read this before older baseline sections

Six real bird photographs have now been obtained from existing public assets in mibermar/pruebaOpenCode (pinned commit and per-file author/license evidence recorded in docs/MEDIA_SOURCES.md). No proxy relay or blocked-domain workaround was used: ordinary public GitHub pages, Git and raw.githubusercontent.com worked. This route was overlooked in the earlier baseline. Do not assume all photo access is impossible merely because Commons is blocked.

Current state: 26 companion + 5 native profiles + 18 guides, each in bn/en (98 articles); 11 variety groups; 17 food entries; 6 distinct photos (5 companion species + ringneck). Responsive local galleries and credits are tested, but 25 species remain unpictured. Full GFDL text and the received original JPEG accompany the budgerigar image. Read MEDIA_SOURCES.md before changing license handling. Public credits are compact; do not remove necessary attribution.

Finished reading list /saved/ with migration from the old saved:slug keys, persistent locale-independent identities and removal. Finder now requires explicit answers and considers experience. Root language preference and no-JS navigation work. Browser tests: npm run test:browser (preview required).

Deployment discovery: public https://github.com/tanzilamd/pakhiatlas/actions exposes successful previous workflow runs despite api.github.com being blocked. The public repository sidebar JSON reports pagesUrl http://tanzilahmed.tech/pakhiatlas/. Prior implementation run 41424725631 for 0013479 succeeded. Direct live-host requests are still proxy-denied. Verify the newest run by its exact commit, not an older success. Do not confuse environment publication failure with Pages deployment failure. No custom-domain change was made.

The older baseline below is historical context; this update supersedes its counts, zero-photo statement and assumption that Pages status could not be read at all. Primary medical-source passage verification and direct live endpoint verification remain incomplete.

## User goal and authorization

Build and finish PakhiAtlas, a useful bilingual Bangla/English Bangladesh-focused bird encyclopedia and A-to-Z care resource. This is an ongoing implementation request, not a request for another plan. Existing repository: https://github.com/tanzilamd/pakhiatlas. The user authorized necessary additions, modifications and removals, testing, commits, pushing to main and GitHub Pages deployment. Preserve unrelated work. Do not change custom-domain settings without separate permission. The latest request is to move the task to a new chat without losing context; a new chat was not automatically created.

## Latest editorial preferences — apply these over older conflicting notes

- Use natural, coherent Bangla, like an experienced Bengali writer. Avoid literal translations and sentence fragments. Prior edits rewrote much of the Bangla; still assess quality critically.
- Keep useful depth; do not shorten simply for a word count. Remove repetition and organise for scanning rather than stripping information.
- No public draft/research-version banners, repeated missing-source explanations, “could not find this fact” paragraphs, or environment/network diagnostics in site copy. They have been removed. Internal review metadata and factual research logs remain private development records, not public labels.
- Removing draft labels does NOT authorize invented information or false “verified”/veterinarian-reviewed claims. Unsupported details should be omitted or replaced with useful supported guidance.
- User specifically dislikes breeding-age paragraphs explaining that a number is unavailable. Those were removed. Provide meaningful reproductive guidance; exact ages only with reliable support. A breeding-age heading is not mandatory.
- Legal discussion should be brief. Do not invent permissions or promote wild-caught birds. Native species are separate educational entries, not ordinary pet-shopping recommendations.
- Real, correctly identified, legally reusable photographs are the top unresolved priority. Multiple views per species are welcome. No dummy photographs or generic bird artwork as species images. Generic species artwork and its file were deleted; do not restore it to pretend the photo task is complete.
- Add familiar birds and varieties users encounter in markets, but do not claim that market presence proves legal availability or local evidence. User specifically mentioned tiya, moyna and holud tiya. Ringneck, Alexandrine, plum-headed parakeet, hill myna and common myna now have native educational pages. Explain that “yellow parrot” is ambiguous and lutino is a colour form, not a species.
- Help prospective keepers assess daily demands, sound, droppings, wet waste, odour and cleaning. Do not invent species odour rankings or diagnose disease by dropping colour. Qualified cleaning/droppings sections were added.

## Fixed technical requirements

Astro static output, TypeScript, Tailwind, Markdown Content Collections, Pagefind multilingual search; GitHub Pages ONLY for production. No backend, database, accounts, CMS, runtime AI/API, analytics, ads or paid service. Local assets and minimal JavaScript. Bangla default, /bn and /en routes, shared-slug language switching, base-aware links/assets/canonicals/sitemaps. Keep species, subspecies, colour mutations and domestic breeds distinct.

## Actual current implementation

- Astro 7.4.4, Node 24, pinned dependencies + package-lock. Tailwind 4, Pagefind.
- 26 companion/aviary profiles + 5 native educational profiles + 14 care guides, EACH in bn/en: 90 localized articles total.
- 11 grouped variety records linked to canonical species. Not 11 newly invented species.
- Search, alias search, bird filters, 2–3 bird comparison (including cleaning notes), rule-based finder, food checker, theme, local bookmarks, copy/print, TOC, related links and metadata.
- Localized native routes /bn/wildlife/<slug>/ and /en/wildlife/<slug>/, excluded from companion recommendations. Variety index at /bn/varieties/ and /en/varieties/.
- No actual species photos yet. Empty src/data/photos.json is intentional, not an implemented photo library.
- PhotoGallery.astro supports responsive local pictures and attribution. `npm run media:add -- species-slug local-photo.jpg metadata.json` validates metadata and produces WebP variants. See CONTENT_GUIDE.md. Syntax checked only: a real licensed-asset import/live gallery branch has NOT been validated.
- Homepage now uses practical reading links rather than the generic bird illustration. Medical droppings schematic remains correctly labelled as an illustration.
- GitHub Actions builds, checks, indexes, validates links and deploys through official Pages actions. configure-pages supplies actual origin/base, including an inherited custom user domain. No CNAME was added.

## Files and commands

Read AGENTS.md, docs/COVERAGE.md, docs/CONTENT_GUIDE.md, docs/RESEARCH_STANDARDS.md, docs/SOURCES.md and docs/VALIDATION.md.

Canonical data: src/data/birds.json, wildlife.json, varieties.json, photos.json, foods.json, references.ts.
Articles: src/content/{birds,wildlife,guides}/{bn,en}/*.md. Frontmatter is JSON between --- delimiters (valid YAML). Internal contentStatus remains editorial-draft; this is not rendered as a public status.

`npm ci`
`ASTRO_TELEMETRY_DISABLED=1 npm run check`
`ASTRO_TELEMETRY_DISABLED=1 npm run build`
`npm test`
`npm run preview` (port 4321)
`node scripts/browser-test.mjs` (system Chromium /usr/bin/chromium; preview expected at /pakhiatlas)
`npm run new:bird -- stable-slug`, `npm run new:guide -- stable-slug`

Use the existing isolated checkout; no worktree unless explicitly requested. Last working directory was /workspace/pakhiatlas. Preview processes do not survive a new environment: start one again if needed.

## Last executed checks — distinguish from production verification

- Astro check: zero errors, warnings and hints.
- 110 generated HTML pages, 90 indexed localized articles, separate en/bn Pagefind indexes.
- 2,392 internal links/assets resolve under /pakhiatlas, and a separate root/custom-origin build also passed.
- Browser: all companion/native article routes, context-preserving language switch, representative 360/768/1440 widths, variants, filters, comparison, finder, food and seven multilingual searches (including Bengali myna/yellow-parrot terms). No page errors.
- Mobile Bangla budgerigar page visually inspected at 390px; duplicate overview removed and quick facts compacted.
- npm audit reported zero vulnerabilities.
- No independent clinical review, passage-level external fact verification, real-photo audit or actual production deployment verification was completed. Do not claim otherwise.

## Concrete access blocker and UI history — do not repeat previous guesses

The managed environment proxy denied Commons, veterinary-reference and GitHub API requests with CONNECT/403 even when exec used the permitted escalation. Git HTTPS read/push WORKS; API access is a separate capability. Do not ask for a PAT merely because API calls fail or a CLI token is absent.

A network draft was saved with these custom domains: api.github.com, avibase.bsc-eoc.org, bdlaws.minlaw.gov.bd, commons.wikimedia.org, docs.astro.build, kb.rspca.org.au, lafeber.com, tanzilahmed.tech, tanzilamd.github.io, upload.wikimedia.org, vcahospitals.com, www.aav.org, www.cdc.gov, www.cites.org, www.merckvetmanual.com, www.msdvetmanual.com. Save responses said requires_publish:true. The running instance still reported allowed_hosts:[], policy state unknown and denied actual requests. Saving a draft did not apply it.

The user could not find environment network settings in the Codex chat UI. Screenshots showed:
1. Chat at chatgpt.com/local/... with Codex sidebar.
2. Top-right menu only Rename, Share, Copy, Archive.
3. “Custom” near composer opens approval choices: Ask for approval / Approve for me / Full access. Its text describes broad action permissions, not a visible domain allowlist.

Previous assistant guesses about those menus were wrong and were acknowledged. Do NOT keep sending the user to guessed menus, assert that “Full access” will fix the cloud allowlist, or ask for broad computer access as a speculative workaround. No known working UI route or activation tool was established. A new chat may have different research/browser/network capabilities: inspect actual available tools and test access early. Use supported access routes, not proxy bypasses. Do not assume the saved draft carries into another chat.

A user-provided link used https://tanzilahmed.tech/pakhiatlas/bn/sources/. Treat that as a reported site URL, not independent verification of current Pages settings or deployment. Do not overwrite domain configuration.

## Recommended next work

1. Inspect actual repo, tool availability and runtime policy. Try legitimate read-only Commons/reference/Pages requests. Use available browsing/research tools if the new chat has them.
2. If access works, acquire correctly licensed species images, verify identification, preserve creator/source/license, optimise locally, populate galleries and visually test them. Never count gallery plumbing as real photos added.
3. Retrieve authoritative references and map major care/taxonomy claims to source passages in the internal ledger. Expand useful verified content and improve bilingual parity as needed. No guessed measurements, doses, incubation timings or availability claims.
4. Test changed functionality, commit with legitimate existing Git identity and push. Do not add AI coauthor trailers or alter global Git configuration.
5. Read actual Pages configuration/Actions results and verify the real live URL. Report blockers honestly if outside access remains unavailable. Do not claim the whole project complete while photo/research/deployment work is blocked.
