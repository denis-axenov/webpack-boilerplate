const js = require("@eslint/js");
const globals = require("globals");


module.exports = [
    js.configs.recommended,
    {
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