#!/usr/bin/env node
const fs = require('fs');

const readFileSync = fs.readFileSync;
const libPath = require.resolve(
  'contentful-typescript-codegen/dist/contentful-typescript-codegen'
);

fs.readFileSync = (...args) => {
  if (args[0] === libPath) {
    let lib = readFileSync(...args);

    lib = lib.replace(
      `./getContentfulEnvironment.js`,
      `./config/contentful/typescript-codegen/config.cjs`
    );

    return lib;
  }
  return readFileSync(...args);
};

require(libPath);
