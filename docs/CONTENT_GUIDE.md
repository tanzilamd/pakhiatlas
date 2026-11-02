# Edit content without a paid tool

বাংলায় সহজ নির্দেশনা: [লেখা কীভাবে সম্পাদনা করবেন](EDITING_BN.md)।

1. Open the repository on GitHub. Navigate to `src/content/birds/en/budgerigar.md` (or another guide/profile). Use the pencil to edit. Keep the JSON frontmatter between `---` intact.
2. Edit the matching `bn` file with the same filename. Keep the same slug and essential information. Use natural Bangla and preserve scientific names.
3. Add sources in `src/data/references.ts`, recording retrieval status honestly. Update the article source keys and actual editorial date. Do not claim a clinical review.
4. For a new species run `npm run new:bird -- stable-slug` locally. Add canonical shared metadata in `src/data/birds.json`. For a guide use `npm run new:guide -- stable-slug`. Fill both drafts and remove scaffold instructions. Routes and lists are automatic.
5. For a photo, verify species and license, download and optimize locally, add creator/rights/original URL to `src/data/photos.json` through the import command below. Never hotlink or assume an image is free.
6. Run `npm ci`, `npm run check`, `npm run build`, `npm test`. Review mobile appearance and both languages. Commit and push to main; Actions builds and deploys when Pages is enabled.

A source-verified publishing status is deliberately not available in this initial schema: expand the schema, source ledger and review process together after real passage-level verification. Internal workflow status remains editorial-draft; it is not a public page label. Back up through Git commits, not a separate CMS.

## Reader-facing presentation and photos

Keep network diagnostics and editorial workflow labels out of the public page copy. Omit unsupported claims or replace them with useful supported guidance; never substitute “verified” or “veterinarian-reviewed” without evidence. Internal frontmatter status and the research ledger remain honest records.

Canonical native entries: src/data/wildlife.json, with paired Markdown in src/content/wildlife/{bn,en}; these render under localized wildlife routes and do not enter companion recommendations. Colour/domestic varieties: src/data/varieties.json. Never assign a species-level scientific identity to a colour mutation.

Real photos: inspect the species and original license, download the permitted file locally, and prepare metadata JSON with creator, sourceUrl, license, licenseUrl, altBn, altEn, speciesConfirmed:true and licenseConfirmed:true. Allowed license identifiers are CC0-1.0, CC-BY-4.0, CC-BY-SA-4.0, CC-BY-3.0, CC-BY-SA-3.0, Public domain. Run `npm run media:add -- species-slug /path/photo.jpg /path/metadata.json`. It produces local responsive WebP variants and updates src/data/photos.json. Repeat for additional views of the same species. These confirmation fields document actual review; do not set them speculatively. The centralized sources page preserves creator/license links. Test the final photos visually, check sizes and attribution, and commit images plus metadata. The importer and gallery have been exercised with 65 distinct photographs across every published species. See MEDIA_SOURCES.md for their exact source evidence. GFDL-1.2-only imports additionally require the received original image, complete license text and appropriate links; do not omit these obligations.

Run `npm run test:browser` with preview on port 4321 to cover photos, reading-list persistence/migration, finder rules, language preference and no-JS/storage fallbacks.

## Cover photos and colour examples

`src/data/media.ts` is the shared photo selector. To choose a cover set `primary:true` on exactly one photo for the species in `src/data/photos.json`. Cockatiel uses the relaxed upright lutino on a rope perch. Other photos remain in its gallery. Keep credits on the localized sources page using PhotoCredit; gallery captions describe the bird. Do not add text overlays to cards.

Add a stable `id` to a variety in `src/data/varieties.json`, with shared species slug and separate `bn/en`, `typeBn/typeEn`, `noteBn/noteEn` text. Put that ID in the photograph’s `varietyIds` only when the actual picture supports the identification. The species article then shows it automatically. The old variety index redirects to the unified explorer. Multiple varieties are not extra species. Never recolour a photo to manufacture a morph.

Current importer also recognises CC BY / BY-SA 2.0, CC BY 2.5, GFDL-1.2-only and Pixabay Content License. `Stock-source-collection` points to collective source credits, not an invented per-file author. Twelve owner-requested source-attributed imports use `license:"Source credit"`, `rightsStatus:"not-stated"`, `sourceAttributionOnly:true`, `licenseConfirmed:false`. Those explicitly do NOT assert a reuse license. Do not silently convert them into confirmed-license records. See MEDIA_SOURCES.md for exact provenance and limitations. Prefer documented reusable replacements when available.

