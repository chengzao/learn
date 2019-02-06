

function $(id) {
    return document.getElementById(id);
}

function show(id) {
    $(id).style.display = "block"
}
function hide(id) {
    $(id).style.display = "none"
}

function scroll() {
    if (window.pageYOffset != null) {
        //正常浏览器 谷歌 火狐 IE9+
        /*var obj = {
            top: window.pageYOffset,
            left: window.pageXOffset
        }
        return obj;*/

        return {
            top: window.pageYOffset,
            left: window.pageXOffset
        };

    } else if (document.compatMode == "CSS1Compat") {
        //有DTD的网页
        return {
            top: document.documentElement.scrollTop,
            left: document.documentElement.scrollLeft
        }
    } else {
        //没有DTD的
        return {
            top: document.body.scrollTop,
            left: document.body.scrollLeft
        }
    }
}