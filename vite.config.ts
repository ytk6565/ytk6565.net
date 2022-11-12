import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import { VitePluginFonts } from 'vite-plugin-fonts';
import { VitePluginRadar } from 'vite-plugin-radar';
import ViteTSConfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({ fix: true }),
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
      analytics: {
        id: 'UA-186919639-2',
      },
    }),
    ViteTSConfigPaths(),
  ],
});
