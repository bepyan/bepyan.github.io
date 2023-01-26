module.exports = {
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended', 'plugin:mdx/recommended'],
  plugins: ['unused-imports', 'simple-import-sort'],
  rules: {
    // https://github.com/sweepline/eslint-plugin-unused-imports
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    // https://github.com/lydell/eslint-plugin-simple-import-sort
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    // https://nextjs.org/docs/basic-features/eslint
    'react-hooks/exhaustive-deps': 0,
    'react/display-name': 0,
    '@next/next/no-img-element': 0,
  },
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        'simple-import-sort/imports': [
          'error',
          {
            groups: [['^\\u0000'], ['^@?\\w'], ['^~/', '^\\.']],
          },
        ],
      },
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['tsconfig.json'],
      },
    },
  ],
};
