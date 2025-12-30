class block {
  constructor(size, x, y) {
    this.size = size;
    this.x = x;
    this.y = y;
    this.angle = 0;
  }
  
  draw() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    rect(0, 0, this.size, this.size);
    pop();
  }
  
  move(threshold) {
    let distance = dist(mouseX, mouseY, this.x, this.y)
    if (distance < threshold) {
      this.angle += 1;
    }
  }
}