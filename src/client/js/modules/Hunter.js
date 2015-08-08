define(['d3', 'jquery', 'modules/Projectile'], function(d3, jq, p) {

  var module = function(svg, x0, y0, t) {

    var w = 1200;

    var h = 600;

    var coolDown = 100;

    var target = t;


    var bulletSpeed = 5;

    var targetVelocity = {
      x: 0,
      y: 0
    };

    var targetPrevPos = target.GetCoords();

    var shape = svg.append("circle")
      .attr("cx", x0)
      .attr("cy", y0)
      .attr("r", 15)
      .style("fill", "red");

    var bullets = [];

    var fire = function(targ) {
      coolDown = 100;

      var bulletVelocity = {
        x: 0,
        y: 0
      };




      var aim = {
        x: 0,
        y: 0
      };
      
      
      var T = -1;

      var k = (y0 - targ.y) / (x0 - targ.x);



      var a = bulletSpeed * bulletSpeed - targetVelocity.x * targetVelocity.x - targetVelocity.y * targetVelocity.y;
      var b = -2 * ((targ.x - x0) * targetVelocity.x + (targ.y - y0) * targetVelocity.y);
      var c = -((targ.x - x0) * (targ.x - x0) + (targ.y - y0) * (targ.y - y0));

      var a2 = 2 * a;
      var ac = 4 * a * c;
      var dis = b * b;
      dis = dis - ac;
      if (dis < 0) {
        console.log("no roots");
      }
      else {
        var dis_sqrt = Math.sqrt(dis);
        var x1 = -b + dis_sqrt;
        x1 = x1 / a2;
        var x2 = -b - dis_sqrt;
        x2 = x2 / a2;
        
        if(x1 > 0){
          T = x1;
        }
        
        if(x2 > 0 && x2 < x1){
          T = x2;
        }
        
        

      }


      if(T > 0){
        
        //console.log(T);


        //console.log(typeof targ.x);
        
        //console.log(typeof targetVelocity.x);
        
        aim.x = targ.x + targetVelocity.x * T;

        aim.y = targ.y + targetVelocity.y * T;
   
   
        
        //console.log(aim);
        
        
        //console.log(x0 );
        
        //console.log(y0 );
        
        bullets.push(new p(svg, x0, y0, aim.x, aim.y, bulletSpeed));
      }


      
    };


    //this.SetTarget = function(t){
    //  target = t;
    //} 





    this.Tick = function() {


      targetVelocity.x = target.GetCoords().x - targetPrevPos.x;

      targetVelocity.y = target.GetCoords().y - targetPrevPos.y;

      


      coolDown--;

      if (target && coolDown < 0) {
        fire(target.GetCoords());
      }




      for (var i = 0; i < bullets.length; i++) {
        bullets[i].Tick();
      }



      targetPrevPos = target.GetCoords();
    }



  };

  return module;
});