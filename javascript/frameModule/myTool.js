/*
 * mTools
 */
;(function (global,factory){
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define(factory);
	} else {
		 
		// Browser globals
		global.mTools = factory();
	}
})(typeof window !== "undefined" ? window : this,function(){

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