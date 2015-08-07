define(['d3', 'jquery'], function(d3, jq) {

  var module = function(svg, x0, y0, x, y) {

    var w = 1200;

    var h = 600;


    var speed = 10; // +10 per tick

    var tick = 0;
 
    var shape = svg.append("circle")
      .attr("cx", x0)
      .attr("cy", y0)
      .attr("r", 3)
      .style("fill", "blue");

    var k = (y0 - y)/(x0 - x);

    var alpha = Math.atan(k);
    
    
    if(x0 > x){
      alpha += Math.PI;
    }

    this.Tick = function(target) {

      tick++;
      
      
 
      shape
        .attr("cx", (x0 + speed * tick * Math.cos(alpha)))
        .attr("cy", (y0 + speed * tick * Math.sin(alpha)));
      
      
      
    };

  };

  return module;
});