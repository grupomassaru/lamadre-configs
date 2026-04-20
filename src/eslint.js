// @grupolamadre/configs — ESLint flat config base
// React 18 + TypeScript + import rules
// Usage: import lamadreConfig from '@grupolamadre/configs/eslint'
//        export default [...lamadreConfig, { your overrides }]

const js = require('@eslint/js');
const tseslint = require('typescript-eslint');
const reactHooks = require('eslint-plugin-react-hooks');

/** @type {import('eslint').Linter.Config[]} */
const lamadreEslintConfig = [
  // Base JS recommended rules
  js.configs.recommended,

  // TypeScript recommended rules (type-checked where possible)
  ...tseslint.configs.recommended,

  // React Hooks rules
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },

  // Grupo Lamadre standard rules
  {
    rules: {
      // Console usage: warn (not error) — allow debug builds, strip in prod
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],

      // TypeScript: relax some strict defaults for large legacy codebase
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-non-null-assertion': 'warn',

      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // General quality
      'no-debugger': 'error',
      'no-duplicate-imports': 'error',
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'prefer-const': 'error',
      'no-var': 'error',

      // Sentry baseline: force centralized instrumentation wrapper
      'no-restricted-imports': [
        'warn',
        {
          paths: [
            {
              name: '@sentry/react',
              message: 'Use the project wrapper (ex: src/lib/sentry.ts) instead of direct imports.',
            },
            {
              name: '@sentry/browser',
              message: 'Use the project wrapper (ex: src/lib/sentry.ts) instead of direct imports.',
            },
          ],
        },
      ],
    },
  },

  // Ignore patterns
  {
    ignores: [
      'dist/**',
      'build/**',
      'node_modules/**',
      '*.min.js',
      'coverage/**',
      '.lovable/**',
      'supabase/functions/**',
    ],
  },
];

module.exports = lamadreEslintConfig;
