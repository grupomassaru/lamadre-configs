// @grupolamadre/configs — Vitest base config
// Usage:
//   import { defineConfig, mergeConfig } from 'vitest/config'
//   import lamadreVitestBase from '@grupolamadre/configs/vitest'
//   export default mergeConfig(lamadreVitestBase, defineConfig({ test: { ... } }))

import { defineConfig, type UserConfig } from 'vitest/config';

const lamadreVitestBase: UserConfig = defineConfig({
  test: {
    // Use jsdom for React component testing
    environment: 'jsdom',

    // Auto-import describe/it/expect — no manual imports needed
    globals: true,

    // Setup file for React Testing Library, MSW, etc.
    // Projects should override this with their own path
    setupFiles: [],

    // Coverage configuration
    coverage: {
      // Use v8 (native Node coverage — no instrumentation overhead)
      provider: 'v8',

      // Reporters: text for CI, html for local review
      reporter: ['text', 'html', 'lcov'],

      // Output directory
      reportsDirectory: './coverage',

      // Exclude generated/infra files from coverage
      exclude: [
        'node_modules/**',
        'dist/**',
        'build/**',
        '**/*.config.{ts,js}',
        '**/*.d.ts',
        'src/integrations/**',
        'src/types/**',
        'src/vite-env.d.ts',
      ],

      // Lamadre V2 Fase D thresholds — set low to unblock CI, increase per sprint
      // See: directive_never_delete_tests.md + fase_d1_5_skip_and_rewrite.md
      thresholds: {
        lines: 15,
        branches: 15,
        functions: 15,
        statements: 15,
      },
    },

    // Timeout for individual tests (ms)
    testTimeout: 10000,

    // Timeout for hooks (ms)
    hookTimeout: 10000,

    // Retry flaky tests once in CI
    retry: process.env.CI ? 1 : 0,
  },
});

export default lamadreVitestBase;
