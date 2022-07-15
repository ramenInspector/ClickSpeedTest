var timer = 0;
var start = 0;
var tbc = 0;
var cf = 0;
var rectAlph = 0;

var rectAlph2 = 0;

var click;
var power;

var cur = 0;
var prev = 0;
var avg = 0;

var urbad;
var urgood;
var usuck;
var wowuramazing;

var x = 0;
var y = 0;

function preload() {
  soundFormats("wav");
  click = loadSound("pop");
  soundFormats("mp3");
  power = loadSound("powerdown");

  urbad = loadImage("urbad.png");
  urgood = loadImage("urgood.png");
  usuck = loadImage("usuck.png");
  wowuramazing = loadImage("wowuramazing.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Roboto Mono");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20);
  
  //timer thing 
  
  if (start > 0) {
    timer++;
  }
  
  //make wow image shaky

  x = random(windowWidth / 2 - 40, windowWidth / 2 - 30);
  y = random(windowHeight / 2 - 75, windowHeight / 2 - 85);

  //calculate average between prev click and current click
  
  avg = (prev + cur) / 2;

  // middle text
  
  fill(0, 220, 40);
  textAlign(CENTER);
  textSize(30);
  text("AVG. frames between clicks:", windowWidth / 2, windowHeight / 2 + 30);
  text(round(avg), windowWidth / 2, windowHeight / 2 + 80);

  // top left text
  
  textAlign(LEFT);
  textSize(20);
  fill(0, 110, 20);
  text("Frame Counter: " + timer, 25, 40);
  text("Previous: " + prev, 25, 70);
  text("Current: " + cur, 25, 100);
  text("FPS: " + round(frameRate()), 25, 130);

  //image thingies
  
  textSize(20)
  textAlign(CENTER)
  fill(0,110,20)
  
  if (avg > 0 && avg <= 6) {
    
    text("Wow, you're amazing!!!", windowWidth/2, windowHeight/2-100)
    image(wowuramazing, x, y, 70, 70);
    
  } else if (avg > 6 && avg <= 12) {
    
    text("Ur pretty okay.", windowWidth/2, windowHeight/2-100)
    image(urgood, windowWidth / 2 - 35, windowHeight / 2 - 80, 70, 70);
    
  } else if (avg > 12 && avg <= 20) {
    
    text("Ur a little slow..", windowWidth/2, windowHeight/2-100)
    image(urbad, windowWidth / 2 - 35, windowHeight / 2 - 80, 70, 70);
    
  } else if (avg > 20) {
    
    text("U SUCK", windowWidth/2, windowHeight/2-100)
    image(usuck, windowWidth / 2 - 35, windowHeight / 2 - 80, 70, 70);
    
  }
  
  //press r to restart text
  
  textAlign(CENTER)
  textSize(20)
  fill(0,110,20)
  text("Press R to restart",windowWidth/2,windowHeight-30)

  //flashes

  rectAlph -= 5;
  rectAlph2 -= 5;

  fill(255, rectAlph);
  rect(0, 0, windowWidth, windowHeight);

  fill(255, 0, 0, rectAlph2);
  rect(0, 0, windowWidth, windowHeight);
}

function mouseClicked() {
  prev = cur;
  cur = timer;
  tbc = cur;
  timer = 0;
  start = 1;
  rectAlph = 100;
  click.play();
}

function keyPressed() {
  if (keyCode == 82) {
    start = 0;
    timer = 0;
    cur = 0;
    tbc = 0;
    prev = 0
    cur = 0
    avg = 0
    rectAlph2 = 100;
    power.play();
  }
}
