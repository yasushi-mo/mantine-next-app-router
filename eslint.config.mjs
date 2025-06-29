import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactJSXRuntime from "eslint-plugin-react/configs/jsx-runtime.js";
import eslintConfigPrettier from "eslint-config-prettier";
import mantine from "eslint-config-mantine";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...mantine,
  pluginReact.configs.flat.recommended,
  pluginReactJSXRuntime,
  // Put it in the configuration array after other configs
  eslintConfigPrettier,
];
