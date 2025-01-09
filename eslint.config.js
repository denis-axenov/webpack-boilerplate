import eslint from "@eslint/js";
import globals from "globals";


export default [
    {
        plugins: {
            ...eslint.configs.recommended
        },
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