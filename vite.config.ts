import react from '@vitejs/plugin-react-swc';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import cssModulesPlugin from 'vite-plugin-css-modules';
import {defineConfig as defineVitestConfig} from 'vitest/config';

export default defineVitestConfig({
  base: '/dwarf-fight',
  plugins: [react(), cssModulesPlugin()],
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
