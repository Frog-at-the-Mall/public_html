let g;
let windowWidth;
let windowHeight;
  
    // Use html() function    
    

//class for canvas
class generate{

    constructor(){
        this.i = 0;
        while(this.i < 28){
            this.p5i = new p5(sketch1);
            this.p52i = new p5(sketch2);
            this.i++;
        }   
    }
    
};


function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
  }

//first sketch instance
let sketch1 = function(p) {
    //starts on
    p.x = p.windowWidth/2;
    p.y = p.windowHeight/2;
    p.bgColor = "#D9D9CF";

    p.setup = function(){
      p.createCanvas(p.windowWidth/8, p.windowHeight/8);
      //
      p.background(40,42,42);
      
      
    }

    p.draw = function(){
        p.noStroke();
        p.ellipse(p.x,p.y,p.random(1,3),1);
        p.rect(p.x+4,p.y+4,4,4);

        //move around
        p.x = p.x + p.random(-4,4);
        p.y = p.y + p.random(-4,4);

        if(p.x > p.windowWidth/8){
            p.x = 50;
            p.y = 50;
            p.background("#D9D9CF");
           
        }
   
        if(p.y > p.windowHeight/8){
            p.x = 50;
            p.y = 50;
            p.background("#D9D9CF");

        }
    }
    
    
};
//second sketch instance
let sketch2 = function(p){

    p.x = p.windowWidth/2;
    p.y = p.windowHeight/2;
    p.step = 0;

    p.setup = function(){
        p.createCanvas(p.windowWidth/8, p.windowHeight/8);
        p.background(p.random(40));


    }
    p.draw = function(){
        p.noStroke();
        p.ellipse(p.x,p.y,p.random(1,3),1);
        p.rect(p.x+4,p.y+4,4,4);        
        p.step += 1;

        //move around
        p.x = p.x + p.random(-4,4);
        p.y = p.y + p.random(-4,4);

        if(p.x > p.windowWidth/8){
            
            p.x = 50;
            p.y = 50;
            p.background("#D9D9CF");
           
        }
   
        if(p.y > p.windowHeight/8){
            
            p.x = 50;
            p.y = 50;
            p.background("#D9D9CF");
            

        }

    }

};

let sketch3 = function(p){
    
}



g = new generate();








//two of the same sketches
// var myp51 = new p5(sketch);
// var myp52 = new p5(sketch);
// var myp53 = new p5(sketch);
// var myp55 = new p5(sketch);
// var myp56 = new p5(sketch);
// var myp57 = new p5(sketch);
// var myp58 = new p5(sketch);

  