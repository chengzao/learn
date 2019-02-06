var express=require('express');
var url=require('url');
var app=express();
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    res.setHeader('Access-Control-Allow-Headers','name');
    res.setHeader('Access-Control-Expose-Headers','name');
    next();
};
app.use(allowCrossDomain);
app.get('/getName',function (req,res,next) {
    res.send('hello');
});
app.listen(3001);