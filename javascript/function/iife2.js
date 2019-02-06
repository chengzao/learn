/*
 * mTools
 */
;(function (global,factory){
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        global.mTools = factory();
  }

})(typeof window !== "undefined" ? window : this,function(){
    // methods
    var test = {
        hello:function(name){
            console.log('hello,my name is ' +name);
            return this;
        },
        age:function(age){
            console.log('Today is '+age +' age.');
            return this;    
        }

    }
    /*
	 * @return mTools
	 */
	var mTools = {
        sayhello:test.hello,
        getAge:test.age
	};

	return mTools;
});