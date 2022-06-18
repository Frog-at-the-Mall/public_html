var leftBuffer;
var rightBuffer;
let walker;


function setup() {
    // 800 x 400 (double width to make room for each "sub-canvas")
    createCanvas(windowWidth, windowHeight - windowHeight*.2);
    walker = new Walker();
    // Create both of your off-screen graphics buffers
    leftBuffer = createGraphics(windowWidth/2, windowHeight/2);
    rightBuffer = createGraphics(windowWidth/2, windowHeight/2);
}

function draw() {
    // Draw on your buffers however you like
    drawLeftBuffer();
    drawRightBuffer();
    // Paint the off-screen buffers onto the main canvas
    image(leftBuffer, 0, 0);
    image(rightBuffer, windowWidth/2, 0);
}

function drawLeftBuffer() {
    leftBuffer.background("#A9D9F");
    leftBuffer.fill(255, 255, 255);
    leftBuffer.textSize(32);
    leftBuffer.text("This is the left buffer!", 10, 10);
   
}

function drawRightBuffer() {
    rightBuffer.background(255, 100, 255);
    rightBuffer.fill(0, 0, 0);
    rightBuffer.textSize(32);
    rightBuffer.text("This is the right buffer!", 50, 50);
    
}


class Walker {
    constructor() {
      this.x = width / 2;
      this.y = height / 2;
    }
  
    render() {
      stroke(0);
      point(this.x, this.y);
    }
  
    step() {
      var choice = floor(random(4));
      if (choice === 0) {
        this.x++;
      } else if (choice == 1) {
        this.x--;
      } else if (choice == 2) {
        this.y++;
      } else {
        this.y--;
      }
      this.x = constrain(this.x, 0, width - 1);
      this.y = constrain(this.y, 0, height - 1);
    }
  }