module.exports = {
    //publicPath:"/", //根路径
    outputDir:"distTwo", //打包后的输出路径
    // assetDir:"assets",  //静态资源目录
    lintOnSave:false,   //
    devServer:{
        open:true,  //自动打开
        host:"0.0.0.0", //域名
        port:8080,  //
        https:false,
        hotOnly:false,
        proxy:{
            "/api":{
                target:"http://localhost:8080",
                ws:true,
                changeOrigin:true,
                pathRewrite:{
                    '^/api':'/mock'
                }
            }
        },
        before(app){

        }
    }
}