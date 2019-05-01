//嵌套回调，读一个文件后输出，再读另一个文件，注意文件是有序被输出的，先text1.txt后text2.txt
var fs = require('fs')

fs.readFile('./text1.txt', 'utf8', function(err, data) {
  console.log('text1 file content: ' + data)
  fs.readFile('./text2.txt', 'utf8', function(err, data) {
    console.log('text2 file content: ' + data)
  })
})
