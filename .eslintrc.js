module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended",
    "plugin:vuejs-accessibility/recommended",
  ],
  plugins: ["@mizdra/layout-shift"],
  rules: {
    "@mizdra/layout-shift/require-size-attributes": 2,
  },
};
