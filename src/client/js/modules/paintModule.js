define(['d3', 'jquery', 'modules/Target'], function(d3, jq, t) {

  var module = function(container) {

    var svg = d3.select(container).append("svg")
      .attr("width", "100%")
      .append("g");

    var showTime = svg.append('text')
      .attr("x", 20)
      .attr("y", 20)
      .attr("fill", "red")
      .text("Hello");

    var target = new t(svg);

    var prev = performance.now();
    var times = 0;

    requestAnimationFrame(function measure(time) {
      //document.body.insertAdjacentHTML("beforeEnd", Math.floor(time - prev) + " ");
      prev = time;
    
      showTime.text(time + "");
    
    
      target.SetNextPosition();
      
    
      requestAnimationFrame(measure);
      //if (times++ < 10) requestAnimationFrame(measure);
    })

    console.log("===");
    console.log(jq);
    console.log("===");
    this.foo = "bar";

  };

  return module;
});