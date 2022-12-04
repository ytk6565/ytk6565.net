const glob = require('glob');

const {
  defaultConfig,
  ignorePatterns,
} = require('@ytk6565.net/esbuild-config-base');

/** @type {import('esbuild').BuildOptions} */
module.exports = {
  ...defaultConfig,
  external: ['zod'],
  tsconfig: './tsconfig.build.json',
  entryPoints: glob.sync('src/**/*.ts', {
    ignore: [...ignorePatterns],
  }),
};
