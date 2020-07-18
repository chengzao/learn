;(() => {
    const isJuejinHost = /^juejin\.+/.test(window.location.host)
    if (!isJuejinHost) {
        return false
    }
    const display_id = 'insert_j_fav_display'
    const wrap_id = 'insert_j_fav_wrap'
    const ul_id = 'insert_j_fav_view_ul'
    const close_id = 'insert_j_fav_close_btn'
    const search_id = 'insert_j_fav_search_btn'

    function setStyle(obj, json) {
        for (let i in json) {
            obj.style[i] = json[i]
        }
    }

    function repeatItem(arr, str) {
        arr.forEach((item) => {
            if (item) {
                str +=
                    '<li style="padding: 10px; "><a target="_blank" href="' +
                    item.originalUrl +
                    '" >' +
                    item.title +
                    '</a></li>'
            }
        })
        let ul = document.getElementById(ul_id)
        ul && (ul.innerHTML = str)
    }

    function addEvent(el, type, cb) {
        let dom = document.getElementById(el)
        dom && dom.addEventListener(type, cb, false)
    }

    const btn = document.createElement('button')
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

    const getBtn = document.getElementById(display_id)
    !getBtn && document.body.appendChild(btn)

    let wrapEl = document.createElement('div')
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
            <div style="margin: 0 40px 0 15px;">点赞的文章列表： <a target="_blank" style="color:#027fff;" href="https://juejin.im/user/592e24c60ce463006b4b8c23/likes">@chengzao</a> <input id="${search_id}" value="" autocomplete="off" style="height: 23px;border: 1px solid #ccc;outline: none;margin-left: 10px;padding-left:10px;" /></div>
            <span id="${close_id}" style="position: absolute;top: 10px;right: 10px;width: 20px;height: 20px;cursor: pointer;text-align: center;line-height: 20px;">X</span>
        </div>
        <ul id="${ul_id}" style="height: 460px; overflow:auto;"> <div style="text-align: center;marin-top:28px;">loading...</div> </ul>
    `

    const wrap = document.getElementById(wrap_id)
    !wrap && document.body.appendChild(wrapEl)

    addEvent(close_id, 'click', function () {
        let el = document.getElementById(wrap_id)
        // el && el.remove()
        if (el) {
            el.style.display = 'none'
            el.className = 'hide'
        }
    })

    let str = '',
        arr = [],
        total = 0
    const fetchUrl =
        'https://user-like-wrapper-ms.juejin.im/v1/user/592e24c60ce463006b4b8c23/like/entry'
    const fetchData = async (i) => {
        fetch(fetchUrl + '?page=' + i + '&pageSize=20', {
            headers: {
                'Sec-Fetch-Mode': 'cors',
                'X-Juejin-Src': 'web',
            },
            credentials: 'include',
        })
            .then((res) => res.json())
            .then((res) => {
                arr = arr.concat(res.d.entryList)
                total += res.d.entryList.length
                if (res.d.total > total) {
                    i++
                    fetchData(i)
                } else {
                    repeatItem(arr, str)
                    addEvent(search_id, 'blur', function (ev) {
                        const value = ev.target.value
                        const searchArr = arr.map((item) => {
                            if (
                                item &&
                                item.title
                                    .toLowerCase()
                                    .indexOf(value.toLowerCase()) > -1
                            ) {
                                return item
                            }
                        })
                        repeatItem(searchArr, str)
                    })
                }
            })
            .catch((err) => console.log('catch: ', err))
    }

    let key = false
    let firstTime = 0
    let lastTime = 0

    function drag(el) {
        let eleX
        let eleY
        let pageX
        let pageY
        let obj = document.getElementById(el)
        let isMove = false

        obj.onmousedown = function (ev) {
            const event = ev || window.event
            pageX = event.pageX
            pageY = event.pageY
            eleX = obj.offsetLeft
            eleY = obj.offsetTop
            isMove = true

            firstTime = new Date().getTime()
            key = false

            document.onmousemove = function (ev) {
                if (isMove) {
                    const event = ev || window.event
                    let left = eleX + (event.pageX - pageX)
                    let top = eleY + (event.pageY - pageY)
                    obj.style.left = left + 'px'
                    obj.style.top = top + 'px'
                }
            }

            document.onmouseup = function () {
                document.onmousemove = null
                document.onmouseup = null
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

    drag(wrap_id)

    addEvent(display_id, 'click', function () {
        let el = document.getElementById(wrap_id)
        if (el && key) {
            const isHide = /hide/.test(el.className)
            if (isHide) {
                el.style.display = 'block'
                el.className = ''
                total = 0
                // fetchData(0)
            } else {
                el.style.display = 'none'
                el.className = 'hide'
            }
        }
    })
})()
