/* this指向：
    当我们实例化的时候系统到底做了哪几件事情
    第一：生成一个空对象
    第二：拷贝构造函数中的方法和属性到这个空对象中
    第三：生成一个__proto__指针，指向构造函数的原型对象
    第四： this指向的是这个空对象
*/

// 模仿jquery链式访问  init   extend

(function(w){

    function CZH (str,context){
        return this.init(str,context);
    }
    CZH.prototype = {
        /*专门将获取的元素集合放在伪数组里面*/
        /*系统会自动生成一个空对象 this指向这个空对象*/
        init:function(str,context){
            if(this.isString(str)){
                context = context || document;
                var doms = context.querySelectorAll(str);
                /*{0:element1,1:elememt2,2:element3.....,length:10}*/
                this.length = doms.length;
                for(var i = 0;i<doms.length;i++){
                    this[i] = doms[i];
                }
            }else{
                //将这个元素封装成伪数组
                this[0] = str;
                this.length = 1;
            }
            return this;
        },
        isString:function (val) {
            return typeof val === "string";
        },
        show:function(){
            for(var i = 0;i<this.length;i++){
                this[i].style.display = 'block';
            }
            return this;
        },
        hide:function(){
            for(var i = 0;i<this.length;i++){
                this[i].style.display = 'none';
            }
            return this;
        },
        //表示的是获取某个dom对象
        get:function(index){
            return this[index];
        },
        /*表示的也是获取某个dom对象，并将其转成伪数组*/
        eq:function(index){
            var dom = this.get(index);
            return this.init(dom);
        },
        $css:function(key,val){
            if(val){
                for(var i=0;i<this.length;i++){

                   setStyle(this[i],key,val);
                }
                return this;    
            }else{
                return getStyle(this[0],key);
            }
            /*设置*/
            function setStyle(dom,key,value){
                dom.style[key] = value;
            }
            /*获取*/
            function getStyle(dom,key){
                var str = '';
                //如果兼容标准的写法
                if(dom.currentStyle){
                    str =  dom.currentStyle[key];
                }else{
                    /*使用getComputedStyle*/
                    str = window.getComputedStyle(dom,null)[key];
                }
                return str;
            }                
        },
        /*封装重复代码*/
        each:function(fn) {
            var i=0, length = this.length;
            for (; i<length; i+=1) {
                fn.call(this[i]);
            }
            return this;
        },         
    
    }
    function $(str,context){
        if(typeof(str) === 'string'){
            return new CZH(str,context);
        }else{
            window.onload=str;
        }
    }  
    $.extend = function() {
        var key
                ,arg = arguments
                ,i = 1
                ,len = arg.length
                ,target = null;
        if(len === 0){
            return;
        }else if(len === 1){
            // 在 CZH中的原型链上添加方法
            target = CZH.prototype;
            i--;
        }else{
            target = arg[0];
        }
        // 循环遍历arg[i]中的obj，添加到 实例 ($) 上
        for(; i < len; i++){
            for(key in arg[i]){
                target[key] = arg[i][key];
            }
        }
        return target;
    }

    w.$$=w._$_=$;

})(window);


(function($){
    /*需要参与链式访问的函数*/
    $.extend({
        css:function(){},
        show:function(){
            this.each(function() {
                this.style.display = "block";
            });
            console.log('this is a show');
            return this;
        },
        hide:function(){
            this.each(function() {
                this.style.display = "none";
            });
            console.log('this is a hide');
            return this;
        },

    })
    /*不需要参与链式访问的函数*/
    // target[key] = arg[i][key];
    $.extend($,{
        fn:function(){console.log('fn')},
        fn2:function(){console.log('fn2')}
    })  

})($$);