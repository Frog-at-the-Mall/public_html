

let startX = 0;
function setup(){
    createCanvas(300 , 300);
    background(255);

}

function draw(){
    background(150);

  const addingX = map(mouseY, 0, height, 0.01, 0.1);
  const detail = map(mouseX, 0, width, 0, 32);
  let xOff = startX;

  noiseDetail(detail);

  beginShape();
  for (let i = 0; i < width; i++) {
    vertex(i, noise(xOff) * height);
    xOff += 0.01;
  }
  endShape();

  startX += addingX;

}