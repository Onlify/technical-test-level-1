module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended'],
  env: {
    node: true,
    es2020: true,
    jest: true,
  },
  overrides: [
    {
      files: ['src/**/*.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  rules: {
    // TypeScript specific rules
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',

    // General JavaScript/TypeScript rules
    'no-console': 'off', // Allowed for this library project
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    'template-curly-spacing': 'error',
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'computed-property-spacing': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'keyword-spacing': ['error', { before: true, after: true }],
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    'no-trailing-spaces': 'error',
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    'semi-spacing': ['error', { before: false, after: true }],
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'spaced-comment': ['error', 'always'],

    // Code quality rules
    curly: ['error', 'all'],
    'dot-notation': 'error',
    eqeqeq: ['error', 'always'],
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-useless-return': 'error',
    'prefer-arrow-callback': 'error',
  },
  ignorePatterns: ['dist/', 'node_modules/', '*.js', '!.eslintrc.js'],
};
