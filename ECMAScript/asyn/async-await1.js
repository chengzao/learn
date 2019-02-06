var fs = require('fs');

var readFile = function (fileName){
    return new Promise(function (resolve, reject){
        fs.readFile(fileName, function(error, data){
            if (error){
                reject(error);
            }
            else {
                resolve(data);
            }
        });
    });
};

var asyncReadFile = async function(){
    var f1 = await readFile('./text1.txt');
    var f2 = await readFile('./text2.txt');
    console.log(f1.toString());
    console.log(f2.toString());
};

asyncReadFile();