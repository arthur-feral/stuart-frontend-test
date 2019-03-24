// @see https://jestjs.io/docs/en/configuration.html

module.exports = {
  roots: [
    '<rootDir>/app',
  ],
  testEnvironment: 'jsdom',
  testRegex: [
    '\\.test\\.js$',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(s?css)$': 'identity-obj-proxy',
  },

  moduleFileExtensions: [
    'js',
    'json',
    'node',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/dist',
  ],
  automock: false,
};

