import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const birds=JSON.parse(await readFile('src/data/birds.json','utf8'));
const wildlife=JSON.parse(await readFile('src/data/wildlife.json','utf8'));
const root=process.env.PREVIEW_URL||'http://localhost:4321/pakhiatlas';
const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
for(const width of [360,768,1440]){
 await page.setViewportSize({width,height:900});
 for(const route of ['/bn/','/en/','/bn/birds/','/bn/birds/cockatiel/','/en/birds/green-cheeked-conure/','/bn/guides/droppings/','/en/guides/cockatiel-feeding/','/bn/guides/seed-mix/','/bn/tools/#compare','/bn/tools/#finder','/bn/tools/#food','/bn/tools/#budget']){
  await page.goto(root+route);assert(await page.locator('h1').textContent());assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`overflow ${width} ${route}`);
 }
 await page.goto(root+'/bn/birds/');await page.screenshot({path:`/tmp/pakhi-ux-explorer-${width}.png`,fullPage:true});
}
for(const [collection,records] of [['birds',birds],['wildlife',wildlife]])for(const bird of records)for(const lang of ['bn','en']){
 await page.goto(`${root}/${lang}/${collection}/${bird.slug}/`);
 assert((await page.locator('h1').textContent()).includes(bird[lang]));
 assert.equal(await page.locator('.bird-gallery .gallery-stage img').count(),1);
 assert(!(await page.locator('main').innerText()).includes('খসড়া'));
}
await page.goto(root+'/bn/birds/');assert.equal(await page.locator('[data-bird]:visible').count(),birds.length+wildlife.length);assert.equal(await page.locator('.bird-card').filter({hasText:'যত্নের পরিচিতি'}).count(),0);assert.equal(await page.locator('a[href$="/varieties/"]').count(),0);
for(const group of ['favourites','conures','lovebirds']){
 await page.locator(`[data-group=${group}]`).click();const expected=group==='favourites'?4:birds.filter(b=>b.slug.includes(group==='conures'?'conure':'lovebird')).length;assert.equal(await page.locator('[data-bird]:visible').count(),expected);
}
await page.locator('[data-group=all]').click();await page.locator('[name=name]').fill('ময়না');assert.equal(await page.locator('[data-bird]:visible').count(),2);await page.locator('[type=reset]').click();
for(const family of ['Finches','Doves','Quail','Native']){await page.locator('[name=family]').selectOption(family);assert.equal(await page.locator('[data-bird]:visible').count(),[...birds,...wildlife].filter(b=>b.family===family).length)}
for(const legacy of ['wildlife','varieties']){await page.goto(`${root}/bn/${legacy}/`);await page.waitForURL(root+'/bn/birds/');}
await page.goto(root+'/bn/birds/cockatiel/');await page.locator('[data-language]').click();assert.equal(await page.locator('html').getAttribute('lang'),'en');assert(page.url().endsWith('/en/birds/cockatiel/'));
for(const [lang,query,want] of [['en','budgie','Budgerigar'],['bn','বাজরি','বাজরিগার'],['bn','কনুর','কনিউর'],['en','Pyrrhura','Conure'],['bn','বিষ্ঠা','বিষ্ঠা'],['bn','ময়না','ময়না'],['bn','হলুদ টিয়া','টিয়া'],['bn','সিড','সিড']]){
 await page.goto(`${root}/${lang}/search/?q=${encodeURIComponent(query)}`);await page.locator('.pagefind-ui__result-link').first().waitFor({timeout:15000});assert((await page.locator('.pagefind-ui__results').textContent()).includes(want));assert((await page.locator('.pagefind-ui__result-link').first().getAttribute('href')).includes(`/pakhiatlas/${lang}/`));
}
assert.deepEqual(errors,[]);console.log(`Browser checks passed: ${birds.length+wildlife.length} species in both languages; unified filters and legacy redirects; eight multilingual searches; all four tools and article galleries at three viewports; no page errors or sampled document overflow.`);await browser.close();
