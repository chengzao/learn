// 阴阳日历的转换
(function (w) {
  var DaysInMonth = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
  var ArrMonthLunar = new Array("正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二");
  var ArrWeekDate = new Array('星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六');
  var ArrDayLunar = new Array("初一", "初二", "初三", "初四", "初五", "初六", "初七", "初八", "初九", "初十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十", "廿一", "廿二", "廿三", "廿四", "廿五", "廿六", "廿七", "廿八", "廿九", "三十");
  var DaysInMonthLunar = new Array(
    [0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 38], [6, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 26], [0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 45], [0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 35], [4, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 24], [0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 43], [0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 32], [2, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 21], [0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 40], [7, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 28], [0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 47], [0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 36], [5, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 26], [0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 44], [0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 33], [3, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 23], [0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 42], [8, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 30], [0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 48], [0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 38], [6, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 27], [0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 45], [0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 35], [4, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 24], [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 43], [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 32], [3, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 20], [0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 39], [7, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 29], [0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 47], [0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 36], [5, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 26], [0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 45], [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 33], [4, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 22], [0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 41], [8, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 30], [0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 48], [0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 37], [6, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 27], [0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 46], [0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 35], [4, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 24], [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 43], [10, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 32], [0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 50], [0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 39], [6, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 28], [0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 47], [0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 36], [5, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 26], [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 45], [0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 34], [3, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 22], [0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 40], [8, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 30], [0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 49], [0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 37], [5, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 27], [0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 46], [0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 35], [4, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 23], [0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 42], [0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 31], [2, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 21], [0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 39], [7, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 28], [0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 48], [0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 37], [5, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 25], [0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 44], [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 33], [4, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 22], [0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 40], [9, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 30], [0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 49], [0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 38], [6, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 27], [0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 46], [0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 35], [4, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 24], [0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 42], [0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 31], [2, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 21], [0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 40], [6, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 28], [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 47], [0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 36], [5, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 25], [0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 43], [0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 33], [3, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 22]);

  function Calendar() {
    this.yearStart = 1940;
    this.yearEnd = (new Date()).getFullYear();
  }

  Calendar.prototype = {
    // 传入的公历年月,返回天数
    getSolarMonth: function (year, month) {
      if (month == 2) {
        return (((year % 4 == 0) && ((year % 100) != 0)) || (year % 400 == 0)) ? 29 : 28;
      } else {
        return DaysInMonth[month - 1];
      }
    },
    // 传入年,返回闰月在阴历年中是第几月
    getRunMonth: function (year) {
      return DaysInMonthLunar[year - this.yearStart][0];
    },
    // 传入年,返回阴历年中闰月的天数
    getRunMonthDate: function (year) {
      // 得到闰月
      var runMonth = this.getRunMonth(year);
      var runMonthDate = (DaysInMonthLunar[year - this.yearStart][runMonth + 1] == 1) ? 30 : 29;
      return runMonthDate;
    },
    // 传入年月,返回阴历天数(不包含闰月)
    getLunarMonthDate: function (year, month) {
      var newMonth = new Number();
      // 判断是否是闰年
      var isRunMonth = this.getRunMonth(year);
      if (isRunMonth > 0) {
        if (isRunMonth >= month) {
          newMonth = month;
        } else {
          newMonth = month + 1;
        }
      } else {
        newMonth = month;
      }
      var LunarDate = DaysInMonthLunar[year - this.yearStart][newMonth] == 1 ? 30 : 29;
      return LunarDate;
    },
    // 传入阴历年,返回阴历月数组
    showLunarMonth: function (y) {
      var getRunMonth = this.getRunMonth(y);
      var lunarMonthCZ = [];
      if (getRunMonth > 0) {
        for (var i = 0; i < 12; i++) {
          lunarMonthCZ.push(ArrMonthLunar[i])
        }
        lunarMonthCZ.splice(getRunMonth, 0, '闰' + ArrMonthLunar[getRunMonth - 1])
      } else {
        for (var i = 0; i < 12; i++) {
          lunarMonthCZ.push(ArrMonthLunar[i])
        }
      }
      return lunarMonthCZ;
    },
    // 阳历转阴历
    solarTolunar: function (y, m, d) {
      var dayEnd = new Date(y, m - 1, d);
      var weekday = dayEnd.getDay();
      //var days = (dayEnd - new Date(y, 0, 1)) / 86400000;
      var sum = 0;
      for (var j = 1; j < m; j++) {
        sum += this.getSolarMonth(y, j);
      }
      var days = sum + d - 1;
      var solarMaxDate = this.getSolarMonth(y, m);
      var dayLunarCZ;
      var lunarData = DaysInMonthLunar[y - this.yearStart];
      dayEnd.setDate(dayEnd.getDate() - lunarData[lunarData.length - 1]);
      var finalYear = dayEnd.getFullYear();
      var calDays = 0;
      var finalMonth = -1;
      var finalDay = -1;
      var lunarMonth = -1;
      var lunarRunMonth;
      if (days < lunarData[lunarData.length - 1]) {
        days = lunarData[lunarData.length - 1] - days;
        lunarData = DaysInMonthLunar[finalYear - this.yearStart];
        for (var i = lunarData.length - 2; i >= 1; i--) {
          if (lunarData[i] == 0) {
            calDays += 29;
          } else {
            calDays += 30;
          }
          if (days <= calDays) {
            finalMonth = i;
            finalDay = calDays - days + 1;
            break;
          }
        }
        lunarMonth = DaysInMonthLunar[finalYear - this.yearStart][0] > 0 ? finalMonth > DaysInMonthLunar[finalYear - this.yearStart][0] ? finalMonth - 1 : finalMonth : finalMonth;
        lunarRunMonth = ArrMonthLunar[lunarMonth - 1];
        return {
          solarYear: y,
          solarMonth: m,
          solarDay: d,
          solarMaxDate: solarMaxDate,
          lunarYear: finalYear,
          lunarMonth: lunarMonth,
          lunarMonthCZ: lunarRunMonth,
          lunarDay: finalDay,
          lunarDayCZ: ArrDayLunar[finalDay - 1],
          weekday: weekday,
          weekdayCZ: ArrWeekDate[weekday],
          lunarMonthIndex: finalMonth
        };
      }

      lunarData = DaysInMonthLunar[finalYear - this.yearStart];
      days -= lunarData[lunarData.length - 1];
      calDays = 0;
      finalMonth = -1;
      for (var i = 1; i <= lunarData.length - 1; i++) {
        if (days >= calDays) {
          if (lunarData[i] == 0) {
            calDays += 29;
          } else {
            calDays += 30;
          }
        } else {
          if (i > 1) {
            finalMonth = i - 1;
            if (lunarData[i - 1] == 0) {
              calDays -= 29;
            } else {
              calDays -= 30;
            }
          }
          break;
        }
      }
      finalDay = days - calDays + 1;
      lunarMonth = DaysInMonthLunar[finalYear - this.yearStart][0] > 0 ? (finalMonth > DaysInMonthLunar[finalYear - this.yearStart][0] ? finalMonth - 1 : finalMonth) : finalMonth;
      if (finalMonth == (DaysInMonthLunar[finalYear - this.yearStart][0] + 1) && (DaysInMonthLunar[finalYear - this.yearStart][0] > 0)) {
        lunarRunMonth = '闰' + ArrMonthLunar[lunarMonth - 1];
      } else {
        lunarRunMonth = ArrMonthLunar[lunarMonth - 1];
      }
      return {
        solarYear: y,
        solarMonth: m,
        solarDate: d,
        solarMaxDate: solarMaxDate,
        lunarYear: finalYear,
        lunarMonth: lunarMonth,
        lunarDay: finalDay,
        lunarDayCZ: ArrDayLunar[finalDay - 1],
        lunarMonthCZ: lunarRunMonth,
        weekday: weekday,
        weekdayCZ: ArrWeekDate[weekday],
        lunarMonthIndex: finalMonth
      };
    },
    // 阴历转阳历
    lunarToSolar: function (y, m, d) {
      var y = parseInt(y);
      var m = parseInt(m);
      var d = parseInt(d);
      var calDays = 0;
      var weekday = -1;
      var lunarMaxDate = -1;
      var lunarMonthCZ = -1;
      var lunarData = DaysInMonthLunar[y - this.yearStart];
      for (var i = 1; i < m; i++) {
        if (lunarData[i] == 0) {
          calDays += 29;
        } else {
          calDays += 30;
        }
      }
      calDays += d - 1;
      var date = new Date(y, 0, 1);
      date.setDate(date.getDate() + calDays + lunarData[lunarData.length - 1]);
      var _tmp = m;
      m = DaysInMonthLunar[y - this.yearStart][0] > 0 ? (DaysInMonthLunar[y - this.yearStart][0] >= m ? m : m - 1) : m;
      if ((_tmp == DaysInMonthLunar[y - this.yearStart][0] + 1) && DaysInMonthLunar[y - this.yearStart][0] > 0) {
        lunarMonthCZ = '闰' + ArrMonthLunar[m - 1];
        lunarMaxDate = this.getRunMonthDate(y);
      } else {
        // 非闰月
        lunarMaxDate = this.getLunarMonthDate(y, m);
        lunarMonthCZ = ArrMonthLunar[m - 1];
      }
      weekday = date.getDay();
      return {
        lunarYear: y,
        lunarMonth: m,
        lunarDay: d,
        lunarMaxDate: lunarMaxDate,
        lunarMonthCZ: lunarMonthCZ,
        lunarMonthIndex: _tmp,
        solarYear: date.getFullYear(),
        solarMonth: (parseInt(date.getMonth()) + 1),
        solarDay: date.getDate(),
        weekday: weekday,
        weekdayCZ: ArrWeekDate[weekday]
      }
    }
  };
  var calendar = new Calendar();
  w.calendar = calendar;
})(window);

