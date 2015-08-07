define(['d3', 'jquery', 'modules/Target'], function(d3, jq, t) {

  var module = function(container) {

    var svg = d3.select(container).append("svg")
      .attr("width", "100%")
      .append("g");
  
    svg.attr("transform", "translate(" + [20, 20] + ")");


    //<rect width="1000" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
    var bbox = svg.append('rect')
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 1200)
      .attr("height", 600)
      .attr("fill", "none")
      .attr("stroke-width", 2)
      .attr("stroke", "white");



    var showTime = svg.append('text')
      .attr("x", 20)
      .attr("y", 20)
      .attr("fill", "red")
      .text("");

    var target = new t(svg, 500, 300, 450, 200, 0);
    var target1 = new t(svg, 500, 300, 250, 400, 0);
    var target2 = new t(svg, 500, 300, 150, 100, 0);
    var target3 = new t(svg, 500, 300, 850, 300, Math.PI / 2);
    var target4 = new t(svg, 500, 300, 350, 100, 0);

    var prev = performance.now();
    var times = 0;

    requestAnimationFrame(function measure(time) {
      //document.body.insertAdjacentHTML("beforeEnd", Math.floor(time - prev) + " ");
      prev = time;

      showTime.text(time + "");


      target.SetNextPosition();

      target1.SetNextPosition();
      target2.SetNextPosition();
      target3.SetNextPosition();
      target4.SetNextPosition();

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