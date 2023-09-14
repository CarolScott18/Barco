var sea, ship;
var shipImag1,seaImag;
function preload(){
seaImag = loadImage("sea.png");
shipImag1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200);
  sea.addImage(seaImag);
  sea.velocityX = -5;
  sea.scale = 0.3;
 
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImag1);
  ship.scale = 0.25;
}

function draw() {
  background("blue");
    drawSprites();

 
}
