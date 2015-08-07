define(['d3', 'jquery', 'modules/Target', 'modules/Hunter'], function(d3, jq, t, h) {

  var module = function(container) {


    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }


    var svg = d3.select(container).append("svg")
      .attr("width", "100%")
      .append("g");

    svg.attr("transform", "translate(" + [20, 20] + ")");


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


    var nT = 1;
    var targets = [];

    for (var i = 0; i < nT; i++) {
      targets.push(new t(svg, getRandomArbitrary(100, 1000), getRandomArbitrary(100, 500), getRandomArbitrary(100, 1000), getRandomArbitrary(100, 500), (2 * Math.PI * getRandomArbitrary(0, 1000)) / 1000))
    }

    var nH = 1;
    var hunters = [];

    for (var i = 0; i < nT; i++) {
      hunters.push(new h(svg, getRandomArbitrary(100, 1000), getRandomArbitrary(100, 500)));
    }



    var prev = performance.now();
    var times = 0;

    requestAnimationFrame(function measure(time) {
      prev = time;

      showTime.text(time + "");


      for (var i = 0; i < nT; i++) {
        targets[i].SetNextPosition();
      }

      for (var i = 0; i < nH; i++) {
        hunters[i].Tick();
      }

      requestAnimationFrame(measure);
    })

  };

  return module;
});