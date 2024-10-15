let angle=5;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  //trasformazioni isolate con push e pop
  push();
  strokeWeight(1);
  fill("orange");
  translate(50,50)
  rotate(angle*0.1);
  rect(50, 50, 100, 50);
  strokeWeight(5);
  point(50,50);
  pop();
  //translate(100,100);
  //degree, radiants
  //--> 50+100, 50+100;
  fill("purple");
  rect(0,0,200,30);
  strokeWeight(5);
  point(0,0);
  
  //per cambiare il punto serve traslazione prima
  push();
  translate(200,200);
  rotate(angle);
  fill("orange");
  circle(0,0,100);
  //d=100 --> r=50;
  line(0,-50,0,50);
  pop();
  angle= angle + 2;
}
