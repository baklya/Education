

require(
    ['modules/myModule', 'jquery'],
    function( myModule, jq ){

    	var omg = new myModule();

    	console.log(omg);
    	console.log(jq);
    }
);