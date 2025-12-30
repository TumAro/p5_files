let b;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  angleMode(DEGREES)
  b = new block(100, 200,200);
}

function draw() {
  background(225);
  b.draw();
  b.move(threshold=20);
}