## Comparison, finder and prices

For a new companion species, also add its valid trait assignments and bilingual watchOut note to `src/data/care-traits.json`. Reuse a trait category only when it actually fits; never invent a distinct numeric fact to fill a comparison. `npm run validate:content` checks complete trait coverage. The table defaults to differences only.

Edit readiness rules in `src/lib/finder.ts`, explanations in BirdFinder.astro. Keep welfare gates, no-silent-bird rule, dust caveat and appropriate space/experience matching. Changes must be tested through real UI scenarios.

PhotoSwipe is locally bundled and pinned in package-lock.json; no CDN is required. Gallery stage/thumbnail metadata comes from photos.json and data/media.ts. Use an actual full-body photo where possible, preserve full-width natural-ratio profile framing and full-frame viewers; card previews fill their frames, source credits, normal image anchors and space before the next section. Do not tag a mutation solely from a mislabeled seller image.

No numeric Dhaka market rates are currently published. The budget worksheet adds the reader’s quotes; it is not a price index. Follow PRICE_RESEARCH.md before adding advertised-price data. Do not turn old, sample or foreign-currency prices into current Dhaka estimates.

## Food hub and price maintenance

The feeding hub automatically reads the paired guide collection. Its three featured guide slugs are in `pages/[lang]/feeding.astro`; profile food links use stable `#daily-food`. Food entries in foods.json need one of fruit/vegetables/grains/protein/other plus an existing precaution category and source key. All entries show by default. Keep common aliases in each record instead of making duplicate food cards.

`src/data/prices.json` stores published examples with currency, per-bird unit, period, scope and source ID. `PriceInfo.astro` renders the qualified profile example and practical budget links. Current data is an archived secondary Bangladesh budgie range, not a current Dhaka survey. Add new ranges only with dated actual local evidence; preserve locality, age, variety, asking-price status and per-bird/pair unit. Never convert foreign prices into Bangladesh quotes or price native wildlife.

## Seed planning and content ownership

Edit `src/data/seed-mixes.json` with traceable original gram weights, stable ingredient IDs, bilingual names and source/evidence IDs. The default owner note is12 ingredients totaling10,700g, including sunflower and hemp in the main mix. It is not a clinically validated formulation. Preserve the exact label গুজিতিল and its needsIdentity:true flag until reliable identification. The separate budgie50/50 example retains its narrower manufacturer-composition scope.

See [seed planner](SEED_PLANNER.md) for target/stock modes, optional ingredient omissions, prices and measured-use calculations. Validation requires positive gram weights matching originalTotalGrams, existing species/source keys and completeDiet:false. Never silently replace an ingredient or extend a recipe to other species. The calculator reads data automatically; no route edits are needed. Test changes with `npm test` and `npm run test:seed` (preview running).

See [content ownership](CONTENT_OWNERSHIP.md) before adding common care prose. Keep each procedure in one guide and use frontmatter `relatedGuides:["guide-slug"]` on profiles. Validation checks those guide IDs exist in the same language. `npm run validate:duplicates` reports repeated long paragraphs; content builds invoke it automatically. Keep species-specific context and safety cues; do not remove useful facts to satisfy a word count.

Keep a stable id, paired localized names and useful visible-appearance text for every variety. Link only actually matching photos. Natural colour, domestic breed, sex, mutation and species are separate concepts. A product listing saying colour may vary does not support assigning the picture to its advertised mutation.

## Guide topics and navigation

Each guide's frontmatter needs a `topic` value: getting-started, feeding, everyday, behaviour, health, breeding or wildlife. Use the same topic in its bn/en files. The scaffolder starts with getting-started; change it to the correct topic before publishing. Topic labels and descriptions are in src/data/guide-topics.ts. The library discovers and groups paired guides automatically; do not hand-edit routes. Topic-based related reading is in src/lib/related-reading.ts. The health hub intentionally curates existing guide links; its content is navigation, not another clinical article. See SITE_AUDIT.md and run the full browser suite after changing navigation.
