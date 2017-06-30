var webpack = require('webpack'),
    webpackMerge = require('webpack-merge'),
    commonConfig = require('./webpack.config.common'),
    path = require('path');

module.exports = webpackMerge.smart(commonConfig, {
    entry: {
        'app': './assets/app/main.aot.ts'
    },

    output: {
        path: path.resolve(__dirname, 'public/js/app'),
        filename: 'bundle.js',
        publicPath: '/js/app/',
        chunkFilename: '[id].[hash].chunk.js'
    },

    module: {
        loaders: [{
            test: /\.ts$/,
            loaders: [
                'awesome-typescript-loader',
                'angular2-template-loader',
                'angular2-router-loader?aot=true&genDir=public/js/app'
            ]
        }]
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false
        })
    ]
});