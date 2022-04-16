module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-standard',
    'stylelint-config-recess-order'
  ],

  plugins: [
    'stylelint-order',
    'stylelint-scss'
  ],

  rules: {
    'at-rule-no-unknown': null,
    'color-function-notation': null,
    'function-no-unknown': null,
    'max-empty-lines': 4,
    'max-line-length': null,
    'max-nesting-depth': 2,
    'scss/at-rule-no-unknown': true,
    'scss/no-global-function-names': null,
    'selector-id-pattern': null
  },
};
