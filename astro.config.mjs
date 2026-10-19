import { defineConfig } from 'astro/config';
export default defineConfig({
  site: process.env.SITE_URL || 'https://iamgrootmse.github.io',
  base: process.env.BASE_PATH || '/animal-welfare-policy-evidence',
  output: 'static',
  trailingSlash: 'always',
});
