let express = require('express');
let app = express();
let WebSocket = require('ws');//npm i ws
// 设置服务器域为3000端口
let wss = new WebSocket.Server({port:3000});
//连接
wss.on('connection', function(ws){
    // 接收客户端传来的消息
    ws.on('message', function(data){
        console.log(data);
        // 服务端回复消息
        ws.send('hello client')
    })
})