//读文件后输出文件内容
var fs = require('fs')

fs.readFile('./text1.txt', 'utf8', function(err, data) {
  if (err) {
    throw err
  }
  console.log(data)
})
