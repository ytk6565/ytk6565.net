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
  ],
  plugins: ["prettier", "@mizdra/layout-shift"],
  rules: {
    "@mizdra/layout-shift/require-size-attributes": 2,
  },
};
