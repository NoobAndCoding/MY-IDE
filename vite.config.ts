import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // or vue, svelte, etc.

export default defineConfig({
  plugins: [react()],
  root: '.', // optional if your `index.html` is in the root
  base: './', // relative paths
  build: {
    outDir: './main/',
    emptyOutDir: true,
    rollupOptions: {
      input: 'index.html',
    },
  },
});