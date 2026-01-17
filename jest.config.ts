import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['*/_tests_//.test.ts'],
    clearMocks: true,
    collectCoverage: true,
    setupFiles: ['<rootDir>/jest.setup.ts'],
    collectCoverageFrom: [
      'src/*/.ts',
      '!src/server.ts',
      '!src/swagger.ts'
    ]
  };
  
  export default config;