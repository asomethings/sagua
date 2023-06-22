/**
 * @type {import('prettier').Options}
 */
module.exports = {
  plugins: [
    require.resolve('prettier-plugin-organize-imports'),
  ],
  printWidth: 110,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  pluginSearchDirs: ['.'],
}
