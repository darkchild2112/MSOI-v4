module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: "astro-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaVersion: "latest"
  },
  plugins: ["astro", "react", "@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:astro/recommended"],
  settings: {
    react: {
      version: "detect"
    }
  },
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        }
      },
      extends: ["plugin:@typescript-eslint/recommended", "plugin:react/recommended"],
      rules: {
        "react/react-in-jsx-scope": "off"
      }
    }
  ],
  rules: {
    "no-unused-vars": "warn",
    "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }]
  }
};
