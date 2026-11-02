import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';
const schema = z.object({title:z.string().min(3), summary:z.string().min(20), language:z.enum(['bn','en']), slug:z.string().regex(/^[a-z0-9-]+$/), reviewedAt:z.coerce.date(), sources:z.array(z.string()).min(1), contentStatus:z.literal('editorial-draft')});
export const collections = { birds: defineCollection({loader:glob({pattern:'**/*.md',generateId:({entry})=>entry.replace(/\.md$/,''),base:'./src/content/birds'}),schema}), guides:defineCollection({loader:glob({pattern:'**/*.md',generateId:({entry})=>entry.replace(/\.md$/,''),base:'./src/content/guides'}),schema}) };
