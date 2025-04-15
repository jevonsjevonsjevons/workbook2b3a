let video;
let promptText = "You want me to pass this class so bad. Say yes to affirm.";
let flicker = true;
let lastFlickerTime = 0;
let speechRec;
let entered = false;

function preload() {
  video = createVideo("data/hypnosisvideo.mp4");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  video.loop();
  video.hide();
  video.volume(0); // prevent any audio interference
  video.pause(); // will start after mic permission

  textFont("Helvetica");
  textAlign(CENTER, CENTER);
  textSize(24);
  fill(255);

  // Setup speech recognition
  let lang = navigator.language || "en-US";
  speechRec = new p5.SpeechRec(lang, gotSpeech);
  speechRec.continuous = true;
  speechRec.interimResults = false;
  speechRec.onStart = () => video.play(); // start video after mic is activated
  speechRec.start();
}

function draw() {
  background(0);
  image(video, 0, 0, width, height);

  // Overlay prompt
  fill(255);
  noStroke();
  textSize(24);
  text(promptText, width / 2, height / 2 - 30);

  // Flickering cursor
  if (millis() - lastFlickerTime > 500) {
    flicker = !flicker;
    lastFlickerTime = millis();
  }

  if (flicker) {
    text("_", width / 2, height / 2 + 10);
  }
}

function gotSpeech() {
  let said = speechRec.resultString.toLowerCase().trim();
  if (!entered && said.includes("yes")) {
    entered = true;
    window.location.href = "gallery.html";
  }
}