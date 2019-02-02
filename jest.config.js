module.exports = {
  testEnvironment: "jest-environment-node",
  rootDir: "src",
  transform: {
    "^.+\\.[jt]sx?$": "<rootDir>/../node_modules/babel-jest/build/index.js"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  moduleDirectories: ["node_modules", "src"],
  collectCoverageFrom: ["**/src/**/*.js", "**/src/**/*.ts"],
  coverageThreshold: {
    global: {
      statements: 60,
      branches: 80,
      lines: 60,
      functions: 80
    }
  }
}
