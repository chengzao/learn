// ==UserScript==
// @name         juejin
// @namespace    http://tampermonkey.net/
// @version      1.0.3
// @description  try to take over the world!
// @author       You
// @match        *://*.juejin.cn/*
// @grant        none
// @downloadURL  https://cdn.jsdelivr.net/gh/chengzao/learn@master/javascript/juejin.js
// ==/UserScript==
; ((win,doc) => {
    const isJuejinHost = /^juejin\.+/.test(win.location.host)
    if (!isJuejinHost) {
        return false
    }

    const identify = encodeURIComponent('__plugins:juejin@v1__');

    if (win[identify]) {
        return;
    };

    win[identify] = true;
    
    const fetchUrl = `https://api.juejin.cn/interact_api/v1/digg/query_page`
    // User ID
    const user_id = '3949101496410183';

    const display_id = 'insert_j_fav_display'
    const wrap_id = 'insert_j_fav_wrap'
    const ul_id = 'insert_j_fav_view_ul'
    const close_id = 'insert_j_fav_close_btn'
    const search_id = 'insert_j_fav_search_btn'
    const title_id = 'insert_j_fav_title'
    const list_counts_id = 'insert_j_fav_counts'
    const refresh_button_id = 'insert_j_refresh_btn'

    function setStyle(obj, json) {
        for (let i in json) {
            obj.style[i] = json[i]
        }
    }

    function repeatItem(arr, str) {
        arr.forEach((item) => {
            if (item) {
                const url = item.article_info.link_url ?item.article_info.link_url : location.origin+'/post/'+item.article_info.article_id;
                const date = new Date((+item.article_info.ctime)*1000);
                const date_txt = date.getFullYear() +'/'+(date.getMonth()+1)+'/'+date.getDate();
                const title = item.article_info.ctime ? date_txt +': '+ item.article_info.title : item.article_info.title;

                str += '<li style="padding: 10px; "><a target="_blank" href="' + url +'" >'+ title +'</a></li>'
            }
        })
        let ul = doc.getElementById(ul_id)
        ul && (ul.innerHTML = str)
    }

    function addEvent(el, type, cb) {
        let dom = doc.getElementById(el)
        dom && dom.addEventListener(type, cb, false)
    }

    const btn = doc.createElement('button')
    btn.id = display_id
    btn.innerText = '掘金'
    setStyle(btn, {
        width: '60px',
        height: '32px',
        outline: 'none',
        border: 'none',
        position: 'fixed',
        top: '140px',
        left: '40px',
        zIndex: 8889,
        boxShadow: '0 0 3px #000',
    })

    const getBtn = doc.getElementById(display_id)
    !getBtn && doc.body.appendChild(btn)

    let wrapEl = doc.createElement('div')
    wrapEl.id = wrap_id
    wrapEl.className = 'hide'
    setStyle(wrapEl, {
        width: '500px',
        position: 'fixed',
        top: '80px',
        left: '500px',
        background: '#fff',
        height: '500px',
        overflow: 'hidden',
        borderRadius: '5px',
        zIndex: 8888,
        boxShadow: '0 1px 3px 1px #8a93a0',
        display: 'none',
    })

    wrapEl.innerHTML = `
        <div style="height: 40px;line-height: 40px;position: relative;overflow: hidden;box-shadow: 1px 2px 4px 0px #333;">
            <div style="margin: 0 40px 0 15px;">
                <span id="${title_id}" style="cursor:move">点赞的文章列表：</span><span id="${list_counts_id}"></span>
                <a target="_blank" style="color:#027fff;" href="https://juejin.im/user/592e24c60ce463006b4b8c23/likes">@chengzao</a>
                <input id="${search_id}" value="" autocomplete="off" style="height: 23px;border: 1px solid #ccc;outline: none;margin-left: 10px;padding-left:10px;" />
                <span id="${refresh_button_id}" style="color:#027fff;cursor:pointer;margin-left:10px;">刷新</span>
            </div>
            <span id="${close_id}" style="position: absolute;top: 10px;right: 10px;width: 20px;height: 20px;cursor: pointer;text-align: center;line-height: 20px;">X</span>
        </div>
        <ul id="${ul_id}" style="height: 460px; overflow:auto;"> <div style="text-align: center;marin-top:28px;">loading...</div> </ul>
    `

    const wrap = doc.getElementById(wrap_id)
    !wrap && doc.body.appendChild(wrapEl)

    addEvent(close_id, 'click', function() {
        let el = doc.getElementById(wrap_id)
        // el && el.remove()
        if (el) {
            el.style.display = 'none'
            el.className = 'hide'
        }
    })

    let str = '',
        arr = [];

    let clicked = false, refreshed = false;


    const fetchData = async (i) => {

        fetch(fetchUrl, {
            headers: {
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-site',
                'content-type': 'application/json'
            },
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify({
                cursor: i * 10 + '',
                item_type: 2,
                sort_type: 2,
                user_id: user_id
            }),
            credentials: 'include',
        })
            .then((res) => res.json())
            .then(async (res) => {
                arr = arr.concat(res.data)
                if (res.count > +res.cursor) {
                    i++
                    fetchData(i)
                } else {
                    repeatItem(arr, str)
                    refreshed = false
                    addEvent(search_id, 'keyup', function(ev) {
                        const value = ev.target.value
                        const searchArr = arr.map((item) => {
                            if (
                                item &&
                                item.article_info.title
                                    .toLowerCase()
                                    .indexOf(value.toLowerCase()) > -1
                            ) {
                                return item
                            }
                        })
                        repeatItem(searchArr, str)
                    })
                    doc.getElementById(
                        list_counts_id,
                    ).innerText = `(${res.count})`
                }
            })
            .catch((err) => console.log('catch: ', err))
    }

    let key = false
    let firstTime = 0
    let lastTime = 0

    function drag(el, target) {
        let eleX
        let eleY
        let pageX
        let pageY
        let obj = doc.getElementById(el)
        let isMove = false
        let tar = target ? doc.getElementById(target) : obj

        obj.onmousedown = function(ev) {
            const event = ev || win.event
            pageX = event.pageX
            pageY = event.pageY
            eleX = tar.offsetLeft
            eleY = tar.offsetTop
            isMove = true

            firstTime = new Date().getTime()
            key = false

            doc.onmousemove = function(ev) {
                if (isMove) {
                    const event = ev || win.event
                    let left = eleX + (event.pageX - pageX)
                    let top = eleY + (event.pageY - pageY)
                    tar.style.left = left + 'px'
                    tar.style.top = top + 'px'
                }
            }

            doc.onmouseup = function() {
                doc.onmousemove = null
                doc.onmouseup = null
                isMove = false

                lastTime = new Date().getTime()
                if (lastTime - firstTime < 200) {
                    key = true
                }
            }
            return false
        }
    }
    drag(display_id)

    drag(title_id, wrap_id)

    addEvent(display_id, 'click', function() {
        let el = doc.getElementById(wrap_id)
        if (el && key) {
            const isHide = /hide/.test(el.className)
            if (isHide) {
                el.style.display = 'block'
                el.className = ''
                !clicked && fetchData(0)
                clicked = true
            } else {
                el.style.display = 'none'
                el.className = 'hide'
            }
        }
    })

    addEvent(refresh_button_id, 'click', function(){

      !refreshed && fetchData(0)
        refreshed = true
        str = '';
        arr = [];
        doc.getElementById(search_id).value = '';
    })
})(window, document)
