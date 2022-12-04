const { build } = require('esbuild');
const config = require('./config.cjs');

build(config).catch(() => process.exit(1));
