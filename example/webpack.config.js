var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");

module.exports = {
    devtool: '#source-map',
    context: path.resolve(__dirname),

    entry: {
        "main": [
            './index.js',
            "webpack-dev-server/client?http://localhost:8080/"
        ],
    },

    output: {
        publicPath: "/",
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html.ejs',
            hash: true
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: "defer"
        })
    ],

    module: {
        rules: [
          {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
              { loader: 'style-loader' },
              { loader: 'css-loader'},
              { loader: "sass-loader" }
            ]
          }, {
            test: /\.css$/,
            use: [
              { loader: 'style-loader' },
              { loader: 'css-loader'}
            ]
          }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8080,
        inline: true,
        historyApiFallback: {
            index: "/index.html"
        },
        host: '0.0.0.0',
    }
};