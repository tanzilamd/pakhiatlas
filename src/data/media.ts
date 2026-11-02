import records from './photos.json';
export interface Photo {id:string;species:string;src:string;srcset:{src:string;width:number}[];width:number;height:number;altEn:string;altBn:string;creator:string;sourceUrl:string;license:string;licenseUrl:string;localLicense?:string;originalCopy?:string;changeNotice?:string;primary?:boolean;varietyIds?:string[];captionEn?:string;captionBn?:string;creditLabelEn?:string;creditLabelBn?:string;objectPosition?:string}
export const photos=records as Photo[];
export const photosForSpecies=(species:string)=>photos.filter(p=>p.species===species).sort((a,b)=>Number(Boolean(b.primary))-Number(Boolean(a.primary)));
export const primaryPhoto=(species:string)=>photosForSpecies(species)[0];
