var sea,seaimage,ship,shipmoving

function preload(){
 shipmoving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

 seaimage = loadImage("sea.png");
}

function setup(){
  createCanvas(1670,802);
  sea = createSprite(400,400,1500,500);
  sea.addImage("sea", seaimage);

  ship = createSprite(300,500,20,20)
  ship.addAnimation("ship",shipmoving)
  ship.scale = 0.6
}

function draw() {
  background("blue");
  ship.velocityX = 6

  drawSprites();
}