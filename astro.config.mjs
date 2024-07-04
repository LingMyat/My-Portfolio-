import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import { injectSpeedInsights } from '@vercel/speed-insights';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue(), sitemap(), injectSpeedInsights()]
});