import {readdir,readFile,stat,access} from 'node:fs/promises';import path from 'node:path';import assert from 'node:assert/strict';
const base=(process.env.BASE_PATH??'/pakhiatlas').replace(/\/$/,'');const pages=[];
async function walk(dir){for(const f of await readdir(dir)){const p=path.join(dir,f);if((await stat(p)).isDirectory())await walk(p);else if(p.endsWith('.html'))pages.push(p)}}await walk('dist');
let checked=0;
for(const file of pages){
 const html=await readFile(file,'utf8');assert(html.includes('<h1'),file);const relative=file.replace(/^dist/,'').replace(/index\.html$/,'');const pageURL=new URL(base+relative,'https://local.example');
 for(const match of html.matchAll(/(?:href|src)="([^"#?]+)[^"]*"/g)){
  const raw=match[1].replaceAll('&amp;','&');if(/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(raw))continue;
  const pathname=new URL(raw,pageURL).pathname;assert(pathname===base||pathname.startsWith(base+'/'),`${file}: missing base ${raw}`);let target='dist'+decodeURIComponent(pathname.slice(base.length));if(target.endsWith('/'))target+='index.html';try{await stat(target)}catch{throw new Error(`${file}: broken link ${raw} → ${pathname}`)}checked++;
 }
 if(/\/(?:birds|wildlife)\/[^/]+\/index\.html$/.test(file)){assert(html.includes('hreflang="bn"'),file);assert(html.includes('hreflang="en"'),file);assert(html.includes('data-language='),file)}
}
for(const collection of ['birds','wildlife']){const records=JSON.parse(await readFile(`src/data/${collection}.json`,'utf8'));for(const bird of records)for(const lang of ['bn','en'])await access(`dist/${lang}/${collection}/${bird.slug}/index.html`)}
assert(pages.length>=100);console.log(`${pages.length} HTML pages; ${checked} internal links/assets (including relative article links) resolve under ${base||'/'}.`);
