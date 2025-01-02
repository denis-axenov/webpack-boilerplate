import js from "@eslint/js";
import globals from "globals";


export default [
    {
        ...js.configs.recommended,
        files: [
            "src/scripts/**/*.js"
        ],
        ignores: [
            '**/*.config.js'
        ],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser
            }
        },
        rules: {
            "semi": "error",
            "no-undef": "warn"
        }
    }
];