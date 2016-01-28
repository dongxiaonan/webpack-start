var webpack = require('webpack')

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
    },
    plugins: [
        new webpack.BannerPlugin('This file is created by Jiuyou')
    ]
};
