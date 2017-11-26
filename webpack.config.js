var path = require('path');
var webpack = require('webpack');
var version = require("./package.json").version;

module.exports = {
    context: path.resolve(__dirname),
    entry: {
        "animation-scene": ['./index.js'],
    },
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, 'min'),
        filename: '[name]-' + version + '.min.js',
        library: {
            root: "AnimationScene",
            amd: "animation-scene",
            commonjs: "animation-scene"
          },
        libraryTarget: "umd"
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true
            }
        })
    ]
};