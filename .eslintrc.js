module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: ['eslint:recommended', 'plugin:jest/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['babel.config.js', '.eslintrc.js'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'jest/valid-title': 'off',
    'no-alert': 'off',
    'no-console': 0,
    'no-restricted-globals': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': ['error', { props: false }],
    'import/no-unresolved': 'off', // https://github.com/typescript-eslint/typescript-eslint/issues/1624
    // 'import/extensions': ['warn', 'never'], // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
  },
};
