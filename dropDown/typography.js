
let runners = [];
let words = ['frek','friek','flook','free'];
let i = 0;


function setup(){
    createCanvas(windowWidth, windowHeight *.8 );
    background("#D9D9CF");
    frameRate(30);
    textFont('Georgia');

    while(i < 100){
        runners.push(new Runner(words[floor(random(3))],random(width),random(height)));
        i++;
    }

}

function draw(){
    background("#D9D9CF");
d
    for(let i = 0; i < runners.length; i++){
        runners[i].render();
      }
    
}

class Runner{
    constructor(str, x,y){
        this.str = str;
        this.x = x;
        this.y = y;
        
    }
    render(){
        textSize(32)
        stroke(0);
        noFill();
        
        text(this.str, this.x, this.y)
        
    }

   
}