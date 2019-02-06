(function (w) {
    var DaysInMonth = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    var ArrMonthLunar = new Array("正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "腊");
    var ArrWeekDate = new Array('星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六');
    var ArrDayLunar = new Array("初一", "初二", "初三", "初四", "初五", "初六", "初七", "初八", "初九", "初十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十", "廿一", "廿二", "廿三", "廿四", "廿五", "廿六", "廿七", "廿八", "廿九", "三十");
    var DaysInMonthLunar = new Array(
        [0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 38], [6, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 26], [0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 45], [0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 35], [4, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 24], [0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 43], [0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 32], [2, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 21], [0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 40], [7, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 28], [0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 47], [0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 36], [5, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 26], [0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 44], [0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 33], [3, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 23], [0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 42], [8, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 30], [0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 48], [0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 38], [6, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 27], [0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 45], [0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 35], [4, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 24], [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 43], [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 32], [3, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 20], [0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 39], [7, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 29], [0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 47], [0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 36], [5, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 26], [0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 45], [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 33], [4, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 22], [0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 41], [8, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 30], [0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 48], [0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 37], [6, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 27], [0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 46], [0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 35], [4, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 24], [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 43], [10, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 32], [0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 50], [0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 39], [6, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 28], [0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 47], [0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 36], [5, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 26], [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 45], [0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 34], [3, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 22], [0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 40], [8, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 30], [0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 49], [0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 37], [5, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 27], [0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 46], [0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 35], [4, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 23], [0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 42], [0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 31], [2, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 21], [0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 39], [7, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 28], [0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 48], [0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 37], [5, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 25], [0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 44], [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 33], [4, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 22], [0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 40], [9, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 30], [0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 49], [0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 38], [6, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 27], [0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 46], [0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 35], [4, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 24], [0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 42], [0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 31], [2, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 21], [0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 40], [6, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 28], [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 47], [0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 36], [5, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 25], [0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 43], [0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 43]);
    function Calendar() { }
    Calendar.prototype = {
        // 传入的公历年月,返回天数
        getSolarMonth: function (year, month) {
            if (month == 2) {
                return (((year % 4 == 0) && ((year % 100) != 0)) || (year % 400 == 0)) ? 29 : 28;
            } else {
                return DaysInMonth[month - 1];
            }
        },
        // 传入公历的年月日,返回包含月份的天数,星期
        getSolarDate: function (year, month, day) {
            //获得当月day号星期几,不填默认为1号
            var day = day ? day : 1;
            var dayStr = year + ' ' + month + ' ' + day;
            var now = new Date(dayStr);
            var nowWeek = now.getDay();
            //获得当月最后一天星期几
            var nowLastDay = this.getSolarMonth(year, month);
            var nowLast = new Date(year + ' ' + month + ' ' + nowLastDay);
            var nowLastWeek = nowLast.getDay();
            //获取这个月总的天数
            var nowMonth = new Date(year, month, 0);
            var nowMaxDate = nowMonth.getDate();
            return {
                nowYear: nowMonth.getFullYear(),
                nowMonth: nowMonth.getMonth() + 1,
                nowDayWeek: nowWeek,
                nowMaxDate: nowMaxDate,
                nowLastDayWeek: nowLastWeek
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
        // 阴历年的总天数
        showLunarDate: function (year) {
            var days = 0;
            var getRunMonth = this.getRunMonth(year);

            for (var i = 1; i < 13; i++) {
                days += this.getLunarMonthDate(year, i);
            }

            if (getRunMonth > 0) {
                days += this.getRunMonthDate(year)
            }
            return days;
        },
        // 传入年,返回闰月在阴历年中是第几月
        getRunMonth: function (year) {
            return DaysInMonthLunar[year - 1940][0];
        },
        // 传入年,返回阴历年中闰月的天数
        getRunMonthDate: function (year) {
            // 得到闰月
            var runMonth = this.getRunMonth(year);
            var runMonthDate = (DaysInMonthLunar[year - 1940][runMonth + 1] == 1) ? 30 : 29;
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
            var LunarDate = DaysInMonthLunar[year - 1940][newMonth] == 1 ? 30 : 29;
            return LunarDate;
        },
        // 传入公历年份,返回公历1月1号到阴历1月初一前1天的天数偏差值
        getOffsetDate: function (year) {
            var offsetDate = DaysInMonthLunar[year - 1940][DaysInMonthLunar[year - 1940].length - 1];
            return offsetDate;
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
            var sum =0;
            for(var j=1;j<m;j++){
              sum += this.getSolarMonth(y,j);
            }
            var days = sum+d-1;
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
            var lunarData = DaysInMonthLunar[y - 1940];
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
            m = DaysInMonthLunar[y - 1940][0] > 0 ? (DaysInMonthLunar[y - 1940][0] >= m ? m : m - 1) : m;
            if ((_tmp == DaysInMonthLunar[y - 1940][0] + 1) && DaysInMonthLunar[y - 1940][0]>0) {
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
                lunarMonthIndex:_tmp,
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
                lunarPreMonth = this.lunarToSolar(y - 1, DaysInMonthLunar[y - 1 - 1940].length - 2, 1);
            } else {
                lunarPreMonth = this.lunarToSolar(y, m - 1, 1);
            }
            return lunarPreMonth;
        },
        // 获取阴历下一个月
        lunarNextMonth: function (y, m) {
            var lunarNextMonth;
            if (m == DaysInMonthLunar[y - 1940].length - 2) {
                lunarNextMonth = this.lunarToSolar(parseInt(y) + 1, 1, 1);
            } else {
                lunarNextMonth = this.lunarToSolar(y, parseInt(m) + 1, 1);
            }
            return lunarNextMonth;
        },
        // 获取dom
        getDom: function (ele) {
            return document.querySelectorAll(ele);
        },
        // 控制年的下拉选项
        showMonthList: function () {
            var monthList = this.getDom('.month-list')[0];
            var monthSel = this.getDom('.month-control .control')[0];
            var fieldmonth = this.getDom('.field.month')[0];
            var selSel = this.getDom('.field.sel')[0].getAttribute('date-val');
            // console.log(selSel)
            var _this = this;
            monthSel.onclick = function () {
                var isTrue = (monthList.className).indexOf('hidden') > -1 ? true : false;
                if (isTrue) {
                    monthList.className = 'list month-list';
                    var monthListH = document.querySelectorAll('.month-list li')[0].offsetHeight;
                    var fieldmonthVal = fieldmonth.getAttribute('date-val');
                    var distanceY = (fieldmonthVal -1)*monthListH;
                    monthList.scrollTop = distanceY;
                    var monthLists = monthList.children;
                    for(var j=0;j<monthLists.length;j++){
                      monthLists[j].className = '';
                    }
                    monthLists[fieldmonthVal - 1].className = 'hover';
                } else {
                    monthList.className = 'list month-list hidden';
                }
            }
            monthList.onclick = function (ev) {
                var ele = ev.target || window.event;
                var eleVal = ele.getAttribute('date-val');
                fieldmonth.innerHTML = ele.innerHTML;
                fieldmonth.setAttribute('date-val', eleVal);
                selSel = _this.getDom('.field.sel')[0].getAttribute('date-val');
                if (selSel == 'solar') {
                    _this.fieldControlSolar()
                    var yearVal = _this.getDom('.field.year')[0].getAttribute('date-val');
                    var monthVal = _this.getDom('.field.month')[0].getAttribute('date-val');
                    // console.log(yearVal, monthVal)
                    var str = _this.drawSolar(yearVal, monthVal);
                    var ddd = document.querySelector('.dates-bd')
                    ddd.innerHTML = str;
                } else {
                    var yearVal = _this.getDom('.field.year')[0].getAttribute('date-val');
                    var monthVal = _this.getDom('.field.month')[0].getAttribute('date-val');
                    // console.log('monthVal : ', monthVal);
                    _this.fieldControlLunar(yearVal);
                    var str = _this.drawLunar(yearVal, monthVal);
                    var ddd = document.querySelector('.dates-bd')
                    ddd.innerHTML = str;
                }
                monthList.className = 'list month-list hidden';

            }
        },
        // 控制月的下拉选项
        showYearList: function () {
            var yearList = this.getDom('.year-list')[0];
            var yearSel = this.getDom('.year-control .control')[0];
            var fieldyear = this.getDom('.field.year')[0];
            var _this = this;
            yearSel.onclick = function () {
                var isTrue = (yearList.className).indexOf('hidden') > -1 ? true : false;
                if (isTrue) {
                    yearList.className = 'list year-list';
                    // var yearListO = document.querySelectorAll('.year-list')[0].scrollHeight;
                    var yearListH = document.querySelectorAll('.year-list li')[0].offsetHeight;
                    var fieldyearVal = fieldyear.getAttribute('date-val');
                    var distanceY = (fieldyearVal - 1940)*yearListH;
                    yearList.scrollTop = distanceY;
                    var yearLists = yearList.children;
                    for(var j=0;j<yearLists.length;j++){
                      yearLists[j].className = '';
                    }
                    yearLists[fieldyearVal - 1940].className = 'hover';

                } else {
                    yearList.className = 'list year-list hidden';
                }
            }
            yearList.onclick = function (ev) {
                var ele = ev.target || window.event;
                var eleVal = ele.getAttribute('date-val');
                fieldyear.innerHTML = eleVal;
                fieldyear.setAttribute('date-val', eleVal);
                var val = _this.getControlVal();
                var monthVal = _this.getDom('.field.month')[0].getAttribute('date-val');
                if (val.selVal == 'solar') {
                    _this.fieldControlSolar();
                    var monthVal = _this.getDom('.field.month')[0].getAttribute('date-val');
                    var str = _this.drawSolar(eleVal, monthVal);
                    var ddd = document.querySelector('.dates-bd');
                    ddd.innerHTML = str;
                } else {
                    _this.fieldControlLunar(eleVal);
                    var monthVal = _this.getDom('.field.month')[0].getAttribute('date-val');
                    var str = _this.drawLunar(eleVal, monthVal);
                    var ddd = document.querySelector('.dates-bd');
                    ddd.innerHTML = str;
                }
                yearList.className = 'list year-list hidden';

            }
        },
        // 控制阴历和公历的选项
        showSelList: function () {
            var selList = this.getDom('.sel-list')[0];
            var selSel = this.getDom('.sel-control .control')[0];
            var fieldsel = this.getDom('.field.sel')[0];
            var _this = this;
            selSel.onclick = function () {
                var isTrue = (selList.className).indexOf('hidden') > -1 ? true : false;
                if (isTrue) {
                    selList.className = 'list sel-list';
                } else {
                    selList.className = 'list sel-list hidden';
                }
            }
            selList.onclick = function (ev) {
                var ele = ev.target || window.event;
                var eleVal = ele.getAttribute('date-val');
                var fieldMonthVal = _this.getDom('.field.month')[0];
                fieldsel.setAttribute('date-val', eleVal);
                fieldsel.innerHTML = (eleVal == 'solar') ? '阳历' : '阴历';
                var val = _this.getControlVal();
                if (val.selVal == 'solar') {
                    _this.fieldControlSolar();
                    fieldMonthVal.innerHTML = (new Date()).getMonth() + 1;
                    fieldMonthVal.setAttribute('date-val', (new Date()).getMonth() + 1);
                    _this.getDom('.sel-solar')[0].className = 'sel-solar hover';
                    _this.getDom('.sel-lunar')[0].className = 'sel-lunar';
                    var yearVal = _this.getDom('.field.year')[0].getAttribute('date-val');
                    var monthVal = _this.getDom('.field.month')[0].getAttribute('date-val');
                    var str = _this.drawSolar(yearVal, monthVal);
                    var ddd = document.querySelector('.dates-bd');
                    ddd.innerHTML = str;
                } else {
                    _this.fieldControlLunar();
                    _this.getDom('.sel-solar')[0].className = 'sel-solar';
                    _this.getDom('.sel-lunar')[0].className = 'sel-lunar hover';

                    var fieldYear = _this.getDom('.field.year')[0];
                    var fieldMonth = _this.getDom('.field.month')[0];
                    var today = new Date();
                    var month = today.getMonth() + 1;
                    var year = today.getFullYear();
                    var date = today.getDate();
                    var fff = _this.solarTolunar(year, month, date);
                    fieldYear.setAttribute('date-val',fff.lunarYear);
                    fieldYear.innerHTML=fff.lunarYear;
                    fieldMonth.setAttribute('date-val',fff.lunarMonthIndex);
                    fieldMonth.innerHTML=fff.lunarMonthCZ;
                    var str = _this.drawLunar(fff.lunarYear, fff.lunarMonthIndex);
                    var ddd = document.querySelector('.dates-bd');
                    ddd.innerHTML = str;
                }
                selList.className = 'list sel-list hidden';
            }
        },
        // 填充公历选项的字符串
        fieldControlSolar: function () {
            var yearList = this.getDom('.year-list')[0];
            var monthList = this.getDom('.month-list')[0];
            var ystr = '';
            var mstr = '';
            for (var i = 1940; i < 2031; i++) {
                ystr += '<li date-val="' + i + '">' + i + '</li>';
            }
            for (var j = 1; j < 13; j++) {
                mstr += '<li date-val="' + j + '">' + j + '</li>';
            }
            yearList.innerHTML = ystr;
            monthList.innerHTML = mstr;
        },
        // 填充阴历选项的字符串
        fieldControlLunar: function (y) {
            var yearList = this.getDom('.year-list')[0];
            var monthList = this.getDom('.month-list')[0];
            var yearVal = this.getControlVal().yearVal;
            var monthVal = this.getControlVal().monthVal;
            var year = y || yearVal;
            var lunarMonth = this.showLunarMonth(yearVal);
            var ystr = '';
            var mstr = '';
            for (var i = 1940; i < 2031; i++) {
                ystr += '<li date-val="' + i + '">' + i + '</li>';
            }

            for (var j = 0, k = 1; j < lunarMonth.length, k <= lunarMonth.length; j++ , k++) {
                mstr += '<li date-val="' + k + '">' + lunarMonth[j] + '</li>';
            }
            monthList.innerHTML = mstr;
            yearList.innerHTML = ystr;
        },
        // 获取控制选项的值
        getControlVal: function () {
            var selTxt = this.getDom('.field.sel')[0].innerHTML;
            var selVal = this.getDom('.field.sel')[0].getAttribute('date-val');
            var yearTxt = this.getDom('.field.year')[0].innerHTML;
            var yearVal = this.getDom('.field.year')[0].getAttribute('date-val');
            var monthVal = this.getDom('.field.month')[0].getAttribute('date-val');
            var monthTxt = this.getDom('.field.month')[0].innerHTML;
            return {
                selTxt: selTxt,
                selVal: selVal,
                yearTxt: yearTxt,
                yearVal: yearVal,
                monthTxt: monthTxt,
                monthVal: monthVal
            }
        },
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


            var fieldyear = this.getDom('.field.year')[0]
            var fieldmonth = this.getDom('.field.month')[0]
            fieldyear.setAttribute('date-val', year)
            fieldmonth.setAttribute('date-val', month)
            fieldyear.innerHTML = year;
            fieldmonth.innerHTML = month;

            var nextMonthDate = 6 - date2.nowLastDayWeek;
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
            for (var prei = preStart, prej = preStart - 1; prei <= preM.lunarMaxDate, prej <= preM.lunarMaxDate - 1; prei++ , prej++) {
                // console.log(prei, preM.lunarMaxDate)
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
            for (var coni = 1, conj = 0; coni <= curM.lunarMaxDate, conj <= curM.lunarMaxDate - 1; coni++ , conj++) {
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
            for (var nexti = 1, nextj = 0; nexti <= nextMonthDate, nextj <= nextMonthDate - 1; nexti++ , nextj++) {
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
                lunarNextArr: lunarNextArr
            }
        },
        fieldDom: function (y,m) {
            var y= y||'';
            var m = m||'';
            var str = calendar.drawSolar(y,m);
            var ddd = document.querySelector('.dates-bd')
            ddd.innerHTML = str;
        },
        init: function () {
            this.fieldDom();
            this.showMonthList();
            this.showYearList();
            this.showSelList();
            this.toDay();
            this.getCurVal('#showDate');
        },
        // 点击今日按钮
        toDay: function () {
            var _this = this;
            var today = new Date();
            var month = today.getMonth() + 1;
            var year = today.getFullYear();
            var date = today.getDate();
            var fieldSel = this.getDom('.field.sel')[0];
            var todayDom = this.getDom('.btn-today')[0];
            var fieldYear = this.getDom('.field.year')[0];
            var fieldMonth = this.getDom('.field.month')[0];
            todayDom.onclick = function () {
                var selVal = fieldSel.getAttribute('date-val');
                if (selVal == 'solar') {
                    var str = _this.drawSolar(year, month);
                    var ddd = document.querySelector('.dates-bd')
                    ddd.innerHTML = str;
                } else {
                    var fff = _this.solarTolunar(year, month, date);
                    fieldYear.setAttribute('date-val',fff.lunarYear);
                    fieldYear.innerHTML=fff.lunarYear;
                    fieldMonth.setAttribute('date-val',fff.lunarMonthIndex);
                    fieldMonth.innerHTML=fff.lunarMonthCZ;
                    var str = _this.drawLunar(fff.lunarYear, fff.lunarMonthIndex);
                    var ddd = document.querySelector('.dates-bd');
                    ddd.innerHTML = str;
                }
            }
        },
        // 点击表格获取值
        getCurVal:function(dom){
          var _this = this;
          var datesBd = this.getDom('.dates-bd')[0];
          datesBd.onclick = function(ev){
            var evEle = ev.target;
            if(evEle.parentNode == datesBd){
              evEle = evEle;
            }else{
              evEle = evEle.parentNode;
            }

            var solarVal = evEle.children[1].innerHTML;
            var controlBar = _this.getControlVal();
            var isPreMonth = evEle.className.indexOf('preM');
            var isnextMonth = evEle.className.indexOf('nextM');
            var year = controlBar.yearTxt;
            var month = controlBar.monthTxt;
            // console.log('isPreMonth',isPreMonth,'isnextMonth',isnextMonth);
            if(evEle&&isPreMonth>-1){
                // console.log('isPreMonth');
                controlBar = _this.getControlVal();
                var isTrue = controlBar.selVal =='solar'?true:false;
                if(isTrue){
                    var preM = _this.getSolarPreMonth(year,month);
                    _this.fieldControlSolar()
                    _this.getDom('.field.year')[0].setAttribute('date-val',preM.preMonthYear);
                    _this.getDom('.field.month')[0].setAttribute('date-val',preM.preMonth);
                    _this.getDom('.field.year')[0].innerHTML = preM.preMonthYear;
                    _this.getDom('.field.month')[0].innerHTML = preM.preMonth;
                    var str = _this.drawSolar(preM.preMonthYear, preM.preMonth);
                    var ddd = document.querySelector('.dates-bd')
                    ddd.innerHTML = str;
                    // console.log("preM000000000",preM);
                    year = preM.preMonthYear;
                    month = preM.preMonth;
                }else{
                    controlBar = _this.getControlVal();
                    var preM = _this.lunarPreMonth(controlBar.yearVal,controlBar.monthVal);
                    // console.log('preM222',preM);
                    _this.getDom('.field.year')[0].setAttribute('date-val',preM.lunarYear);
                    _this.getDom('.field.month')[0].setAttribute('date-val',preM.lunarMonthIndex);
                    _this.getDom('.field.year')[0].innerHTML = preM.lunarYear;
                    _this.getDom('.field.month')[0].innerHTML = preM.lunarMonthCZ;
                    _this.fieldControlLunar(preM.lunarYear);
                    var str = _this.drawLunar(preM.lunarYear, preM.lunarMonthIndex);
                    var ddd = document.querySelector('.dates-bd')
                    ddd.innerHTML = str;
                    // console.log("preM000000000",preM);
                    year = preM.lunarYear;
                    month = preM.lunarMonthCZ;
                }
            }else if(evEle&&isnextMonth>-1){
                // console.log('isnextMonth')
                controlBar = _this.getControlVal();
                var isTrue = controlBar.selVal =='solar'?true:false;
                if(isTrue){
                    var nextM = _this.getSolarNextMonth(year,month);
                    _this.fieldControlSolar()
                    _this.getDom('.field.year')[0].setAttribute('date-val',nextM.nextMonthYear);
                    _this.getDom('.field.month')[0].setAttribute('date-val',nextM.nextMonth);
                    _this.getDom('.field.year')[0].innerHTML = nextM.nextMonthYear;
                    _this.getDom('.field.month')[0].innerHTML = nextM.nextMonth;
                    var str = _this.drawSolar(nextM.nextMonthYear, nextM.nextMonth);
                    var ddd = document.querySelector('.dates-bd')
                    ddd.innerHTML = str;
                    // console.log('nextM000000000',nextM);
                    year = nextM.nextMonthYear;
                    month = nextM.nextMonth;
                }else{
                    controlBar = _this.getControlVal();
                    var nextM = _this.lunarNextMonth(controlBar.yearVal,controlBar.monthVal);
                    // console.log('preM222',preM);
                    _this.getDom('.field.year')[0].setAttribute('date-val',nextM.lunarYear);
                    _this.getDom('.field.month')[0].setAttribute('date-val',nextM.lunarMonthIndex);
                    _this.getDom('.field.year')[0].innerHTML = nextM.lunarYear;
                    _this.getDom('.field.month')[0].innerHTML = nextM.lunarMonthCZ;
                    _this.fieldControlLunar(nextM.lunarYear);
                    var str = _this.drawLunar(nextM.lunarYear, nextM.lunarMonthIndex);
                    var ddd = document.querySelector('.dates-bd')
                    ddd.innerHTML = str;
                    // console.log('nextM000000000',nextM);
                    year = nextM.lunarYear;
                    month = nextM.lunarMonthCZ;
                }
            }else{
                // console.log('isCurMonth');
                controlBar = _this.getControlVal();
                year = controlBar.yearTxt;
                month = controlBar.monthTxt;
            }
            // 获取当前值并赋值给标签
            // console.log(controlBar.selTxt,year,month,solarVal);
            _this.getDom(dom)[0].value = controlBar.selTxt+': '+year+'年-'+month+'月-'+solarVal;
          }
        }
    };

    // 绘制公历表格
    Calendar.prototype.drawSolar = function (y, m) {
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
        for (var prei = dates.preStart, prej = 0; prei <= dates.preMaxDate, prej < dates.preDate; prei++ , prej++) {
            preStr += '<li class="notCur preM"><div class="layer"></div><span class="solar">' + prei + '</span><span class="lunar">' + dates.preLunarArr[prej] + '</span></li>';
        }
        // console.log(preStr);
        // 本月数据字符串
        for (var coni = 1, conj = 0; coni <= dates.nowMaxDate, conj < dates.nowMaxDate; coni++ , conj++) {
            if (coni == day && controlday.yearVal == year && controlday.monthVal == month) {
                conStr += '<li class="today"><div class="layer"></div><span class="solar">' + coni + '</span><span class="lunar today">' + dates.nowLunarArr[conj] + '</span></li>';
                continue;
            } else {
                conStr += '<li><div class="layer"></div><span class="solar">' + coni + '</span><span class="lunar">' + dates.nowLunarArr[conj] + '</span></li>';
            }
        }
        // console.log(conStr);
        // 下个月数据字符串
        for (var nexti = 1, nextj = 0; nexti <= dates.nextDate, nextj < dates.nextDate; nexti++ , nextj++) {
            nextStr += '<li class="notCur nextM"><div class="layer"></div><span class="solar">' + nexti + '</span><span class="lunar">' + dates.nextLunarArr[nextj] + '</span></li>';
        }
        // console.log(nextStr);

        solarStr = preStr + conStr + nextStr;
        return solarStr;
    };
    // 绘制阴历表格
    Calendar.prototype.drawLunar = function (y, m) {
        var dates = this.drawLunarDate(y, m);
        var nowday = new Date();
        var day = nowday.getDate();
        var year = nowday.getFullYear();
        var month = parseInt(nowday.getMonth() + 1);
        var controlday = this.getControlVal();
        var lunarDate = this.solarTolunar(year,month,day);
        // console.log(controlday,lunarDate);
        this.fieldControlLunar(y);
        // console.log(dates);
        var solarStr = '';
        var preStr = '';
        var conStr = '';
        var nextStr = '';
        // 上个月数据字符串
        for (var prei = 0; prei < dates.lunarPreArr.length; prei++) {
            preStr += '<li class="notCur preM"><div class="layer"></div><span class="solar">' + dates.lunarPreArr[prei] + '</span><span class="lunar">' + dates.solarPreArr[prei] + '</span></li>';
        }
        // console.log(preStr);
        // 本月数据字符串
        for (var coni = 0; coni < dates.lunarCurArr.length; coni++) {
            if(lunarDate.lunarMonthIndex==controlday.monthVal&&lunarDate.lunarYear==controlday.yearVal&&lunarDate.lunarDayCZ==dates.lunarCurArr[coni]){
                conStr += '<li class="today"><div class="layer"></div><span class="solar">' + dates.lunarCurArr[coni] + '</span><span  class="lunar today">' + dates.solarCurArr[coni] + '</span></li>';
                continue;
            }
            conStr += '<li><div class="layer"></div><span class="solar">' + dates.lunarCurArr[coni] + '</span><span class="lunar">' + dates.solarCurArr[coni] + '</span></li>';
        }
        // console.log(conStr);
        // 下个月数据字符串
        for (var nexti = 0; nexti < dates.lunarNextArr.length; nexti++) {
            nextStr += '<li class="notCur nextM"><div class="layer"></div><span class="solar">' + dates.lunarNextArr[nexti] + '</span><span class="lunar">' + dates.solarNextArr[nexti] + '</span></li>';
        }
        // console.log(nextStr);

        solarStr = preStr + conStr + nextStr;
        return solarStr;
    };

    var calendar = new Calendar();
    w.calendar = calendar;
})(window)
