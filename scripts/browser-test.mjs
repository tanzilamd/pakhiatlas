import {chromium,expect} from '@playwright/test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const birds=JSON.parse(await readFile('src/data/birds.json','utf8'));
const wildlife=JSON.parse(await readFile('src/data/wildlife.json','utf8'));
const root=process.env.PREVIEW_URL||'http://localhost:4321/pakhiatlas';
const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
for(const width of [360,768,1440]){
 await page.setViewportSize({width,height:900});
 for(const route of ['/bn/','/en/','/bn/birds/','/bn/birds/cockatiel/','/en/birds/green-cheeked-conure/','/bn/guides/droppings/','/en/guides/cockatiel-feeding/','/bn/guides/seed-mix/','/bn/tools/#compare','/bn/tools/#finder','/bn/tools/#food','/bn/tools/#budget','/bn/feeding/','/en/feeding/','/bn/sources/','/bn/guides/food-transition/','/en/guides/travel-care/','/bn/birds/blue-crowned-conure/','/en/birds/blue-and-yellow-macaw/']){
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
await page.goto(root+'/bn/birds/');assert(await page.locator('.bird-card .bird-art img').first().evaluate(i=>{const p=i.parentElement.getBoundingClientRect();const r=i.getBoundingClientRect();return getComputedStyle(i).objectFit==='cover'&&Math.abs(p.width-r.width)<1&&Math.abs(p.height-r.height)<1}));assert.equal(await page.locator('[data-bird]:visible').count(),birds.length+wildlife.length);assert.equal(await page.locator('.bird-card').filter({hasText:'যত্নের পরিচিতি'}).count(),0);assert.equal(await page.locator('a[href$="/varieties/"]').count(),0);
for(const group of ['budgies','cockatiels','conures','lovebirds']){
 await page.locator(`button[data-group="${group}"]`).click();const expected=group==='budgies'||group==='cockatiels'?1:birds.filter(b=>b.slug.includes(group==='conures'?'conure':'lovebird')).length;assert.equal(await page.locator('[data-bird]:visible').count(),expected);assert.equal(await page.locator('[name=group]').inputValue(),group);
}
await page.locator('button[data-group=""]').click();await page.locator('[name=name]').fill('ময়না');assert.equal(await page.locator('[data-bird]:visible').count(),2);await page.locator('[type=reset]').click();
for(const [group,family] of [['finches','Finches'],['doves','Doves'],['quail','Quail'],['native','Native']]){await page.locator('[name=group]').selectOption(group);assert.equal(await page.locator('[data-bird]:visible').count(),[...birds,...wildlife].filter(b=>b.family===family).length)}
await page.locator('[type=reset]').click();await page.locator('[name=noise]').selectOption('low');assert.equal(await page.locator('[data-bird]:visible').count(),[...birds,...wildlife].filter(b=>b.noise==='low').length);await page.locator('.extra-filters summary').click();await page.locator('[name=size]').selectOption('small');assert.equal(await page.locator('[data-bird]:visible').count(),[...birds,...wildlife].filter(b=>b.noise==='low'&&b.size==='small').length);
await page.locator('[type=reset]').click();await page.locator('[name=name]').fill('no matching species');assert(await page.locator('#empty').isVisible());await page.locator('[type=reset]').click();await expect(page.locator('[data-bird]:visible')).toHaveCount(birds.length+wildlife.length);
for(const slug of ['budgerigar','cockatiel','peach-faced-lovebird','green-cheeked-conure'])for(const lang of ['bn','en']){await page.goto(`${root}/${lang}/birds/${slug}/`);assert.equal(await page.locator('#daily-food').count(),1);assert(await page.locator('.prose h2').count()>=14);assert.equal(await page.locator('#references').count(),0)}
await page.goto(root+'/bn/birds/budgerigar/');assert((await page.locator('.purchase-budget').innerText()).includes('৩০০–১,২০০'));assert((await page.locator('.gallery-stage img').getAttribute('alt')).includes('নীল'));
await page.goto(root+'/bn/feeding/');assert.equal(await page.locator('[data-food]:visible').count(),26);assert.equal(await page.locator('.feeding-guides a[href$="/guides/cockatiel-feeding/"]').count(),1);await page.locator('.feeding-species a[href*="cockatiel"]').click();assert(page.url().endsWith('/birds/cockatiel/#daily-food'));
for(const legacy of ['wildlife','varieties']){await page.goto(`${root}/bn/${legacy}/`);await page.waitForURL(root+'/bn/birds/');}
await page.goto(root+'/bn/birds/cockatiel/');await page.locator('[data-language]').click();assert.equal(await page.locator('html').getAttribute('lang'),'en');assert(page.url().endsWith('/en/birds/cockatiel/'));
for(const [lang,query,want] of [['en','budgie','Budgerigar'],['bn','বাজরি','বাজরিগার'],['bn','কনুর','কনিউর'],['en','Pyrrhura','Conure'],['bn','বিষ্ঠা','বিষ্ঠা'],['bn','ময়না','ময়না'],['bn','হলুদ টিয়া','টিয়া'],['bn','সিড','সিড'],['en','Thectocercus','Conure'],['bn','ম্যাকাও','ম্যাকাও']]){
 await page.goto(`${root}/${lang}/search/?q=${encodeURIComponent(query)}`);await page.locator('.pagefind-ui__result-link').first().waitFor({timeout:15000});assert((await page.locator('.pagefind-ui__results').textContent()).includes(want));assert((await page.locator('.pagefind-ui__result-link').first().getAttribute('href')).includes(`/pakhiatlas/${lang}/`));
}
assert.deepEqual(errors,[]);console.log(`Browser checks passed: ${birds.length+wildlife.length} species in both languages; unified filters and legacy redirects; ten multilingual searches; all four tools and article galleries at three viewports; no page errors or sampled document overflow.`);await browser.close();
