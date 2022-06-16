let x = 0;
let y = 0;
let spacing = 20;
let blackStroke = 0;
let whiteStroke = 255;
var canvas;

let myColors = ["#579DE3", "#EC6152", "#D9D9CF"];
let randCol;

function setup() {
    let canvas = createCanvas(windowWidth ,windowHeight -windowHeight*.2);
    background(255);
    //createGrid(spacing);
    rectMode(RADIUS);
    
  }
  
function draw() {
    
     if(random(1) < 1 && random(1) > 0.8){
         
         noStroke();
         fill(myColors[1]);
         rect(x ,y , windowWidth/spacing, windowHeight/spacing);
         rect(windowWidth - x, windowHeight - y,windowWidth/spacing, windowHeight/spacing);
         
     }
     
     else if(random(1) < 0.8 && random(1) > 0.6 ){
        
        
        noStroke();
        fill(myColors[2]);
        rect(x ,y , windowWidth/spacing, windowHeight/spacing);
        rect(windowWidth - x, windowHeight - y,windowWidth/spacing, windowHeight/spacing);
        
    }
    else if(random(1) < 0.3){
        
        noStroke();
        fill(myColors[1]);
        rect(x ,y , windowWidth/spacing, windowHeight/spacing);
        rect(windowWidth - x, windowHeight - y,windowWidth/spacing, windowHeight/spacing);
        
    }

     
     else{

         noStroke();
         fill(myColors[0]);
         rect(x ,y, windowWidth/spacing, windowHeight/spacing);
         rect(windowWidth - x, windowHeight - y,windowWidth/spacing, windowHeight/spacing);


     }
     x = (x + windowWidth/spacing) ;
     
     
     if(x > width){
         x = 0;
         y = (y + windowHeight/spacing);
        
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

 function scene2(){
     
 }

