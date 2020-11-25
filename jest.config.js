module.exports = {
  verbose: true,
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json'
    }
  },
  transform: {
    '^.+\\.(ts)$': 'ts-jest'
  },
  testMatch: ['<rootDir>/test/**/*.test.(ts|js)'],
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/server/$1'
  },
  collectCoverageFrom: ['<rootDir>/src/**/*.(ts|js)'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageThreshold: {
    global: {
      branches: 16,
      functions: 27,
      lines: 38,
      statements: 38
    }
  }
};
