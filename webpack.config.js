const path =require('path')//node 里面自带的内置文件路径拼接
const HtmlWebpackPlugins =require('html-webpack-plugin')//创建HTML的插件
module.exports={
    entry:'./src/index.js',//入口文件
    output:{//出口文件
        path:path.resolve(__dirname,'./dist'),//路径
        filename:'[hash].js',//随机哈希文件名
        publicPath:'http://localhost:8888/'
    },
    mode:'development',
    /*
    development 解除警告，表示按照开发环境打包，会显示引入的文件
    production 用于生产环境
    html 文件会显示成一行
    */
    plugins:[new HtmlWebpackPlugins({
        title:'webpack学习',
        /*
        如果同时用了 title 和 template的话，在 HTML 文件里需要改变 title
        <title><%= htmlWebpackPlugin.options.title %></title>
        */
        //可以书写filename 设置 html文件名
        template:path.resolve(__dirname,'./index.html'),
        //想用自己写好的html可以这样引入，会自动引入生成好的 JS 文件
        favicon:path.resolve(__dirname,'./src/images/icon.ico'),
        //改变网站图标
        inject:'body'
        //改变引入的 js 是在body 末尾还是 head 末尾
    })],
    module:{//
        rules:[
            {
                test:/\.css$/,
                //表示用那个解析器
                use:['style-loader','css-loader']
                //这是两个插件，专门解析css
            },
            {
                test:/\.jpg$/,
                loader:'url-loader',
                options:{//在HTML里插入
                    //img src="<%= require('./src/images/dog.jpg') %>"
                limit: 1024*10,  //设置图片大于这个KB显示地址，小于会显示编码
                name:'images/[hash].[ext]',//生成随机图片名称
                esModule:false  //强制关闭ES6 模块化语法
            }
        }
        ]
    },
    devServer:{
        host:'localhost',
        port:8888,
        hot:true
    }
}