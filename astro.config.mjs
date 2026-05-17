// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 1000000, // Inline all CSS and assets into the HTML
      cssCodeSplit: false,
    }
  }
});
