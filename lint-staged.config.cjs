module.exports = {
  'apps/web/**/*.{js,jsx,ts,tsx}': (filenames) => [
    'pnpm --filter @ytk6565.net/web lint:scripts --fix',
    'pnpm --filter @ytk6565.net/web typecheck',
    `git add ${filenames.join(' ')}`,
  ],
  'apps/web/**/*.{html,css}': (filenames) => [
    'pnpm --filter @ytk6565.net/web lint:styles --fix',
    `git add ${filenames.join(' ')}`,
  ],
  'packages/ui/**/*.{js,jsx,ts,tsx}': (filenames) => [
    'pnpm --filter @ytk6565.net/ui lint:scripts --fix',
    'pnpm --filter @ytk6565.net/ui typecheck',
    `git add ${filenames.join(' ')}`,
  ],
  'packages/ui/**/*.{html,css}': (filenames) => [
    'pnpm --filter @ytk6565.net/ui lint:styles --fix',
    `git add ${filenames.join(' ')}`,
  ],
  '**/*.{html,js,jsx,ts,tsx,cjs,mjs,json,css}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `git add ${filenames.join(' ')}`,
  ],
};
