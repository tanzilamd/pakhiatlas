import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';import sharp from 'sharp';import assert from 'node:assert/strict';
const [species,input,metadata]=process.argv.slice(2);
assert(species&&input&&metadata,'Usage: npm run media:add -- species-slug local-photo.jpg metadata.json');
const birds=JSON.parse(await readFile('src/data/birds.json','utf8'));const wildlife=JSON.parse(await readFile('src/data/wildlife.json','utf8'));assert([...birds,...wildlife].some(b=>b.slug===species),'Unknown canonical species slug');
const meta=JSON.parse(await readFile(metadata,'utf8'));
for(const key of ['creator','sourceUrl','license','licenseUrl','altBn','altEn'])assert(typeof meta[key]==='string'&&meta[key].trim(),`Required photo metadata: ${key}`);
assert(['CC0-1.0','CC-BY-4.0','CC-BY-SA-4.0','CC-BY-3.0','CC-BY-SA-3.0','Public domain','GFDL-1.2-only'].includes(meta.license),'Review the license; unsupported license identifier');
for(const key of ['sourceUrl','licenseUrl'])assert(new URL(meta[key]).protocol==='https:',`${key} must use HTTPS`);
assert(meta.speciesConfirmed===true&&meta.licenseConfirmed===true,'Inspect the species and original license before setting confirmation fields');
const buffer=await readFile(input);const info=await sharp(buffer).metadata();assert(['jpeg','png','webp','avif'].includes(info.format),'Use an actual raster photograph, not SVG artwork');assert(info.width>=400&&info.height>=300,'Photograph is too small');
const id=createHash('sha256').update(buffer).digest('hex').slice(0,12);const photos=JSON.parse(await readFile('src/data/photos.json','utf8'));assert(!photos.some(p=>p.id===id),'Photo already imported');
await mkdir('public/images',{recursive:true});const widths=[400,800,1200].filter(w=>w<=info.width);if(info.width<=1200&&!widths.includes(info.width))widths.push(info.width);if(!widths.length)widths.push(info.width);
let variants=[];let final;
for(const width of widths){const src=`/images/${species}-${id}-${width}.webp`;const result=await sharp(buffer).rotate().resize({width,withoutEnlargement:true}).webp({quality:82}).toFile('public'+src);variants.push({src,width:result.width});final={src,width:result.width,height:result.height}}
photos.push({id,species,...final,srcset:variants,...meta});await writeFile('src/data/photos.json',JSON.stringify(photos,null,2)+'\n');console.log(`Imported ${species}: ${variants.length} optimized sizes, with attribution. Run all validation before committing.`);
