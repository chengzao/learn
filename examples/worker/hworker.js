onmessage = function(event) {
  importScripts('./highlight.min.js')
  var result = self.hljs.highlightAuto(event.data)
  postMessage(result.value)
}
