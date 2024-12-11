module.exports = {
    extends: "stylelint-config-standard",
    plugins: [
        "stylelint-scss"
    ],
    customSyntax: "postcss-scss",
    rules: {
        "scss/dollar-variable-pattern": "^[a-z][a-zA-Z0-9]*$",
        "scss/selector-no-redundant-nesting-selector": true,
        "annotation-no-unknown": null,
        "at-rule-no-unknown": null,
        "comment-no-empty": null,
        "function-no-unknown": null,
        "media-query-no-invalid": null,
        "no-invalid-position-at-import-rule": [
            true,
            {
                "ignoreAtRules": [
                    "use",
                    "forward"
                ]
            }
        ],
        "scss/at-extend-no-missing-placeholder": true,
        "scss/at-if-no-null": true,
        "scss/at-rule-no-unknown": true,
        "scss/comment-no-empty": true,
        "scss/declaration-nested-properties-no-divided-groups": true,
        "scss/dollar-variable-no-missing-interpolation": true,
        "scss/function-quote-no-quoted-strings-inside": true,
        "scss/function-unquote-no-unquoted-strings-inside": true,
        "scss/load-no-partial-leading-underscore": true,
        "scss/no-duplicate-mixins": true,
        "scss/no-global-function-names": true,
        "scss/operator-no-newline-after": true,
        "scss/operator-no-newline-before": true,
        "scss/operator-no-unspaced": true
    }
}