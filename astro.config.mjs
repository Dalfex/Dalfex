// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://dalfex.com',
  integrations: [react(), sitemap()],

  // Astro 7 changed the `compressHTML` default from `true` to `'jsx'`, which
  // strips whitespace between inline elements. Pinning to `true` keeps the
  // HTML-aware compression this site was authored against.
  compressHTML: true,

  vite: {
    plugins: [tailwindcss()]
  }
});
