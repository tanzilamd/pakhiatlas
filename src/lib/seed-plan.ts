export interface SeedLine {id:string;grams:number}
export interface SeedInputs {mode:'target'|'stock';targetGrams:number;stockKg:Record<string,number|null>;priceKg:Record<string,number|null>}
const nonnegative=(n:number|null|undefined):n is number=>typeof n==='number'&&Number.isFinite(n)&&n>=0;
export function planSeedMix(lines:SeedLine[],input:SeedInputs){
 if(!lines.length||new Set(lines.map(i=>i.id)).size!==lines.length||lines.some(i=>!Number.isFinite(i.grams)||i.grams<=0))throw new Error('Invalid ingredient ratios');
 const base=lines.reduce((n,i)=>n+i.grams,0);
 if(input.mode==='target'&&(!Number.isFinite(input.targetGrams)||input.targetGrams<=0))throw new Error('Enter a positive batch weight');
 for(const map of [input.stockKg,input.priceKg])for(const v of Object.values(map))if(v!==null&&!nonnegative(v))throw new Error('Enter finite, non-negative quantities and prices');
 const stockComplete=lines.every(i=>nonnegative(input.stockKg[i.id]));
 const factor=input.mode==='target'?input.targetGrams/base:stockComplete?Math.min(...lines.map(i=>input.stockKg[i.id]!*1000/i.grams)):null;
 const batchGrams=factor===null?null:base*factor;
 const rows=lines.map(i=>{const stock=nonnegative(input.stockKg[i.id])?input.stockKg[i.id]!*1000:null;const price=nonnegative(input.priceKg[i.id])?input.priceKg[i.id]!:null;const required=factor===null?null:i.grams*factor;return {id:i.id,required,stock,price,usedCost:required===null||price===null?null:required/1000*price,stockValue:stock===null||price===null?null:stock/1000*price,shortfall:required===null||stock===null?null:Math.max(0,required-stock),leftover:required===null||stock===null?null:Math.max(0,stock-required)}});
 const usedPriceComplete=rows.every(i=>i.usedCost!==null);const stockValueComplete=rows.every(i=>i.stockValue!==null);
 const usedCost=rows.reduce((n,i)=>n+(i.usedCost??0),0);const stockValue=rows.reduce((n,i)=>n+(i.stockValue??0),0);
 const topUpComplete=rows.every(i=>i.shortfall!==null&&(i.shortfall<=1e-8||i.price!==null));
 const topUpCost=rows.reduce((n,i)=>n+(i.shortfall??0)/1000*(i.price??0),0);
 const limiting=input.mode==='stock'&&factor!==null?lines.filter(i=>Math.abs(input.stockKg[i.id]!*1000/i.grams-factor)<1e-8).map(i=>i.id):[];
 return {base,batchGrams,rows,stockComplete,usedCost,usedPriceComplete,pricedRows:rows.filter(i=>i.price!==null).length,stockValue,stockValueComplete,topUpCost,topUpComplete,limiting,costPerKg:usedPriceComplete&&batchGrams!==null&&batchGrams>0?usedCost/(batchGrams/1000):null};
}
export function seedCoverage(batchGrams:number,birds:number,dailyGrams:number,periodDays:number,costPerKg:number|null){
 if(!Number.isFinite(batchGrams)||batchGrams<0||!Number.isSafeInteger(birds)||birds<1||!Number.isFinite(dailyGrams)||dailyGrams<=0||!Number.isSafeInteger(periodDays)||periodDays<1)throw new Error('Enter valid positive usage values');
 if(costPerKg!==null&&(!Number.isFinite(costPerKg)||costPerKg<0))throw new Error('Invalid cost');
 const flockDaily=birds*dailyGrams;
 return {days:batchGrams/flockDaily,wholeDays:Math.floor(batchGrams/flockDaily+1e-9),birdsForPeriod:Math.floor(batchGrams/(dailyGrams*periodDays)+1e-9),dailyCost:costPerKg===null?null:flockDaily/1000*costPerKg,periodCost:costPerKg===null?null:flockDaily*periodDays/1000*costPerKg};
}
