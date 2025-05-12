import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
};

export default config;
