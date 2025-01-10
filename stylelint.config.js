export default {
    extends: "stylelint-config-standard",
    customSyntax: "postcss-scss",
    rules: {
        "annotation-no-unknown": [
            true,
            {
                "ignoreAnnotations": [
                    "default"
                ]
            }
        ],
        "at-rule-no-unknown": [
            true,
            {
                "ignoreAtRules": [
                    "mixin",
                    "use",
                    "include",
                    "function",
                    "for",
                    "each",
                    "if",
                    "else",
                    "while",
                    "return",
                    "at-root",
                    "extend",
                    "error",
                    "warn",
                    "debug",
                    "forward"
                ]
            }
        ],
        "declaration-no-important": true,
        "function-no-unknown": null,
        "no-invalid-position-at-import-rule": [
            true,
            {
                "ignoreAtRules": [
                    "use",
                    "forward"
                ]
            }
        ]
    }
};