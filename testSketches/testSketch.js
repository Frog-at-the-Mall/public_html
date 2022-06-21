



function setup() {
  createCanvas(640, 360);
  background(127);
  walker = new gaussWalker();
}

function draw() {
  // // Get a gaussian random number w/ mean of 0 and standard deviation of 1.0
  // let xloc = randomGaussian();

  // const sd = 60; // Define a standard deviation
  // const mean = width / 2; // Define a mean value (middle of the screen along the x-axis)
  // xloc = xloc * sd + mean; // Scale the gaussian random number by standard deviation and mean

  // fill(0, 10);
  // noStroke();
  // ellipse(xloc, height / 2, 16, 16); // Draw an ellipse at our "normal" random position
  walker.render();
  walker.step();
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
  ; // Draw an ellipse at our "normal" random position

  }
  render(){

    fill(0, 10);
    noStroke();
    ellipse(this.xloc, this.yloc, 16, 16)

  }
  step(){
    
    this.xloc = randomGaussian(this.mean,this.sd);
    this.yloc = randomGaussian(this.meanY,this.sd);
  }


}