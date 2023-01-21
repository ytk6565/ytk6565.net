import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import { VitePluginFonts } from 'vite-plugin-fonts';
import { VitePluginRadar } from 'vite-plugin-radar';
import tsconfigPaths from 'vite-tsconfig-paths';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    rollupOptions: {
      plugins: [
        mode === 'analyze' &&
          visualizer({
            open: true,
            filename: 'dist/stats.html',
            gzipSize: true,
            brotliSize: true,
          }),
      ],
    },
  },
  plugins: [
    react(),
    eslint({ fix: true, exclude: ['**/virtual:/**', '**/node_modules/**'] }),
    VitePluginFonts({
      google: {
        families: [
          {
            name: 'Inter',
            styles: 'ital,wght@0,400;0,700',
          },
        ],
      },
    }),
    VitePluginRadar({
      analytics: [{ id: 'UA-186919639-3' }, { id: 'G-56DM5BZZ30' }],
    }),
    tsconfigPaths(),
  ],
}));
