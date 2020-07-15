;(() => {
    function setStyle(obj, json) {
        for (var i in json) {
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
        var ul = document.querySelector('#juejin_fav_wrap_content ul')
        ul.innerHTML = str
    }

    var div = document.createElement('div')
    div.id = 'juejin_fav_wrap_content'
    setStyle(div, {
        width: '500px',
        position: 'fixed',
        top: '80px',
        left: '50%',
        background: '#fff',
        marginLeft: '-250px',
        height: '500px',
        overflow: 'hidden',
        borderRadius: '5px',
        zIndex: 8888,
        boxShadow: '0 1px 3px 1px #8a93a0',
    })

    div.innerHTML = `
        <div style="height: 40px;line-height: 40px;position: relative;padding-left: 15px;overflow: hidden;box-shadow: 1px 2px 4px 0px #333;">
            <div>点赞的文章列表： <a target="_blank" style="color:#027fff;" href="https://juejin.im/user/592e24c60ce463006b4b8c23/likes">@chengzao</a> <input id="search" value="" autocomplete="off" style="height: 23px;border: 1px solid #ccc;outline: none;margin-left: 10px;padding-left:10px;" /></div>
            <span id="close" style="position: absolute;top: 10px;right: 10px;width: 20px;height: 20px;cursor: pointer;text-align: center;line-height: 20px;">X</span>
        </div>
        <ul style="height: 460px; overflow:auto;"> <div style="text-align: center;marin-top:28px;">loading...</div> </ul>
    `
    var wrap = document.querySelector('#juejin_fav_wrap_content')
    !wrap && document.body.appendChild(div)

    var str = ''
    var arr = [],
        total = 0
    var fetchData = async (i) => {
        fetch(
            'https://user-like-wrapper-ms.juejin.im/v1/user/592e24c60ce463006b4b8c23/like/entry?page=' +
                i +
                '&pageSize=20',
            {
                headers: {
                    'Sec-Fetch-Mode': 'cors',
                    'X-Juejin-Src': 'web',
                },
                credentials: 'include',
            },
        )
            .then((res) => res.json())
            .then((res) => {
                arr = arr.concat(res.d.entryList)
                total += res.d.entryList.length

                if (res.d.total > total) {
                    i++
                    fetchData(i)
                } else {
                    repeatItem(arr, str)

                    document.getElementById('close').addEventListener(
                        'click',
                        function () {
                            var el = document.getElementById(
                                'juejin_fav_wrap_content',
                            )
                            el.remove()
                        },
                        false,
                    )

                    document.getElementById('search').addEventListener(
                        'blur',
                        function (ev) {
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
                        },
                        false,
                    )
                }
            })
    }
    fetchData(0)
})()
