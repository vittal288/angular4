var path = require('path');
var webPackMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.common');

module.exports =webPackMerge(commonConfig,{
    devtool:'cheap-module-eval-source-map', //to get highest level source map 
    output:{
        path:path.resolve(__dirname,'dist'),
        publicPath:'/', //keep index.html place 
        filename:'bundle.js',
        chunkFilename:'[id].chunk.js'
    },
    module:{
        rules:[
            {
                test:/\.ts$/,
                use:[
                    {loader:'awesome-typescript-loader',options:{
                        transpileOnly:true //only analyse the TS files which are included by us
                    }},
                    {loader:'angular2-template-loader'},
                    {loader:'angular-router-loader'} //to load routers for lazy load 
                ]
            }
        ]
    },
    devServer:{
        historyApiFallback:true,//HTML5 URL loader, without # tag in between in the URL 
        stats:'minimal'
    }

});