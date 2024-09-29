module.exports = {
    moduleNameMapper: {
        "^@scripts/(.*)$": "<rootDir>/src/scripts/$1",
    },
    transform: {
        "^.+\\.(t|j)sx?$": "@swc/jest",
    },
    moduleFileExtensions: [
        "js"
    ],
    testEnvironment: "jest-environment-jsdom",
    testMatch: [
        "**/__tests__/**/*.test.js",
        "**/?(*.)+(spec|test).[jt]s?(x)"
    ]
};