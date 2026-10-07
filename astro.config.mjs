import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://goris.live',
  integrations: [sitemap()],
  // Fetch pages on link hover so navigations feel instant
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
});
