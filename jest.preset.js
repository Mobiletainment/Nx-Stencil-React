const nxPreset = require('@nrwl/jest/preset');
module.exports = {
  ...nxPreset,
  setupFiles: ['construct-style-sheets-polyfill'],
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageReporters: ['html'],
};
