{
  // genertaor基本定义
  let tell = function*() {
    yield 'a'
    yield 'b'
    return 'c'
  }

  let k = tell()

  console.log(k.next())
  console.log(k.next())
  console.log(k.next())
  console.log(k.next())
}

{
  let obj = {}
  obj[Symbol.iterator] = function*() {
    yield 1
    yield 2
    yield 3
  }

  for (let value of obj) {
    console.log('value', value)
  }
}

{
  let state = function*() {
    while (1) {
      yield 'A'
      yield 'B'
      yield 'C'
    }
  }
  let status = state()
  console.log(status.next())
  console.log(status.next())
  console.log(status.next())
  console.log(status.next())
  console.log(status.next())
}

{
  let draw = function(count) {
    console.log(`剩余${count}次数`)
  }
  let residue = function*(count) {
    while (count > 0) {
      count--
      yield draw(count)
    }
  }
  let star = residue(5)
  let btn = document.createElement('button')
  btn.id = 'start'
  btn.textContent = '抽奖'
  document.body.appendChild(btn)
  document.getElementById('start').addEventListener(
    'click',
    function() {
      star.next()
    },
    false,
  )
}

{
  let ajax = function*() {
    yield new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve({ code: 0 })
      }, 300)
    })
  }

  let pull = function() {
    let gen = ajax()
    let step = gen.next()

    step.value.then(function(res) {
      if (res.code != 0) {
        setTimeout(function() {
          console.log('wait...')
          pull()
        }, 1000)
      } else {
        console.log('res', res)
      }
    })
  }

  pull()
}
