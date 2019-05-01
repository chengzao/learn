// demo1

// (function () {
//     history.replaceState(null, null, ''); //最开始的状态，采用replace直接替换
//     $('#router').html('<p>显示内容区域</p>')
//     $('a').on('click', function () {
//         console.log(this.text)
//         var text = this.text;
//         //
//         history.pushState(null, null, '#/' + text);
//         $('#router').html('<p>' + text + '</p>')
//     })
// })()

// demo2

// (function () {
//     var count = [0, 0, 0];
//     $('#router').html( '<p>首页' + count[0] + '</p><p>新闻' + count[1] + '</p><p>关于' + count[2]+'</p>')
//     for (var i = 0; i < $('a').length; i++) {
//         $('a')[i].index = i
//         $('a').eq(i).on('click', function () {
//             // console.log(this.index);
//             var index = this.index;
//             count[index]++;
//             $('#router').html( '<p>首页' + count[0] + '</p><p>新闻' + count[1] + '</p><p>关于' + count[2]+'</p>')
//             console.log(count)
//             history.pushState(count, null, '#/count' + count[index]); //之后的状态，需要进行保存
//         })
//     }

//     //监听history其他api导致地址栏url改变事件
//     window.addEventListener('popstate', function (e) {
//         console.log('state : ',e.state);
//         var state = e.state;
//         $('#router').html( '<p>首页' + state[0] + '</p><p>新闻' + state[1] + '</p><p>关于' + state[2]+'</p>')

//     })
// })()

// demo3

;(function() {
  var url = '内容展示'

  history.replaceState(url, null, '') //最开始的状态，采用replace直接替换
  $('#router').html('<p>' + url + '</p>')

  console.log('history length => ', history.length)

  $('a').on('click', function() {
    url = this.text
    console.log('url => ', url)

    $('#router').html('<p>' + url + '</p>')

    history.pushState(url, null, '#/' + url)

    console.log('history length => ', history.length)
  })
  window.addEventListener('popstate', function(e) {
    console.log('state => ', e.state)
    url = e.state
    $('#router').html('<p>' + url + '</p>')
  })
})()
