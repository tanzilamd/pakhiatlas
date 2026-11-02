export type Bookmark = {collection:'birds'|'guides'|'wildlife';slug:string};
const KEY='pakhiatlas.bookmarks.v1';
const valid=(b:unknown):b is Bookmark=>typeof b==='object'&&b!==null&&['birds','guides','wildlife'].includes((b as Bookmark).collection)&&typeof (b as Bookmark).slug==='string'&&/^[a-z0-9-]+$/.test((b as Bookmark).slug);
export const identity=(b:Bookmark)=>`${b.collection}/${b.slug}`;
export function readBookmarks():Bookmark[]{
 try{
  const parsed=JSON.parse(localStorage.getItem(KEY)||'[]');
  const records:Bookmark[]=Array.isArray(parsed)?parsed.filter(valid):[];
  const legacy:string[]=[];
  for(let i=0;i<localStorage.length;i++){
   const key=localStorage.key(i)!;if(!key.startsWith('saved:'))continue;
   const parts=(localStorage.getItem(key)||'').split('/').filter(Boolean);
   const b={collection:parts.at(-2),slug:parts.at(-1)};
   if(valid(b)&&!records.some(v=>identity(v)===identity(b)))records.push(b);
   legacy.push(key);
  }
  if(legacy.length){localStorage.setItem(KEY,JSON.stringify(records));legacy.forEach(k=>localStorage.removeItem(k))}
  return records;
 }catch{return []}
}
export function writeBookmarks(records:Bookmark[]):boolean{
 try{localStorage.setItem(KEY,JSON.stringify(records.filter(valid)));return true}catch{return false}
}
