# Seed planner: maintainable arithmetic, not a diet prescription

Route: `/[lang]/guides/seed-mix/#seed-batch`, through the configured repository base. Links from the Feeding hub and cockatiel guidance lead here. Everything is static/local; no API, backend, current-price feed or account.

## Canonical records

- `src/data/seed-mixes.json`: stable recipe/ingredient IDs, original grams, localized names and evidence keys. Never maintain independent rounded percentages.
- `docs/evidence/cockatiel-owner-note.json`: owner provenance. Original total10,700g: China2000, Kaun1000, paddy2000, safflower1000, barley500, wheat500, গুজিতিল250, flax250, canary seed500, four-millet blend500, sunflower2000, hemp200. The owner explicitly requested all in the main mix.
- গুজিতিল is an unresolved local label, not an established botanical identification. The stable internal ID `guji-tili` is not a scientific identity. Keep needsIdentity:true and contextual identification guidance; never guess Niger seed or mark this recipe nutritionally verified.
- `budgie-5050` retains its separate secondary manufacturer composition evidence in `evidence/seed-composition-5050.json`.

Owner provenance and mathematical accuracy do not establish a balanced diet, feeding allowance, breeding suitability or cross-species approval. Both records have completeDiet:false. The owner note additionally has nutritionValidated:false. Public sources are centralized on the acknowledgements page.

## Calculations

Let each selected ingredient have original weight wᵢ, with selected total W=Σwᵢ. Target batch B uses qᵢ=B×wᵢ/W. Unchecking one or several ingredients renormalizes only selected weights; any remaining pair qᵢ/qⱼ=wᵢ/wⱼ. It does not replace a missing nutrient or establish feeding suitability. No selected ingredients means no result.

Stock mode requires a known stock sᵢ for each selected ingredient and scales by min(sᵢ/wᵢ). Unselected rows do not constrain the batch. Missing stock differs from explicit zero. Target mode can calculate weights without stock; known stock then gives shortages max(qᵢ−sᵢ,0) and leftovers max(sᵢ−qᵢ,0). All stock entries use kg in the UI and grams internally.

Cost per row uses required kg × entered taka/kg. Stock value and top-up cost are separate from used-ingredient cost. Missing prices are unknown, not free. Partial totals are labeled; cost/kg and downstream daily/period costs require complete selected prices. Input prices are the reader's quotes, not surveyed Dhaka rates.

Coverage uses a reader-measured dry allocation d per bird per day, bird count n and planning interval p: days=B/(n×d), full days=floor(days), birds for period=floor(B/(d×p)). This is inventory arithmetic including the reader's allocation/wastage, not a recommended daily feeding dose, actual swallowed intake or storage-life guarantee. Daily allocation starts blank.

## UI and persistence

- Default1kg owner plan has all12 ingredients selected, with static quantities available without JS. Interactive controls remain disabled when JS is unavailable.
- Omitted rows stay visible/dimmed, with quantity/cost outputs removed and stock/price controls disabled. Values survive re-inclusion and recipe switching.
- Optional Save stores form inputs/selects and explicit checkbox state in `localStorage['pakhiatlas:seed-plan:v1']`. No remote data leaves the browser. Reset removes only that key. Storage failures produce a usable message.
- Copy produces a plain-text selected-ingredient shopping list, including identification guidance when applicable. A visible text fallback supports browsers without clipboard access.
- Mobile uses ingredient cards; desktop uses a compact table. Labels, units, focus and error messages remain visible.

## Validation

`src/lib/seed-plan.ts` owns pure calculations. `scripts/test-seed-plan.mjs` checks scaling, omissions, stock bottlenecks, unknown-vs-zero values, invalid input and duration/cost arithmetic. `scripts/test-seed-browser.mjs` checks both languages, selection/none/all, retained values after save/reload, cost/stock modes, no-JS/storage failure and360/768/1440px layouts. Run `npm test` after a build and `npm run test:seed` with preview running on4321. No dependency was added for this feature.
