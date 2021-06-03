var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();

  textSize(40);
  fill("red");
  stroke("white");
  text("SCORE : " + score,350,50);

  if(score === 3){
    clear();
    background(bg2);
    textSize(40);
    fill("red");
    stroke("red");
    text("CONGRATULATIONS!!!",200,180);

    textSize(40)
    fill("black");
    stroke("black");
    text("TREASURE UNLOCKED",200,220);

  }
  drawSprites()
}