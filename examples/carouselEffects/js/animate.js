
function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k == "opacity") {
                var target = json[k] * 100;
                var leader = Math.round(getStyle(obj, k) * 100) || 100;//因为透明度本身不带有单位 所以不用parseInt了，但是在做动画的时候 会除不尽 所以要取整
            } else {
                var target = json[k];
                var leader = parseInt(getStyle(obj, k)) || 0;//10px 10
            }

            var step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            if (k == "opacity") {
                obj.style[k] = leader / 100;
                //IE8 filter:alpha(opacity=x);
                obj.style.filter = "alpha(opacity=" + leader + ")"
            } else if (k == "zIndex") {
                obj.style.zIndex = target;
            }
            else {
                obj.style[k] = leader + "px";
            }


            if (leader != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 30)

}

function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj, null)[attr];
    }
}

