// 中间代理服务器
var express = require('express')
var proxy = require('http-proxy-middleware')
var app = express()

app.use(
  '/api',
  proxy({
    // 代理跨域目标接口
    target: 'http://127.0.0.1:8080',
    changeOrigin: true,
    // 修改响应头信息，实现跨域并允许带 cookie
    onProxyRes: function(proxyRes, req, res) {
      res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5000')
      res.setHeader('Access-Control-Allow-Credentials', 'true')
    },

    // 修改响应信息中的 cookie 域名
    cookieDomainRewrite: '127.0.0.1:5000', // 可以为 false，表示不修改
  }),
)

app.listen(3000)
