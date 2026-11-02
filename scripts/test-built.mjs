import {readdir,readFile,stat,access} from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
const base=(process.env.BASE_PATH??'/pakhiatlas').replace(/\/$/,'');
const files=[];
async function walk(dir){for(const f of await readdir(dir)){const p=path.join(dir,f);if((await stat(p)).isDirectory())await walk(p);else if(p.endsWith('.html'))files.push(p)}}
await walk('dist');
const decode=s=>s.replace(/&#x([\da-f]+);/gi,(_,n)=>String.fromCodePoint(parseInt(n,16))).replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(Number(n))).replaceAll('&quot;','"').replaceAll('&apos;',"'").replaceAll('&amp;','&');
const pages=new Map();
for(const file of files){
 const html=await readFile(file,'utf8');
 assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length,1,`${file}: expected one main heading`);
 const ids=[...html.matchAll(/\sid="([^"]*)"/g)].map(m=>decode(m[1]));
 assert.equal(ids.length,new Set(ids).size,`${file}: duplicate element id`);
 for(const image of html.matchAll(/<img\b[^>]*>/g)){
  assert(/\salt="[^"]*"/.test(image[0]),`${file}: image missing alt attribute`);
  assert(/\swidth="\d+"/.test(image[0])&&/\sheight="\d+"/.test(image[0]),`${file}: image dimensions missing`);
 }
 const relative=file.replace(/^dist/,'').replace(/index\.html$/,'');
 pages.set(file,{html,ids:new Set(ids),pageURL:new URL(base+relative,'https://local.example')});
}
let checked=0,fragments=0,responsive=0;
for(const [file,{html,pageURL}] of pages){
 const urls=[...html.matchAll(/(?:href|src)="([^"]+)"/g)].map(m=>decode(m[1]));
 for(const match of html.matchAll(/\bsrcset="([^"]+)"/g))for(const item of decode(match[1]).split(',')){urls.push(item.trim().split(/\s+/)[0]);responsive++}
 for(const raw of urls){
  if(/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(raw))continue;
  const dest=new URL(raw,pageURL);const pathname=dest.pathname;
  assert(pathname===base||pathname.startsWith(base+'/'),`${file}: missing base ${raw}`);
  let target='dist'+decodeURIComponent(pathname.slice(base.length));if(target.endsWith('/'))target+='index.html';
  try{await stat(target)}catch{throw new Error(`${file}: broken link ${raw} → ${pathname}`)}checked++;
  if(dest.hash&&pages.has(target)){assert(pages.get(target).ids.has(decodeURIComponent(dest.hash.slice(1))),`${file}: missing fragment target ${raw}`);fragments++}
 }
 if(/^dist\/(bn|en)\//.test(file)){
  assert(html.includes('hreflang="bn"'),file);assert(html.includes('hreflang="en"'),file);assert(html.includes('data-language='),file);
  const canonical=html.match(/rel="canonical" href="([^"]+)"/);assert(canonical&&new URL(decode(canonical[1])).pathname.startsWith(base+'/'),`${file}: canonical is not base-aware`);
 }
 for(const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g))assert.doesNotThrow(()=>JSON.parse(match[1]),`${file}: invalid structured data`);
}
for(const collection of ['birds','wildlife']){
 const records=JSON.parse(await readFile(`src/data/${collection}.json`,'utf8'));
 for(const bird of records)for(const lang of ['bn','en'])await access(`dist/${lang}/${collection}/${bird.slug}/index.html`);
}
let sitemapURLs=0;for(const file of (await readdir('dist')).filter(f=>/^sitemap.*\.xml$/.test(f))){const xml=await readFile('dist/'+file,'utf8');for(const match of xml.matchAll(/<loc>([^<]+)<\/loc>/g)){const address=new URL(decode(match[1]));assert(address.pathname.startsWith(base+'/'),'Sitemap URL misses base');let target='dist'+decodeURIComponent(address.pathname.slice(base.length));if(target.endsWith('/'))target+='index.html';await access(target);if(pages.has(target))assert(!pages.get(target).html.includes('content="noindex"'),'Sitemap includes noindex page: '+target);sitemapURLs++}}
assert(sitemapURLs>100);assert(files.length>=100);
console.log(`${files.length} HTML pages; ${checked} internal links/assets (including ${responsive} responsive image candidates) and ${fragments} fragment targets resolve under ${base||'/'}. Unique IDs, image attributes, localized metadata, JSON-LD and sitemap targets pass.`);
