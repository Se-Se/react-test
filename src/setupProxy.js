// const proxy = require('http-proxy-middleware')

// module.exports = function(app) {
//     console.log(123)
//   app.use(
//     proxy.createProxyMiddleware('/sugrec', {  //`api`是需要转发的请求 
//       target: 'https://www.baidu.com',  // 这里是接口服务器地址
//       changeOrigin: true,
//       pathRewrite: {'^/api': ''}
//     })
//   )
// }


const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/api',//`api`是需要转发的请求
        createProxyMiddleware({
            target: 'https://eyesight.news.qq.com/',// 请求数据指定的服务器地址
            changeOrigin: true,
            pathRewrite: {
                '^/api': '',
            }
        })
    );
    app.use(
        '/ad/json/536',
        createProxyMiddleware({
            target: 'https://kunpeng.csdn.net/',
            changeOrigin: true,
            pathRewrite: {
                '^/ad': '',
            }
        })
    );
};
