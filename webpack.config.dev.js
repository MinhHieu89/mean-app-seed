var webpackMerge = require('webpack-merge'),
    commonConfig = require('./webpack.config.common'),
    path = require('path');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: path.resolve(__dirname, 'public/js/app'),
        filename: 'bundle.js',
        publicPath: '/js/app',
        chunkFilename: '[id].chunk.js'
    }
})