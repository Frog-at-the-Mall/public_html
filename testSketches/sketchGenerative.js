// eee......eee.eeeeee.eee..eee.
// @@@@::::@@@@:@@@@@@:@@@::@@@:
// %%%%%--%%%%%-%%%----%%%--%%%-
// &&&&&&&&&&&&+&&&&&+++&&&&&&++
// |||*||||*|||*|||||***||||||**
// !!!==!!==!!!=!!!====!!!==!!!=
// :::######:::#:::####:::##:::#
// ...@@@@@@...@...@@@@...@@...@



function setup() {
    createCanvas(windowWidth/2, windowHeight/2, WEBGL);
    background(150);
    stroke(0, 50);
    fill(255, 200);

    xstart = random(1);
    ynoise = random(1);

    translate(2, 2, 0);
    

    for ( y = -(height/8); y <= (height/8); y+=3) {
     ynoise += 0.02;
     xnoise = xstart;

        for ( x = -(width/8); x <= (width/8); x+=3) {
         xnoise += 0.02;
         drawPoint(x, y, noise(xnoise, ynoise)); 
        }

    } 
}

function drawPoint( x,  y, noiseFactor) { 
    push();
    translate(x * noiseFactor * 4, y * noiseFactor * 4, -y);
    edgeSize = noiseFactor * 6;
    ellipse(0, 0, edgeSize, edgeSize);
    pop();
};

