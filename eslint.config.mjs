import js from "@eslint/js";
import globals from "globals";

export default [

  {
    ignores: ["coverage/**", "dist/**", "node_modules/**"],
  },

  js.configs.recommended,

  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // Jest tests
  {
    files: ["__tests__/**/*.{js,mjs,cjs}", "**/*.{test,spec}.{js,mjs,cjs}",],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
];
