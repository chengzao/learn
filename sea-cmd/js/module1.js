// JavaScript Document

define(function(require,exports,module){  //sea下的参数 : 不允许修改的
	
	//exports : 对外提供接口的对象
	
	function show(){
		console.log('this is in js/module1.js');
	}
	
	exports.show = show;
	
});





