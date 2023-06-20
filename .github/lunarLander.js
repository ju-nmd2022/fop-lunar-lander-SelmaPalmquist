let rocketX = 160;
let rocketY = 80;
let s = 1.0;
let moonX = 150;
let moonY = 150;
let beforeStart;
let rocketCrash;
let landedSafe;
let direction = "falling";

function preload(){
  beforeStart = loadImage('images/startScreen.PNG');
  rocketCrash = loadImage('images/unsuccessful.PNG');
  landedSafe = loadImage('images/successful.PNG');
}


let gameState = "notstarted";

function mousePressed() {
  if (mouseX > rocketX + 230 && mouseX < rocketX + 590 && mouseY > rocketY + 16 && mouseY < rocketY + 150) {
    gameState = "started";
    console.log("welcome to Rocket Launch");
  }
}

function setup(){
  createCanvas(800,600);
}

function draw(){
 if(gameState === "notstarted"){
  image(beforeStart, 0, 0, 800, 600);
 }
 if(gameState === "started"){
background(0,0,0);
moon();
rocket();
landingSuccessful();
landingCrash();
restart();
/*
if (keyIsDown(16)) {
  rocketY -= 2;
  console.log("rising");
}
} else if (rocketY <= 295) {
rocketY = rocketY + 1;
console.log("falling");
}
*/
if (direction === "falling"){
  if (rocketY <= 295){
    rocketY = rocketY + 1;
  }

}
 }
}


  
function rocket(){
  //This is the yellow "holding station" for the rocket
  fill(255,205,0);
  rect(rocketX + 175, rocketY - 20, 50 * s, 150 * s);
  push();
  fill(215, 155, 40);
  noStroke();
  rect(rocketX + 204, rocketY - 20, 20 * s, 150 * s);
  pop();

  triangle(rocketX + 200, rocketY - 50, rocketX + 175, rocketY - 19, rocketX + 225, rocketY - 20);
  push();
  fill(215, 155, 40);
  noStroke();
  triangle(rocketX + 200, rocketY - 50, rocketX + 207, rocketY - 21, rocketX + 225, rocketY - 21);
  pop();

  //the light grey poles on the sides with shadow. 
  fill(200, 200, 200);
  ellipse(rocketX + 175, rocketY + 65, 13 * s, 110 * s);
  ellipse(rocketX + 225, rocketY + 65, 13 * s, 110 * s);

  //here I put the shadows in push pop because I do not want them
  //to have stroke but I want the rest of the rocket to have it
  push();
  fill(150, 150, 150);
  noStroke();
  ellipse(rocketX + 178, rocketY + 65, 6 * s, 105 * s);
  ellipse(rocketX + 228, rocketY + 65, 6 * s, 105 * s);
  pop();

  //This is the actual rocket with shadow
  fill(150,150,150);
  triangle (rocketX + 200, rocketY + 50, rocketX + 160, rocketY + 130, rocketX + 240, rocketY + 130);
  push();
  fill(100,100,100);
  noStroke();
  triangle ( rocketX + 200, rocketY + 50, rocketX + 200, rocketY + 130, rocketX + 228, rocketY + 106);
  pop();

  ellipse (rocketX + 200, rocketY + 80, 30 * s, 100 * s);
  push();
  fill(100,100,100);
  noStroke();
  ellipse (rocketX + 203, rocketY + 80, 20 * s, 100 * s);
  pop();

  //The window and "indent lines" on the rocket
  fill(50, 70, 140);
  ellipse(rocketX + 200, rocketY + 60, 20 * s);

  push();
  strokeWeight(0.5);
  line(rocketX + 211, rocketY + 125, rocketX + 233, rocketY + 125);
  line(rocketX + 167, rocketY + 125, rocketX + 189, rocketY + 125);
  pop();

  //The engines
  fill(150, 150, 150);
  rect(rocketX + 180, rocketY + 130, 15 * s);
  rect(rocketX + 205, rocketY + 130, 15 * s);

  push();
  noStroke();
  fill(100, 100, 100);
  rect(rocketX + 190, rocketY + 131, 5 * s, 13 * s);
  rect(rocketX + 215, rocketY + 131, 5 * s, 13 * s);
  pop();

  // the fire coming out of the engines


}

function moon(){
//Body for the moon
push();
noStroke();
fill(255, 100, 30);
ellipse(moonX + 205, moonY + 350, 180 * s);

// Details for the moon - highlight and shadow
fill(255, 130, 0);
ellipse(moonX + 158, moonY + 337, 24 * s);
ellipse(moonX + 237, moonY + 388, 30 * s);
ellipse(moonX + 237, moonY + 318, 36 * s);

fill(255, 70, 0);
ellipse(moonX + 160, moonY + 340, 24 * s);
ellipse(moonX + 240, moonY + 390, 30 * s);
ellipse(moonX + 240, moonY + 320, 36 * s);

//other distant planets for visual effect
fill(0, 100, 50);
ellipse(moonX, moonY, 20 * s);

fill(0, 10, 50);
ellipse(moonX + 450, moonY - 10, 60 * s);

fill(20, 60, 80);
ellipse(moonX + 380, moonY + 215, 40 * s);
pop();
}






// being able to control the speed
function yMove() {
  if (gameState === "started") {
    if (keyIsDown(16)) {
      rocketY -= 2;
      console.log("rising");
    }
  } else if (rocketY <= 295) {
    rocketY++;
    console.log("falling");
  }
}


  //getting the rocket to crasg when reaching the planet too hard
  function landingCrash (){
    if (gameState === "started"){
        if(rocketY > 295){
      gameState = "failed";
      image(rocketCrash, 0, 0, 800, 600);
      console.log("Crash");
    }
    }
  }

  function landingSuccessful (){
    if (gameState === "started"){
        if(rocketY > 295){
      gameState = "success";
      image(landedSafe, 0, 0, 800, 600);
      console.log("Landing Successful");
    }
    }
  }
 
  function restart() {
    if (gameState === "success" || gameState === "failed") {
      if (mouseX > rocketX + 10 && mouseX < rocketX + 170 && mouseY > rocketY + 140 && mouseY < rocketY + 240) {
        gameState = "started";
        console.log("welcome back to Rocket Launch");
      } else if (mouseX > rocketX + 440 && mouseX < rocketX + 600 && mouseY > rocketY + 140 && mouseY < rocketY + 240) {
        gameState = "notstarted";
        console.log("welcome another time");
      }
    }
  }
