import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'es2017',
  },
  optimizeDeps: {
    include: ['three'],
  },
});
