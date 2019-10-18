module.exports = {
  parser: 'babel-eslint', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2015, // specify the version of ECMAScript syntax you want to use: 2015 => (ES6)
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // enable JSX
      impliedStrict: true, // enable global strict mode
    },
  },
  extends: [
    // 'react',
    'airbnb'  // Uses airbnb, it including the react rule(eslint-plugin-react/eslint-plugin-jsx-a11y)
    //'plugin:promise/recommended',
    // 'prettier', // Use prettier, it can disable all rules which conflict with prettier
    // 'prettier/react' // Use prettier/react to pretty react syntax
  ],
  settings: {
    react: {
      version: '16.9',
    },
  },
  env: {
    browser: true, // enable all browser global variables
    node: true,
    es6: true
  },
  plugins: ['react', 'react-hooks'], // ['prettier', 'react-hooks']
  rules: {
    camelcase: 0,
    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-indent': 0,
    'react/jsx-wrap-multilines': ['error', {declaration: false, assignment: false}],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'site/**',
          'tests/**',
          'scripts/**',
          '**/*.test.js',
          '**/__tests__/*',
          '*.config.js',
          '**/*.md',
        ],
      },
    ],
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'react/jsx-filename-extension': 0,
    'react/state-in-constructor': 0,
    'react/jsx-props-no-spreading': 0,
    'prefer-destructuring': 0, // TODO: remove later
    'consistent-return': 0, // TODO: remove later
    'no-return-assign': 0, // TODO: remove later
    'no-param-reassign': 0, // TODO: remove later
    'react/destructuring-assignment': 0, // TODO: remove later
    'react/no-did-update-set-state': 0, // TODO: remove later
    'react/require-default-props': 0,
    'react/default-props-match-prop-types': 0,
    // "react/prefer-stateless-function": 0,
    'import/no-cycle': 0,
    'react/no-find-dom-node': 0,
    'no-underscore-dangle': 0,
    // label-has-for has been deprecated
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
    'jsx-a11y/label-has-for': 0,
    // for (let i = 0; i < len; i++)
    'no-plusplus': 0,
    // https://eslint.org/docs/rules/no-continue
    // labeledLoop is conflicted with `eslint . --fix`
    'no-continue': 0,
    'react/display-name': 0,
    // ban this for Number.isNaN needs polyfill
    'no-restricted-globals': 0,
    'max-classes-per-file': 0,
    'react/static-property-placement': 0,
    /**
     * @description rules of eslint-plugin-prettier
     */
    // 'prettier/prettier': [
    //   'error', {
    //     'singleQuote': true,
    //     'semi': false
    //   }
    // ]
    'no-console': 0
  },
};
