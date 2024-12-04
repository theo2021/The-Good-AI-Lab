/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
const reactPlugin = require('eslint-plugin-react');
const typescriptPlugin = require('@typescript-eslint/eslint-plugin');
const { FlatCompat } = require('@eslint/eslintrc');
const path = require('path');
const eslintJs = require('@eslint/js');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslintJs.configs.recommended
});

const config = [
  {
    ignores: [
      'out/**',
      '.next/**',
      'build/**',
      'dist/**',
      'node_modules/**'
    ]
  },
  ...compat.extends(
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals'
  ),
  {
    files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      react: reactPlugin,
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'eol-last': ['error', 'always'],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];

module.exports = config;
