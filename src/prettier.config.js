// @grupolamadre/configs — Prettier standard config
// Usage:
//   module.exports = require('@grupolamadre/configs/prettier')
// OR in prettier.config.js:
//   import lamadreConfig from '@grupolamadre/configs/prettier'
//   export default lamadreConfig

/** @type {import('prettier').Config} */
const lamadreConfig = {
  // Semicolons: always (explicit, avoids ASI pitfalls)
  semi: true,

  // Quotes: single (matches Lamadre V2 codebase convention)
  singleQuote: true,

  // JSX quotes: double (standard JSX convention)
  jsxSingleQuote: false,

  // Indentation
  tabWidth: 2,
  useTabs: false,

  // Trailing commas: es5 (valid in modern JS/TS, aids diff readability)
  trailingComma: 'es5',

  // Line width: 100 (wider than default 80, suits wide monitors)
  printWidth: 100,

  // Bracket spacing in objects: { foo: bar }
  bracketSpacing: true,

  // Arrow function parens: always — avoids "x => x" ambiguity
  arrowParens: 'always',

  // End of line: LF (Linux/macOS — VPS is AlmaLinux 9)
  endOfLine: 'lf',

  // Embedded language formatting
  embeddedLanguageFormatting: 'auto',

  // HTML whitespace sensitivity
  htmlWhitespaceSensitivity: 'css',
};

module.exports = lamadreConfig;
