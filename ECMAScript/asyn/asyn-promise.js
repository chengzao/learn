//原生Primose顺序嵌套回调示例
//等待（pending）、已完成（fulfilled）、已拒绝（rejected）
var fs = require('fs')

var read = function(filename) {
  var promise = new Promise(function(resolve, reject) {
    fs.readFile(filename, 'utf8', function(err, data) {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
  return promise
}

read('./text1.txt')
  .then(function(data) {
    console.log(data)
    return read('./text2.txt')
  })
  .then(function(data) {
    console.log(data)
  })
