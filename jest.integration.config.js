module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/integration-tests/**/*.test.js'],
    coverageDirectory: 'coverage/integration',
    collectCoverageFrom: ['src/**/*.js'],
    testTimeout: 30000
};