// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './'
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  testMatch: ['<rootDir>/src/**/__test__/**.test.+(tsx|ts)'],
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleNameMapper: {
    // aliasを定義 （tsconfig.jsonのcompilerOptions>pathsの定義に合わせる）
    '^@generated/(.*)$': '<rootDir>/src/@generated/$1',
    '^@variable': '<rootDir>/styles/variable.scss',
    '^@ui/(.*)$': '<rootDir>/src/components/ui/$1'
  },
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom'
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
