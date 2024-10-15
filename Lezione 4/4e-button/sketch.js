let button;
let elem;
let dice=0;

function setup() {
  elem = createElement( "h2", "Keep rolling");
  elem.position(0, 0);
  createCanvas(400, 400);
  button = createButton("Roll the dice");
  button.position(200, 200);
  button.mousePressed(rollDice);
}

function draw() {
  background(220);
  stroke("white");
  strokeWeight(2);
  fill("white");
  textSize(30);
  text("Dice value"+ dice,5,300);
}

function rollDice(){
  dice = random(1,7);
  //voglio solo numeri interi
  //dice=floor(dice); arrotonda a numero interi inferiore
  //dice=ceil(dice); arrotonda a numero intero superiore
  dice=floor(dice);
}