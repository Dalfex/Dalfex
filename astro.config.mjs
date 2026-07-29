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
    plugins: [tailwindcss()],

    build: {
      // Vite 8 switched the default CSS minifier to Lightning CSS, which lowers
      // output to a ~Safari 16.4 / Chrome 111 baseline: `min-width` media queries
      // become Level 4 range syntax (`width >= 48rem`), hex-with-alpha colors
      // become `oklab()`, and `-webkit-user-select` is dropped. Browsers below
      // that baseline would drop every `md:`/`sm:` rule and render the mobile
      // layout only. Staying on esbuild keeps the CSS byte-for-byte compatible
      // with what this site already serves.
      cssMinify: 'esbuild'
    }
  }
});
