// @grupomassaru/configs — Playwright base config
// Usage:
//   import { defineConfig, mergeConfig } from '@playwright/test'
//   import lamadrePlaywrightBase from '@grupomassaru/configs/playwright'
//   export default mergeConfig(lamadrePlaywrightBase, defineConfig({ use: { baseURL: 'http://127.0.0.1:3000' } }))

import { defineConfig, type PlaywrightTestConfig } from '@playwright/test';

const lamadrePlaywrightBase: PlaywrightTestConfig = defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: process.env.CI
    ? [['line'], ['html', { open: 'never' }]]
    : [['html', { open: 'never' }]],
  timeout: 30_000,
  expect: {
    timeout: 5_000,
  },
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 10_000,
    navigationTimeout: 15_000,
    viewport: { width: 1440, height: 960 },
  },
  webServer: undefined,
});

export default lamadrePlaywrightBase;
