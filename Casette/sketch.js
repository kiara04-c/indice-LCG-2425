function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  //cielo scuro
  background("lightblue");
  //disegno un cerchio per fare la luna piena
  fill("yellow");
  stroke("orange");
  strokeWeight(10);
  circle(300,73,100);
  fill("green")
  strokeWeight(0)
  rect(0,300,400,100);
  fill("#FF9800");
  rect(20,200,100,100);
  fill("#FF8AF3");
  rect(150,200,100,100);
  fill("#03A9F4");
  rect(280,200,100,100);
  fill("#B2180C");
  triangle(20,200,120,200,70,130);
  triangle(150,200,250,200,200,130);
  triangle(280,200,380,200,330,130);
}
