const presetJestConfigGenerator = require('@snowpack/app-scripts-react/jest.config.js');

module.exports = {
  ...presetJestConfigGenerator(),
  testMatch: ['**/__tests__/**/*.[jt]s?(x)'],
};
