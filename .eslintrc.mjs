module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    require.resolve('@vercel/style-guide/eslint/browser'),
    require.resolve('@vercel/style-guide/eslint/react'),
    require.resolve('@vercel/style-guide/eslint/next'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.lint.json',
      },
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
  parserOptions: {
    project: './tsconfig.lint.json',
  },
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        /**
         * Import Sorting Group Order:
         * - React & Next imports
         * - Third-party libraries
         * - Local imports
         * - CSS imports
         */
        groups: [
          // 1. External libraries and packages
          ['^react', '^next', '^(?!@/)(@\\w)', '^\\w'],

          // 2. Local alias imports (e.g., '@/...')
          ['^@/'],

          // 3. Relative imports
          ['^\\.'],

          // 4. CSS imports
          ['^.+\\.s?css$'],
        ],
      },
    ],
    'import/order': 'off',

    /**
     * Warn about usage of `any` type, no error to allow for quick prototyping
     */
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',

    /**
     * Enforce arrow function component definitions
     */
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
  overrides: [
    /**
     * Sanity Overrides (+ enable Next.js default exports for routes)
     */
    {
      files: ['**/sanity.cli.ts', '**/*.config.ts', '**/*.config.js', 'src/app/**', '**/*.d.ts'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['**/sanity.types.ts'],
      rules: {
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/array-type': 'off',
        'import/first': 'off',
        'import/newline-after-import': 'off',
        '@typescript-eslint/no-redundant-type-constituents': 'off',
      },
    },
    {
      files: ['src/sanity/schemas/**'],
      rules: {
        // Allows for preview display data to not have to be manually typed in all 50+ files
        '@typescript-eslint/no-unsafe-assignment': 'warn',
      },
    },

    /**
     * Jest overrides
     */
    {
      files: ['**/*.test.ts?(x)', '**/*.spec.ts?(x)', '**/__tests__/**', 'test-helpers/**'],
      env: {
        'jest/globals': true,
      },
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
    },

    /**
     * Cypress Overrides
     */
    {
      files: ['cypress/**/*.ts'],
      env: {
        'cypress/globals': true,
      },
      plugins: ['cypress'],
      extends: ['plugin:cypress/recommended'],
    },
  ],
}
