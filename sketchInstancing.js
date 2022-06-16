
let sketch = function(p) {
    
    p.setup = function(){
      p.createCanvas(p.windowWidth/2, p.windowHeight/2);
      p.background(0);
    }

    p.draw = function(){
        p.fill(240);
        p.noStroke();
        p.ellipse(10,10,100,100);
    }


  };
  var myp5 = new p5(sketch);
 
  