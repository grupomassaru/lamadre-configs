# @grupolamadre/configs

Shared ESLint, TypeScript, Vite, Vitest, and Prettier configs for all Grupo Lamadre projects.

## Install

```bash
# From GitHub Packages (after first publish)
npm install --save-dev @grupolamadre/configs \
  --registry=https://npm.pkg.github.com

# Requires ~/.npmrc or .npmrc with:
# @grupolamadre:registry=https://npm.pkg.github.com
# //npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

## Usage

### ESLint (`eslint.config.js`)

```js
import lamadreConfig from '@grupolamadre/configs/eslint';

export default [
  ...lamadreConfig,
  {
    // Project-specific overrides
    rules: {
      'no-console': 'off', // e.g. allow console in workers
    },
  },
];
```

### TypeScript (`tsconfig.json`)

```json
{
  "extends": "@grupolamadre/configs/tsconfig",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["src"]
}
```

### Vite (`vite.config.ts`)

```ts
import { defineConfig, mergeConfig } from 'vite';
import react from '@vitejs/plugin-react';
import lamadreViteBase from '@grupolamadre/configs/vite';

export default mergeConfig(lamadreViteBase, defineConfig({
  plugins: [react()],
  // project-specific overrides
}));
```

### Vitest (`vitest.config.ts`)

```ts
import { defineConfig, mergeConfig } from 'vitest/config';
import lamadreVitestBase from '@grupolamadre/configs/vitest';

export default mergeConfig(lamadreVitestBase, defineConfig({
  test: {
    setupFiles: ['./src/test/setup.ts'],
  },
}));
```

### Playwright (`playwright.config.ts`)

```ts
import { defineConfig, mergeConfig } from '@playwright/test';
import lamadrePlaywrightBase from '@grupomassaru/configs/playwright';

export default mergeConfig(lamadrePlaywrightBase, defineConfig({
  use: {
    baseURL: 'http://127.0.0.1:4173',
  },
  webServer: {
    command: 'npm run dev -- --host 127.0.0.1 --port 4173',
    url: 'http://127.0.0.1:4173',
    reuseExistingServer: !process.env.CI,
  },
}));
```

### Prettier (`prettier.config.js`)

```js
module.exports = require('@grupolamadre/configs/prettier');
```

## Publishing a new version

Create a git tag prefixed with `v` — GitHub Actions handles the rest:

```bash
git tag v1.0.1
git push origin v1.0.1
```

## Projects using this package

| Project | Repo |
|---------|------|
| Lamadre V2 (ERP) | grupomassaru/prompt-whisperer-810-3315ea01 |
| IZITECH Connect | grupomassaru/connect-wise-72 |
| Insurance Ops Hub | grupomassaru/insurance-ops-hub |
| Opportunity Navigator | grupomassaru/opportunity-navigator |
| Ecoalternativa | grupomassaru/envision-yield-lab |
| Noe | grupomassaru/grow-guard-system |
