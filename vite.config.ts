import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// import cssModulesPlugin from 'vite-plugin-css-modules';

export default defineConfig({
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
