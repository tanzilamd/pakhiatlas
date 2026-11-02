import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
// Actions supplies the actual Pages origin and base, including custom user domains.
export default defineConfig({ site: process.env.SITE_URL || 'https://tanzilamd.github.io', base: process.env.BASE_PATH ?? '/pakhiatlas', output: 'static', integrations: [sitemap({filter:page=>!/(?:wildlife|varieties|media)\/$/.test(page)})], vite: { plugins: [tailwindcss()] } });
