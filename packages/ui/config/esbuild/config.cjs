const glob = require('glob');

const {
  defaultConfig,
  ignorePatterns,
} = require('@ytk6565.net/esbuild-config-base');

/** @type {import('esbuild').BuildOptions} */
module.exports = {
  ...defaultConfig,
  external: ['react', 'react-dom', 'zod', '@ytk6565.net/assets'],
  tsconfig: './tsconfig.build.json',
  entryPoints: glob.sync('src/**/*.ts{,x}', {
    ignore: [...ignorePatterns],
  }),
};
