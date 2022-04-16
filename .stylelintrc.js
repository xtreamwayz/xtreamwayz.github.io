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
    'max-empty-lines': 4,
    'max-nesting-depth': 2,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'scss/no-global-function-names': null,
    'function-no-unknown': null,
    'selector-id-pattern': null,
    'max-line-length': null
  },
};
