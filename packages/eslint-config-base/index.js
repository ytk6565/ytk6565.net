module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['import', 'no-floating-promise'],
  ignorePatterns: ['dist/**/*'],
  rules: {
    'no-console': 'error',
    'no-restricted-imports': ['error', { patterns: ['..*'] }],
    'import/no-unresolved': 'error',
    'no-floating-promise/no-floating-promise': 2,
    '@typescript-eslint/consistent-type-imports': 'error',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  overrides: [
    {
      files: ['**/*.cjs'],
      env: {
        node: true,
        commonjs: true,
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: [
        'coverage/**',
        'dist/**',
        '**/*.d.ts',
        'test{,s}/**',
        'test{,-*}.{js,cjs,mjs,ts,tsx,jsx}',
        '**/*{.,-}test.{js,cjs,mjs,ts,tsx,jsx}',
        '**/*{.,-}spec.{js,cjs,mjs,ts,tsx,jsx}',
        '**/__tests__/**',
        '**/__mocks__/**',
        'stories/**',
        'stories{,-*}.{js,cjs,mjs,ts,tsx,jsx,mdx}',
        '**/__stories__/**',
      ],
      rules: {
        'no-restricted-imports': 'off',
      },
    },
    {
      files: ['src/**/*.{js,jsx,ts,tsx}'],
      rules: {
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'parent',
              'sibling',
              'index',
              'object',
              'type',
            ],
            pathGroups: [],
            alphabetize: {
              order: 'asc',
            },
            'newlines-between': 'always',
          },
        ],
      },
    },
  ],
};
