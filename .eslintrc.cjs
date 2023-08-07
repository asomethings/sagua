/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json', './packages/*/tsconfig.json', './apps/*/tsconfig.json'],
  },
  env: {
    node: true,
  },
  ignorePatterns: ['.eslintrc.cjs', '**/dist/*'],
  rules: {
    '@typescript-eslint/no-namespace': [2, { allowDeclarations: true }],
  },
}
