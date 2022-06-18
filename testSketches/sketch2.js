let x = 0;
let y = 0;
let spacing = 32;
let blackStroke = 0;
let whiteStroke = 255;
let canvas;

let myColors = [];


function setup() {
    canvas = createCanvas(windowWidth - spacing ,windowHeight - spacing*13);
    background(0);
    createGrid(spacing);
    
}

function draw(){
    

}


function createGrid(size){    
  for (var x = 0; x < width; x += width / size) {
    for (var y = 0; y < height; y += height / size) {
      stroke("#579DE3");
      strokeWeight(10);
      line(x, 0, x, height);
      line(0, y, width, y);
    }
  }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}