let express = require('express');
let axios = require('axios');

let app = express();

app.get('/get',function(req,res){
    let {wd,cb} = req.query;
    console.log(req.query,wd);
    async function fn(){
        let data = await axios.get(`https://api.github.com/users/${wd}`);
        let res2  = data.data;
        res.send( `${cb}(${JSON.stringify(res2)})` );
    }
    fn();
})

var server = app.listen(3000,function(){
    var host = server.address();
    console.log(`server is up on port ${host.port}`);
})