# Edit content without a paid tool

1. Open the repository on GitHub. Navigate to `src/content/birds/en/budgerigar.md` (or another guide/profile). Use the pencil to edit. Keep the JSON frontmatter between `---` intact.
2. Edit the matching `bn` file with the same filename. Keep the same slug and essential information. Use natural Bangla and preserve scientific names.
3. Add sources in `src/data/references.ts`, recording retrieval status honestly. Update the article source keys and actual editorial date. Do not claim a clinical review.
4. For a new species run `npm run new:bird -- stable-slug` locally. Add canonical shared metadata in `src/data/birds.json`. For a guide use `npm run new:guide -- stable-slug`. Fill both drafts and remove scaffold instructions. Routes and lists are automatic.
5. For a photo, verify species and license, download and optimize locally, add creator/license/original URL to `public/images/manifest.json`, and set the canonical image path. Never hotlink or assume an image is free.
6. Run `npm ci`, `npm run check`, `npm run build`, `npm test`. Review mobile appearance and both languages. Commit and push to main; Actions builds and deploys when Pages is enabled.

A source-verified publishing status is deliberately not available in this initial schema: expand the schema, source ledger and review process together after real passage-level verification. Current content remains transparently marked as draft. Back up through Git commits, not a separate CMS.

## Reader-facing presentation and photos

Keep network diagnostics and editorial workflow labels out of the public page copy. Omit unsupported claims or replace them with useful supported guidance; never substitute “verified” or “veterinarian-reviewed” without evidence. Internal frontmatter status and the research ledger remain honest records.

Canonical native entries: src/data/wildlife.json, with paired Markdown in src/content/wildlife/{bn,en}; these render under localized wildlife routes and do not enter companion recommendations. Colour/domestic varieties: src/data/varieties.json. Never assign a species-level scientific identity to a colour mutation.

Real photos: inspect the species and original license, download the permitted file locally, and prepare metadata JSON with creator, sourceUrl, license, licenseUrl, altBn, altEn, speciesConfirmed:true and licenseConfirmed:true. Allowed license identifiers are CC0-1.0, CC-BY-4.0, CC-BY-SA-4.0, CC-BY-3.0, CC-BY-SA-3.0, Public domain. Run `npm run media:add -- species-slug /path/photo.jpg /path/metadata.json`. It produces local responsive WebP variants and updates src/data/photos.json. Repeat for additional views of the same species. These confirmation fields document actual review; do not set them speculatively. The gallery preserves creator/license links. Test the final photos visually, check sizes and attribution, and commit images plus metadata. The importer and gallery have been exercised with six real licensed assets. See MEDIA_SOURCES.md for their exact source evidence. GFDL-1.2-only imports additionally require the received original image, complete license text and appropriate links; do not omit these obligations.

Run `npm run test:browser` with preview on port 4321 to cover photos, reading-list persistence/migration, finder rules, language preference and no-JS/storage fallbacks.
