define(['d3', 'jquery'], function(d3, jq){
 
  var module = function(container) {

    console.log("===");
    console.log(jq);
    console.log("===");
    this.foo = "bar";
    
  };
 
  return module;
});