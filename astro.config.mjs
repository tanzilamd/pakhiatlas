import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
const deploymentBase=(process.env.BASE_PATH??'/pakhiatlas').replace(/\/$/,'');
// Actions supplies the actual Pages origin and base, including custom user domains.
export default defineConfig({ site: process.env.SITE_URL || 'https://tanzilamd.github.io', base: process.env.BASE_PATH ?? '/pakhiatlas', output: 'static', integrations: [sitemap({filter:page=>new URL(page).pathname!==`${deploymentBase}/`&&!/(?:wildlife|varieties|media|saved|search)\/$/.test(page)})], vite: { plugins: [tailwindcss()] } });
