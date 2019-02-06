
define(['require','main'],function () {
    //Do setup work here
	require(['index','test'],function(index,test) {
		index.init();
		test();	  
	});

});