(function (w) {
  var DaysInMonth = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
  var ArrMonthLunar = new Array("正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "腊");
  var ArrWeekDate = new Array('星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六');
  var ArrDayLunar = new Array("初一", "初二", "初三", "初四", "初五", "初六", "初七", "初八", "初九", "初十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十", "廿一", "廿二", "廿三", "廿四", "廿五", "廿六", "廿七", "廿八", "廿九", "三十");
  var DaysInMonthLunar = new Array(
    [0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 38], [6, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 26], [0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 45], [0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 35], [4, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 24], [0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 43], [0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 32], [2, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 21], [0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 40], [7, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 28], [0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 47], [0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 36], [5, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 26], [0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 44], [0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 33], [3, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 23], [0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 42], [8, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 30], [0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 48], [0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 38], [6, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 27], [0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 45], [0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 35], [4, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 24], [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 43], [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 32], [3, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 20], [0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 39], [7, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 29], [0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 47], [0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 36], [5, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 26], [0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 45], [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 33], [4, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 22], [0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 41], [8, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 30], [0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 48], [0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 37], [6, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 27], [0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 46], [0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 35], [4, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 24], [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 43], [10, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 32], [0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 50], [0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 39], [6, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 28], [0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 47], [0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 36], [5, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 26], [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 45], [0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 34], [3, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 22], [0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 40], [8, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 30], [0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 49], [0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 37], [5, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 27], [0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 46], [0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 35], [4, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 23], [0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 42], [0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 31], [2, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 21], [0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 39], [7, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 28], [0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 48], [0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 37], [5, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 25], [0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 44], [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 33], [4, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 22], [0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 40], [9, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 30], [0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 49], [0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 38], [6, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 27], [0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 46], [0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 35], [4, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 24], [0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 42], [0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 31], [2, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 21], [0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 40], [6, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 28], [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 47], [0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 36], [5, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 25], [0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 43], [0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 33], [3, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 22]);

  function Calendar() {
    // 阴历数组初始值,不是下拉选项初始设置
    this.yearStart = 1940;
    // 下拉选项的最大年限
    this.yearEnd = (new Date()).getFullYear();
  }

  Calendar.prototype = {
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
  var calendar = new Calendar();
  // 日历方法
  calendar.extend(calendar, {
    // 传入的公历年月,返回天数
    getSolarMonth: function (year, month) {
      if (month == 2) {
        return (((year % 4 == 0) && ((year % 100) != 0)) || (year % 400 == 0)) ? 29 : 28;
      } else {
        return DaysInMonth[month - 1];
      }
    },
    // 传入公历的年月日,返回包含月份的天数,星期
    getSolarDate: function (y, m, d) {
      //获得当月day号星期几,不填默认为1号
      var d = d || 1;
      var m = parseInt(m);
      var day = new Date(y, m - 1, 1);
      var firstDay = day.getDay();
      // console.log(firstDay);

      //获得当月最后一天星期几
      var nowLastDay = this.getSolarMonth(y, m);
      var lastDay = ((nowLastDay - 1) % 7 + parseInt(firstDay)) % 7;
      // console.log(lastDay);

      //获取这个月总的天数
      var nowMonth = new Date(y, m, 0);
      var nowMaxDate = nowMonth.getDate();
      return {
        nowYear: nowMonth.getFullYear(),
        nowMonth: nowMonth.getMonth() + 1,
        nowDayWeek: firstDay,
        nowMaxDate: nowMaxDate,
        nowLastDayWeek: lastDay
      }
    },
    // 传入公历的年月,返回上个月
    getSolarPreMonth: function (year, month) {
      var preMonth = new Date(year, parseInt(month) - 1, 0);
      //获取上个月总的天数
      var preMonthDate = preMonth.getDate();
      //获取上个月最后一天星期几
      var preMonthLastDay = preMonth.getDay();
      return {
        preMonthYear: preMonth.getFullYear(),
        preMonth: preMonth.getMonth() + 1,
        preMonthDate: preMonthDate,
        preMonthLastDay: preMonthLastDay
      }
    },
    // 传入公历的年月,返回下个月
    getSolarNextMonth: function (year, month) {
      var nextMonth = new Date(year, parseInt(month) + 1, 0);
      // console.log('dddd :', year, month + 1);
      //获取下个月总的天数
      var nextMonthDate = nextMonth.getDate();
      //获取下个月最后一天星期几
      var nextMonthLastDay = nextMonth.getDay();
      return {
        nextMonthYear: nextMonth.getFullYear(),
        nextMonth: nextMonth.getMonth() + 1,
        nextMonthDate: nextMonthDate,
        nextMonthLastDay: nextMonthLastDay
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
      // console.log('weekday : ',weekday);
      //var days = (dayEnd - new Date(y, 0, 1)) / 86400000;
      var sum = 0;
      for (var j = 1; j < m; j++) {
        sum += this.getSolarMonth(y, j);
      }
      var days = sum + d - 1;
      // console.log('days : ',dayEnd - new Date(y, 0, 1),days);
      var solarMaxDate = this.getSolarMonth(y, m);
      var dayLunarCZ;
      // console.log('days : ', days);
      var lunarData = DaysInMonthLunar[y - this.yearStart];
      // console.log('dayEnd.getDate() : ', dayEnd.getDate());
      // console.log('lunarData[lunarData.length - 1] : ', lunarData[lunarData.length - 1]);
      dayEnd.setDate(dayEnd.getDate() - lunarData[lunarData.length - 1]);
      // console.log('dayEnd : ', dayEnd);
      var finalYear = dayEnd.getFullYear();
      var calDays = 0;
      var finalMonth = -1;
      var finalDay = -1;
      var lunarMonth = -1;
      var lunarRunMonth;
      // 判断当前日期的阴历是否在去年
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
        // console.info("阳历:" + (y + "-" + m + "-" + d) + ",阴历:" + (finalYear + "-" + finalMonth + "-" + finalDay));
        lunarMonth = DaysInMonthLunar[finalYear - this.yearStart][0] > 0 ? finalMonth > DaysInMonthLunar[finalYear - this.yearStart][0] ? finalMonth - 1 : finalMonth : finalMonth;
        lunarRunMonth = ArrMonthLunar[lunarMonth - 1];
        // console.log('finalDay',finalDay);
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
      // 判断当前日期的阴历是否在今年
      lunarData = DaysInMonthLunar[finalYear - this.yearStart];
      days -= lunarData[lunarData.length - 1];
      // console.log('lunarData[lunarData.length - 1]',lunarData[lunarData.length - 1]);
      calDays = 0;
      finalMonth = -1;
      // var k = 1;
      for (var i = 1; i <= lunarData.length - 1; i++) {
        if (days >= calDays) {
          if (lunarData[i] == 0) {
            calDays += 29;
          } else {
            calDays += 30;
          }
          // k++;
        } else {
          if (i > 1) {
            // k--;
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
      // console.log('dddd ',days,calDays,finalDay);

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
    },
    // 获取阴历上一个月
    lunarPreMonth: function (y, m) {
      var lunarPreMonth;
      if (m == 1) {
        lunarPreMonth = this.lunarToSolar(y - 1, DaysInMonthLunar[y - 1 - this.yearStart].length - 2, 1);
      } else {
        lunarPreMonth = this.lunarToSolar(y, m - 1, 1);
      }
      return lunarPreMonth;
    },
    // 获取阴历下一个月
    lunarNextMonth: function (y, m) {
      var lunarNextMonth;
      if (m == DaysInMonthLunar[y - this.yearStart].length - 2) {
        lunarNextMonth = this.lunarToSolar(parseInt(y) + 1, 1, 1);
      } else {
        lunarNextMonth = this.lunarToSolar(y, parseInt(m) + 1, 1);
      }
      return lunarNextMonth;
    },
  });
  // 渲染日历的方法

  calendar.extend(calendar, {
    // 日历基础结构
    baseStr: function () {
      var str = '<div class="zh-almanac"><div class="hint-bar clearfix">';
      str += '<div class="control-bar">';
      str += '<div class="control-module sel-control"><a class="prev" href="javascript:;"></a><div class="control"><i class="trigger"></i><div data-val="solar" class="field sel">阳历</div></div><a class="next" href="javascript:;"></a> <ul class="list sel-list hidden"><li data-val="solar" class="sel-solar hover">阳历</li><li data-val="lunar" class="sel-lunar">阴历</li></ul></div>';
      str += '<div class="control-module year-control"><a class="prev" href="javascript:;"></a><div class="control"><i class="trigger"></i><div data-val="2018" class="field year">2018</div></div><a class="next" href="javascript:;"></a><ul class="list year-list hidden"></ul></div>';
      str += '<div class="control-module month-control"><a class="prev" href="javascript:;"></a><div class="control"> <i class="trigger"></i><div data-val="7" class="field month">7</div></div><a class="next" href="javascript:;"></a><ul class="list month-list hidden"></ul></div>';
      str += '<div class="btn-today">今天</div></div></div>';
      str += '<div class="alc-container"><div class="main"><ul class="dates-hd clearfix"><li>日</li><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li>六</li></ul><ol class="dates-bd clearfix"><li><div class="layer"></div><span class="solar"> </span><span class="lunar"> </span></li></ol></div>';
      str += '<div class="tip">点击上面日期选择生日时间</div>';
      str += '</div></div>';
      var ctx = this.config.ctx;
      document.querySelector(ctx).innerHTML = str;
      this.domsTmp();
      this.doms.rmDom.setAttribute('data-id', this.config.el);
      // console.log('this.config',this.config);
      // console.log('this.doms',this.doms);
    },
    // 获取DOM
    getDom: function (ele) {
      var _this = this;
      if (!ele) {
        return false;
      }
      var ctx = _this.config.ctx,
        doc = document.querySelector(ctx),
        dom = doc.querySelectorAll(ele);
      return dom;
    },
    // 获取所需的DOM节点集
    domsTmp: function () {
      var doms = {},
        _this = this;
      doms.iptEl = document.querySelector(_this.config.el),
        // doms.iptVal =  document.querySelector(_this.config.val),
        doms.calShow = document.querySelector(_this.config.show),
        doms.selCtr = _this.getDom('.sel-control .control')[0],
        doms.yearCtr = _this.getDom('.year-control .control')[0],
        doms.monthCtr = _this.getDom('.month-control .control')[0],
        doms.todayBtn = _this.getDom('.btn-today')[0],
        doms.fieldSel = _this.getDom('.field.sel')[0],
        doms.fieldYear = this.getDom('.field.year')[0],
        doms.fieldMonth = this.getDom('.field.month')[0],
        doms.selList = this.getDom('.sel-list')[0],
        doms.yearList = this.getDom('.year-list')[0],
        doms.monthList = this.getDom('.month-list')[0];
      doms.rmDom = this.getDom('.zh-almanac')[0];
      this.doms = doms;
    },
    // 获取控制选项所有的值
    getControlVal: function () {
      // 分别获取该项的value和data-val
      var selTxt = this.doms.fieldSel.innerHTML;
      var selVal = this.doms.fieldSel.getAttribute('data-val');
      var yearTxt = this.doms.fieldYear.innerHTML;
      var yearVal = this.doms.fieldYear.getAttribute('data-val');
      var monthVal = this.doms.fieldMonth.getAttribute('data-val');
      var monthTxt = this.doms.fieldMonth.innerHTML;
      return {
        selTxt: selTxt,
        selVal: selVal,
        yearTxt: yearTxt,
        yearVal: yearVal,
        monthTxt: monthTxt,
        monthVal: monthVal
      }
    },
    // 设置控制选择的值
    setControlVal: function (dom, val, attr) {
      dom.innerHTML = val;
      if (attr) {
        dom.setAttribute('data-val', attr);
      }
    },
    // 移除日历DOM
    removeDom: function () {
      var dom = this.doms.calShow;
      var tar = this.doms.rmDom;
      var parentEl = this.doms.iptEl.parentNode;
      var _tmp = parentEl.querySelector('.clear-icon');
      dom.removeChild(tar);
      // 添加删除图标
      var spanEl = document.createElement('span');
      spanEl.className = 'clear-icon';
      spanEl.setAttribute('data-open', 'true');
      spanEl.innerHTML = '<i data-open="true"></i>';
      if (!_tmp) {
        parentEl.appendChild(spanEl);
      }
      this.removeCLear();
    },
    // 控制月的下拉选项
    showMonthList: function () {
      var _this = this;
      var monthList = _this.doms.monthList;
      var monthSel = _this.doms.monthCtr;
      var fieldmonth = _this.doms.fieldMonth;
      var selVal = _this.getControlVal().selVal;
      _this.disabledSel();
      monthSel.onclick = function () {
        _this.doms.selList.className = 'list sel-list hidden';
        _this.doms.yearList.className = 'list year-list hidden';
        var isTrue = (monthList.className).indexOf('hidden') > -1 ? true : false;
        if (isTrue) {
          monthList.className = 'list month-list';
          var monthListH = _this.getDom('.month-list li')[0].offsetHeight;
          var fieldmonthVal = _this.getControlVal().monthVal;
          var distanceY = (fieldmonthVal - 1) * monthListH;
          monthList.scrollTop = distanceY;
          var monthLists = monthList.children;
          for (var j = 0; j < monthLists.length; j++) {
            monthLists[j].className = '';
          }
          monthLists[fieldmonthVal - 1].className = 'hover';
        } else {
          monthList.className = 'list month-list hidden';
        }
      }
      monthList.onclick = function (ev) {
        var ev = ev || window.event;
        var ele = ev.target || ev.srcElement;
        if (ele == monthList) {
          return false;
        }
        var eleVal = ele.getAttribute('data-val');
        _this.setControlVal(fieldmonth, ele.innerHTML, eleVal);
        selVal = _this.getControlVal().selVal;
        if (selVal == 'solar') {
          _this.fieldControlSolar();
          var yearVal = _this.getControlVal().yearVal;
          var monthVal = _this.getControlVal().monthVal;
          _this.fieldDom(yearVal, monthVal);
        } else {
          var yearVal = _this.getControlVal().yearVal;
          var monthVal = _this.getControlVal().monthVal;
          _this.fieldControlLunar(yearVal);
          _this.fieldLunarDom(yearVal, monthVal)

        }
        monthList.className = 'list month-list hidden';
      }
    },
    // 控制年的下拉选项
    showYearList: function () {
      var _this = this;
      var yearList = _this.doms.yearList;
      var yearSel = _this.doms.yearCtr;
      var fieldyear = _this.doms.fieldYear;
      _this.disabledSel();
      yearSel.onclick = function () {
        _this.doms.selList.className = 'list sel-list hidden';
        _this.doms.monthList.className = 'list month-list hidden';
        var isTrue = (yearList.className).indexOf('hidden') > -1 ? true : false;
        if (isTrue) {
          yearList.className = 'list year-list';
          // var yearListO = document.querySelectorAll('.year-list')[0].scrollHeight;
          var yearListH = _this.getDom('.year-list li')[0].offsetHeight;
          var fieldyearVal = _this.getControlVal().yearVal;
          var yearStart = _this.yearStart + 1;
          // console.log(yearStart);
          var distanceY = (fieldyearVal - yearStart) * yearListH;
          yearList.scrollTop = distanceY;
          var yearLists = yearList.children;
          for (var j = 0; j < yearLists.length; j++) {
            yearLists[j].className = '';
          }
          yearLists[fieldyearVal - yearStart].className = 'hover';

        } else {
          yearList.className = 'list year-list hidden';
        }
      }
      yearList.onclick = function (ev) {
        var ev = ev || window.event;
        var ele = ev.target || ev.srcElement;
        if (ele == yearList) {
          return false;
        }
        var eleVal = ele.getAttribute('data-val');
        _this.setControlVal(fieldyear, eleVal + '年', eleVal)
        var val = _this.getControlVal();
        var monthVal = val.monthVal;
        if (val.selVal == 'solar') {
          _this.fieldControlSolar();
          monthVal = val.monthVal;
          _this.fieldDom(eleVal, monthVal);
        } else {
          _this.fieldControlLunar(eleVal);
          _this.fieldControlVal(eleVal, 1);
          _this.fieldControlTxt(eleVal, '正');
          _this.fieldLunarDom(eleVal, 1);
        }
        yearList.className = 'list year-list hidden';

      }
    },
    // 控制阴历和公历的选项
    showSelList: function () {
      var _this = this;
      var selList = _this.doms.selList;
      var selSel = _this.doms.selCtr;
      var fieldsel = _this.doms.fieldSel;
      _this.disabledSel();
      selSel.onclick = function () {
        _this.doms.monthList.className = 'list month-list hidden';
        _this.doms.yearList.className = 'list year-list hidden';
        var isTrue = (selList.className).indexOf('hidden') > -1 ? true : false;
        if (isTrue) {
          selList.className = 'list sel-list';
        } else {
          selList.className = 'list sel-list hidden';
        }
      }
      selList.onclick = function (ev) {
        var ev = ev || window.event;
        var ele = ev.target || ev.srcElement;
        if (ele == selList) {
          return false;
        }
        var eleVal = ele.getAttribute('data-val');
        var fieldMonthVal = _this.doms.fieldMonth;
        var _fieldselVal = (eleVal == 'solar') ? '阳历' : '阴历';
        _this.setControlVal(fieldsel, _fieldselVal, eleVal)

        var val = _this.getControlVal();
        if (val.selVal == 'solar') {
          _this.fieldControlSolar();
          var _fieldMonthTxt = (new Date()).getMonth() + 1 + '月';
          var _fieldMonthVal = (new Date()).getMonth() + 1;
          _this.setControlVal(fieldMonthVal, _fieldMonthTxt, _fieldMonthVal)
          // 选中状态
          _this.getDom('.sel-solar')[0].className = 'sel-solar hover';
          _this.getDom('.sel-lunar')[0].className = 'sel-lunar';
          var yearVal = _this.getControlVal().yearVal;
          var monthVal = _this.getControlVal().monthVal;
          _this.fieldDom(yearVal, monthVal);
        } else {
          _this.fieldControlLunar(null);
          // 选中状态
          _this.getDom('.sel-solar')[0].className = 'sel-solar';
          _this.getDom('.sel-lunar')[0].className = 'sel-lunar hover';
          // 获取今日时间
          var today = new Date();
          var month = today.getMonth() + 1;
          var year = today.getFullYear();
          var date = today.getDate();
          var fff = _this.solarTolunar(year, month, date);
          _this.fieldControlTxt(fff.lunarYear, fff.lunarMonthCZ);
          _this.fieldControlVal(fff.lunarYear, fff.lunarMonthIndex)
          _this.fieldLunarDom(fff.lunarYear, fff.lunarMonthIndex)
        }
        selList.className = 'list sel-list hidden';
      }
    },
    // 填充公历选项的字符串
    fieldControlSolar: function () {
      var yearList = this.doms.yearList;
      var monthList = this.doms.monthList;
      var ystr = '';
      var mstr = '';
      var yearStart = this.yearStart + 1;
      var yearEnd = this.yearEnd + 1;
      for (var i = yearStart; i < yearEnd; i++) {
        ystr += '<li data-val="' + i + '">' + i + '年' + '</li>';
      }
      for (var j = 1; j < 13; j++) {
        mstr += '<li data-val="' + j + '">' + j + '月' + '</li>';
      }
      yearList.innerHTML = ystr;
      monthList.innerHTML = mstr;
    },
    // 填充阴历选项的字符串
    fieldControlLunar: function (y) {
      var yearList = this.doms.yearList;
      var monthList = this.doms.monthList;
      var yearVal = this.getControlVal().yearVal;
      var monthVal = this.getControlVal().monthVal;
      var year = y || yearVal;
      var lunarMonth = this.showLunarMonth(yearVal);
      var ystr = '';
      var mstr = '';
      var yearStart = this.yearStart + 1;
      var yearEnd = this.yearEnd + 1;
      for (var i = yearStart; i < yearEnd; i++) {
        ystr += '<li data-val="' + i + '">' + i + '年' + '</li>';
      }
      for (var j = 0, k = 1; j < lunarMonth.length, k <= lunarMonth.length; j++, k++) {
        mstr += '<li data-val="' + k + '">' + lunarMonth[j] + '月' + '</li>';
      }
      monthList.innerHTML = mstr;
      yearList.innerHTML = ystr;
    },

    // 填充阳历
    fieldDom: function (y, m) {
      var y = y || '';
      var m = m || '';
      var str = this.drawSolar(y, m);
      var ddd = this.getDom('.dates-bd')[0];
      ddd.innerHTML = str;
    },
    // 填充阴历
    fieldLunarDom: function (y, m) {
      var y = y || '';
      var m = m || '';
      var str = this.drawLunar(y, m);
      var ddd = this.getDom('.dates-bd')[0];
      ddd.innerHTML = str;
    },
    // 填充日历控制选择value
    fieldControlVal: function (yearVal, monthVal) {
      var yearDom = this.doms.fieldYear;
      var monthDom = this.doms.fieldMonth;
      yearDom.setAttribute('data-val', yearVal);
      monthDom.setAttribute('data-val', monthVal);
    },
    // 填充日历控制选择text
    fieldControlTxt: function (yearVal, monthVal) {
      var yearDom = this.doms.fieldYear;
      var monthDom = this.doms.fieldMonth;
      yearDom.innerHTML = yearVal + '年';
      monthDom.innerHTML = monthVal + '月';
    },
    // 禁止选中
    disabledSel: function () {
      if (document.all) {
        document.onselectstart = function () {
          return false;
        }; //for ie
      } else {
        document.onmousedown = function () {
          return false;
        };
        document.onmouseup = function () {
          return true;
        };
      }
      document.onselectstart = new Function('event.returnValue=false;');

      if (window.getSelector) {
        var selection = window.getSelection();
        selection.removeAllRanges();
      } else if (document.selection && document.selection.empty) {
        document.selection.empty();
        // document.selection.clear();
      }
    },
    // 点击清除按钮
    removeCLear: function () {
      var _this = this;
      var parentEl = _this.doms.iptEl.parentNode;
      var _tmp = parentEl.querySelector('.clear-icon');
      _tmp.onclick = function () {
        // console.log('parentEl',parentEl);
        _tmp.parentNode.removeChild(_tmp);
        _this.clearAllData(parentEl);
      }
    },
    // 点击清除按钮时清除数据
    clearAllData: function (parentEl) {
      var el = parentEl.querySelector('input');
      var elVal = parentEl.querySelector('.data-hide');
      el.value = el.getAttribute('data-value');
      el.setAttribute('value', '0');
      el.removeAttribute('data-sel');
      el.removeAttribute('data-year');
      el.removeAttribute('data-month');
      el.removeAttribute('data-date');
      elVal.parentNode.removeChild(elVal);
    },
  });

  // 绘制表格数据
  calendar.extend(calendar, {
    // 获取绘制公历表格数据
    drawSolarDate: function (y, m) {
      var today = new Date();
      var todayMonth = today.getMonth() + 1;
      var todayYear = today.getFullYear();
      var year = y || todayYear;
      var month = m || todayMonth;

      var date1 = this.getSolarMonth(year, month);
      var date2 = this.getSolarDate(year, month);
      var date3 = this.getSolarPreMonth(year, month);
      var date4 = this.getSolarNextMonth(year, month);
      // console.log(date1, date2, date3, date4);

      this.fieldControlVal(year, month);
      this.fieldControlTxt(year, month);

      // 表格行数
      var lineDate = Math.ceil((date2.nowDayWeek + date2.nowMaxDate) / 7);
      var preStart = date3.preMonthDate - date2.nowDayWeek + 1;

      //头
      var preArr = [];
      var conArr = [];
      var nextArr = [];
      for (var prei = preStart; prei <= date3.preMonthDate; prei++) {
        var pre = this.solarTolunar(date3.preMonthYear, date3.preMonth, prei);
        // console.log(pre)
        if (pre.lunarDay == 1) {
          // console.log(pre.lunarMonthCZ)
          preArr.push(pre.lunarMonthCZ + '月');
          continue;
        }
        preArr.push(pre.lunarDayCZ);
      }
      // console.log(preArr);

      // 中
      for (var k = 1; k <= date1; k++) {
        var con = this.solarTolunar(date2.nowYear, date2.nowMonth, k);

        if (con.lunarDay == 1) {
          conArr.push(con.lunarMonthCZ + '月');
          continue;
        }
        conArr.push(con.lunarDayCZ);
      }
      // console.log(conArr);

      // 尾
      var nextMonthDate = 6 - date2.nowLastDayWeek;
      // console.log(nextMonthDate)
      for (var j = 1; j <= nextMonthDate; j++) {
        var nex = this.solarTolunar(date4.nextMonthYear, date4.nextMonth, j);
        // console.log(nex)
        if (nex.lunarDay == 1) {
          nextArr.push(nex.lunarMonthCZ + '月');
          continue;
        }
        nextArr.push(nex.lunarDayCZ);
      }
      // console.log(nextArr);

      return {
        preStart: preStart,
        preMaxDate: date3.preMonthDate,
        preDate: date2.nowDayWeek,
        nowMaxDate: date1,
        nextDate: nextMonthDate,
        preLunarArr: preArr,
        nowLunarArr: conArr,
        nextLunarArr: nextArr
      }
    },
    // 获取绘制阴历表格数据
    drawLunarDate: function (y, m) {
      var curM = this.lunarToSolar(y, m, 1);
      var preM = this.lunarPreMonth(y, m);
      var nextM = this.lunarNextMonth(y, m);
      // console.log('curM', curM);
      // console.log('preM', preM);
      // console.log('nextM', nextM);
      var lunarPreArr = [];
      var lunarCurArr = [];
      var lunarNextArr = [];
      var preStart = preM.lunarMaxDate - curM.weekday + 1;
      // console.log('preStart', preStart);
      var preArr = [];
      var conArr = [];
      var nextArr = [];
      // 前
      for (var prei = preStart, prej = preStart - 1; prei <= preM.lunarMaxDate, prej <= preM.lunarMaxDate - 1; prei++, prej++) {

        lunarPreArr.push(ArrDayLunar[prej])
        var pre = this.lunarToSolar(preM.lunarYear, preM.lunarMonthIndex, prei);
        if (pre.solarDay == 1) {
          preArr.push(pre.solarMonth + '月');
          continue;
        }
        preArr.push(pre.solarDay);
      }
      // console.log('preArr',preArr);
      // console.log('lunarPreArr',lunarPreArr);

      // 中
      for (var coni = 1, conj = 0; coni <= curM.lunarMaxDate, conj <= curM.lunarMaxDate - 1; coni++, conj++) {
        lunarCurArr.push(ArrDayLunar[conj]);
        var con = this.lunarToSolar(y, m, coni);
        if (con.solarDay == 1) {
          conArr.push(con.solarMonth + '月');
          continue;
        }
        conArr.push(con.solarDay);
      }
      // console.log(conArr);
      // console.log(lunarCurArr);

      // 尾
      var curM2 = this.lunarToSolar(y, m, curM.lunarMaxDate);
      var nextMonthDate = 6 - curM2.weekday;
      for (var nexti = 1, nextj = 0; nexti <= nextMonthDate, nextj <= nextMonthDate - 1; nexti++, nextj++) {
        lunarNextArr.push(ArrDayLunar[nextj]);
        var nex = this.lunarToSolar(nextM.lunarYear, nextM.lunarMonthIndex, nexti);
        if (nex.solarDay == 1) {
          nextArr.push(nex.solarMonth + '月');
          continue;
        }
        nextArr.push(nex.solarDay);
      }
      // console.log(nextArr);
      // console.log(nextMonthDate);

      return {
        solarPreArr: preArr,
        solarCurArr: conArr,
        solarNextArr: nextArr,
        lunarPreArr: lunarPreArr,
        lunarCurArr: lunarCurArr,
        lunarNextArr: lunarNextArr,
        preStart: preStart
      }
    },
    // 绘制公历表格
    drawSolar: function (y, m) {
      var dates = this.drawSolarDate(y, m);
      var nowday = new Date();
      var day = nowday.getDate();
      var year = nowday.getFullYear();
      var month = nowday.getMonth() + 1;
      var controlday = this.getControlVal();
      // console.log(controlday)
      this.fieldControlSolar();
      // console.log(dates)
      var solarStr = '';
      var preStr = '';
      var conStr = '';
      var nextStr = '';
      // 上个月数据字符串
      for (var prei = dates.preStart, prej = 0; prei <= dates.preMaxDate, prej < dates.preDate; prei++, prej++) {
        preStr += '<li class="notCur preM"><div class="layer"></div><span class="solar" data-count="' + prei + '">' + prei + '</span><span class="lunar">' + dates.preLunarArr[prej] + '</span></li>';
      }
      // console.log(preStr);
      // 本月数据字符串
      for (var coni = 1, conj = 0; coni <= dates.nowMaxDate, conj < dates.nowMaxDate; coni++, conj++) {
        if (coni == day && controlday.yearVal == year && controlday.monthVal == month) {
          conStr += '<li class="today"><div class="layer"></div><span class="solar today"  data-count="' + coni + '">' + coni + '</span><span class="lunar today">' + dates.nowLunarArr[conj] + '</span></li>';
          continue;
        } else {
          conStr += '<li><div class="layer"></div><span class="solar" data-count="' + coni + '">' + coni + '</span><span class="lunar">' + dates.nowLunarArr[conj] + '</span></li>';
        }
      }
      // console.log(conStr);
      // 下个月数据字符串
      for (var nexti = 1, nextj = 0; nexti <= dates.nextDate, nextj < dates.nextDate; nexti++, nextj++) {
        nextStr += '<li class="notCur nextM"><div class="layer"></div><span class="solar" data-count="' + nexti + '">' + nexti + '</span><span class="lunar">' + dates.nextLunarArr[nextj] + '</span></li>';
      }
      // console.log(nextStr);

      solarStr = preStr + conStr + nextStr;
      return solarStr;
    },
    // 绘制阴历表格
    drawLunar: function (y, m) {
      var dates = this.drawLunarDate(y, m);
      var nowday = new Date();
      var day = nowday.getDate();
      var year = nowday.getFullYear();
      var month = parseInt(nowday.getMonth() + 1);
      var controlday = this.getControlVal();
      var lunarDate = this.solarTolunar(year, month, day);
      // console.log(controlday,lunarDate);
      this.fieldControlLunar(y);
      // console.log(dates);
      var solarStr = '';
      var preStr = '';
      var conStr = '';
      var nextStr = '';
      // 上个月数据字符串
      for (var prei = 0; prei < dates.lunarPreArr.length; prei++) {
        preStr += '<li class="notCur preM"><div class="layer"></div><span class="solar">' + dates.solarPreArr[prei] + '</span><span class="lunar" data-count="' + (dates.preStart++) + '">' + dates.lunarPreArr[prei] + '</span></li>';
      }
      // console.log(preStr);
      // 本月数据字符串
      // var
      for (var coni = 0, conj = 1; coni < dates.lunarCurArr.length; coni++) {
        if (lunarDate.lunarMonthIndex == controlday.monthVal && lunarDate.lunarYear == controlday.yearVal && lunarDate.lunarDayCZ == dates.lunarCurArr[coni]) {
          conStr += '<li class="today"><div class="layer"></div><span  class="solar today">' + dates.solarCurArr[coni] + '</span><span class="lunar today" data-count="' + (conj++) + '">' + dates.lunarCurArr[coni] + '</span></li>';
          continue;
        }
        conStr += '<li><div class="layer"></div><span class="solar">' + dates.solarCurArr[coni] + '</span><span class="lunar" data-count="' + (conj++) + '">' + dates.lunarCurArr[coni] + '</span></li>';
      }
      // console.log(conStr);
      // 下个月数据字符串
      for (var nexti = 0, nextj = 1; nexti < dates.lunarNextArr.length; nexti++) {
        nextStr += '<li class="notCur nextM"><div class="layer"></div><span class="solar">' + dates.solarNextArr[nexti] + '</span><span class="lunar" data-count="' + (nextj++) + '">' + dates.lunarNextArr[nexti] + '</span></li>';
      }
      // console.log(nextStr);

      solarStr = preStr + conStr + nextStr;
      return solarStr;
    },
    // 点击今日按钮
    toDay: function () {
      var _this = this;
      var today = new Date();
      var month = today.getMonth() + 1;
      var year = today.getFullYear();
      var date = today.getDate();
      var fieldSel = this.doms.fieldSel;
      var todayDom = this.doms.todayBtn;
      var fieldYear = this.doms.fieldYear;
      var fieldMonth = this.doms.fieldMonth;
      todayDom.onclick = function () {
        _this.getDom('.month-list')[0].className = 'list month-list hidden';
        _this.getDom('.sel-list')[0].className = 'list sel-list hidden';
        _this.getDom('.year-list')[0].className = 'list year-list hidden';
        var selVal = fieldSel.getAttribute('data-val');
        if (selVal == 'solar') {
          _this.fieldDom(year, month);
        } else {
          var fff = _this.solarTolunar(year, month, date);
          _this.fieldControlVal(fff.lunarYear, fff.lunarMonthIndex);
          _this.fieldControlTxt(fff.lunarYear, fff.lunarMonthCZ);
          _this.fieldLunarDom(fff.lunarYear, fff.lunarMonthIndex);
        }
      }
    },
  });

  // 日历点击事件
  calendar.extend(calendar, {
    // 初始化
    init: function (obj) {
      this.config = obj; // 将传入的值写入全局
      this.config.ctx = obj.show || 'body';
      this.baseStr();
      this.initfieldControl(obj);
      this.showMonthList();
      this.showYearList();
      this.showSelList();
      this.toDay();
      this.getCurVal();
    },
    // 点击input时判断渲染日历控件头部
    initfieldControl: function (obj) {
      var iptEl = document.querySelector(obj.el);
      var initIptSel = iptEl.getAttribute('data-sel');
      var initIptYear = iptEl.getAttribute('data-year');
      var initIptMonth = iptEl.getAttribute('data-month');
      var initIptDate = iptEl.getAttribute('data-date');
      var _iptTxt = (initIptSel == 'lunar') ? '阴历' : '阳历';
      // 设置默认时间
      var defaultTime = obj.initTime || [1990, 5];
      this.setControlVal(this.doms.fieldSel, _iptTxt, initIptSel);
      // 判断点击第一次时是否有值
      if (initIptSel == null || initIptYear == null || initIptMonth == null || initIptDate == null) {
        this.fieldDom(defaultTime[0], defaultTime[1]);
      } else if (initIptSel == 'solar') {
        // console.log('solar : ',initIptSel,initIptYear,initIptMonth,initIptDate);
        this.setControlVal(this.doms.fieldYear, initIptYear, initIptYear);
        this.setControlVal(this.doms.fieldMonth, initIptMonth, initIptMonth);
        this.fieldDom(initIptYear, initIptMonth);
      } else if (initIptSel == 'lunar') {
        // console.log('lunar : ',initIptSel,initIptYear,initIptMonth,initIptDate);
        this.setControlVal(this.doms.fieldYear, initIptYear + '年', initIptYear);
        var lunarMonth = this.showLunarMonth(initIptYear);
        this.setControlVal(this.doms.fieldMonth, lunarMonth[initIptMonth - 1] + '月', initIptMonth);
        this.fieldLunarDom(initIptYear, initIptMonth);
      }
    },
    // 点击表格获取值
    getCurVal: function () {
      // 判断是否有上下文
      if (this.config.ctx == 'body') {
        return false;
      }
      var _this = this;
      var datesBd = this.getDom('.dates-bd')[0];
      var options = {};
      datesBd.onclick = function (ev) {
        _this.disabledSel();
        var ev = ev || window.event;
        var evEle = ev.target || ev.srcElement;
        _this.doms.selList.className = 'list sel-list hidden';
        _this.doms.monthList.className = 'list month-list hidden';
        _this.doms.yearList.className = 'list year-list hidden';
        // 获取当前元素li标签
        if (evEle.parentNode == datesBd && (evEle != datesBd)) {
          evEle = evEle;
        } else if (evEle == datesBd) {
          return false;
        } else {
          evEle = evEle.parentNode;
        }

        options.solarVal = evEle.children[1].getAttribute('data-count');
        var controlBar = _this.getControlVal();
        var isPreMonth = evEle.className.indexOf('preM');
        var isnextMonth = evEle.className.indexOf('nextM');
        var year = controlBar.yearVal;
        var month = controlBar.monthVal;
        // console.log('isPreMonth',isPreMonth,'isnextMonth',isnextMonth);
        if (isPreMonth > -1) {
          // console.log('isPreMonth');
          controlBar = _this.getControlVal();
          // console.log(controlBar);
          options.showSelT = controlBar.selTxt;
          var isTrue = controlBar.selVal == 'solar' ? true : false;
          if (isTrue) {
            var preM = _this.getSolarPreMonth(year, month);
            _this.fieldControlSolar()
            _this.fieldControlVal(preM.preMonthYear, preM.preMonth);
            _this.fieldControlTxt(preM.preMonthYear, preM.preMonth);
            _this.fieldDom(preM.preMonthYear, preM.preMonth);
            options.year = preM.preMonthYear;
            options.month = preM.preMonth;

          } else {
            options.showDate = evEle.children[2].innerHTML;
            options.solarVal = evEle.children[2].getAttribute('data-count');
            var preM = _this.lunarPreMonth(controlBar.yearVal, controlBar.monthVal);
            _this.fieldControlVal(preM.lunarYear, preM.lunarMonthIndex);
            _this.fieldControlTxt(preM.lunarYear, preM.lunarMonthCZ);
            _this.fieldControlLunar(preM.lunarYear);
            _this.fieldLunarDom(preM.lunarYear, preM.lunarMonthIndex);
            // console.log(preM);
            options.year = preM.lunarYear;
            options.month = preM.lunarMonthIndex;
            options.showMonth = preM.lunarMonthCZ + '月';
          }
        } else if (isnextMonth > -1) {
          // console.log('isnextMonth')
          controlBar = _this.getControlVal();
          options.showSelT = controlBar.selTxt;
          var isTrue = controlBar.selVal == 'solar' ? true : false;
          if (isTrue) {
            var nextM = _this.getSolarNextMonth(year, month);
            _this.fieldControlSolar()
            _this.fieldControlVal(nextM.nextMonthYear, nextM.nextMonth);
            _this.fieldControlTxt(nextM.nextMonthYear, nextM.nextMonth);
            _this.fieldDom(nextM.nextMonthYear, nextM.nextMonth);
            options.year = nextM.nextMonthYear;
            options.month = nextM.nextMonth;
          } else {
            options.showDate = evEle.children[2].innerHTML;
            options.solarVal = evEle.children[2].getAttribute('data-count');
            controlBar = _this.getControlVal();
            var nextM = _this.lunarNextMonth(controlBar.yearVal, controlBar.monthVal);
            _this.fieldControlVal(nextM.lunarYear, nextM.lunarMonthIndex);
            _this.fieldControlTxt(nextM.lunarYear, nextM.lunarMonthCZ);
            _this.fieldControlLunar(nextM.lunarYear);
            _this.fieldLunarDom(nextM.lunarYear, nextM.lunarMonthIndex);
            // console.log(nextM);
            options.year = nextM.lunarYear;
            options.month = nextM.lunarMonthIndex;
            options.showMonth = nextM.lunarMonthCZ + '月';

          }
        } else {
          controlBar = _this.getControlVal();
          options.year = controlBar.yearVal;
          options.month = controlBar.monthVal;
          options.showMonth = controlBar.monthTxt;
          options.showSelT = controlBar.selTxt;
          controlBar = _this.getControlVal();
          var isTrue = controlBar.selVal == 'solar' ? true : false;
          if (isTrue) {
            options.showDate = evEle.children[1].innerHTML;
          } else {
            options.showDate = evEle.children[2].innerHTML;
            options.solarVal = evEle.children[2].getAttribute('data-count');
          }
        }
        // 获取当前值并赋值给标签
        var isSolar = _this.getControlVal();
        var isSolarTrue = isSolar.selVal == 'solar' ? true : false;
        options.showSel = isSolar.selVal;
        // 创建inputs隐藏域到body
        _this.createIpts();
        if (isSolarTrue) {
          _this.showCalSolarDate(options);
        } else {
          _this.showCalLunarDate(options);
        }
        // 移除日历
        _this.removeDom();
      }
    },
    // 展示点击选中的阳历信息
    showCalSolarDate: function (options) {
      // 显示赋值
      var showDate = document.querySelector(this.config.el);
      showDate.setAttribute('value', options.showSelT + '：' + options.year + '年' + options.month + '月' + options.solarVal + '日');
      showDate.value = options.showSelT + '：' + options.year + '年' + options.month + '月' + options.solarVal + '日';
      // console.log('showCalSolarDate options',options);
      showDate.setAttribute('data-sel', 'solar');
      showDate.setAttribute('data-year', options.year);
      showDate.setAttribute('data-month', options.month);
      showDate.setAttribute('data-date', options.solarVal);
      // 赋值给隐藏域
      var arrTmp = [1, options.year, options.month, options.solarVal];
      // var ipt = document.querySelector(this.config.val);
      // var ipts = ipt.children;

      var el = this.doms.iptEl.parentNode;
      var targetEl = el.querySelector('.data-hide').children;
      for (var i = 0; i < targetEl.length; i++) {
        targetEl[i].setAttribute('value', arrTmp[i]);
      }
    },
    // 展示点击选中的阴历信息
    showCalLunarDate: function (options) {
      // 显示赋值
      var showDate = document.querySelector(this.config.el);
      showDate.setAttribute('value', options.showSelT + '：' + options.year + '年' + options.showMonth + options.showDate);
      showDate.value = options.showSelT + '：' + options.year + '年' + options.showMonth + options.showDate;
      // console.log('showCalLunarDate options',options);
      showDate.setAttribute('data-sel', 'lunar');
      showDate.setAttribute('data-year', options.year);
      showDate.setAttribute('data-month', options.month);
      showDate.setAttribute('data-date', options.solarVal);
      // 隐藏标签赋值

      var arrTmp = [2, options.year, options.month, options.solarVal];
      // var ipt = document.querySelector(this.config.val);
      // var ipts = ipt.children;
      var el = this.doms.iptEl.parentNode;
      var targetEl = el.querySelector('.data-hide').children;

      for (var i = 0; i < targetEl.length; i++) {
        targetEl[i].setAttribute('value', arrTmp[i]);
      }
    },
    // 创建隐藏域input
    createIpts: function () {

      var typeName = this.config.iptName || ['kind', 'year', 'month', 'date'];
      var el = this.doms.iptEl.parentNode;
      var targetEl = el.querySelector('.data-hide');
      var divs = document.createElement('div');
      divs.className = 'data-hide';
      var str = '';
      for (var i = 0; i < 4; i++) {
        str += "<input type='hidden' name='" + typeName[i] + "'>";
      }
      divs.innerHTML = str;
      if (!targetEl) {
        el.appendChild(divs);
      }
    },
  })

  function fn(obj) {
    return calendar.init(obj);
  }

  (w.calendar == undefined) && (w.calendar = fn)
})(window);


(function (w) {
  var cal = {
    stopPro: function (e) {
      e = e || window.event;
      if (document.all) { //只有ie识别
        e.cancelBubble = true;
      } else {
        e.stopPropagation();
      }
    },
    stopDefault: function (e) {
      e = e || window.event;
      if (document.all) {
        window.event.returnValue = false;
      } else {
        event.preventDefault();
      }
    },
    //移除日历DOM
    removeDom: function (obj) {
      var dom = document.querySelector('.zh-almanac');
      if (dom) {
        // console.log(dom,'removeDom');
        dom.parentNode.removeChild(dom);
      }
    },
    // 点击获得input内容
    getIptVal: function (obj) {
      var el = document.querySelector(obj.el);
      return el.value;
    },
    // 点击展示日历
    show: function (obj) {
      var targetEl = document.querySelector(obj.el);
      var _this = this;
      var spanEl = document.createElement('span');
      spanEl.className = 'clear-icon';
      spanEl.setAttribute('data-open', 'true');
      spanEl.innerHTML = '<i data-open="true"></i>';
      var val = cal.getIptVal(obj);
      // console.log(obj);
      // console.log('document',val,val == obj.tip);
      if (val != obj.tip) {
        targetEl.parentNode.appendChild(spanEl);
      }
      targetEl.onclick = function (ev) {
        var ipts = document.querySelectorAll('.zh-almanac');
        if (ipts.length != 0) {
          // console.log('calendar ipts',ipts);
          var _tmp = ipts[0];
          _tmp.parentNode.removeChild(_tmp);
          calendar(obj);
          this.setAttribute('data-open', 'true');
          this.setAttribute('data-value', obj.tip);
        } else {
          calendar(obj);
          this.setAttribute('data-open', 'true');
          this.setAttribute('data-value', obj.tip);
        }
      }
      cal.hideOther(obj);
    },
    // 点击其他区域隐藏日历
    hideOther: function (obj) {
      var el = document.querySelector(obj.show);
      var hintbar = document.querySelectorAll('hint-bar')[0];
      var _this = this;

      document.onclick = function (ev) {
        var ev = ev || window.event;
        var eleCur = ev.target || ev.srcElement;
        var eleCurParent = eleCur.parentNode;
        // console.log('el',eleCur);
        if (!eleCurParent) {
          return false
        }
        var ipts = document.querySelectorAll('.zh-almanac');
        //判断是否点击在日历内部
        var res = /control|hint-bar|zh-almanac|dates-hd|sel-list|sel-control|alc-container/.test(eleCurParent.className);
        if (res) {
          return false;
        }
        // console.log('aaaaaa',eleCur.getAttribute('data-open'));
        if (!(eleCur.getAttribute('data-open') == 'true')) {
          _this.removeDom(obj);
        }
        // var isTrue1 = el.className.indexOf('hidden') > -1;
        // if (isTrue1) {
        //     el.className = 'hidden';
        // }
      }
    },

  };
  (w.cal == undefined) && (w.cal = cal)
})(window);
