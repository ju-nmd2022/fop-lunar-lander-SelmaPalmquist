background(0,0,0);
let x = 100;
let y = 100;
let s = 1.0;

let gameIsActive = false;
let rocketX = 300;
let rocketY = 90;

// night sky

function rocket(){
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
function pole(x, y){
fill(200, 200, 200);
ellipse(x, y, 13 * s, 110 * s);
}
pole(x + 175, y + 65);
pole(x + 225, y + 65);

//here I put the shadows in push pop because I do not want them
//to have stroke but I want the rest of the rocket to have it
push();
function poleShadow(x, y){
    fill(150, 150, 150);
    noStroke();
    ellipse(x, y, 6 * s, 105 * s);
    }
    poleShadow(x + 178, y + 65);
    poleShadow(x + 228, y + 65);
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
function engine(x, y, s){
    fill(150, 150, 150);
    rect(x, y, 15 * s);
}
engine(x + 180, y + 130, 1.0);
engine(x + 205, y + 130, 1.0);

push();
function engineShadow(x, y, s){
    noStroke();
    fill(100, 100, 100);
    rect(x, y, 5 * s, 13 * s);
}
engineShadow(x + 190, y + 131, 1.0);
engineShadow(x + 215, y + 131, 1.0);
pop();


// the fire coming out of the engines

}





//Body for the moon
noStroke();
fill(255, 100, 30);
ellipse(x + 205, y + 350, 180 * s);

// Details for the moon
function moonHoleHighlight(x, y, s){
    fill(255, 130, 0);
    ellipse(x, y, 30 * s);

}
moonHoleHighlight(x + 158, y + 337, 0.8);
moonHoleHighlight(x + 237, y + 388, 1.0);
moonHoleHighlight(x + 237, y + 318, 1.2);

function moonHoleShadow(x, y, s){
    fill(255, 70, 0);
    ellipse(x, y, 30 * s);
}
moonHoleShadow(x + 160, y + 340, 0.8);
moonHoleShadow(x + 240, y + 390, 1.0);
moonHoleShadow(x + 240, y + 320, 1.2);

//other distant planets for visual effect
fill(0, 100, 50);
ellipse(x, y, 20 * s);

fill(20, 60, 80);
ellipse(x + 380, y + 215, 40 * s);

//start button
fill(255);
let startButton = rect(x + 150, y + 120, 250 * s, 120 * s);



  function mousePressed() {
    if (mouseX > x + 150 && mouseX < x + 400 && mouseY > y + 150 && mouseY < y + 250) {
      gameIsActive = true;
      console.log("welcome to Rocket Launch");
      document.getElementById('startButton').style.display = 'none';
    }
  }

  
  /*function xMove() {
    if (gameIsActive === true) {
      image(scenary, 0, 0, 800, 600);
      image(mouse, characterMouseX, characterMouseY, 120, 90);
  
      if (keyIsDown(39)) {
        rocketX = rocketX + 8;
      }
      if (keyIsDown(37)) {
        rocketX = rocketX - 8;
      }
    }
  }

  /*function yMove() {
    if (gameIsActive === true) {
      image(scenary, 0, 0, 800, 600);
      image(mouse, characterMouseX, characterMouseY, 120, 90);
  
      if (keyIsDown(39)) {
        rocketX = rocketX + 8;
      }
      if (keyIsDown(37)) {
        rocketX = rocketX - 8;
      }
    }
  }
  
  //getting the mouse to fail when hitting the wall
  function wall (){
    if(mouse > 10 && mouse < 800){
      console.log("stop");}
    
  }*/







    