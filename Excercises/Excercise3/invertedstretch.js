var capture;

function setup() {
  createCanvas(1400, 250); // You need a canvas to draw anything
  capture = createCapture(VIDEO);
  capture.size(900, 900);
  capture.hide(); // Hide the default HTML video element
}

function draw() {
  image(capture, 0, 0, width, height); // Draw video on canvas
  filter(INVERT); // Apply the filter to the entire canvas
}
