import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/dwarf-fight/',
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 5173,
  },
  // test: {
  //   globals: true,
  //   watch: false,
  //   coverage: {
  //     reporter: ['text', 'json', 'html'],
  //   },
  // },
});
