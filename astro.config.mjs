// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Used by Layout.astro to generate canonical URLs
  site: 'https://rlwebdesign.net',
  vite: {
    plugins: [tailwindcss()]
  }
});