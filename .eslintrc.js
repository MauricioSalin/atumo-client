module.exports = {
    "root": true,
    "extends": "airbnb",
    "env": {
        "browser": true,
        "node": false,
        "jest": true
    },
    "plugins":[
        "react",
        "jsx-a11y",
        "import"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "react/jsx-filename-extension": [
            1, { "extensions": [".js", ".jsx"] }
        ],
        "import/no-unresolved": 0,
    }
};