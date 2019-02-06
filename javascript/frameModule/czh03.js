(function(w){
function CZH(){
    this.elements=[];
    //this.element='';   
};
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
    $all:function(ele,context){
        context = context || document;
        this.elements =  context.querySelectorAll(ele);
        return this; 
    },
    /* 设置属性 */
    $css:function(key,val){
        var doms = this.elements;
        if(val){
            for(var i=0;i<doms.length;i++){

               setStyle(doms[i],key,val);
            }
            return this;    
        }else{
            return getStyle(doms[0],key);
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
    }
});


czh.extend(czh,{
    hide:function(context){
        var doms = this.elements;
        for(var i = 0;i<doms.length;i++){
            doms[i].style.display = 'none';
        }
        return this;
    },
    show:function(context){
        var doms = this.elements;
        for(var i = 0;i<doms.length;i++){
            doms[i].style.display = 'block';
        }
        return this;
    }
});


function test(ele,context){
    if(czh.isString(ele)){
        return czh.$all(ele,context);
    }else{
        window.onload = ele;
    }
    
}    

w.$$=w._$_=test;

})(window)