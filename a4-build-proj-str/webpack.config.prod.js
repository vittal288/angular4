var webpack = require('webpack');
var path = require('path');
var webPackMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.common');

module.exports = webPackMerge(commonConfig, {
    entry: './src/app/main.aot.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/', //keep index.html place 
        filename: '[hash].js',
        chunkFilename: '[id].[hash].chunk.js' //hash is used here to kill the cache from browser to download new file content if it is updated
    },
     module:{
        rules:[
            {
                test:/\.ts$/,
                use:[
                    {loader:'awesome-typescript-loader'},
                    {loader:'angular2-template-loader'},
                    {loader:'angular-router-loader?aot=true'} //to load routers for lazy load 
                ]
            }
        ]
    },
    plugins:[

    ]
})