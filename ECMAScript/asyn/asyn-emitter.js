//发布和订阅事件

var events = require('events')
var emitter = new events.EventEmitter()

emitter.on('event1', function(message) {
  console.log(message)
})

emitter.emit('event1', 'message for you')
