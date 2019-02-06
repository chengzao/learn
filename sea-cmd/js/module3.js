// JavaScript Document

//var a = 100;

define(function(require,exports,module){
	
	//alert( module.exports == exports );
	
	/*require.async('.js/module2.js',function(){
		alert('模块加载完的回调');
	});*/
	
	var a = 'this is in js/module3.js';
	
	module.exports = {
		num : a
	};
	
});
