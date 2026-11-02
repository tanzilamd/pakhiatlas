import {readdir, readFile, access} from 'node:fs/promises';
import assert from 'node:assert/strict';
import {references} from '../src/data/references.ts';
const birds=JSON.parse(await readFile('src/data/birds.json','utf8'));
const wildlife=JSON.parse(await readFile('src/data/wildlife.json','utf8'));
let total=0;
for(const collection of ['birds','guides','wildlife']) {
  const pairs=[];
  for(const language of ['bn','en']) {
    const files=(await readdir(`src/content/${collection}/${language}`)).filter(f=>f.endsWith('.md')).sort();
    pairs.push(files);
    for(const file of files) {
      const text=await readFile(`src/content/${collection}/${language}/${file}`,'utf8');
      const meta=JSON.parse(text.split('---')[1]);
      assert.equal(meta.language,language,file);
      assert.equal(meta.slug+'.md',file);
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
const foods=JSON.parse(await readFile('src/data/foods.json','utf8'));for(const food of foods){assert(references[food.source],'Unknown food source');assert(['danger','conditional','appropriate','avoid','evidence'].includes(food.category));}
console.log(`Validated ${total} localized articles, canonical species and translation parity; ${varieties.length} variety groups; ${photos.length} real photo records.`);
