module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parser: '@typescript-eslint/parser',
  settings: { react: { version: 'detect' } },
  overrides: [
    {
      files: ['src/*.ts', 'src/*.tsx'],
      extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'standard-with-typescript',
        'prettier'
      ],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: 'tsconfig.json'
      }
    }
  ],

  plugins: ['react'],
  rules: {}
}
