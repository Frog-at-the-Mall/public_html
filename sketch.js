let x = 0;
let y = 0;
let z = 0;
let spacing = 50;
let blackStroke = 0;
let whiteStroke = 255;
var canvas;

let myColors = ["#579DE3", "#EC6152", "#D9D9CF"];
let randCol;

function setup() {
    let canvas = createCanvas(windowWidth ,windowHeight -windowHeight*.12);
    background("#D9D9CF");
    //createGrid(spacing);
    rectMode(RADIUS);
    frameRate(30);

  }
  

  
function draw() {
    //RED
     if(random(1) < 1 && random(1) > 0.8){
         
        stroke(y);
         fill(myColors[1]);
         //regular
         rect(x ,y , windowWidth/spacing*random(1), windowHeight/spacing*random(1,5));
         //the same except under
         rect(x ,y+spacing-50 , windowWidth/spacing*random(1), windowHeight/spacing*random(1,5));
         //reverse
         rect(windowWidth - x, windowHeight - y -190,windowWidth/spacing , windowHeight/spacing*random(1,10));
         rect(windowWidth - x, windowHeight - y -200,windowWidth/spacing , windowHeight/spacing*random(1,10));
         
         
         line(x ,y , windowWidth, windowHeight)
         
     }
     
     else if(random(1) < 0.8 && random(1) > 0.6 ){
        
        
        stroke(x);
        fill(myColors[2]);
        rect(x ,y , windowWidth/spacing*random(1), windowHeight/spacing*random(1,5));
        rect(x ,y+spacing-50 , windowWidth/spacing * random(1), windowHeight/spacing*random(1,10));
        rect(windowWidth - x, windowHeight - y-190,windowWidth/spacing*random(1), windowHeight/spacing*random(1,10));
        rect(windowWidth - x, windowHeight - y -200,windowWidth/spacing*random(1) , windowHeight/spacing*random(1,10));

        line(x,windowHeight, windowWidth, y);

    }
    else if(random(1) < 0.3){
        
        noStroke();
        fill(myColors[1])
        rect(x ,y , windowWidth/spacing*random(1), windowHeight/spacing*random(1,100));
        rect(x +spacing,y+spacing-50 , windowWidth/spacing, windowHeight/spacing*random(1,10));
        rect(windowWidth - x, windowHeight - y-190,windowWidth/spacing*random(1), windowHeight/spacing*random(1,10));
        rect(windowWidth - x, windowHeight - y -200,windowWidth/spacing , windowHeight/spacing*random(1,10));

        line(x ,windowHeight , windowWidth, y)

        
    }

     //blue?
     else{

         
         fill(myColors[0]);
         rect(x ,y, windowWidth/spacing, windowHeight/spacing*random(1,6));
         rect(windowWidth - x, windowHeight - y-190,windowWidth/spacing, windowHeight/spacing*random(1,30));
         rect(windowWidth - x, windowHeight - y -200,windowWidth/spacing , windowHeight/spacing*random(1,30));

         stroke(x);
         line(x ,y , windowWidth, windowHeight)


     }
     x = (x + windowWidth/spacing) ;
     
     
     if(x > width){
         x = 0;
         y = (y + windowHeight/spacing*random(2));
        
     }

     if(y > height){
         x = 0;
         y = 0;
         
        
     }
     
     
    
 }

 function createGrid(size){
    //For (var BEGIN; END; INTERVAL){
	//DO SOMETHING }
    
	for (var x = 0; x < width; x += width / size) {
		for (var y = 0; y < height; y += height / size) {
			stroke(whiteStroke);
			strokeWeight(2);
			line(x, 0, x, height);
			line(0, y, width, y);
		}
	}
 }



