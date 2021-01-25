module.exports = {
  collectCoverageFrom: [
    "components/**/*.{js,jsx,ts,tsx}",
    "containers/**/*.{js,jsx,ts,tsx}",
    "puzzles/**/*.{js,jsx,ts,tsx}",
    "util/**/*.{js,jsx,ts,tsx}",
    "!**/stories.{js,jsx,ts,tsx}",
    "!puzzles/**/index.ts",
  ],
  coverageDirectory: "<rootDir>/.coverage",
  setupFilesAfterEnv: ["<rootDir>/tests/setupTests.js"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/", "^.+\\.module\\.(css|sass|scss)$"],
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "^components/(.*)$": "<rootDir>/components/$1",
    "^containers/(.*)$": "<rootDir>/containers/$1",
    "^types/(.*)$": "<rootDir>/types/$1",
    "^puzzles/(.*)$": "<rootDir>/puzzles/$1",
    "^util/(.*)$": "<rootDir>/util/$1",
  },
};
