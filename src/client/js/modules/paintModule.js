define(['d3', 'jquery', 'modules/Target2', 'modules/Hunter'], function(d3, jq, t, h) {












  var module = function(container) {

    var paintModule = this;

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


    var sign = svg.append('text')
      .attr("x", 10)
      .attr("y", 10)
      .attr("font-size", 400)
      .attr("fill", "green")
      .text("5");



    sign.on("click", function() {
      console.log(sign[0][0].outerHTML);


      var canvas = document.getElementById('canvas');
      var ctx = canvas.getContext('2d');

      var data = '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">' +
        '<foreignObject width="100%" height="100%">' +
        '<div xmlns="http://www.w3.org/1999/xhtml" style="font-size:140px">' +
        sign[0][0].outerHTML +
        '</div>' +
        '</foreignObject>' +
        '</svg>';

      var DOMURL = window.URL || window.webkitURL || window;

      var img = new Image();
      var svg = new Blob([data], {
        type: 'image/svg+xml;charset=utf-8'
      });
      var url = DOMURL.createObjectURL(svg);

      img.onload = function() {
        ctx.drawImage(img, 0, 0);
        DOMURL.revokeObjectURL(url);
      }

      img.src = url;


    })

    // TODO Load shape to svg, load it to canvas, make tools to check coordinates of the shape
    // http://getcontext.net/read/svg-images-on-a-html5-canvas
    // http://people.mozilla.org/~roc/rendering-HTML-elements-to-canvas.html
    // http://robert.ocallahan.org/2011/11/drawing-dom-content-to-canvas.html

    var hits = 0;
    var shots = 0;
    var hitCounter = svg.append('text')
      .attr("x", 20)
      .attr("y", 40)
      .attr("fill", "red")
      .text(hits + "/" + shots);

    var someMessage = svg.append('text')
      .attr("x", 20)
      .attr("y", 60)
      .attr("fill", "red")
      .text("");

    var nT = 1;
    var targets = [];

    for (var i = 0; i < nT; i++) {
      targets.push(new t(svg, getRandomArbitrary(100, 1000), getRandomArbitrary(100, 500), getRandomArbitrary(100, 1000), getRandomArbitrary(100, 500), (2 * Math.PI * getRandomArbitrary(0, 1000)) / 1000))
    }

    var nH = 1;
    var hunters = [];

    for (var i = 0; i < nH; i++) {
      hunters.push(new h(svg, getRandomArbitrary(100, 1000), getRandomArbitrary(100, 500), targets[i], paintModule, sign, svg));
    }

    this.IncrHits = function() {
      hits++;
      hitCounter.text(hits + "/" + shots + "=" + (hits / shots * 100));
    };

    this.IncrShots = function() {
      shots++;
      hitCounter.text(hits + "/" + shots + "=" + (hits / shots * 100));
    };

    this.Log = function(text) {
      someMessage.text(text);
    };

    //for (var i = 0; i < nH; i++) {
    //  hunters[i].SetTarget(targets[0]);
    //}

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