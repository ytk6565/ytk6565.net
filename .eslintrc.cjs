module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['prettier', 'eslint:recommended', 'plugin:react/recommended'],
  plugins: [
    '@typescript-eslint',
    'import',
    'no-floating-promise',
    '@mizdra/layout-shift',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react/display-name': 0,
    'no-floating-promise/no-floating-promise': 2,
    '@mizdra/layout-shift/require-size-attributes': 2,
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      env: {
        browser: true,
      },
    },
    {
      files: ['**/*.cjs'],
      env: {
        commonjs: true,
      },
    },
    {
      files: ['src/**/*.{js,jsx,ts,tsx}', 'vite.config.ts'],
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
            alphabetize: { order: 'asc' },
            'newlines-between': 'always',
          },
        ],
      },
    },
  ],
};
