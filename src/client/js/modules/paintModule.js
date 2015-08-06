define(['d3', 'jquery'], function(d3, jq){
 
  var module = function(container) {

    var svg = d3.select(container).append("svg")
		    .attr("width", "100%")
		  .append("g");
		    
    console.log("===");
    console.log(jq);
    console.log("===");
    this.foo = "bar";
    
  };
 
  return module;
});