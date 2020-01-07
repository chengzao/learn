let express = require('express')
let axios = require('axios')
let app = express();
app.use(express.static(__dirname));

let config = {
    github: '/get',
    jsonp: '/jsonp',
    bingBg: '/bing-bg'
}


app.get(config.github,function(req,res){
    async function fn(){
        let data = await axios.get(`https://api.github.com/users/chengzao`);
        let res2  = data.data;
        res.send( res2 );
    }
    fn();
})

app.get(config.jsonp,function(req,res){
    let {wd,cb} = req.query;
    console.log(req.query,wd);
        async function fn(){
            let data = await axios.get(`https://api.github.com/users/${wd}`);
            let res2  = data.data;
            res.send( `${cb}(${JSON.stringify(res2)})` );
        }
    if (cb === 'show' && wd === 'chengzao') {
        fn();
    }else {
        res.send('error')
    }
})

app.get(config.bingBg, function (req, res) {
    // 默认配置
    let defaults = {
        format: 'js',
        idx: 0,
        n: 1
    }
    let url = `http://cn.bing.com/HPImageArchive.aspx?format=${defaults.format}&idx=${defaults.idx}&n=${defaults.n}`;
    (async function(){
        let data = await axios.get(url);
        let res2 = data.data;
        res.send(`${JSON.stringify(res2)}`);
    })()
})

app.listen(3001);
console.log('server running in port 3001')