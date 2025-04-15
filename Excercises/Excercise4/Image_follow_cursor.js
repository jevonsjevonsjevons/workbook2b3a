// PRELOAD IMAGE + IMAGE FOLLOWS MOUSE
var pic;
 
function preload(){
pic=loadImage("data/Photo1.jpg");
}
function setup() {
createCanvas(windowWidth, windowHeight);
background("black");
imageMode(CENTER, CENTER);
}
function draw() {
scale(2);
image(pic, mouseX/2, mouseY/2);
}
