module.exports = {
  parser: "pluggable-babel-eslint",
  env: {
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    plugins: ["typescript"],
    ecmaVersion: 2018,
    sourceType: "module"
  },
  overrides: [
    {
      files: ["**/__tests__/**"],
      settings: {
        "import/resolver": {
          jest: {
            jestConfigFile: path.join(__dirname, "./jest.config.js")
          }
        }
      }
    }
  ]
}
