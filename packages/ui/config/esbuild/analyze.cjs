const { writeFileSync } = require('fs');
const { buildSync } = require('esbuild');
const config = require('./config.cjs');

const result = buildSync({ ...config, metafile: true });

writeFileSync('dist/metafile-esm.json', JSON.stringify(result.metafile));
