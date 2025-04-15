function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 0);
}
function draw() {
  fill(mouseX/4, mouseY/2, mouseX/2);
  circle(mouseX, mouseY, 10);
}
function mousePressed(){
  background(random(256), random(256), random(256));
}
