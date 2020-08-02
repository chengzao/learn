const width = 450
const height = 120

// 解决HiDPI中失真问题
document.querySelectorAll('canvas').forEach(canvas => {
  const ratio = window.devicePixelRatio

  canvas.width = width * ratio
  canvas.height = height * ratio
  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`

  const ctx = canvas.getContext('2d')
  ctx.scale(ratio, ratio)
})

{
  // drawRect
  const canvas = document.getElementById('rect')
  const ctx = canvas.getContext('2d')

  ctx.fillStyle = '#f00'
  ctx.fillRect(0, 0, 100, 100)
  ctx.fillRect(115, 0, 100, 100)
}
{
  // drawFivePointedStar
  const canvas = document.getElementById('star')
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#f00'
  ctx.strokeStyle = '#f00'

  const drawStar = ({ stroke = false, fillRule = 'nonzero' } = {}) => {
    ctx.beginPath()
    ctx.moveTo(81, 95)
    ctx.lineTo(0, 36)
    ctx.lineTo(100, 36)
    ctx.lineTo(19, 95)
    ctx.lineTo(50, 0)
    ctx.closePath()
    // fill 的时候自动 closePath
    stroke ? ctx.stroke() : ctx.fill(fillRule)
  }

  drawStar({ stroke: true })

  ctx.translate(115, 0)
  drawStar()

  ctx.translate(115, 0)
  drawStar()

  ctx.translate(115, 0)
  drawStar({ fillRule: 'evenodd' })
}
{
  // drawCircle
  const canvas = document.getElementById('circle')
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = 'red'
  ctx.strokeStyle = 'red'

  function drawArc(radius, { anticlockwise = false, stroke = false } = {}) {
    ctx.beginPath()
    ctx.arc(50, 50, 49, 0, radius / 180 * Math.PI * 2, anticlockwise)
    ctx.lineTo(50, 50)
    ctx.closePath()
    stroke ? ctx.stroke() : ctx.fill()
  }

  drawArc(360)

  ctx.translate(115, 0)
  drawArc(60, { anticlockwise: true })

  ctx.translate(115, 0)
  drawArc(60)

  ctx.translate(115, 0)
  ctx.scale(0.6, 0.8)
  ctx.translate(20, 10)
  drawArc(360)
}
{
  // drawText
  const canvas = document.getElementById('text')
  const ctx = canvas.getContext('2d')

  ctx.fillStyle = 'red'
  ctx.strokeStyle = 'red'
  ctx.font = '16px serif'

  // 普通文本
  ctx.strokeRect(1, 1, 100, 100)
  ctx.fillText('hello, world', 0, 16)

  // 垂直居中
  ctx.translate(115, 0)
  ctx.strokeRect(1, 1, 100, 100)
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('垂直居中', 50, 50)
}
{
  // drawGradient
  const canvas = document.getElementById('grad')
  const ctx = canvas.getContext('2d')

  ctx.fillStyle = 'red'
  ctx.strokeStyle = 'red'
  ctx.font = '16px serif'

  // canvas 实现 reflect 和 repeat 需要自己编程实现
  const grad1 = ctx.createLinearGradient(0, 0, 100, 100)
  grad1.addColorStop(0, 'red')
  grad1.addColorStop(0.3, '#fff')
  grad1.addColorStop(0.6, 'red')
  grad1.addColorStop(0.9, '#fff')

  ctx.fillStyle = grad1
  ctx.fillRect(0, 0, 100, 100)

  const grad2 = ctx.createRadialGradient(50, 50, 50, 80, 80, 0)
  // 注意与 svg 中 stop 的颜色值相反
  grad2.addColorStop(0, '#fff')
  grad2.addColorStop(1, 'red')

  ctx.fillStyle = grad2
  ctx.translate(115, 0)
  ctx.beginPath()
  ctx.arc(50, 50, 50, 0, Math.PI * 2)
  ctx.fill()
}