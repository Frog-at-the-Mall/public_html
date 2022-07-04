




let x = 100;
let y = 100;
let xSpeed = 1;
let ySpeed = 3.3;




function setup(){
    createCanvas(windowWidth, windowHeight - windowHeight*.15);
    frameRate(30);
    background("#D9D9CF");

    sC = new squareClass();
    cC = new circleClass();
    tcC = new translateCubeClass();
}

function draw(){
//    background("#D9D9CF");
   
   sC.step();
   sC.render();

   cC.render();

   tcC.render();

   x = x + xSpeed;
   y = y + ySpeed;

   if ((x > width) || (x < 0)) {
    xSpeed = xSpeed * -1;
  }
  if ((y > height) || (y < 0)) {
    ySpeed = ySpeed * -1;
  }

  stroke(0);
   fill(175);
   ellipse(x,y,16,16);
}

class squareClass{
    constructor(){
        this.x = width/2;
        this.y= height/2;
    }
    render(){
        stroke(0);
        noFill();
        rect(mouseX +20,mouseY -20,170,110);
        text("X: "+ mouseX , mouseX +50, mouseY + 20);
        text("Y: " + mouseY, mouseX +50 , mouseY + 50);

    }
    step(){
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
          
    }
}

class circleClass{
    constructor(){
        this.x = width/2;
        this.y= height/2;
    }
    render(){
        stroke(0);
        noFill();
        fill(255);
        ellipse( mouseX - 75, mouseY - 75 , 100 * random(1), 100);
        

    }
    step(){
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
          
    }
}

class translateCubeClass{
    constructor(){
        this.x = width/2;
        this.y= height/2;
    }
    render(){
        noFill();
        translate(p5.Vector.fromAngle(millis() / 1000, 40));
        rect(mouseX, mouseY, 20, 20);
    }
}

class circleVector{
    constructor(){
        this.location = width/2;
        this.speed = 1;
    }
}