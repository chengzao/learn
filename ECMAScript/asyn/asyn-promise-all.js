var fs = require('fs')

var read = function (filename){
    var promise = new Promise(function(resolve, reject){
        fs.readFile(filename, 'utf8', function(err, data){
            if (err){
                reject(err);
            }
            resolve(data);
        })
    });
    return promise;
}

var promises = [1, 2].map(function(fileno){
    return read('./text' + fileno + '.txt');
});
//Promise.all 等待它们全部都被读取完，再做下一步的操作
Promise.all(promises)
.then(function(contents){
    console.log(contents);
})
.catch(function(err){
    console.log("error caught: " + err);
})
