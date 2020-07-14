const app = require('express')()
const fs = require('fs')

app.post('/upload', function (req, res) {
    let imgData = req.body.imgData // 获取POST请求中的base64图片数据
    let base64Data = imgData.replace(/^data:image\/\w+;base64,/, '')
    let dataBuffer = Buffer.from(base64Data, 'base64')
    fs.writeFile('image.png', dataBuffer, function (err) {
        if (err) {
            res.send(err)
        } else {
            res.send('图片上传成功！')
        }
    })
})
