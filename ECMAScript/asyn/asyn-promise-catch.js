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

read('./text1.txt')
.then(function(data){
    console.log(data);
    return read('not_exist_file');
})
.then(function(data){
    console.log(data);
})
.catch(function(err){
    console.log("error caught: " + err);
    x+1;
})
.catch(function(err){
    console.log("error caught: " + err);
})
.then(function(data){
    console.log("completed");
})