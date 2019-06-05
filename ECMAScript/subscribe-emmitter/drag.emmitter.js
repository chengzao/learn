//Drag.js
if (typeof Subscribe === 'undefined') {
  throw new ReferenceError('没有引入subscribe.js!')
}

class Drag {
  constructor(ele) {
    this.ele = ele
    ;['strX', 'strY', 'strL', 'strT', 'curL', 'curT'].forEach(item => {
      this[item] = null
    })

    this.subDown = new Subscribe()
    this.subMove = new Subscribe()
    this.subUp = new Subscribe()

    //=>DRAG-START
    this.DOWN = this.down.bind(this)
    this.ele.addEventListener('mousedown', this.DOWN)
  }

  down(ev) {
    let ele = this.ele
    this.strX = ev.clientX
    this.strY = ev.clientY
    this.strL = ele.offsetLeft
    this.strT = ele.offsetTop

    this.MOVE = this.move.bind(this)
    this.UP = this.up.bind(this)
    document.addEventListener('mousemove', this.MOVE)
    document.addEventListener('mouseup', this.UP)

    this.subDown.fire(ele, ev)
  }

  move(ev) {
    let ele = this.ele
    this.curL = ev.clientX - this.strX + this.strL
    this.curT = ev.clientY - this.strY + this.strT
    ele.style.left = this.curL + 'px'
    ele.style.top = this.curT + 'px'

    this.subMove.fire(ele, ev)
  }

  up(ev) {
    document.removeEventListener('mousemove', this.MOVE)
    document.removeEventListener('mouseup', this.UP)

    this.subUp.fire(this.ele, ev)
  }
}

window.Drag = Drag
