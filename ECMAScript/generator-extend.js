//node
function* Hello() {
  yield 100
  yield (function() {
    return 200
  })()
  return 300
}
const h = Hello()
console.log(h[Symbol.iterator])
console.log(h.next()) // { value: 100, done: false }
console.log(h.next()) // { value: 200, done: false }
console.log(h.next()) // { value: 300, done: false }
console.log(h.next()) // { value: undefined, done: true }

var fetch = require('node-fetch')
var fs = require('fs')

function* gen() {
  try {
    var url = 'https://api.github.com/users/chengzao'
    var result = yield fetch(url)
    var res = yield result.json()
    var url2 = yield fetch(res.subscriptions_url)
    var res2 = yield url2.json()
    // console.log(res2)
    var ddd = JSON.stringify(res2)
    fs.writeFile('res.json', ddd, err => {
      if (err) {
        console.log(err)
      }
    })
  } catch (error) {
    console('error is : ', error)
  }
}

var run = function(g) {
  var it = g()
  function go(result) {
    if (result.done) {
      return result.value
    }
    return result.value.then(
      function(value) {
        return go(it.next(value))
      },
      function(err) {
        return go(it.throw(value))
      },
    )
  }

  go(it.next())
}

run(gen)

var fs = require('fs')

var readFile = function(fileName) {
  return new Promise(function(resolve, reject) {
    fs.readFile(fileName, function(error, data) {
      if (error) return reject(error)
      resolve(data)
    })
  })
}

var gen = function*() {
  var f1 = yield readFile('/etc/paths')
  var f2 = yield readFile('/etc/hosts')
  console.log(f1.toString())
  console.log(f2.toString())
}
// var g = gen();

// g.next().value.then(function(data){
//   g.next(data).value.then(function(data){
//     g.next(data);
//   });
// });

function run2(gen) {
  var it = gen()

  function next(data) {
    var result = it.next(data)
    if (result.done) {
      return result.value
    }
    result.value.then(function(data) {
      next(data)
    })
  }
  next()
}

run3(gen)
