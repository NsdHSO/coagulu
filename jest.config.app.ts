/* eslint-disable */
export default {
  displayName: 'coagulu',
  preset: './jest.preset.js',
  setupFilesAfterEnv: ['./setup.js'],
  coverageDirectory: './coverage/coagulu',
  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
  testMatch: [
    '<rootDir>/ftx-forms/**/*(*.)@(spec|test).[jt]s?(x)',
    '<rootDir>/ftx-tooltip/**/*(*.)@(spec|test).[jt]s?(x)',
    '<rootDir>/ftx-forms/**/__tests__/**/*.[jt]s?(x)',
    '<rootDir>/ftx-tooltip/**/__tests__/**/*.[jt]s?(x)',
    '<rootDir>/src/**/__tests__/**/*.[jt]s?(x)',
    '<rootDir>/src/**/*(*.)@(spec|test).[jt]s?(x)',
  ],
};
