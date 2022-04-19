module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      module: true,
    },
    sourceType: "module",
    ecmaVersion: 2018,
  },
  plugins: ["react", "react-hooks"],
  rules: {
    "no-debugger": "off",
    "no-console": "off",
    "no-unused-vars": "warn",
    semi: ["error", "never"],
    "default-param-last": "off",
    quotes: ["error", "double"],
    "linebreak-style": ["error", "windows"],
    "comma-dangle": "off",
    // React rules
    "react/prop-types": "warn",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" },
    ],
    "react/destructuring-assignment": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  root: true,
}
