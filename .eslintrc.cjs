module.exports = {
    root: true,
    env: { browser: true, es2020: true, jest: true },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh"],
    rules: {
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-explicit-any": "warn",
        "no-var": "error",
        "prefer-const": "warn",
        "semi": ["warn", "always"],
        "arrow-parens": ["warn", "always"],
        "object-curly-spacing": ["warn", "never"],
        "max-len": ["warn", { "code": 80 }],
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],
        "prettier/prettier": ["warn", { endOfLine: "auto" }],
    },
};
