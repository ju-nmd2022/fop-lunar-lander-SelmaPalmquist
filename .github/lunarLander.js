
let x = 100;
let y = 100;
let s = 1.0;
let rocketX = 300;
let rocketY = 90;
let beforeStart;
let rocketCrash;
let landedSafe;

/*
function preload(){
  beforeStart = loadImage('Images/beforeStart.png');
  rocketCrash = loadImage('Images/rocketCrash.png');
  landedSafe = loadImage('Images/landedSafe.png');
}


function setup(){
  createCanvas(800,600);
}
let gameIsActive = "notstarted";

function mousePressed() {
  if (mouseX > x + 150 && mouseX < x + 400 && mouseY > y + 150 && mouseY < y + 250) {
    gameIsActive = "started";
    console.log("welcome to Rocket Launch");
  }
}


function draw(){
 if(gameIsActive === "notstarted"){
  image(beforeStart, 0, 0, 800, 600);
 }
 if(gameIsActive === "started"){
  background(0,0,0);
 }
}
  */

// night sky



//This is the yellow "holding station" for the rocket
fill(255,205,0);
rect(x + 175, y - 20, 50 * s, 150 * s);
push();
fill(215, 155, 40);
noStroke();
rect(x + 204, y - 20, 20 * s, 150 * s);
pop();

triangle(x + 200, y - 50, x + 175, y - 19, x + 225, y - 20);
push();
fill(215, 155, 40);
noStroke();
triangle(x + 200, y - 50,x + 207, y - 21, x + 225, y - 21);
pop();



//the light grey poles on the sides with shadow. 
fill(200, 200, 200);
ellipse(x + 175, y + 65, 13 * s, 110 * s);
ellipse(x + 225, y + 65, 13 * s, 110 * s);

//here I put the shadows in push pop because I do not want them
//to have stroke but I want the rest of the rocket to have it
push();
    fill(150, 150, 150);
    noStroke();
    ellipse(x + 178, y + 65, 6 * s, 105 * s);
    ellipse(x + 228, y + 65, 6 * s, 105 * s);
pop();


//This is the actual rocket with shadow
fill(150,150,150);
triangle (x + 200, y + 50, x + 160, y + 130, x + 240, y + 130);
push();
fill(100,100,100);
noStroke();
triangle ( x + 200, y + 50, x + 200, y + 130, x + 228, y + 106);
pop();

ellipse (x + 200, y + 80, 30 * s, 100 * s);
push();
fill(100,100,100);
noStroke();
ellipse (x + 203, y + 80, 20 * s, 100 * s);
pop();

//The window and "indent lines" on the rocket
fill(50, 70, 140);
ellipse(x + 200, y + 60, 20 * s);

push();
strokeWeight(0.5);
line(x + 211, y + 125, x + 233, y + 125);
line(x + 167, y + 125, x + 189, y + 125);
pop();

//The engines
    fill(150, 150, 150);
    rect(x + 180, y + 130, 15 * s);
    rect(x + 205, y + 130, 15 * s);

push();
    noStroke();
    fill(100, 100, 100);
    rect(x + 190, y + 131, 5 * s, 13 * s);
    rect(x + 215, y + 131, 5 * s, 13 * s);
pop();

// the fire coming out of the engines







//Body for the moon
noStroke();
fill(255, 100, 30);
ellipse(x + 205, y + 350, 180 * s);

// Details for the moon - highlight and shadow
    fill(255, 130, 0);
    ellipse(x + 158, y + 337, 24 * s);
    ellipse(x + 237, y + 388, 30 * s);
    ellipse(x + 237, y + 318, 36 * s);

    fill(255, 70, 0);
    ellipse(x + 160, y + 340, 24 * s);
    ellipse(x + 240, y + 390, 30 * s);
    ellipse(x + 240, y + 320, 36 * s);

//other distant planets for visual effect
fill(0, 100, 50);
ellipse(x, y, 20 * s);

fill(20, 60, 80);
ellipse(x + 380, y + 215, 40 * s);






  
  function xMove() {
    if (gameIsActive === "started") {

      if (keyIsDown(39)) {
        rocketX = rocketX + 8;
      }
      if (keyIsDown(37)) {
        rocketX = rocketX - 8;
      }
    }
  }

  function yMove() {
    if (gameIsActive === "started") {
     
      if (keyIsDown(UP_ARROW)) {
        rocketY = rocketY + 8;
      }
    }
  }


  //getting the rocket to stop when reaching the planet
  function landingCrash (){
    if (gameIsActive === "started"){
        if(rocketX > x + 115 && rocketX < x + 400 && rocketY > y + 260){
      gameIsActive = "failed";
      image("Images/rocketCrash");
      console.log("Crash");
    }
    }
  }

  function landingSuccessful (){
    if (gameIsActive === "started"){
        if(rocketX > x + 115 && rocketX < x + 400 && rocketY > y + 260){
      gameIsActive = "success";
      image("Images/landedSafe");
      console.log("Landing Successful");
    }
    }
  }

  /*
  }
}
*/

