module.exports = {
  extends: ['plugin:react/recommended', '@ytk6565.net/base'],
  plugins: ['@mizdra/layout-shift'],
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
    '@mizdra/layout-shift/require-size-attributes': 2,
  },
};
