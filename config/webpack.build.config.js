const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const webpack =  require('webpack');

const buildWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    devtool: 'eval-sourcemap',
    plugins:[
        new webpack.SourceMapDevToolPlugin({
            filename: "[file].map"
        })
    ]
})

module.exports = new Promise((resolve, reject) =>{
    resolve(buildWebpackConfig)
})