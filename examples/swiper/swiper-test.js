// 首页幻灯片
$(function(){
    $(".homebanner1 .nums").find("li:first").addClass("curr");
    function loadImage(url, callback)
    {
        var img = new Image(); //创建一个Image对象，实现图片的预下载
        img.src = url;

        if (img.complete)
        { // 如果图片已经存在于浏览器缓存，直接调用回调函数
            callback.call(img);
            return; // 直接返回，不用再处理onload事件
        }
        img.onload = function ()
        { //图片下载完毕时异步调用callback函数。
            callback.call(img);//将回调函数的this替换为Image对象
        };
    };
    // 图片数量
    var img_count = $(".homebanner1 .imgs").find("img").length;
    // 
    var transitionAutoChange = function(activePos) {
        if (typeof activePos === 'undefined') activePos = 0;
        var pos = activePos + 1;
        if (pos >= img_count) {
            pos = 0;
        }
        $(".homebanner1 .nums li").eq(pos).trigger('click');
    };
    //
    function addChangeEvent()
    {
        var transitionTimeOut = false;
        var transitionInterval = false;
        var transitioning = false;
        $(".homebanner1 .imgs li").eq(0).addClass('active');
        transitionInterval = setInterval(transitionAutoChange, 7000);

        $(".homebanner1 .nums li").bind("click", function(){
            clearInterval(transitionInterval);
            var pos = $(".homebanner1 .nums li").index(this);
            var activePos = $(".homebanner1 .nums li").index($(".homebanner1 .nums .curr"));
            if (pos == activePos) return ;
            if (transitioning) return;
            transitioning = true;

            var colorArr = ['#010001', '#006dce', '#2932a1', '#38aa30'];
            var color = colorArr[pos];
            $('.banner').stop().animate({backgroundColor: color});

            var active = $(".imgs li").eq(activePos);
            var next = $(".imgs li").eq(pos);
            if (!next[0]) {
                transitioning = false;
                return;
            }
            if (supportsTransitions()) {
                active.fadeTo(600,0.1,function(){
                    active.css('opacity', 1);
                });
            }
            if (pos > activePos) {
                var type = "next";
            } else {
                var type = "prev";
            }

            var direction = type == 'next' ? 'left' : 'right';
            next.addClass(type);
            next[0].offsetWidth;// force reflow
            active.addClass(direction);
            next.addClass(direction);
              $(".homebanner1 .nums li").eq(activePos).removeClass('curr');
            $(".homebanner1 .nums li").eq(pos).addClass('curr');
            clearTimeout(transitionTimeOut);
            if (supportsTransitions()) {
                transitionTimeOut = setTimeout(function(){
                      next.removeClass([type, direction].join(' ')).addClass('active');
                      active.removeClass(['active', direction].join(' '));
                      transitionInterval = setInterval(function(){
                          transitionAutoChange(pos);
                      }, 5000);
                      transitioning = false;
                }, 1000);
            } else {
                transitionTimeOut = setTimeout(function(){
                    active.removeClass(['active', direction].join(' ')).css({opacity: 0});
                    next.css({opacity:0}).animate({opacity:1},2000, function(){
                        next.removeClass([type, direction].join(' ')).addClass('active');
                        transitionInterval = setInterval(function(){
                              transitionAutoChange(pos);
                          }, 5000);
                        transitioning = false;
                    });
                }, 100);
            }
        });
    };

    $(".homebanner1 .imgs").find("img").each(function(i){
        var _this = $(this);
        var url = _this.attr("data-src");
        loadImage(url, function(){
            _this.attr("src", url);
            if ((i + 1) == img_count) {
                addChangeEvent();
            }
        });
        if (!supportsTransitions() && i > 0) {
            _this.parent().parent().css({'opacity': 0});
        }
    });

});