let canvasXMax=200;
let canvasYMax=200;

function setup() {
  createCanvas(canvasXMax, canvasYMax);
  background(220);
}

function draw() {
  textSize(15);
  let string_toprint="Contenuto mouseX= "
  +mouseX+ " \ny= "+mouseY;
  strokeWeight(2);
  line(0, mouseX, canvasXMax, mouseY);
  //feedback tasto mouse sinistro
  //disegnare linea gialla clickando mouse
  //p5--> true, se mouse schiacciato, altrimente false
  if(mouseIsPressed == true){
    if(mouseButton == RIGHT){
      background(220);
    }
    //coloro di giallo
    stroke("yellow");
  } else {
    //altrimenti nero
    stroke("black");
  }
}
