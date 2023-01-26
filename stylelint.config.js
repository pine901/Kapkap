module.exports = {
  extends: [
    'stylelint-config-standard'
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': false,
    'number-leading-zero': false,
    'selector-pseudo-element-colon-notation': false,
    'block-opening-brace-space-after': false,
    'no-descending-specificity': false,
    'no-duplicate-selectors': false,
    'block-opening-brace-space-before': false,
    'max-empty-lines': false,
    'rule-empty-line-before': false,
    'at-rule-empty-line-before': false,
    'block-closing-brace-newline-after': false,
    'declaration-empty-line-before': false,
    'no-missing-end-of-source-newline': false,
    indentation: false,
    'no-eol-whitespace': false,
    'number-no-trailing-zeros': false,
    'length-zero-no-unit': false,
    'selector-list-comma-newline-after': false,
    'block-closing-brace-space-before': false,
    'declaration-block-semicolon-newline-after': false,
    'declaration-colon-space-after': false,
    'font-family-no-missing-generic-family-keyword': false,
    'declaration-block-no-shorthand-property-overrides': false,
    'block-no-empty': false,
    'selector-type-no-unknown': false,
    'string-no-newline': false
  }
}
