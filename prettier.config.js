module.exports = {
  htmlWhitespaceSensitivity: 'ignore',
  singleQuote: true,
  semi: false,
  jsxBracketSameLine: true,
  printWidth: 300,
  arrowParens: 'avoid',
  endOfLine: 'lf',
  overrides: [
    {
      files: '*.html',
      options: {
        parser: 'html',
      },
    },
    {
      files: '*.vue',
      options: {
        parser: 'vue',
      },
    },
  ],
}
