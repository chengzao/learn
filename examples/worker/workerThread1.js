// Worker线程中全局对象为 self，代表子线程自身，这时 this指向self

// self.postMessage: worker线程往主线程发消息，消息可以是任意类型数据，包括二进制数据

// self.close: worker线程关闭自己

// self.onmessage: 指定主线程发worker线程消息时的回调，
// 也可以self.addEventListener('message',cb)

// self.onerror: 指定worker线程发生错误时的回调，
// 也可以 self.addEventListener('error',cb)

// let i = 1

// function simpleCount() {
//   i++
//   self.postMessage(i)
//   setTimeout(simpleCount, 1000)
// }

// simpleCount()

// 加载单个脚本
// importScripts('script1.js')

// 加载多个脚本
importScripts('script1.js', 'script2.js')

self.onmessage = ev => {
  self.postMessage(fn() + ' ' + fn2() + ' : ' + ev.data)
  //   self.close();
}
