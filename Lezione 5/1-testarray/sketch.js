
let num = 23;
let num2 = 24;
let arrayNum = [23, 100, 20, 77, 15, 11, 27];
//0, 1, 2, 3, 4, 5, 6 
//collezione ordinata (omogenea) di elementi
let collectionParole = ["oop", "politecnico", "vinciamoLotto", "premio", "sandalo"];
//"" si usano per dire che è una stringa

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("lightpink");
  fill(0);
  textSize(30);
  //vedere un elemento dopo l'altro di array
  //elemento di interazione
  //0 -- > Max - 1
  let ycoord = 50;
  for(let i=0; i<collectionParole.length; i++){
    //elemento i-esimo dell'array
    text(collectionParole[i], 20, ycoord);
    ycoord=ycoord+50;
  }

  //ellissi con dimensioni diverse
  for(let n=0; n<arrayNum.length; n++){
    //dato valore di arrayNum[n]
    //creaiamo ellisse con dimensione diversa
    noFill();
    ellipse(300, (75*n+5)+30, arrayNum[n], arrayNum[n]);
    
  }

}
