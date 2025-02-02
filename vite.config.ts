import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/dwarf-fight',
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 5173,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    watch: false,
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
});
