let express = require('express');
let axios = require('axios');

let app = express();

app.get('/api',function(req,res){
    async function fn(){
        let data = await axios.get(`https://api.github.com/users/chengzao`);
        let res2  = data.data;
        res.send( res2 );
    }
    fn();
})

var server = app.listen(8080,function(){
    var host = server.address();
    console.log(`server is up on port ${host.port}`);
})