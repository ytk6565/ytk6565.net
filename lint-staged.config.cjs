module.exports = {
  'apps/web/**/*.{js,jsx,ts,tsx}': (filenames) => [
    'pnpm --filter @ytk6565.net/web lint --fix',
    'pnpm --filter @ytk6565.net/web typecheck',
    `git add ${filenames.join(' ')}`,
  ],
  'apps/web/**/*.{html,css}': (filenames) => [
    'pnpm --filter @ytk6565.net/web stylelint --fix',
    `git add ${filenames.join(' ')}`,
  ],
  'packages/ui/**/*.{js,jsx,ts,tsx}': (filenames) => [
    'pnpm --filter @ytk6565.net/ui lint --fix',
    'pnpm --filter @ytk6565.net/ui typecheck',
    `git add ${filenames.join(' ')}`,
  ],
  'packages/ui/**/*.{html,css}': (filenames) => [
    'pnpm --filter @ytk6565.net/ui stylelint --fix',
    `git add ${filenames.join(' ')}`,
  ],
  'packages/domain/**/*.{js,jsx,ts,tsx}': (filenames) => [
    'pnpm --filter @ytk6565.net/domain lint --fix',
    'pnpm --filter @ytk6565.net/domain typecheck',
    `git add ${filenames.join(' ')}`,
  ],
  'packages/infrastructure/**/*.{js,jsx,ts,tsx}': (filenames) => [
    'pnpm --filter @ytk6565.net/infrastructure lint --fix',
    'pnpm --filter @ytk6565.net/infrastructure typecheck',
    `git add ${filenames.join(' ')}`,
  ],
  '**/*.{html,css,js,jsx,ts,tsx,cjs,mjs,json,yml}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `git add ${filenames.join(' ')}`,
  ],
};
