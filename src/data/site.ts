export type Lang = 'bn' | 'en';
export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (path:string = '') => `${base}/${path.replace(/^\//,'')}`;
export const t = (lang:Lang, en:string, bn:string) => lang === 'bn' ? bn : en;
export const labels = {small:['Small','ছোট'],medium:['Medium','মাঝারি'],large:['Large','বড়'],low:['Lower','তুলনামূলক কম'],moderate:['Moderate','মাঝারি'],high:['Higher','তুলনামূলক বেশি'],beginner:['Starting out','নতুন'],intermediate:['Some experience','কিছু অভিজ্ঞতা'],experienced:['Experienced','অভিজ্ঞ']} as const;
