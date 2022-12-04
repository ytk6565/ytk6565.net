const { build } = require('esbuild');
const glob = require('glob');

const define = {};

for (const k in process.env) {
  define[`process.env.${k}`] = JSON.stringify(process.env[k]);
}

build({
  define,
  charset: 'utf8',
  logLevel: 'info',
  watch: process.env.NODE_ENV === 'development',
  target: 'ESNext',
  entryPoints: glob.sync('src/**/*.ts', {
    ignore: [
      '**/*.d.ts',
      '**/*.test.ts',
      '**/tests/**',
      '**/mocks/**',
      '**/__tests__/**',
      '**/__mocks__/**',
    ],
  }),
  format: 'esm',
  outbase: 'src',
  outdir: 'dist',
  bundle: true,
  keepNames: true,
  splitting: true,
  sourcemap: false,
  tsconfig: './tsconfig.build.json',
  external: ['zod'],
}).catch(() => process.exit(1));
