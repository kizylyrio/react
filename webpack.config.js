const webpack = require('webpack')

module.exports = {
    entry: './ex/index.js',

    //In memory
    output:{
        path: __dirname + 'public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    module:{
        //To browser translate the expressions from EchmaScript using babel
        loaders:[{
            test:  /.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query:{
                presets: ['es2015']
            }
        }]

    }
}