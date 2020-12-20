//hr = hour();
//mn = minute();
//sc = second();

function setup() {
  createCanvas(720, 400);
  noStroke();


}

function draw() {
  background(0);  

  let c = map(mouseX, 0, width, 0, 175);

  let d = map(mouseX, 0, width, 40, 300);
  fill(255, c, 0);
  ellipse(width/2, height/2, d, d);

  

  let h = hour();
text('Current hour:\n' + h,5, 50);

let m = minute();
text('Current minute: \n' + m, 100, 50);

let s = second();
text('Current second: \n' + s, 200, 50);



  drawSprites();
}
function line(){
  stroke(255,0,0);
  strokeWeight(7);
  line(0, 0, 100, 0);

  
}

