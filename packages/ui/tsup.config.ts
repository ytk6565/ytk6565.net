import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/**/*.ts',
    'src/**/*.tsx',
    '!**/*.d.ts',
    '!**/*.test.tsx',
    '!**/*.stories.tsx',
    '!**/__tests__/**',
    '!**/__stories__/**',
  ],
  bundle: true,
  format: ['esm'],
  dts: true,
  outDir: 'dist',
  keepNames: true,
  splitting: true,
  sourcemap: false,
  clean: true,
  tsconfig: './tsconfig.build.json',
  external: ['react', 'react-dom', '@ytk6565.net/assets'],
});
