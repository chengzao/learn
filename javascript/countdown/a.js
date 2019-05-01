function Cutdown() {
}

Cutdown.prototype.addZero = function (i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
Cutdown.prototype.format = function (o, str) {
  for (let k in o) {
    if (new RegExp("(" + k + ")").test(str)) {
      str = str.replace(RegExp.$1, o[k]);
    }
  }
  return str;
}
Cutdown.prototype.showtime = function (obj) {
  let _this = this;
  let ele = document.querySelectorAll(obj.id)[0];
  // 结束时间戳
  let EndTime = obj.endTime;
  // 本地时间时间戳
  let curtime = +new Date();
  let lefttime = parseInt((EndTime - curtime) / 1000);

  // 转化为时分秒
  let YY, MM, DD, h, m, s;
  DD = parseInt(lefttime / (60 * 60 * 24)),
    h = parseInt(lefttime / (60 * 60) % 24),
    m = parseInt(lefttime / 60 % 60),
    s = parseInt(lefttime % 60);
  // 格式化
  h = _this.addZero(h);
  m = _this.addZero(m);
  s = _this.addZero(s);

  // 时间显示
  let o = {
    "d+": DD | '0', //日
    "h+": h | '00', //小时
    "m+": m | '00', //分
    "s+": s | '00', //秒
  };

  // console.log(DD);

  let formatStr = obj.msg.start;
  ele.innerHTML = _this.format(o, formatStr);

  // 判断停止时间
  if (lefttime <= 0) {
    ele.innerHTML = obj.msg.end;
    return;
  }
  // 自调用函数
  setTimeout(function () {
    _this.showtime(obj);
  }, 1000);
  // setTimeout(showtime.bind(_this,str),1000)
}

Cutdown.prototype.init = function (obj) {
  if (!obj || !obj.endTime || !obj.id || !obj.msg) {
    return;
  }
  this.EndTime = obj.endTime;
  this.showtime(obj);
}