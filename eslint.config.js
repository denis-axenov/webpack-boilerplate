import eslint from "@eslint/js";
import globals from "globals";
import pluginJest from "eslint-plugin-jest";


export default [
    {
        ...eslint.configs.recommended,
        ignores: [
            "dist/*",
            "node_modules/*"
        ],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module"
        },
        rules: {
            "semi": "error"
        }
    },
    {
        files: [
            "src/scripts/**/*.js"
        ],
        languageOptions: {
            globals: globals.browser
        }
    },
    {
        plugins: {
            "jest": pluginJest
        },
        files: [
            "__tests__/**/*.spec.js",
            "__tests__/**/*.test.js"
        ],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...pluginJest.environments.globals.globals
            }
        },
        rules: {
            'jest/no-disabled-tests': 'warn',
            'jest/no-focused-tests': 'error',
            'jest/no-identical-title': 'error',
            'jest/prefer-to-have-length': 'warn',
            'jest/valid-expect': 'error',
        }
    },
    {
        files: [
            "*.config.js"
        ],
        languageOptions: {
            globals: globals.node
        }
    }
];