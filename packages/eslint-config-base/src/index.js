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
    'import/no-unresolved': 'error',
    'no-floating-promise/no-floating-promise': 2,
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
        commonjs: true,
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
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
            pathGroups: [
              {
                pattern: '@/pages/**',
                group: 'parent',
                position: 'after',
              },
              {
                pattern: '@/components/**',
                group: 'parent',
                position: 'after',
              },
              {
                pattern: '@/hooks/**',
                group: 'parent',
                position: 'after',
              },
              {
                pattern: '@/infrastructure/**',
                group: 'parent',
                position: 'after',
              },
              {
                pattern: '@/domain/**',
                group: 'parent',
                position: 'after',
              },
              {
                pattern: '@/styles/**',
                group: 'parent',
                position: 'after',
              },
              {
                pattern: '@/assets/**',
                group: 'parent',
                position: 'after',
              },
            ],
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
