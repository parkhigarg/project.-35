var canvas;
var backgroundImage, bgImg, animal1_img, animal2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, animal1, animal2,bush, grass;
var animals = [];
var bushImage, grassImage;
//BP
function preload() {
  backgroundImage = loadImage("/images/background.jpg");
  animal1_img = loadImage("/images//animal1.png");
  animal2_img = loadImage("/images/animal2.png");
  track = loadImage("/images/track.png");
  bushImage = loadImage("/images/bush.png");
 grassImage = loadImage("/images/grass.png");
}

//BP
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 
}

//BP
function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
