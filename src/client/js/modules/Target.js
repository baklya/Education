define(['d3', 'jquery'], function(d3, jq) {

  var module = function(svg) {


    var angle = 0;
    var delta = 2 * Math.PI / 1000;

    var mySquare = svg.append("rect")
      .attr("x", (60 + 40 * Math.cos(angle)))
      .attr("y", (60 + 40 * Math.sin(angle)))
      .attr("width", 20)
      .attr("height", 20)
      .style("fill", "blue");

    //console.log("===");
    //console.log(jq);
    //console.log("===");
    this.SetNextPosition = function(){
      angle += delta;
      mySquare
        .attr("x", (60 + 40 * Math.cos(angle)))
        .attr("y", (60 + 40 * Math.sin(angle)));
    };

  };

  return module;
});