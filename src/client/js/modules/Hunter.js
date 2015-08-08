define(['d3', 'jquery', 'modules/Projectile'], function(d3, jq, p) {

  var module = function(svg, x0, y0) {

    var w = 1200;

    var h = 600;

    var coolDown = 100;
 
    var shape = svg.append("circle")
      .attr("cx", x0)
      .attr("cy", y0)
      .attr("r", 15)
      .style("fill", "red");

    var bullets = [];

    var fire = function(targ){
      coolDown = 100;
      bullets.push(new p(svg, x0, y0, targ.x, targ.y));
    }

    var target;
    this.SetTarget = function(t){
      target = t;
    } 
    


    this.Tick = function(){
      
      
      coolDown--;
      
      if(target && coolDown < 0){
        fire(target.GetCoords());
      }
      
      
      
      
      for (var i = 0; i < bullets.length; i++) {
        bullets[i].Tick();
      }
    }



  };

  return module;
});