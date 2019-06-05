//drag.js
class Drag {
    //ele为传入的DOM对象
    constructor(ele) {
        //初始化参数
        this.ele = ele;
        ['strX', 'strY', 'strL', 'strT', 'curL', 'curT'].forEach(item => {
            this[item] = null;
        });
        //为按下鼠标绑定事件,事件函数一定要绑定this,在封装过程中this统一指定为实例对象，下不赘述
        this.DOWN = this.down.bind(this);
        this.ele.addEventListener('mousedown', this.DOWN);
    }
    down(ev) {
        let ele = this.ele;
        this.strX = ev.clientX;//鼠标点击处到浏览器窗口最左边的距离
        this.strY = ev.clientY;//鼠标点击处到浏览器窗口最上边的距离
        this.strL = ele.offsetLeft;//元素到浏览器窗口最左边的距离
        this.strT = ele.offsetTop;//元素到浏览器窗口最上边的距离

        this.MOVE = this.move.bind(this);
        this.UP = this.up.bind(this);
        document.addEventListener('mousemove', this.MOVE);
        document.addEventListener('mouseup', this.UP);

        //flag
        //清理上一次点击形成的一些定时器和变量
        clearInterval(this.flyTimer);
        this.speedFly = undefined;
        clearInterval(this.dropTimer);
    }
    move(ev) {
        let ele = this.ele;
        this.curL = ev.clientX - this.strX + this.strL;
        this.curT = ev.clientY - this.strY + this.strT;
        ele.style.left = this.curL + 'px';
        ele.style.top = this.curT + 'px';

        //flag
        //功能: 记录松手瞬间小球的速度
        if (!this.lastFly) {
            this.lastFly = ele.offsetLeft;
            this.speedFly = 0;
            return;
        }
        this.speedFly = ele.offsetLeft - this.lastFly;
        this.lastFly = ele.offsetLeft;
    }
    up(ev) {
        //给前两个事件解绑
        document.removeEventListener('mousemove', this.MOVE);
        document.removeEventListener('mouseup', this.UP);

        //flag
        //水平方向
        this.horizen.call(this);
        this.vertical.call(this);
    }
    //水平方向的运动
    horizen() {
        let minL = 0,
            maxL = document.documentElement.clientWidth - this.ele.offsetWidth;
        let speed = this.speedFly;
        speed = Math.abs(speed);
        this.flyTimer = setInterval(() => {
            speed *= .98;
            Math.abs(speed) <= 0.1 ? clearInterval(this.flyTimer):null;
            //小球当前到视口最左端的距离
            let curT = this.ele.offsetLeft;
            curT += speed;
            //小球到达视口最右端，反弹
            if (curT >= maxL) {
                this.ele.style.left = maxL + 'px';
                speed *= -1;
                return;
            }
            //小球到达视口最右端，反弹
            if (curT <= minL) {
                this.ele.style.left = minL + 'px';
                speed *= -1;
                return;
            }
            this.ele.style.left = curT + 'px';
        }, 20);
    }
    //竖直方向的运动
    vertical() {
        let speed = 9.8,
            minT = 0,
            maxT = document.documentElement.clientHeight - this.ele.offsetHeight,
            flag = 0;
        this.dropTimer = setInterval(() => {
            speed += 10;
            speed *= .98;
            Math.abs(speed) <= 0.1 ? clearInterval(this.dropTimer):null
            //小球当前到视口最左端的距离
            let curT = this.ele.offsetTop;
            curT += speed;
            //小球飞到视口顶部，反弹
            if (curT >= maxT) {
                this.ele.style.top = maxT + 'px';
                speed *= -1;
                return;
            }
            //小球落在视口底部，反弹
            if (curT <= minT) {
                this.ele.style.top = minT + 'px';
                speed *= -1;
                return;
            }
            this.ele.style.top = curT + 'px';
        }, 20);
    }
}
window.Drag = Drag;
