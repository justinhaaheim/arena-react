module.exports = {
  env: {
    jest: true,
    browser: true,
    es6: true,
  },
  parser: '@babel/eslint-parser',
  extends: ['airbnb', 'plugin:flowtype/recommended', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    requireConfigFile: false,
  },
  plugins: ['react', 'flowtype'],
  rules: {
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
    'react/forbid-prop-types': [0, {forbid: ['any']}],
    'react/prop-types': 0,
    'react/no-unescaped-entities': 0,
  },
};
