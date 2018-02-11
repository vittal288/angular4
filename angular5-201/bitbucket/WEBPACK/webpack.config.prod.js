const webpack = require('webpack');
const path = require('path');
const webPackMerge = require('webpack-merge');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

const commonConfig = require('./webpack.config.common');

module.exports = webPackMerge(commonConfig, {
    entry: './src/app/main.aot.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/', //keep index.html place 
        filename: '[hash].js',
        chunkFilename: '[id].[hash].chunk.js' //hash is used here to kill the cache from browser to download new file content if it is updated
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    { loader: 'awesome-typescript-loader' },
                    { loader: 'angular2-template-loader' },
                    { loader: 'angular-router-loader?aot=true' } //to load routers for lazy load 
                ]
            },    
            {
                test: /\.css$/,
                use: [{ loader: 'raw-loader' }]
            },       
            {
                test: /\.scss$/,
                include: /node_modules/,
                use: extractSass.extract({
                    use: [
                    {
                        loader: "css-loader"
                    }, 
                    {
                        loader: "sass-loader"                       
                    }],
                    // use style-loader in development 
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),//webpack reduce the JS file's size and uglifies it 
        extractSass
    ]
})