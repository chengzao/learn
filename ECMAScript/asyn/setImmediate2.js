setImmediate(function (){
  setImmediate(function A(){
    console.log(1);
    setImmediate(function B(){
      console.log(2)
    })
  })
})
setTimeout(function timeout(){
  console.log(3)
},0)
// 312
