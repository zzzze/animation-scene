var path = require('path');
var webpack = require('webpack');
var version = require("./package.json").version;
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname),
    entry: './src/index.js',
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, 'lib'),
        filename: 'main.js',
        library: {
            root: "Scene",
            amd: "Scene",
            commonjs: "Scene"
          },
        libraryTarget: "umd"
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true
            }
        }),
        new CleanWebpackPlugin(["lib/main.js"], {
            verbose: true
        })
    ]
};