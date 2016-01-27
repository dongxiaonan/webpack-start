module.exports = {
    entry: "./scripts/entry.js",
    output: {
        path: __dirname,
        filename: "./scripts/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
