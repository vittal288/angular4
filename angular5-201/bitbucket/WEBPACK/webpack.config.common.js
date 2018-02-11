var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app/main.ts',//from here our entry point of build process will start
    resolve: {
        extensions: ['.js', '.ts'] //use both or understands the both versions of file 
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['css-loader', 'sass-loader'] // sass-loader not scss-loader
            }
        ],
        exprContextCritical: false //avoid some nasty error
    },
    //load or copy an index.html file to dist folder
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html' //copy index.html file from src/app and inject all bundle js files 
        })     
    ]
}