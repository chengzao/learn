function* gen(x) {
  var y = yield x + 2
  return y
}

var g = gen(1)
var r1 = g.next() // { value: 3, done: false }
console.log(r1)
var r2 = g.next(2) // { value: 2, done: true }
console.log(r2)
var r3 = g.next() // {value: undefined, done: true}
console.log(r3)
