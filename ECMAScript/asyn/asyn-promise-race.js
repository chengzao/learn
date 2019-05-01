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

var promises = [1, 2].map(function(fileno) {
  return read('./text' + fileno + '.txt')
})
//Promise.race 只要有一个已经读取了，就可以进行下一步的操作
//Promise.race 接收一个包含多个 promise 对象的数组
Promise.race(promises)
  .then(function(contents) {
    console.log(contents)
  })
  .catch(function(err) {
    console.log('error caught: ' + err)
  })
