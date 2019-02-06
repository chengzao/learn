window.onload = function () {

    //1.获取元素
    var wrap = document.getElementById("wrap");
    var slide = document.getElementById("slide");
    var arrow = document.getElementById("arrow");
    var lis = slide.children[0].children;
    var json = [
        {   //  1
            width: 400,
            top: 20,
            left: 50,
            opacity: 0.2,
            z: 2
        },
        {  // 2
            width: 600,
            top: 70,
            left: 0,
            opacity: 0.8,
            z: 3
        },
        {   // 3
            width: 800,
            top: 100,
            left: 200,
            opacity: 1,
            z: 4
        },
        {  // 4
            width: 600,
            top: 70,
            left: 600,
            opacity: 0.8,
            z: 3
        },
        {   //5
            width: 400,
            top: 20,
            left: 750,
            opacity: 0.2,
            z: 2
        }
    ];

    //2.鼠标经过 显示小三角（动画） 鼠标离开隐藏小三角
    wrap.onmouseover = function () {
        animate(arrow, {opacity: 1});
    }
    wrap.onmouseout = function () {
        animate(arrow, {opacity: 0});
    }

    //3.给每一个li赋值
    function assign() {
        for (var i = 0; i < lis.length; i++) {
            animate(lis[i], {
                width: json[i].width,
                top: json[i].top,
                left: json[i].left,
                opacity: json[i].opacity,
                zIndex: json[i].z
            }, function () {
                flag = true;//动画执行完成之后讲阀门打开
            });
        }
    }

    //4.按钮点击
    //左箭头
    arrow.children[0].onclick = function () {
        //alert("左箭头");
        if (flag) {//如果阀门是打开的 才执行
            json.unshift(json.pop());//点左键 配置单 删掉最后一个 加在开始
            assign();
            flag = false;//点击后关闭阀门
        }
    }
    //右箭头
    arrow.children[1].onclick = function () {
        //alert("右箭头");
        if (flag) {//如果阀门是打开的 才执行
            json.push(json.shift());//点右键 配置单 删掉第一个 加在最后
            assign();
            flag = false;//点击后关闭阀门
        }
    }
    //5.页面加载完先执行一次
    assign();
    //6.设置节流阀
    var flag = true;
}

