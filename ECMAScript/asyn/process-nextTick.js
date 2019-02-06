//process.nextTick方法可以在当前"执行栈"的尾部----下一次Event Loop（主线程读取"任务队列"）之前----触发回调函数
process.nextTick(function A(){
  console.log(1)
  process.nextTick(function B(){
    console.log(2)
  })
})
setTimeout(function timeout(){
  console.log(3)
},0)
