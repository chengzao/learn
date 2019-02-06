// Worker线程中全局对象为 self，代表子线程自身，这时 this指向self

// self.postMessage: worker线程往主线程发消息，消息可以是任意类型数据，包括二进制数据

// self.close: worker线程关闭自己

// self.onmessage: 指定主线程发worker线程消息时的回调，
// 也可以self.addEventListener('message',cb)

// self.onerror: 指定worker线程发生错误时的回调，
// 也可以 self.addEventListener('error',cb)


// 同源限制
// worker线程执行的脚本文件必须和主线程的脚本文件同源，这是当然的了，
// 总不能允许worker线程到别人电脑上到处读文件吧

// 文件限制
// 为了安全，worker线程无法读取本地文件，它所加载的脚本必须来自网络，且需要与主线程的脚本同源

// DOM操作限制
// worker线程在与主线程的window不同的另一个全局上下文中运行，
// 其中无法读取主线程所在网页的DOM对象，也不能获取 document、window等对象，
// 但是可以获取navigator、location(只读)、XMLHttpRequest、setTimeout族等浏览器API。

// 通信限制
// worker线程与主线程不在同一个上下文，不能直接通信，需要通过postMessage方法来通信。

// 脚本限制
// worker线程不能执行alert、confirm，但可以使用 XMLHttpRequest 对象发出ajax请求。




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
// importScripts('script1.js','script2.js')


// self.onmessage = ev => {
//   self.postMessage( fn() + ' ' + fn2() +' : '+ev.data)
// //   self.close();
// }


self.addEventListener('message',function(ev){

  this.console.log('worker message data : ',ev.data)
  let url = 'https://api.github.com/users/'+ev.data;
  let req = new XMLHttpRequest();
      req.open('GET', url, true);
      req.responseType = "json";
      req.onreadystatechange = () => {
        if (req.readyState == 4) {
        postMessage(req.response);
      }
    }
  req.send(null);
})