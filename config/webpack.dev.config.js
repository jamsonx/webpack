const base = require('./webpack.base.config.js')
const {merge} = require('webpack-mrege')
module.exports=merge(base,{
    mode:'development',
    output:{
        publicPath:'http://localhost:8888/'
    },
    devServer:{
        host:'localhost',
        port:8888,
        hot:true
    }
})