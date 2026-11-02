# Edit content without a paid tool

1. Open the repository on GitHub. Navigate to `src/content/birds/en/budgerigar.md` (or another guide/profile). Use the pencil to edit. Keep the JSON frontmatter between `---` intact.
2. Edit the matching `bn` file with the same filename. Keep the same slug and essential information. Use natural Bangla and preserve scientific names.
3. Add sources in `src/data/references.ts`, recording retrieval status honestly. Update the article source keys and actual editorial date. Do not claim a clinical review.
4. For a new species run `npm run new:bird -- stable-slug` locally. Add canonical shared metadata in `src/data/birds.json`. For a guide use `npm run new:guide -- stable-slug`. Fill both drafts and remove scaffold instructions. Routes and lists are automatic.
5. For a photo, verify species and license, download and optimize locally, add creator/license/original URL to `public/images/manifest.json`, and set the canonical image path. Never hotlink or assume an image is free.
6. Run `npm ci`, `npm run check`, `npm run build`, `npm test`. Review mobile appearance and both languages. Commit and push to main; Actions builds and deploys when Pages is enabled.

A source-verified publishing status is deliberately not available in this initial schema: expand the schema, source ledger and review process together after real passage-level verification. Current content remains transparently marked as draft. Back up through Git commits, not a separate CMS.
