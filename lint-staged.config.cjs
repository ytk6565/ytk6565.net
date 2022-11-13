const path = require('path');

const buildEslintCommand = (filenames) =>
  `eslint --fix ${filenames
    // eslint-disable-next-line no-undef
    .map((f) => path.relative(process.cwd(), f))
    .join(' ')}`;

module.exports = {
  '**/*': ['git add'],
  // '**/*.{js,jsx,ts,tsx}': [buildEslintCommand, 'git add'],
  // '**/*.{ts,tsx}': ["bash -c 'npm run typecheck'", 'git add'],
  // '**/*.{html,js,jsx,ts,tsx,json,css}': (filenames) => [
  //   `prettier --write ${filenames.join(' ')}`,
  //   'git add',
  // ],
};
