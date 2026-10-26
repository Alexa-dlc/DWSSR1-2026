module.exports = {
  root: true,
  env: {
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  overrides: [
    {
      files: ["server/**/*.js", "vite.config.js"],
      env: {
        node: true,
      },
      rules: {
        "import/no-extraneous-dependencies": [
          "error",
          { devDependencies: true },
        ],
      },
    },
    {
      files: ["src/**/*.js", "public/**/*.js"],
      env: {
        browser: true,
      },
    },
  ],
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      { js: "always", mjs: "always" },
    ],
    "import/no-unresolved": [
      "error",
      { ignore: ["^#(?:lib|routes)/", "^@tailwindcss/vite$"] },
    ],
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
  },
};
