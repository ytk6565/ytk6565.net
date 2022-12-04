const define = {};

for (const k in process.env) {
  define[`process.env.${k}`] = JSON.stringify(process.env[k]);
}

/** @type {string[]} */
const ignorePatterns = [
  '**/*.d.ts',
  // tests
  '**/*.test.ts',
  '**/tests/**',
  '**/__tests__/**',
  // mocks
  '**/mocks/**',
  '**/__mocks__/**',
  // storybook
  '**/*.stories.mdx',
  '**/*.stories.tsx',
  '**/__stories__/**',
];

/** @type {import('esbuild').BuildOptions} */
const defaultConfig = {
  /**
   * BundleOptions
   */
  bundle: true,
  splitting: true,
  outdir: 'dist',
  outbase: 'src',
  watch: process.env.NODE_ENV === 'development',
  /**
   * CommonOptions
   */
  sourcemap: false,
  format: 'esm',
  target: 'ESNext',
  charset: 'utf8',
  define,
  logLevel: 'info',
  keepNames: true,
};

module.exports = {
  defaultConfig,
  ignorePatterns,
};
