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
        "linebreak-style": 0,
        "react/jsx-one-expression-per-line": 0,
        "no-console": 0,
        "import/no-extraneous-dependencies": 0,
        "react/self-closing-comp": 0
    }
};