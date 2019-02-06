function CZH(){};
CZH.prototype = {
  extend:function(target,source){
  	for(var k in source ){
  		target[k] = source[k];
  	}
  	return target;
  }
}
var czh = new CZH();

/*通用模块*/
czh.extend(czh,{
    //去除左边空格
    ltrim:function(){
        return str.replace(/(^\s*)/g,'');
    },
    //去除右边空格
    rtrim:function(){
        return str.replace(/(\s*$)/g,'');
    },
    //去除空格
    trim:function(){
        return str.replace(/(^\s*)|(\s*$)/g, '');
    },
    //数据类型检测
    isNumber:function (val){
        return typeof val === 'number' && isFinite(val)
    },
    isBoolean:function (val) {
        return typeof val ==="boolean";
    },
    isString:function (val) {
        return typeof val === "string";
    },
    isUndefined:function (val) {
        return typeof val === "undefined";
    },
    isObj:function (str){
        if(str === null || typeof str === 'undefined'){
            return false;
        }
        return typeof str === 'object';
    },
    isNull:function (val){
        return  val === null;
    },
    isArray:function (arr) {
        if(arr === null || typeof arr === 'undefined'){
            return false;
        }
        return arr.constructor === Array;
    },
})


/*选择模块*/
czh.extend(czh,{
    /*id选择器*/
    $id:function(ele){
        return document.getElementById(ele);
    },
    /*标签选择器*/
    $tag:function(ele,id){
        var doms = getContext(id);
        var eles = getTags(doms,ele);
        return eles;
        // 1.搜索范围
        function getContext(id){
            // 判断是否传入id
            if(id){
                // 判断是字符串还是dom元素
                var dom;
                if(czh.isString(id)){
                    dom = this.$id(id);
                }else{
                    dom = id;
                }
                
            }else{
                dom = document;
            }
            return dom;
        }
        // 2.得到标签
        function getTags(context,tag){
            return context.getElementsByTagName(tag);
        }
    },
    /*class选择器*/
    $class:function(ele,id){

        var doms = getContext(id);

        var eles =  getClass(doms,ele);

        return eles;

        function getContext(ele){
            var dom;
            if(id){
                if(czh.isString(id)){
                    dom =this.$id(id); 
                }else{
                    dom = id;
                }
            }else{
                dom = document;
            }
            return dom;
        }

        function getClass(context,ele){
            var arr =[];
            var doms= context.getElementsByTagName('*');
            var len = doms.length;
            for(var i = 0;i<len;i++){
                if(doms[i].className === ele){
                    arr.push(doms[i]);
                }
            }
            return arr;
        }
    },
    $all:function(ele,context){
        context = context || document;
        return context.querySelectorAll(ele); 
    },
    /*多组选择器*/
    $group:function(context) {
        var doms = [];
        var list = [];
        var arr = context.split(',');
        for(var i=0;i<arr.length;i++){
            var item = arr[i];
            var first =item.charAt(0);
            var index= item.indexOf(first);
            var name = item.slice(index+1);
            list = [];
            if(first == '#'){
                doms.push(czh.$id(name));
            }else if(first == '.'){
                list = czh.$class(name);
                for(var j=0;j<list.length;j++){
                    doms.push(list[j]);
                }
            }else{
                list = czh.$tag(item);
                for(var k =0;k<list.length;k++){
                    doms.push(list[k])
                }
            }
        }
        return doms;
    },
    /*层次选择器*/
    $levelStor:function(str){
        var arr = str.split(' ');
        var list =[];     // temp
        var context = []; // pipe
        var result =[];   // 
        for (var i=0 ;i< arr.length;i++){
            var item =arr[i];
            var first = item.charAt(0);
            var index = item.indexOf(first);
            var name = item.slice(index+1);
            result =[];
            if(first == '#'){
                result.push(czh.$id(name));
                context = result;
                //console.log(context);
            }else if(first == '.'){
                if(context.length){
                    for(var j=0;j<context.length;j++){
                        list =czh.$class(name,context[j]);
                        pushArray(list);
                    }
                }else{
                       list =czh.$class(name);
                       pushArray(list);
                }
                context = result; 
                //console.log(context);
            }else{
                if(context.length){
                    for(var j=0;j<context.length;j++){
                        list = czh.$tag(item,context[j]);
                        pushArray(list);
                    }
                }else{
                        list = czh.$tag(item);
                        pushArray(list);               
                }
                context =result;
                //console.log(context);
            }
        }
        return result;

        //封装重复的代码
        function pushArray(doms){
            for(var j= 0, domlen = doms.length; j < domlen; j++){
                result.push(doms[j])
            }
        }
    },
    /*获取属性*/
    $getStyle:function(dom,key){
        var str = '';
        if(dom.currentStyle){
            str =  dom.currentStyle[key];
        }else{
            str = window.getComputedStyle(dom,null)[key];
        }
        return str;
    },
    /*设置属性*/
    $setStyle:function(dom,key,value){
        dom.style[key] = value;
    },
    /* 设置属性 */
    $css:function(context,key,val){
        var doms = czh.isString(context)?czh.$all(context):context;
        if(val){
            for(var i=0;i<doms.length;i++){
               czh.$setStyle(doms[i],key,val);
            }
            
        }else{
            return czh.$getStyle(doms[0],key);
        }       
    }

})

