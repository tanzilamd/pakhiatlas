import {readdir, readFile, access} from 'node:fs/promises';
import assert from 'node:assert/strict';
import {topicIds} from '../src/data/guide-topics.ts';
import {references} from '../src/data/references.ts';
const birds=JSON.parse(await readFile('src/data/birds.json','utf8'));
const wildlife=JSON.parse(await readFile('src/data/wildlife.json','utf8'));
let total=0;const guideTopicBySlug=new Map();
for(const collection of ['birds','guides','wildlife']) {
  const pairs=[];
  for(const language of ['bn','en']) {
    const files=(await readdir(`src/content/${collection}/${language}`)).filter(f=>f.endsWith('.md')).sort();
    pairs.push(files);
    for(const file of files) {
      const text=await readFile(`src/content/${collection}/${language}/${file}`,'utf8');
      const meta=JSON.parse(text.split('---')[1]);
      assert.equal(meta.language,language,file);for(const guide of meta.relatedGuides||[]){assert(/^[a-z0-9-]+$/.test(guide));await access(`src/content/guides/${language}/${guide}.md`)}
      assert.equal(meta.slug+'.md',file);
      if(collection==='guides'){assert(topicIds.includes(meta.topic),`Missing or invalid guide topic: ${file}`);if(guideTopicBySlug.has(meta.slug))assert.equal(meta.topic,guideTopicBySlug.get(meta.slug),`Guide topic differs across translations: ${file}`);else guideTopicBySlug.set(meta.slug,meta.topic)}
      assert(meta.summary.length>20);
      assert(meta.sources.length>0);
      meta.sources.forEach(key=>assert(references[key],`Unknown reference ${key}: ${file}`));
      assert.equal(meta.contentStatus,'editorial-draft'); // Internal review state, never a public label.
      assert(!text.includes('TODO'));
      if(collection!=='guides') assert((collection==='birds'?birds:wildlife).some(b=>b.slug===meta.slug),`Missing canonical species: ${file}`);
      total++;
    }
  }
  assert.deepEqual(pairs[0],pairs[1],`Translation parity: ${collection}`);
}
for(const collection of [birds,wildlife]) assert.equal(new Set(collection.map(b=>b.slug)).size,collection.length,'Duplicate species slug');
assert(!wildlife.some(w=>birds.some(b=>b.slug===w.slug)),'Native entries must stay separate from companion recommendations');
const varieties=JSON.parse(await readFile('src/data/varieties.json','utf8'));
varieties.forEach(v=>assert([...birds,...wildlife].some(b=>b.slug===v.species),`Unknown variety species ${v.species}`));
assert.equal(new Set(varieties.map(v=>v.id)).size,varieties.length,'Duplicate variety id');
const photos=JSON.parse(await readFile('src/data/photos.json','utf8'));
assert.equal(new Set(photos.map(p=>p.id)).size,photos.length,'Duplicate photograph');
for(const species of [...birds,...wildlife]) {
  assert(photos.some(p=>p.species===species.slug),'Missing real photograph for '+species.slug);
  assert(photos.filter(p=>p.species===species.slug&&p.primary).length<=1,'Multiple primary photos for '+species.slug);
}
for(const photo of photos) {
  for(const id of photo.varietyIds||[]) assert(varieties.some(v=>v.id===id&&v.species===photo.species),'Invalid photograph variety '+id);
  assert([...birds,...wildlife].some(b=>b.slug===photo.species));
  if(photo.license==='Stock-source-collection') assert(photo.licenseConfirmed===false&&photo.rightsStatus==='collection-credits-only','Do not invent per-file stock permission');
  if(photo.license==='Source credit') assert(photo.rightsStatus==='not-stated'&&photo.licenseConfirmed===false&&photo.sourceAttributionOnly===true,'Do not invent an image reuse grant');
  for(const key of ['creator','sourceUrl','license','licenseUrl','altBn','altEn']) assert(photo[key],`Missing photo credit ${key}`);
  for(const variant of photo.srcset) {
    assert(/^\/images\/[a-z0-9-]+\.webp$/.test(variant.src),'Unsafe photo path');
    await access('public'+variant.src);
  }
}
const traits=JSON.parse(await readFile('src/data/care-traits.json','utf8'));
for(const bird of birds){const values=traits.species[bird.slug];assert(values,'Missing care traits for '+bird.slug);for(const key of Object.keys(traits.labels))assert(traits.labels[key][values[key]],'Unknown care trait '+bird.slug+' '+key);assert(values.watchOut.length===2)}
const foods=JSON.parse(await readFile('src/data/foods.json','utf8'));for(const food of foods){assert(references[food.source],'Unknown food source');assert(['fruit','vegetables','grains','protein','other'].includes(food.group),'Unknown food group');assert(['danger','conditional','appropriate','avoid','evidence'].includes(food.category));}
console.log(`Validated ${total} localized articles, canonical species and translation parity; ${varieties.length} variety groups; ${photos.length} real photo records.`);

const prices=JSON.parse(await readFile('src/data/prices.json','utf8'));for(const p of prices){assert(birds.some(b=>b.slug===p.species));assert(references[p.source]);assert.equal(p.currency,'BDT');assert.equal(p.unit,'bird');assert.equal(p.dhakaConfirmed,false);for(const range of p.ranges){assert(range.min>0&&range.max>=range.min);assert(range.bn&&range.en)}}

const seedMixes=JSON.parse(await readFile('src/data/seed-mixes.json','utf8'));for(const mix of seedMixes){assert(birds.some(b=>b.slug===mix.species));assert(references[mix.source]&&references[mix.evidence]);assert.equal(mix.completeDiet,false);assert.equal(mix.ingredients.reduce((n,i)=>n+i.grams,0),mix.originalTotalGrams);assert.equal(new Set(mix.ingredients.map(i=>i.id)).size,mix.ingredients.length);for(const i of mix.ingredients)assert(Number.isFinite(i.grams)&&i.grams>0&&i.bn&&i.en);if(mix.kind==='owner-note')assert.equal(mix.nutritionValidated,false);if(mix.id==='cockatiel-owner-note')assert(mix.ingredients.some(i=>i.id==='guji-tili'&&i.needsIdentity===true))}

const {duplicateBlocks}=await import('./content-duplicates.mjs');const repeated=await duplicateBlocks();assert.equal(repeated.length,0,'Repeated long prose: '+repeated.map(d=>d.files.join(", " )).join("; "));
