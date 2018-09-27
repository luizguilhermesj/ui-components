module.exports = {
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
