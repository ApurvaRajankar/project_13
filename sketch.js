function preload(){
  monkeyimage=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png"
 )
  bananaimage=loadImage("banana.png")
  stoneimage=loadImage("stone.png")
}

function setup(){
  createCanvas(400,400)
  monkey=createSprite(50,350,10,10)
  monkey.addAnimation("monkey",monkeyimage)
  monkey.scale=0.1
  ground=createSprite(200,380,400,5)
}

function draw(){
  background("blue")
  drawSprites()
}