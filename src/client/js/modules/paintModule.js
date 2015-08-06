define(['d3'], function(d3){
 
  var module = function(container) {

    var svg = d3.select(container).append("svg")
		    .attr("width", "100%")
		  .append("g");
		    
    
    
    this.foo = "bar";
    
  };
 
  return module;
});