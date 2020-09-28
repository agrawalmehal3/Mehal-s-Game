const Engine= Matter.Engine;
const Bodies= Matter.Bodies;
const World= Matter. World;

var engine 
var world 
var hoopside1, hoopside2, hoopside3;
var hoopimage;
var playerimage

function preload(){
  hoopimage=loadImage("images/hoop2.jpg");
  playerimage= loadImage("images/player2.png");
}


function setup() {
  createCanvas(800,700);
  engine= Engine.create();
  world= engine.world;
  hoopside1= new Hoopwall(220, 130, 10, 220);
  hoopside2= new Hoopwall(270, 240, 110, 10);
  hoopside3= new Hoopwall(330, 130,10, 220);
  console.log(hoopside1);
}

function draw() {
  background("white");
  Engine.update(engine);
  image(hoopimage, 130, 10, 250, 250);
  image(playerimage, 600, 200, 200, 400)
  hoopside1.display();
  hoopside2.display();
  hoopside3.display();  
}