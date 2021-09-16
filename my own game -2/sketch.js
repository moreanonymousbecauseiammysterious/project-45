
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundImg;
var alienBlaster, alienBlasterImg;
var jason, jasonImg;
var alien, alienImg;

function preload(){
	backgroundImg = loadImage("mygamebg.png");
	alienBlasterImg = loadImage("alienblaster.png");
	jasonImg = loadImage("jason.png");
	alienImg = loadImage("alien.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  
  drawSprites();
 
}



