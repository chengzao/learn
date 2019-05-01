function scroll() {
  if (window.pageYOffset != null) {
    return {
      top: window.pageYOffset,
      left: window.pageXOffset,
    }
  }
  if (document.compatMode == 'CSS1Compat') {
    return {
      top: document.documentElement.scrollTop,
      left: document.documentElement.scrollLeft,
    }
  }
  return {
    top: document.body.scrollTop,
    left: document.body.scrollLeft,
  }
}
function $(id) {
  return document.getElementById(id)
}
function getStyle(obj, attr) {
  if (obj.currentStyle) {
    return obj.currentStyle[attr]
  } else {
    return getComputedStyle(obj, null)[attr]
  }
}