/*功能模块*/
czh.extend(czh,{
    hide:function(context){
        var doms = czh.$all(context);
        for(var i = 0;i<doms.length;i++){
            doms[i].style.display = 'none';
        }
    },
    show:function(context){
        var doms = czh.$all(context);
        for(var i = 0;i<doms.length;i++){
            doms[i].style.display = 'block';
        }
    },
    attr:function(context,key,value){
        var doms = czh.$all(context);
        if(value){
            /*设置模式*/
            for(var i = 0;i<doms.length;i++){
               setOneDOM(doms[i],key,value)
            }
        }else{
            /*获取模式*/
          return  getOneDOM(doms[0],key);
        }

        function setOneDOM(dom,key,value){
            dom.setAttribute(key,value)
        }
        function getOneDOM(dom,key){
            return dom.getAttribute(key);
        }
    },
    /*移除单个属性*/
    removeAttrOld:function(context,key){
        var doms = czh.$all(context);
        for(var i=0;i<doms.length;i++){
            removeOneDOM(doms[i],key);
        }
        function removeOneDOM(dom,key){
            dom.removeAttribute(key);
        }
    },
    /*移除多个属性*/
    removeAttr:function(){
        /*将伪数组转成真数组*/
       var args =  Array.prototype.slice.call(arguments);
        var str = args[0];
        /*属性集合*/
        var names = args.slice(1);

        var doms  = czh.$all(str);
        for(var i=0;i<doms.length;i++){
            /*去除某个元素的属性集合*/
            removeOneDOMAttributes(doms[i]);
        }
        /*去除单个元素的所有属性*/
        function removeOneDOMAttributes(dom){
            for(var j =0;j<names.length;j++){
                dom.removeAttribute(names[j]);
            }
        }

    },
    addClass:function(context,className){
        var doms = czh.$all(context);
        for(var i=0;i<doms.length;i++){
            //给每个元素添加
            addOne(doms[i]);
        }
        function addOne(dom){
            dom.className =  dom.className+ " "+className;
        }
    },
    removeClass:function(context,className){
        var doms = czh.$all(context);
        for(var i=0;i<doms.length;i++){
            //移除一个元素的className
            removeOne(doms[i]);
        }

        function removeOne(dom){
           dom.className =  dom.className.replace(className,'');
        }
    },
    html:function (context,value){
        var doms = czh.$all(context);
        if(value){
            //设置模式  -没有返回值
            for(var i = 0;i<doms.length;i++){
                doms[i].innerHTML = value;
            }
        }else{
            /*获取模式  - 必须有返回值 */
            return doms[0].innerHTML;
        }
    }                                
})

