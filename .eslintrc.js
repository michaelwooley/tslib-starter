export default {
    "root": true,
    "parser": "@typescript-eslint/parser",
    "parserOptions": { "project": "./tsconfig.json" },
    "env": { "es6": true, "node": true },
    "ignorePatterns": ["node_modules", "build", "coverage"],
    "plugins": [
        "import",
        "eslint-comments",
        "functional",
        "@typescript-eslint"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:eslint-comments/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
        "plugin:functional/lite",
        "prettier"
    ],
    "globals": { "BigInt": true, "console": true, "WebAssembly": true },
    "rules": {
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "eslint-comments/disable-enable-pair": [
            "error",
            { "allowWholeFile": true }
        ],
        "eslint-comments/no-unused-disable": "error",
        "import/order": [
            "error",
            { "newlines-between": "always", "alphabetize": { "order": "asc" } }
        ],
        "sort-imports": [
            "error",
            { "ignoreDeclarationSort": true, "ignoreCase": true }
        ]
    },
    "overrides": [
        {
            // Jest tests don't return
            "files": ["*.spec.ts"],
            "rules": {
                "functional/no-return-void": "off"
            }
        }
    ]
}
