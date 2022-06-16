let w1;
let ws1;
troop = [];
frame = 1;


function setup() {
  createCanvas(windowWidth, windowHeight - windowHeight*.2);
  //populate list of walkers -> groups of 3
  for(let i = 0; i < 20; i++){
    troop[i] = new Walkers(10 ,10,10,10);
  }
  background(127);
}

function draw() {
  for(let i = 0; i < 20; i++){
    troop[i].render();
    troop[i].step();
  }
  
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

class Walkers{
  constructor(x,y, sizeX,sizeY){
    this.x = x;
    this.y = y;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    
  }
  render(){
    
    stroke(0);
    fill(random(140,150),random(1,10),random(0,240));
    
    rect(this.x +random(windowWidth) ,this.y+random(windowHeight),this.sizeX +random(1000),this.sizeY+random(1));
    
    

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
