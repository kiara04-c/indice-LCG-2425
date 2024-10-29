let myImage;
let newImage;
//usarla in tutti i pezzi del codice

//asincrona per disaccoppiare
function preload(){
  //-->caricare dati, immagini, ecc.
  myImage = loadImage("../assets/opn-bk-pixabay.jpg");
  //percorso per immagine
  //posizione relativa al file html
  //../ --> cartella superiore
  // ./ --> questa cartella
  //2-media --> lezione 5 --> assets
  //opn-bk-pixabay.jpg
  newImage = loadImage("../../assets/octopus.jpg");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  //myImage
  //mostrare immagine
  image(myImage, 100, 100, 100, 100);
}
