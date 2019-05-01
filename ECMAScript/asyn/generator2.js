function* gen(x) {
  try {
    var y = yield x + 2
    return y
  } catch (error) {
    console.log(error)
  }
}

var g = gen(1)
var r1 = g.next()
g.throw('err')

function* Hello() {
  yield 100
  yield (function() {
    return 200
  })()
  return 300
}

var h = Hello()
console.log(typeof h) // object

console.log(h.next()) // { value: 100, done: false }
console.log(h.next()) // { value: 200, done: false }
console.log(h.next()) // { value: 300, done: true }
console.log(h.next()) // { value: undefined, done: true }
