module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended"
    ],
    "rules": {
        "no-unused-vars": "warn",
        "no-sparse-arrays": "warn",
        "no-use-before-define": ["warn", { "functions": false, "classes": false }],
        "react-hooks/exhaustive-deps": "warn",
        "react/prop-types": "warn",
        "react/react-in-jsx-scope": "warn"
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
    
}; 