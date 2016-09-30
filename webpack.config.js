var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    devServer: {
        contentBase: "./app",
        hot: true
    },
    entry: './app/main.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/',
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ],
    },
};