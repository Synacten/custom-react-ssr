module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    rules: {
        "import/prefer-default-export": 0,
        "max-len": ["error", { ignoreComments: true, code: 120 }],
        "import/extensions": [1, { extensions: [".ts", ".tsx"] }],
        "react/jsx-filename-extension": [
          1,
          { extensions: [".js", ".jsx", ".ts", ".tsx"] },
        ],
        "import/no-extraneous-dependencies": 0,
        "class-methods-use-this": 0,
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "react/prop-types": 0,
        "@typescript-eslint/no-explicit-any": 1,
      },
      settings: {
        "import/resolver": {
          node: {
            extensions: [".js", ".ts", ".jsx", ".tsx"],
          },
        },
      },
};