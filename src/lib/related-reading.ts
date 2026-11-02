import type {GuideTopic} from '../data/guide-topics';
const byTopic:Record<GuideTopic,string[]>={
 'getting-started':['first-bird','quarantine','responsible-acquisition','dhaka-bird-budget','travel-care'],
 feeding:['balanced-diet','cockatiel-feeding','seed-mix','food-transition','daily-routine'],
 everyday:['safe-home','daily-routine','sleep-and-light','bangladesh-weather','bathing-and-molt','cleaning-and-droppings'],
 behaviour:['trust-training','enrichment','multiple-birds','quarantine'],
 health:['illness-emergency','droppings','daily-health-check','quarantine','travel-care'],
 breeding:['breeding-readiness','breeding-welfare','illness-emergency','balanced-diet'],
 wildlife:['wild-bird-observation'],
};
export function relatedGuideSlugs(collection:string,slug:string,topic?:GuideTopic,explicit:string[]=[]){
 let suggested:string[];
 if(collection==='wildlife'||topic==='wildlife')suggested=['wild-bird-observation','travel-care'];
 else if(collection==='guides'&&topic)suggested=byTopic[topic];
 else if(slug==='cockatiel')suggested=['cockatiel-feeding','seed-mix','daily-routine','droppings','dhaka-bird-budget'];
 else if(slug==='budgerigar')suggested=['seed-mix','balanced-diet','trust-training','dhaka-bird-budget'];
 else if(slug.includes('conure'))suggested=['trust-training','enrichment','multiple-birds','dhaka-bird-budget'];
 else if(slug.includes('lovebird'))suggested=['multiple-birds','breeding-readiness','balanced-diet','dhaka-bird-budget'];
 else suggested=['first-bird','balanced-diet','illness-emergency','droppings'];
 return [...new Set([...explicit,...suggested])].filter(s=>s!==slug);
}
