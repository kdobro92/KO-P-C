module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["airbnb", "plugin:prettier/recommended", "react-app"],
  rules: {
    camelcase: "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "react/prop-types": "off",
    "no-param-reassign": [
      "error",
      { props: true, ignorePropertyModificationsFor: ["state"] },
    ],
  },

  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
  globals: {
    window: true,
    document: true,
  },
};
