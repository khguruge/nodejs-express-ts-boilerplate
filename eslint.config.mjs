import globals from 'globals';
import pluginJs from '@eslint/js';
import tsParser from '@typescript-eslint/parser'; // Import the parser directly
import tsEslint from '@typescript-eslint/eslint-plugin'; // Import the TypeScript ESLint plugin

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    rules: {
      eqeqeq: ['error', 'always'], // Require === and !==
      semi: ['error', 'always'], // Enforce semicolons
      quotes: ['error', 'single'], // Use single quotes for strings

      // TypeScript rules
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^_', // Ignore unused variables prefixed with _
          argsIgnorePattern: '^_(req|res|next)$', // Ignore unused arguments that are named req, res, next
        },
      ], // Error on unused variables
      '@typescript-eslint/no-explicit-any': 'error', // Warn on usage of 'any' type
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
      ],
    },
    ignores: ['node_modules', 'dist'],
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      '@typescript-eslint': tsEslint,
    },
    rules: {
      ...tsEslint.configs.recommended.rules, // Use rules from the TypeScript ESLint plugin
    },
  },
];
