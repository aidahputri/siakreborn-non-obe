import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      // TODO: Remove these gradually as you fix the issues
      "getter-return": "warn",
      "no-case-declarations": "warn",
      "no-cond-assign": "warn",
      "no-constant-condition": "warn",
      "no-control-regex": "warn",
      "no-empty": "warn",
      "no-empty-pattern": "warn",
      "no-fallthrough": "warn",
      "no-func-assign": "warn",
      "no-misleading-character-class": "warn",
      "no-prototype-builtins": "warn",
      "no-redeclare": "warn",
      "no-regex-spaces": "warn",
      "no-sparse-arrays": "warn",
      "no-undef": "warn",
      "no-unsafe-finally": "warn",
      "no-unused-vars": "warn",
      "no-useless-escape": "warn",
      "react/display-name": "warn",
      "react/jsx-key": "warn",
      "react/prop-types": "warn",
      "react/react-in-jsx-scope": "warn",
      "valid-typeof": "warn",
    },
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