// 事件
czh.extend(czh,{
    //绑定事件
    on:function (id,type,fn) {
        var dom =document.getElementById(id)
        /*骨架*/
        if(document.addEventListener){
            //标准组织的写法
            dom.addEventListener(type,fn,false)
        }else{
            /*如果是ie浏览器*/
            if (document.attachEvent){
                dom.attachEvent('on'+type,fn)
            }
        }
    },
    /*解除绑定*/
    un:function (id,type,fn){
        var dom = document.getElementById(id)
        if(dom.removeEventListener){
            /*如果是标准组织的语法规范*/
            dom.removeEventListener(type,fn,false)
        }else{
            if(dom.detachEvent){
                /*如果是ie*/
                dom.detachEvent('on'+type,fn)
            }
        }
    },
    // 获取事件源
    getEvent:function(ev){
        return ev?ev:window.event;
    },
    // 获取当前事件目标
    getTarget:function(ev){
        // var e = ev ||window.event;
        var e = this.getEvent(ev);
        return e.target || e.srcElement;
    },
    /*阻止浏览器默认行为*/
    preventDefault:function(e){
        var event=this.getEvent(e);
        if(event.preventDefault){
             event.preventDefault();
        }else{
            event.returnValue=false;
        }
    },
    /*阻止冒泡*/
    stopPropagation:function(e){
        var event=this.getEvent(e);
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble=true;
        }
    }    	
});


