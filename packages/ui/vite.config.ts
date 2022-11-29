import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import { VitePluginFonts } from 'vite-plugin-fonts';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react'],
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
    tsconfigPaths(),
  ],
});
