const base = require('./webpack.base.config')
const {merge}=require('webpack-merge')
const mize = require('optimize-css-assets-webpack-plugin')
const uglify = require('uglifyjs-webpack-plugin')
module.exports = merge(base,{
    mode:'production',
    output:{
        publicPath:'./'
    },
    optimization:{
        minimizer:[
            new mize(),
            new uglify()
        ]
    }
})