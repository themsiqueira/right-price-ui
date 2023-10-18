module.exports = {
    coverageDirectory: 'coverage/typescript',
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{ts,jsx,ts,tsx}', 
        'src/**/**/*.{ts,jsx,ts,tsx}', 
        '!<rootDir>/node_modules/'
    ],

    coveragePathIgnorePatterns: [
        '<rootDir>/src/types/',
        '<rootDir>/node_modules/'
    ],

    moduleFileExtensions: ['ts', 'tsx', 'js'],
    roots: ['<rootDir>/src'],
    preset: 'ts-jest',
    testEnvironment: 'jsdom',

    testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
    testPathIgnorePatterns: [
        '/node_modules',
        '<rootDir>/src/types/'
    ],
    verbose: false,
    transformIgnorePatterns: ["node_modules/(?!axios)"],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
