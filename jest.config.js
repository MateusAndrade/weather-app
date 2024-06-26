module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|@gluestack-ui/*|@gluestack-style/*|@legendapp/*|react-native-svg)',
  ],
  testMatch: ['**/*.spec.ts', '**/*.spec.tsx'],
};
