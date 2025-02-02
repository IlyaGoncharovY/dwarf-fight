import react from '@vitejs/plugin-react-swc';
import { defineConfig as defineVitestConfig } from 'vitest/config';

export default defineVitestConfig({
  base: '/dwarf-fight',
  plugins: [react()],
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
