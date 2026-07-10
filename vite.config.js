import { defineConfig } from 'vite';

// Relative base so the built bundle works on BOTH a GitHub Pages project
// subpath (/repo/) and a Firebase Hosting root (/) with zero reconfiguration.
export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
  },
  server: {
    host: true,
    open: true,
  },
});