(function () {
  var lastTime = 0;
  var vendors = ['webkit', 'moz'];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||
      // name has changed in Webkit
      window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
      var id = window.setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  }
}());

// 日历控件
(function (w, calP) {
  var ArrDayLunar = new Array("初一", "初二", "初三", "初四", "初五", "初六", "初七", "初八", "初九", "初十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十", "廿一", "廿二", "廿三", "廿四", "廿五", "廿六", "廿七", "廿八", "廿九", "三十");
  var Tween = {
    Linear: function (t, b, c, d) {
      return c * t / d + b;
    },
    Quad: {
      easeIn: function (t, b, c, d) {
        return c * (t /= d) * t + b;
      },
      easeOut: function (t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
      },
      easeInOut: function (t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
      }
    },
    Cubic: {
      easeIn: function (t, b, c, d) {
        return c * (t /= d) * t * t + b;
      },
      easeOut: function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
      },
      easeInOut: function (t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
      }
    },
    Quart: {
      easeIn: function (t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
      },
      easeOut: function (t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
      },
      easeInOut: function (t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
      }
    },
    Quint: {
      easeIn: function (t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
      },
      easeOut: function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
      },
      easeInOut: function (t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
      }
    },
    Sine: {
      easeIn: function (t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
      },
      easeOut: function (t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
      },
      easeInOut: function (t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
      }
    },
    Expo: {
      easeIn: function (t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
      },
      easeOut: function (t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
      },
      easeInOut: function (t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
      }
    },
    Circ: {
      easeIn: function (t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
      },
      easeOut: function (t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
      },
      easeInOut: function (t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
      }
    },
    Elastic: {
      easeIn: function (t, b, c, d, a, p) {
        var s;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (typeof p == "undefined") p = d * .3;
        if (!a || a < Math.abs(c)) {
          s = p / 4;
          a = c;
        } else {
          s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
      },
      easeOut: function (t, b, c, d, a, p) {
        var s;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (typeof p == "undefined") p = d * .3;
        if (!a || a < Math.abs(c)) {
          a = c;
          s = p / 4;
        } else {
          s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
      },
      easeInOut: function (t, b, c, d, a, p) {
        var s;
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (typeof p == "undefined") p = d * (.3 * 1.5);
        if (!a || a < Math.abs(c)) {
          a = c;
          s = p / 4;
        } else {
          s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
      }
    },
    Back: {
      easeIn: function (t, b, c, d, s) {
        if (typeof s == "undefined") s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
      },
      easeOut: function (t, b, c, d, s) {
        if (typeof s == "undefined") s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
      },
      easeInOut: function (t, b, c, d, s) {
        if (typeof s == "undefined") s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
      }
    },
    Bounce: {
      easeIn: function (t, b, c, d) {
        return c - Tween.Bounce.easeOut(d - t, 0, c, d) + b;
      },
      easeOut: function (t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
          return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
          return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        } else if (t < (2.5 / 2.75)) {
          return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        } else {
          return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
      },
      easeInOut: function (t, b, c, d) {
        if (t < d / 2) {
          return Tween.Bounce.easeIn(t * 2, 0, c, d) * .5 + b;
        } else {
          return Tween.Bounce.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
        }
      }
    }
  };
  var touch = {
    minY: 1941,
    maxY: new Date().getFullYear(),
    config: {
      'DIVH': 4
    },
    transformX: ['-webkit-transform', '-moz-transform', '-o-transform', '-ms-transform', 'transform'],
    extend: function (to, from) {
      for (var property in from) {
        var descriptor = Object.getOwnPropertyDescriptor(from, property);
        if (descriptor && (!descriptor.writable ||
          !descriptor.configurable ||
          !descriptor.enumerable ||
          descriptor.get ||
          descriptor.set)) {
          Object.defineProperty(to, property, descriptor);
        } else {
          to[property] = from[property];
        }
      }
    }
  };
  // 基本事件
  touch.extend(touch, {
    /* 点击事件 */
    tap: function (dom, callback) {
      if (dom && typeof dom == 'object') {
        var isMove = false;
        var startTime = 0;
        dom.addEventListener('touchstart', function (e) {
          startTime = Date.now();
        }, false);
        dom.addEventListener('touchmove', function (e) {
          e.preventDefault();
          isMove = true;
        }, false);
        dom.addEventListener('touchend', function (e) {
          e.preventDefault();
          /*是否满足tap 的要求*/
          if (!isMove && (Date.now() - startTime) < 150) {
            /*调用 callback*/
            callback && callback(e);
          }
          /*重置*/
          isMove = false;
          startTime = 0;
        }, false);
      }
    },
    // 获取DOM
    getDom: function (ele, ctx) {
      if (!ctx) {
        dom = document;
      } else if (ctx && typeof ctx === 'string') {
        dom = document.querySelector(ctx);
      } else {
        dom = ctx;
      }
      return dom.querySelectorAll(ele);
    }
  });
  // 绘制日历DOM
  touch.extend(touch, {
    // 获取所需节点
    getDomTmp: function () {
      this.date_sel = this.getDom(".date_toolbox", '.Mcalendar')[0];
      this.date_yy = this.getDom(".date_yy", '.Mcalendar')[0];
      this.date_mm = this.getDom(".date_mm", '.Mcalendar')[0];
      this.date_dd = this.getDom(".date_dd", '.Mcalendar')[0];
      this.date_show = this.getDom(".date_show", '.Mcalendar')[0];
      this.warpDom = this.getDom('.Mcalendar')[0];
    },
    // 创建日历框架
    createDom: function (y, m, d, sel) {
      var oFrag = document.createDocumentFragment();
      var cDom = document.createElement("div");
      cDom.className = 'Mcalendar';
      var str = '<div class="date_main">';
      str += '<div class="date_btn_box clearfix"><div class="date_btn lcalendar_cancel">清除</div><div class="date_btn lcalendar_finish">完成</div><div class="date_toolbox"><div class="solar_btn">阳历</div><div class="lunar_btn cur">阴历</div></div></div>';
      str += '<div class="date_roll_mask"><div class="date_roll">';
      str += '<div class="item"><div class="gear date_yy"></div><div class="date_grid"><div class="line"></div><div>年</div><div class="last_line"></div></div></div>';
      str += '<div class="item"><div class="gear date_mm"></div><div class="date_grid"><div>月</div><div class="last_line"></div></div></div>';
      str += '<div class="item"><div class="gear date_dd"></div><div class="date_grid"><div class="date_show">日</div></div></div>';
      str += '</div></div>';
      str += '<div class="date_footer clearfix"><div class="comfirm cur">确认</div><div class="cancle">取消</div></div>';
      str += '</div>';
      cDom.innerHTML = str;
      oFrag.appendChild(cDom);
      document.body.appendChild(oFrag);
      this.getDomTmp();

      // 填充dom数据
      this.fillCalendar(y, m, d, sel);

      // set current font color
      var y = Number(y),
        m = Number(m),
        d = Number(d);
      this.setStyleColor(this.date_mm, m - 1);
      this.setStyleColor(this.date_dd, d - 1);
      this.setStyleColor(this.date_yy, y - this.minY);
    },
    // 设置默认日期的年月日
    setDefaultVal: function (y, m, d, sel) {
      var day = new Date();
      // 1 表示阳历 , 2 表示阴历
      var sel = sel || 1;
      if (sel == 1) {
        var y = y || day.getFullYear();
        var m = m || (day.getMonth() + 1);
        var d = d || day.getDate();
        // 设置默认日期
        this.getCurVal({
          'dateSel': sel,
          'dateYy': y,
          'dateMm': m,
          'dateDd': d
        });
      } else {
        var dates = calP.solarTolunar(day.getFullYear(), (day.getMonth() + 1), day.getDate());
        var y = y || dates.lunarYear;
        var m = m || dates.lunarMonthIndex;
        var d = d || dates.lunarDay;
        // 设置默认日期
        this.getCurVal({
          'dateSel': sel,
          'dateYy': y,
          'dateMm': m,
          'dateDd': d
        });
      }
    },
    // 设置默认显示的日期位置
    setDefaultIndex: function () {
      var date_sel = this.date_sel;
      var date_yy = this.date_yy;
      var date_mm = this.date_mm;
      var date_dd = this.date_dd;
      var y = this.getCurVal().yyVal;
      var m = this.getCurVal().mmVal;
      var d = this.getCurVal().ddVal;
      var sel = this.getCurVal().selVal;
      // 设置默认显示的日期位置
      var transformX = this.transformX;
      var DIVH = this.config.DIVH;

      // console.log('setDefaultIndex',sel);

      // 设置工具条颜色切换
      if (sel == 1) {
        date_sel.children[0].className = 'solar_btn cur';
        date_sel.children[1].className = 'lunar_btn';
      } else {
        date_sel.children[0].className = 'solar_btn';
        date_sel.children[1].className = 'lunar_btn cur';
      }
      // 年月日位置
      transformX.forEach(function (ele) {
        date_yy.style[ele] = 'translate3d(0,' + (DIVH - (y - this.minY) * 2) + 'em,0)';
        date_mm.style[ele] = 'translate3d(0,' + (DIVH - (m - 1) * 2) + 'em,0)';
        date_dd.style[ele] = 'translate3d(0,' + (DIVH - (d - 1) * 2) + 'em,0)';
      }, this);
    },
    // 填充阴阳历的年月日
    fillCalendar: function (y, m, d, sel) {
      var _this = this;
      //sel : 1 表示阳历 , 2 表示阴历
      var sel = sel || 1;
      if (sel == 1) {
        this.fillSolar(y, m, d);
      } else {
        this.fillLunar(y, m, d);
      }

      // _this.setStyleColor(_this.date_mm, m-1,1000);
      // _this.setStyleColor(_this.date_dd, d-1,1000);
      // _this.setStyleColor(_this.date_yy, y-_this.minY,1000);
    },
    // 填充阳历的年月日
    fillSolar: function (y, m, d) {
      // 设置默认日期
      this.setDefaultVal(y, m, d, 1);
      date_sel = this.date_sel;
      date_yy = this.date_yy;
      date_mm = this.date_mm;
      date_dd = this.date_dd;

      // 阴阳
      var selStr = '<div class="solar_btn cur">阳历</div><div class="lunar_btn">阴历</div>';
      date_sel.innerHTML = selStr;

      // 年
      var YYStr = '';
      var minY = this.minY;
      var maxY = this.maxY;
      for (var yi = minY; yi <= maxY; yi++) {
        YYStr += '<div class="tooth">' + yi + '</div>';
      }
      date_yy.innerHTML = YYStr;
      // 月
      var MMStr = '';
      for (var mi = 1; mi <= 12; mi++) {
        MMStr += '<div class="tooth">' + mi + '</div>';
      }
      date_mm.innerHTML = MMStr;
      // 日
      var yy = this.getCurVal().yyVal;
      var mm = this.getCurVal().mmVal;
      var maxDate = calP.getSolarMonth(yy, mm);
      var DDStr = '';
      for (var di = 1; di <= maxDate; di++) {
        DDStr += '<div class="tooth">' + di + '</div>';
      }
      date_dd.innerHTML = DDStr;
      // 设置默认日期
      this.setDefaultIndex();
    },
    // 填充阴历的年月日
    fillLunar: function (y, m, d) {
      // 设置默认日期
      this.setDefaultVal(y, m, d, 2);
      var date_sel = this.date_sel;
      var date_yy = this.date_yy;
      var date_mm = this.date_mm;
      var date_dd = this.date_dd;

      // 阴阳
      var selStr = '<div class="solar_btn">阳历</div><div class="lunar_btn cur">阴历</div>';
      date_sel.innerHTML = selStr;

      // 年
      var YYStr = '';
      var minY = this.minY;
      var maxY = this.maxY;
      for (var yi = minY; yi <= maxY; yi++) {
        YYStr += '<div class="tooth">' + yi + '</div>';
      }
      date_yy.innerHTML = YYStr;
      // 月
      var MMStr = '';
      var monthArr = calP.showLunarMonth(this.getCurVal().yyVal);
      var monthLen = monthArr.length;
      for (var mi = 1; mi <= monthLen; mi++) {
        MMStr += '<div class="tooth">' + monthArr[mi - 1] + '</div>';
      }
      date_mm.innerHTML = MMStr;
      // 日
      var yy = this.getCurVal().yyVal;
      var mm = this.getCurVal().mmVal;
      var maxDate = calP.lunarToSolar(yy, mm, 1).lunarMaxDate;
      var DDStr = '';
      for (var di = 1; di <= maxDate; di++) {
        DDStr += '<div class="tooth">' + ArrDayLunar[di - 1] + '</div>';
      }
      date_dd.innerHTML = DDStr;
      // 设置默认日期
      this.setDefaultIndex();
    },
  });
  // 动画部分
  touch.extend(touch, {
    // 滑动年月日,阴阳选项
    swiperAll: function () {
      this.swiperDd();
      this.swiperMm();
      this.swiperYy();
      this.swiperSel();
    },
    swiperSel: function () {
      var _this = this;
      var date_sel = this.date_sel;
      // console.log(date_sel);
      touch.tap(date_sel, function (e) {
        var ev = e || window.event;
        var targetEl = ev.target || ev.srcElement;
        var yyVal = _this.getCurVal().yyVal,
          mmVal = _this.getCurVal().mmVal,
          ddVal = _this.getCurVal().ddVal;
        // 判断当前点击标签是否是阴历
        var isLunar = targetEl.innerHTML == "阴历" ? true : false;

        var isClickSelf = (/cur/).test(targetEl.className);

        // console.log('targetEl value',targetEl.innerHTML,'isLunar',isLunar,'isClickSelf',isClickSelf);

        // console.log(_this.getCurVal());

        if (!isLunar && !isClickSelf) {
          // 阳历
          var solarDates = calP.lunarToSolar(yyVal, mmVal, ddVal);
          // console.log('solarDates',solarDates);
          _this.fillCalendar(solarDates.solarYear, solarDates.solarMonth, solarDates.solarDay, 1);
          _this.date_show.style.display = 'block';
          _this.setStyleColor(_this.date_yy, solarDates.solarYear - _this.minY);
          _this.setStyleColor(_this.date_mm, solarDates.solarMonth - 1);
          _this.setStyleColor(_this.date_dd, solarDates.solarDay - 1);
        } else if (isLunar && !isClickSelf) {
          // 阴历

          var lunarDates = calP.solarTolunar(yyVal, mmVal, ddVal);
          // console.log('lunarDates',lunarDates);
          _this.fillCalendar(lunarDates.lunarYear, lunarDates.lunarMonthIndex, lunarDates.lunarDay, 2);
          _this.date_show.style.display = 'none';
          _this.date_dd.style.textIndent = '-10px';
          _this.setStyleColor(_this.date_yy, lunarDates.lunarYear - _this.minY);
          _this.setStyleColor(_this.date_mm, lunarDates.lunarMonthIndex - 1);
          _this.setStyleColor(_this.date_dd, lunarDates.lunarDay - 1);
        }

      })
    },
    // 滑动年选项
    swiperYy: function () {
      var _this = this;
      var transformX = _this.transformX;
      var date_sel = _this.date_sel;
      var date_yy = this.date_yy;
      var date_mm = _this.date_mm;
      var date_dd = _this.date_dd;
      var startY, startTime;
      var isTrue = true;
      var DIVH = this.config.DIVH;
      w.requestAnimationFrame(function () {
        date_yy.addEventListener('touchstart', function (e) {
          e.preventDefault();
          startY = e.touches[0].screenY;
          startTime = +new Date();
          date_yy.preYear = parseInt(date_yy.getAttribute('data-val'));
          date_yy.preMonth = parseInt(date_mm.getAttribute('data-val'));
        }, false);
        date_yy.addEventListener('touchmove', function (e) {
          e.preventDefault();
          var moveY = e.changedTouches[0].screenY;
          var moveLast = (moveY - startY) / 2;
          var clienH = e.target.clientHeight;
          var offsetIndex;
          // 判断范围
          if (moveLast < -10) {
            offsetIndex = (moveLast / clienH);
          } else if (moveLast > 10) {
            offsetIndex = (moveLast / clienH);
          } else {
            return false;
          }
          var dateYy = date_yy.getAttribute('data-val');
          dateYy = DIVH - (dateYy - _this.minY) * 2;
          transformX.forEach(function (element) {
            date_yy.style[element] = 'translate3d(0,' + (dateYy + offsetIndex * 2) + 'em,0)';
          }, this);
        }, false);
        date_yy.addEventListener('touchend', function (e) {
          e.preventDefault();
          var endTime = +new Date();
          var lastTime = endTime - startTime;


          var endY = e.changedTouches[0].screenY;
          var lastY = (endY - startY) / 2;
          var clienH = e.target.clientHeight;
          var dateYyVal = date_yy.getAttribute('data-val');
          // 速度走的格子
          var speed = parseFloat((Math.abs(lastY / lastTime) * 10).toFixed(2));
          var s1 = lastY / clienH; // 手指移距离
          var s2 = (DIVH - (dateYyVal - _this.minY) * 2); // 当前年位置
          speed = speed > 8 ? 8 : speed;

          // 判断当前是否为点击事件
          if (Math.abs(lastY) < 10 && lastTime < 150) {
            return false;
          }
          // 动画
          clearInterval(date_yy.timer);
          var step = 0;
          var begin = 0;
          var during = 1000;
          var end, end2;
          // 最后需要走的格数
          end2 = Math.round(speed + (Math.abs(lastY) / clienH));
          // 运动函数需要走的距离
          end = (end2 - Math.abs(s1)) * 2;
          var yearIndex = lastY < 0 ? end2 : -end2;
          var date1 = +new Date();
          isTrue = false;
          if (!isTrue) {
            date_yy.timer = setInterval(function () {
              var date2 = +new Date();
              step = Tween.Circ.easeOut(date2 - date1, begin, end, during);
              if (date2 > (date1 + during)) {
                step = end;
                clearInterval(date_yy.timer);
              }
              step = lastY > 0 ? step : -step;
              // 判断最后停留的位置不能大于最大值,小于最小值
              var lastIndex = s2 + s1 * 2 + step;
              var maxIndex = (DIVH - (_this.maxY - _this.minY) * 2);
              if (lastIndex >= DIVH) {
                lastIndex = DIVH
              } else if (lastIndex <= maxIndex) {
                lastIndex = maxIndex;
              }
              transformX.forEach(function (element) {
                date_yy.style[element] = 'translate3d(0,' + lastIndex + 'em,0)';
              }, this);
            }, 16.7);
            isTrue = true;
          }

          // 判断最后停留的位置不能大于最大值,小于最小值
          var speed2 = lastY < 0 ? end2 : -end2;
          var lastYY = parseInt(dateYyVal) + speed2;
          if (lastYY >= _this.maxY) {
            lastYY = _this.maxY
          } else if (lastYY <= _this.minY) {
            lastYY = _this.minY
          }
          // 获取各数据用于填充日历
          var lastSel = _this.getCurVal().selVal;
          var lastMM = _this.getCurVal().mmVal;
          var lastDD = _this.getCurVal().ddVal;

          // 重新绘制日历年月日数据

          if (lastSel == 1) {
            _this.fillCalendar(lastYY, lastMM, lastDD, lastSel);
          } else if (lastSel == 2) {
            var runMonth = calP.getRunMonth(date_yy.preYear);
            if (runMonth > 0) {
              var runMonth2 = calP.getRunMonth(lastYY);
              if (runMonth2 > 0) {
                if (runMonth > runMonth2) {
                  if (date_yy.preMonth > runMonth) {
                    lastMM = date_yy.preMonth;
                  } else if (date_yy.preMonth <= runMonth && date_yy.preMonth > runMonth2) {
                    lastMM = date_yy.preMonth + 1;
                  } else if (date_yy.preMonth <= runMonth2) {
                    lastMM = date_yy.preMonth;
                  }
                } else {
                  if (date_yy.preMonth > (runMonth2 + 1)) {
                    lastMM = date_yy.preMonth;
                  } else if (date_yy.preMonth > runMonth && date_yy.preMonth <= (runMonth2 + 1)) {
                    lastMM = date_yy.preMonth - 1;
                  } else if (date_yy.preMonth <= runMonth) {
                    lastMM = date_yy.preMonth;
                  }
                }
              } else {
                if (date_yy.preMonth > runMonth) {
                  lastMM = date_yy.preMonth - 1;
                } else {
                  lastMM = date_yy.preMonth;
                }
              }
            } else {
              var runMonth3 = calP.getRunMonth(lastYY);
              if (runMonth3 > 0) {
                if (date_yy.preMonth > runMonth3) {
                  lastMM = date_yy.preMonth + 1;
                } else {
                  lastMM = date_yy.preMonth;
                }
              } else {
                lastMM = date_yy.preMonth;
              }
            }

            if (lastMM == 0) {
              lastMM = 1;
            } else if (lastMM == 14) {
              lastMM = 13;
            } else {
              lastMM = lastMM;
            }
            var maxD = calP.lunarToSolar(lastYY, lastMM, 1).lunarMaxDate;
            lastDD = (lastDD >= maxD) ? maxD : lastDD;
            _this.fillCalendar(lastYY, lastMM, lastDD, lastSel);
          }
          // 设置当前选中的字体颜色
          _this.setStyleColor(date_mm, lastMM - 1);
          _this.setStyleColor(date_dd, lastDD - 1);
          _this.setStyleColor(date_yy, lastYY - _this.minY, 1000);
        }, false);
      });
    },
    // 滑动月选项
    swiperMm: function () {
      var _this = this;
      var transformX = _this.transformX;
      var date_yy = _this.date_yy;
      var date_mm = _this.date_mm;
      var date_sel = _this.date_sel;
      var date_dd = _this.date_dd;
      var startY, startTime;
      var DIVH = this.config.DIVH;
      w.requestAnimationFrame(function () {
        date_mm.addEventListener('touchstart', function (e) {
          e.preventDefault();
          startY = e.touches[0].screenY;
          startTime = +new Date();
        }, false);
        date_mm.addEventListener('touchmove', function (e) {
          e.preventDefault();
          var moveY = e.changedTouches[0].screenY;
          var moveLast = (moveY - startY) / 2;
          var clienH = e.target.clientHeight;
          var offsetIndex;
          // 判断范围
          if (moveLast < -10) {
            offsetIndex = (moveLast / clienH);
          } else if (moveLast > 10) {
            offsetIndex = (moveLast / clienH);
          } else {
            return false;
          }
          var dateMm = date_mm.getAttribute('data-val');
          dateMm = DIVH - (dateMm - 1) * 2;
          transformX.forEach(function (element) {
            date_mm.style[element] = 'translate3d(0,' + (dateMm + offsetIndex * 2) + 'em,0)';
          }, this);
        }, false);
        date_mm.addEventListener('touchend', function (e) {
          e.preventDefault();
          var endTime = +new Date();
          var lastTime = endTime - startTime;
          var endY = e.changedTouches[0].screenY;
          var lastY = (endY - startY) / 2;

          // 判断当前是否为点击事件
          if (Math.abs(lastY) < 10 && lastTime < 150) {
            return false;
          }
          var clienH = e.target.clientHeight;
          var dateMmVal = date_mm.getAttribute('data-val');
          var MonthConunts = date_mm.children.length;
          // 速度走的格子
          var speed = parseFloat((Math.abs(lastY / lastTime) * 10).toFixed(2));
          var s1 = lastY / clienH; // 手指移距离
          var s2 = (DIVH - (dateMmVal - 1) * 2); // 当前年位置
          speed = speed > 8 ? 8 : speed;
          // 动画
          clearInterval(date_mm.timer);
          var step = 0;
          var begin = 0;
          var during = 1000;
          var end, end2;
          // 最后需要走的格数
          end2 = Math.round(speed + (Math.abs(lastY) / clienH));
          // 运动函数需要走的距离
          end = (end2 - Math.abs(s1)) * 2;
          var date1 = +new Date();
          isTrue = false;
          if (!isTrue) {
            date_mm.timer = setInterval(function () {
              var date2 = +new Date();
              step = Tween.Circ.easeOut(date2 - date1, begin, end, during);
              if (date2 > (date1 + during)) {
                step = end;
                clearInterval(date_mm.timer);
              }
              step = lastY > 0 ? step : -step;
              // 判断最后停留的位置不能大于最大值,小于最小值
              var lastIndex = s2 + s1 * 2 + step;
              var maxIndex = (DIVH - (MonthConunts - 1) * 2);
              if (lastIndex >= DIVH) {
                lastIndex = DIVH
              } else if (lastIndex <= maxIndex) {
                lastIndex = maxIndex;
              }
              transformX.forEach(function (element) {
                date_mm.style[element] = 'translate3d(0,' + lastIndex + 'em,0)';
              }, this);
            }, 16.7);
            isTrue = true;
          }
          // 判断最后停留的位置不能大于最大值,小于最小值
          var speed2 = lastY < 0 ? end2 : -end2;
          var lastMM = parseInt(dateMmVal) + speed2;
          if (lastMM >= MonthConunts) {
            lastMM = MonthConunts;
          } else if (lastMM <= 1) {
            lastMM = 1;
          }

          // 获取各数据用于填充日历
          var lastSel = _this.getCurVal().selVal;
          var lastDD = _this.getCurVal().ddVal;
          var lastYY = _this.getCurVal().yyVal;

          // 重新绘制日历年月日数据
          if (lastSel == 1) {
            var maxDate = calP.getSolarMonth(lastYY, lastMM);
            lastDD = (lastDD <= maxDate) ? lastDD : maxDate
            _this.fillCalendar(lastYY, lastMM, lastDD, lastSel);
          } else if (lastSel == 2) {
            var maxD = calP.lunarToSolar(lastYY, lastMM, 1).lunarMaxDate;
            lastDD = (lastDD >= maxD) ? maxD : lastDD;
            _this.fillCalendar(lastYY, lastMM, lastDD, lastSel);
          }
          // 设置当前选中的字体颜色
          _this.setStyleColor(date_yy, lastYY - _this.minY);
          _this.setStyleColor(date_dd, lastDD - 1);
          _this.setStyleColor(date_mm, lastMM - 1, 1000);
        }, false);
      });
    },
    // 滑动日选项
    swiperDd: function () {
      var _this = this;
      var transformX = _this.transformX;
      var date_sel = _this.date_sel;
      var date_yy = this.date_yy;
      var date_mm = this.date_mm;
      var date_dd = this.date_dd;
      var startY, startTime;
      var isTrue = true;
      var DIVH = this.config.DIVH;
      w.requestAnimationFrame(function () {
        date_dd.addEventListener('touchstart', function (e) {
          e.preventDefault();
          startY = e.touches[0].screenY;
          startTime = +new Date();
        }, false);
        date_dd.addEventListener('touchmove', function (e) {
          e.preventDefault();
          var moveY = e.changedTouches[0].screenY;
          var moveLast = (moveY - startY) / 2;
          var clienH = e.target.clientHeight;
          var offsetIndex;
          // 判断范围
          if (moveLast < -10) {
            offsetIndex = (moveLast / clienH);
          } else if (moveLast > 10) {
            offsetIndex = (moveLast / clienH);
          } else {
            return false;
          }
          var dateDd = date_dd.getAttribute('data-val');
          dateDd = DIVH - (dateDd - 1) * 2;
          transformX.forEach(function (element) {
            date_dd.style[element] = 'translate3d(0,' + (dateDd + offsetIndex * 2) + 'em,0)';
          }, this);
        }, false);
        date_dd.addEventListener('touchend', function (e) {
          e.preventDefault();
          var endTime = +new Date();
          var lastTime = endTime - startTime;
          var endY = e.changedTouches[0].screenY;
          var lastY = (endY - startY) / 2;

          // 判断当前是否为点击事件
          if (Math.abs(lastY) < 10 && lastTime < 150) {
            return false;
          }

          var clienH = e.target.clientHeight;
          var dateDdVal = date_dd.getAttribute('data-val');
          var DdConunts = date_dd.children.length;
          // 速度走的格子
          var speed = parseFloat((Math.abs(lastY / lastTime) * 10).toFixed(2));
          var s1 = lastY / clienH; // 手指移距离
          var s2 = (DIVH - (dateDdVal - 1) * 2); // 当前年位置
          speed = speed > 5 ? 5 : speed;
          clearInterval(date_dd.timer);
          var step = 0;
          var begin = 0;
          var during = 1000;
          var end, end2;
          // 最后需要走的格数
          end2 = Math.round(speed + (Math.abs(lastY) / clienH));
          // 运动函数需要走的距离
          end = (end2 - Math.abs(s1)) * 2;
          var date1 = +new Date();
          isTrue = false;
          if (!isTrue) {
            date_dd.timer = setInterval(function () {
              var date2 = +new Date();
              step = Tween.Circ.easeOut(date2 - date1, begin, end, during);
              if (date2 > (date1 + during)) {
                step = end;
                clearInterval(date_dd.timer);
              }
              step = lastY > 0 ? step : -step;
              // 判断最后停留的位置不能大于最大值,小于最小值
              var lastIndex = s2 + s1 * 2 + step;
              var maxIndex = (DIVH - (DdConunts - 1) * 2);
              if (lastIndex >= DIVH) {
                lastIndex = DIVH
              } else if (lastIndex <= maxIndex) {
                lastIndex = maxIndex;
              }
              transformX.forEach(function (element) {
                date_dd.style[element] = 'translate3d(0,' + lastIndex + 'em,0)';
              }, this);
            }, 16.7);
            isTrue = true;
          }

          // 判断最后停留的位置不能大于最大值,小于最小值
          var speed2 = lastY < 0 ? end2 : -end2;
          var lastDD = parseInt(dateDdVal) + speed2;
          if (lastDD >= DdConunts) {
            lastDD = DdConunts;
          } else if (lastDD <= 1) {
            lastDD = 1;
          }
          // 获取各数据用于填充日历
          var lastSel = _this.getCurVal().selVal;
          var lastMM = _this.getCurVal().mmVal;
          var lastYY = _this.getCurVal().yyVal;

          // 重新绘制日历年月日数据
          _this.fillCalendar(lastYY, lastMM, lastDD, lastSel);

          // 设置当前选中的字体颜色
          _this.setStyleColor(date_yy, lastYY - _this.minY);
          _this.setStyleColor(date_mm, lastMM - 1);
          _this.setStyleColor(date_dd, lastDD - 1, 1000);

        }, false);

      });
    }
  });
  // 日历控件事件
  touch.extend(touch, {
    setStyleColor: function (el, index, during) {
      var _this = this;
      var during = Number(during) || 0;
      setTimeout(function () {
        el.children[index].className = "tooth red";
      }, during)
    },
    // 展示日历
    showCalendar: function () {
      var warpDom = this.warpDom;
      var calDom = this.getDom('.date_main', warpDom)[0];
      warpDom.style.display = 'block';
      calDom.className = 'date_main slideInUp';
      var date_dd = this.date_dd;
      var date_show = this.date_show;
      var date_sel = this.date_sel.getAttribute('data-val');
      // 重新绘制日历年月日数据
      if (date_sel == 2) {
        date_show.style.display = 'none';
        date_dd.style.textIndent = '-10px';
      } else {
        date_show.style.display = 'block';
        // date_dd.style.textIndent = '-25%';
      }
    },
    //移除日历DOM
    removeDom: function () {
      var dom = this.warpDom;
      dom.parentNode.removeChild(dom);
    },
    // 点击取消按钮
    clickCancelBtn: function (obj) {
      var _this = this;
      var ele = _this.getDom(obj.target)[0];
      var setIpts = this.getDom('input', obj.ipts);
      var clearIpt = _this.getDom(obj.clearIpt)[0];
      var dom = this.getDom('.lcalendar_cancel', '.Mcalendar')[0];
      touch.tap(dom, function (e) {
        // 目标标签赋值
        ele.setAttribute('data-sel', '');
        ele.setAttribute('data-yy', '');
        ele.setAttribute('data-mm', '');
        ele.setAttribute('data-dd', '');
        // 隐藏标签赋值
        setIpts.forEach(function (ele, index) {
          ele.setAttribute('value', '');
        }, _this);
        ele.value = obj.val;
        clearIpt.className = 'hidden';
      });
    },
    // 点击完成按钮,赋值input
    clickConfirmBtn: function (obj) {
      var _this = this;
      var ele = this.getDom(obj.target)[0];
      var dom = this.getDom('.lcalendar_finish', '.Mcalendar')[0];
      var setIpts = this.getDom('input', obj.ipts);
      var clearIpt = _this.getDom(obj.clearIpt)[0];
      setIpts = Array.prototype.slice.call(setIpts);
      touch.tap(dom, function (e) {
        var isTrue = /lcalendar_finish/.test(e.target.className);
        if (isTrue) {
          var dates = _this.getCurVal();
          date_selVal = dates.selVal == 1 ? '阳历' : '阴历';
          if (dates.selVal == 1) {
            // 目标标签赋值value
            ele.value = date_selVal + '：' + dates.yyVal + '年' + dates.mmVal + '月' + dates.ddVal + '日';
            // 对目标标签和隐藏标签赋值
            _this.setValue(ele, setIpts, dates);
            clearIpt.className = '';
          } else {
            var datesCZ = calP.lunarToSolar(dates.yyVal, dates.mmVal, dates.ddVal);
            // 目标标签赋值value
            ele.value = date_selVal + '：' + datesCZ.lunarYear + '年' + datesCZ.lunarMonthCZ + '月' + ArrDayLunar[dates.ddVal - 1];
            // 对目标标签和隐藏标签赋值
            _this.setValue(ele, setIpts, dates);
            clearIpt.className = '';
          }
        }
      });
    },
    // 点击确认按钮,赋值input
    clickConfirmBtn2: function (obj) {
      var _this = this;
      var ele = this.getDom(obj.target)[0];
      var dom = this.getDom('.comfirm', '.Mcalendar')[0];
      var setIpts = this.getDom('input', obj.ipts);
      var clearIpt = _this.getDom(obj.clearIpt)[0];
      setIpts = Array.prototype.slice.call(setIpts);
      touch.tap(dom, function (e) {
        var isTrue = /comfirm/.test(e.target.className);
        if (isTrue) {
          var dates = _this.getCurVal();
          date_selVal = dates.selVal == 1 ? '阳历' : '阴历';
          if (dates.selVal == 1) {
            // 目标标签赋值value
            ele.value = date_selVal + '：' + dates.yyVal + '年' + dates.mmVal + '月' + dates.ddVal + '日';
            // 对目标标签和隐藏标签赋值
            _this.setValue(ele, setIpts, dates);
            clearIpt.className = '';
          } else {
            var datesCZ = calP.lunarToSolar(dates.yyVal, dates.mmVal, dates.ddVal);
            // 目标标签赋值value
            ele.value = date_selVal + '：' + datesCZ.lunarYear + '年' + datesCZ.lunarMonthCZ + '月' + ArrDayLunar[dates.ddVal - 1];
            // 对目标标签和隐藏标签赋值
            _this.setValue(ele, setIpts, dates);
            clearIpt.className = '';
          }
        }
      });
    },
    // 对目标标签和隐藏标签赋值
    setValue: function (ele, setIpts, dates) {
      var _this = this;
      // 目标标签赋值
      ele.setAttribute('data-sel', dates.selVal);
      ele.setAttribute('data-yy', dates.yyVal);
      ele.setAttribute('data-mm', dates.mmVal);
      ele.setAttribute('data-dd', dates.ddVal);
      // 隐藏标签赋值
      var arrTmp = [dates.selVal, dates.yyVal, dates.mmVal, dates.ddVal];
      setIpts.forEach(function (ele, index) {
        ele.setAttribute('value', arrTmp[index]);
      }, _this);
    },
    // 点击其他区域隐藏日历
    clickOtherHide: function () {
      var _this = this;
      var dom = this.warpDom;
      touch.tap(dom, function (ev) {
        var targetP = ev.target.parentNode;
        // console.log('targetP',targetP);
        if (!targetP) {
          return false
        }
        var isTrue = (/date_dd|date_yy|date_roll|date_mm|date_sel|date_grid|date_main|Mcalendar|date_toolbox|solar_btn|lunar_btn|item/).test(targetP.className);
        if (!isTrue) {
          _this.removeDom();
        }
      });
    },
    // 获取、设置年月日的值
    getCurVal: function (val) {
      var dom = this.warpDom;
      // 获取阴阳,年,月,日的值
      var selVal = this.date_sel;
      var yyVal = this.date_yy;
      var mmVal = this.date_mm;
      var ddVal = this.date_dd;
      if (val) {
        selVal.setAttribute('data-val', val.dateSel);
        yyVal.setAttribute('data-val', val.dateYy);
        mmVal.setAttribute('data-val', val.dateMm);
        ddVal.setAttribute('data-val', val.dateDd);
      } else {
        return {
          selVal: parseInt(selVal.getAttribute('data-val')),
          yyVal: parseInt(yyVal.getAttribute('data-val')),
          mmVal: parseInt(mmVal.getAttribute('data-val')),
          ddVal: parseInt(ddVal.getAttribute('data-val')),
        }
      }
    },
    // 点击目标标签(input)按钮展示日历
    showIptVal: function (obj) {
      var _this = this;
      var dom = this.getDom(obj.target)[0];
      touch.tap(dom, function (e) {
        var warpDom = _this.warpDom;
        dom.value = dom.value.replace(/\u2006/g, '');
        // 判断是input否有值
        if (dom.value == obj.val) {
          _this.createDom(1982, 1, 1);
        } else {
          var dateSel = dom.getAttribute('data-sel');
          var dateYY = dom.getAttribute('data-yy');
          var dateMM = dom.getAttribute('data-mm');
          var dateDD = dom.getAttribute('data-dd');
          _this.createDom(dateYY, dateMM, dateDD, dateSel);


        }

        _this.swiperAll();
        _this.showCalendar();
        _this.clickOtherHide();
        _this.clickConfirmBtn(obj);
        _this.clickConfirmBtn2(obj);
        _this.clickCancelBtn(obj);
      })
    },
    clearIptVal: function (obj) {
      var _this = this;
      var eleTarget = _this.getDom(obj.target)[0];
      var ele = _this.getDom(obj.clearIpt)[0];
      var setIpts = _this.getDom(obj.ipts)[0].children;
      if (eleTarget.value == '' || eleTarget.value == obj.val) {
        ele.className = 'hidden';
      } else {
        ele.className = '';
      }
      touch.tap(ele, function (e) {
        // 目标标签赋值
        eleTarget.setAttribute('data-sel', '');
        eleTarget.setAttribute('data-yy', '');
        eleTarget.setAttribute('data-mm', '');
        eleTarget.setAttribute('data-dd', '');
        // 隐藏标签赋值
        for (var i = 0; i < setIpts.length; i++) {
          setIpts[i].setAttribute('value', '')
        }
        eleTarget.value = obj.val;
        ele.className = 'hidden';
      });
    },
  });
  // 初始化
  touch.extend(touch, {
    init: function (obj) {
      if (!obj) {
        return false;
      }
      this.showIptVal(obj);
      this.clearIptVal(obj);
    }
  });
  w.calendarM === undefined && (w.calendarM = touch);
})(window, calendar);

// 函数调用
calendarM.init({
  'target': '#cal_0',
  'ipts': '#timeData_0',
  'val': '点击选择生日',
  'clearIpt': '#clearIptVal_0',
});

calendarM.init({
  'target': '#cal_1',
  'ipts': '#timeData_1',
  'val': '点击选择生日',
  'clearIpt': '#clearIptVal_1',
});
    