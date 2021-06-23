const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var snows = [];
var snowflake = 100;
var elfs;

function preload(){
bg=loadImage("snow3.jpg")
sound2=loadSound("song2.mp3")
elf1=loadAnimation("man/download-1.png","man/download.png")
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create;
  world = engine.world;

  //elfs=new elves(400,300)
  for(var i = 0; i < snowflake; i++){
    snows.push(new snow(random(0,800), random(0,400)));
 }
 elves =createSprite(400,300,60,60)
 elves.addAnimation('play',elf1)
}

function draw() {
  Engine.update(engine);
  background(bg);

  //elfs.display()

  for(var i = 0; i < snowflake; i++){
    snows[i].display();
    snows[i].update();
}

  drawSprites();
}