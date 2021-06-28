import type { Config } from '@jest/types';

// Or async function
const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  preset: 'ts-jest',
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  modulePathIgnorePatterns: ['<rootDir>/example', '<rootDir>/lib', '<rootDir>/helpers'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest/dist',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  setupFilesAfterEnv: ['<rootDir>/helpers/jest-setup.ts'],
};

export default config;