/*运动框架*/
function Animate(){
    /*循环句柄*/
    this.timer;
    //保存运动动画需要的一切数据
    /*  this.obj = {};*/
    /*保存多个物体需要的数据*/
    this.queen =[];

}
Animate.prototype = {

    /*动画的本质*/
    /*循环 循环体里面不断的改变left 的值*/
    run:function(){
        var that = this;
        this.timer = setInterval(function(){
            that.loop();
        },16)
    },
    loop:function(){
        var that = this;
        for(var i=0;i<this.queen.length;i++){
            var obj = this.queen[i];
            that.move(obj);
        }
    },
    /*move负责改变left的值*/
    move:function(obj){
        var that = this;
        var now1 =  +new Date()
        var tween = that.getTween('easeOutBounce',obj.now,now1,obj.duration);
        /*动画什么时候停止： 当动画时间进程到了100%的时候 表示停止*/
        if(tween >1){
            that.stop()
        }else{
            that.manyStyles(obj.id,obj.styles,tween);
        }
    },
    /*获取动画时间进程*/
    getTween:function (easy,now0,now1,duration){
        var eases = {
            //线性匀速
            /*pass 已经过去的时间
             b:0
             c：1
             d:你希望动画运行多长时间*/
            linear:function (t, b, c, d){
                return (c - b) * (t/ d);
            },
            //弹性运动
            easeOutBounce:function (t, b, c, d) {
                if ((t/=d) < (1/2.75)) {
                    return c*(7.5625*t*t) + b;
                } else if (t < (2/2.75)) {
                    return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
                } else if (t < (2.5/2.75)) {
                    return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
                } else {
                    return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
                }
            },
            //其他
            swing: function (t, b, c, d) {
                return this.easeOutQuad(t, b, c, d);
            },
            easeInQuad: function (t, b, c, d) {
                return c*(t/=d)*t + b;
            },
            easeOutQuad: function (t, b, c, d) {
                return -c *(t/=d)*(t-2) + b;
            },
            easeInOutQuad: function (t, b, c, d) {
                if ((t/=d/2) < 1) return c/2*t*t + b;
                return -c/2 * ((--t)*(t-2) - 1) + b;
            },
            easeInCubic: function (t, b, c, d) {
                return c*(t/=d)*t*t + b;
            },
            easeOutCubic: function (t, b, c, d) {
                return c*((t=t/d-1)*t*t + 1) + b;
            },
            easeInOutCubic: function (t, b, c, d) {
                if ((t/=d/2) < 1) return c/2*t*t*t + b;
                return c/2*((t-=2)*t*t + 2) + b;
            },
            easeInQuart: function (t, b, c, d) {
                return c*(t/=d)*t*t*t + b;
            },
            easeOutQuart: function (t, b, c, d) {
                return -c * ((t=t/d-1)*t*t*t - 1) + b;
            },
            easeInOutQuart: function (t, b, c, d) {
                if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
                return -c/2 * ((t-=2)*t*t*t - 2) + b;
            },
            easeInQuint: function (t, b, c, d) {
                return c*(t/=d)*t*t*t*t + b;
            },
            easeOutQuint: function (t, b, c, d) {
                return c*((t=t/d-1)*t*t*t*t + 1) + b;
            },
            easeInOutQuint: function (t, b, c, d) {
                if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
                return c/2*((t-=2)*t*t*t*t + 2) + b;
            },
            easeInSine: function (t, b, c, d) {
                return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
            },
            easeOutSine: function (t, b, c, d) {
                return c * Math.sin(t/d * (Math.PI/2)) + b;
            },
            easeInOutSine: function (t, b, c, d) {
                return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
            },
            easeInExpo: function (t, b, c, d) {
                return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
            },
            easeOutExpo: function (t, b, c, d) {
                return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
            },
            easeInOutExpo: function (t, b, c, d) {
                if (t==0) return b;
                if (t==d) return b+c;
                if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
                return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
            },
            easeInCirc: function (t, b, c, d) {
                return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
            },
            easeOutCirc: function (t, b, c, d) {
                return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
            },
            easeInOutCirc: function (t, b, c, d) {
                if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
                return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
            },
            easeInElastic: function (t, b, c, d) {
                var s=1.70158;var p=0;var a=c;
                if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
                if (a < Math.abs(c)) { a=c; var s=p/4; }
                else var s = p/(2*Math.PI) * Math.asin (c/a);
                return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            },
            easeOutElastic: function (t, b, c, d) {
                var s=1.70158;var p=0;var a=c;
                if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
                if (a < Math.abs(c)) { a=c; var s=p/4; }
                else var s = p/(2*Math.PI) * Math.asin (c/a);
                return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
            },
            easeInOutElastic: function (t, b, c, d) {
                var s=1.70158;var p=0;var a=c;
                if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
                if (a < Math.abs(c)) { a=c; var s=p/4; }
                else var s = p/(2*Math.PI) * Math.asin (c/a);
                if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
                return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
            },
            easeInBack: function (t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                return c*(t/=d)*t*((s+1)*t - s) + b;
            },
            easeOutBack: function (t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
            },
            easeInOutBack: function (t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
                return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
            },
            easeInBounce: function (t, b, c, d) {
                return c - this.easeOutBounce (d-t, 0, c, d) + b;
            },
            easeInOutBounce: function (t, b, c, d) {
                if (t < d/2) return this.easeInBounce (t*2, 0, c, d) * .5 + b;
                return this.easeOutBounce (t*2-d, 0, c, d) * .5 + c*.5 + b;
            }
        };
        var pass = now1 - now0;
        var tween = eases[easy](pass,0,1,duration);
        return tween;
    },
    /*动画停止需要做的事情*/
    stop:function (){
        clearInterval(this.timer);
    },
    /*多属性动画公式*/
    manyStyles:function (id,styles,tween){
        var that = this;
        for(var i = 0;i<styles.length;i++ ){
            var style =styles[i];
            that.oneStyle(id,style.name,style.start,style.juli,tween);
        }
    },
    oneStyle:function (id,name,start,juli,tween){
        czh.$css(id,name,(start+juli*tween)+'px')
    },

    add:function(id,json,duration){
        this.manyAdapter(id,json,duration);
        this.run();
    },
    manyAdapter:function(id,json,duration){
        var obj = this.adapter(id,json,duration);
        this.queen.push(obj);
    },
    /*封装变化点*/
    adapter:function(id,json,duration){
        /*id  now pass json tween duration styles*/
        var obj = {};
        obj.id = id;
        obj.json = json;
        obj.duration = duration;
        /*this.obj.dom = czh.$id(id);*/
        obj.tween = 0;
        obj.now = +new Date();
        obj.styles = this.getstyles(id,json); /*茶*/
        return obj;
    },


    /*获取多个样式*/
    getstyles:function(id,json){
        /*最终要转换的json格式*/
        /*  {name:'left',start:100px,juli:500}
         {name:'height',start:50px,juli:300}
         {name:'width',start:50px,juli:300}*/
        var styles =[];
        for(var item in json){
            var style ={};
            style.name = item;
            var value = czh.$css(id,item);
            style.start = parseFloat(value);
            style.juli = parseFloat(json[item]) - style.start;
            console.log(styles);
            styles.push(style);
        }
        return styles;
    }
}
czh.animate = new Animate();