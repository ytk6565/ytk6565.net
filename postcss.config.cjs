module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  preset: {
    features: {
      // Fixes: https://github.com/tailwindcss/tailwindcss/issues/1190#issuecomment-546621554
      "focus-within-pseudo-class": false,
    },
  },
};
