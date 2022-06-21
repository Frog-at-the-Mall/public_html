
let walkers1 = [];
let walkers2 = [];


function setup() {
  createCanvas(windowWidth, windowHeight*.8);
  background("#D9D9CF");
  
  for (let i = 0; i < 50; i++) {
    walkers1.push(new perlinWalker());
    walkers2.push(new gaussWalker());
  }
}

function draw() {

  for (let i = 0; i < walkers1.length; i++) {
    walkers1[i].render();
    walkers1[i].step();
    walkers2[i].render();
    walkers2[i].step();
  }
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class gaussWalker{
  constructor(){
  this.xloc = randomGaussian();
  this.yloc = randomGaussian();
  this.sd = 60; // Define a standard deviation
  this.mean = width/2; // Define a mean value (middle of the screen along the x-axis)
  this.meanY = height/2;
  this.xloc = this.xloc * this.sd + this.mean; // Scale the gaussian random number by standard deviation and mean
  this.yloc = this.yloc * this.sd + this.meanY;
  ;// Draw an ellipse at our "normal" random position

  }
  render(){

    fill(randomGaussian(100,40),randomGaussian(155,40),randomGaussian(200,40) );
    noStroke();
    rect(this.xloc, this.yloc, random(1,250), random(1,10));

  }
  step(){
    
    this.xloc = randomGaussian(this.mean,this.sd);
    this.yloc = randomGaussian(this.meanY,this.sd);
    translate(0, 0, 0);
  }

}

class perlinWalker{
  
  constructor(){
    this.tx = 0;
    this.ty =1000;
    
  }
  render(){
    fill(255);
    this.nx = noise(this.tx);
    this.ny = noise(this.ty);
    this.mx = map(this.nx,0,1,0,windowWidth);
    this.my = map(this.ny,0,1,0,windowHeight);

    if(this.mx > windowWidth || this.my > windowHeight ){
        this.mx = 0;
        this.my = 1000;
    }
    else{
      fill(randomGaussian(100,this.mx),randomGaussian(155,this.my),randomGaussian(200,40) );
      rect(this.mx, this.my, random(1,250), random(1,10));
    }
    
    

  }
  step(){

    
    
    this.tx += 0.01;
    this.ty +=0.01;

  }
}