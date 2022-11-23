module.exports = {
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'layer'],
      },
    ],
    'selector-class-pattern': null,
  },
};
