const DEFAULTS = {
    "presets": [
        "@babel/preset-react",
        "@babel/preset-env"
    ],
    "plugins": [
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-proposal-export-default-from",
        "@babel/plugin-proposal-export-namespace-from",
        "@babel/plugin-syntax-export-default-from",
        "@babel/plugin-syntax-export-namespace-from"
    ],
    "ignore": [
        "**/*.test.js"
    ]
};

module.exports = {
    "env": {
        "production": DEFAULTS,
        "development": DEFAULTS,
        "test": {
            "presets": [
                "@babel/preset-env",
                "@babel/preset-react"
            ],
            "plugins": ["transform-es2015-modules-commonjs"]
        }
    }
};
