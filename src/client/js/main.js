

require(
    ['modules/myModule', 'jquery', 'd3'],
    function( myModule, $, d3 ){

    	var omg = new myModule();

    	console.log(omg);
    	console.log($);

    	console.log(d3);



		console.log(window);
		

		var svg = d3.select("body").append("svg")
		    .attr("width", "100%")
		  .append("g")
		    

    
    }
);