import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // Add Node.js globals
        ...globals.jest, // Add Jest globals if you're testing
      },
      parserOptions: {
        ecmaVersion: 2021, // Use modern ECMAScript features
        sourceType: "module", // Enable ES modules
      },
    },
  },
  pluginJs.configs.recommended,
];
