
var cube, cubeImage
var banana ,bananaImage
var spike, coin
var FoodGroup, obstacleGroup
var score = 0
var spikeImg, coinImg
var gameState = "PLAY"
function preload(){
cubeImage = loadImage ("Cube.jpg")
  groundImage = loadImage ("Ground.jpg")
  spikeImg = loadImage ("SpikeImage.png")
  coinImg = loadImage ("CoinImg.png")
}



function setup() {
  
createCanvas (800, 800)

  
   cube=createSprite(80,640,40,40);
  cube.addImage("cube", cubeImage)
  cube.scale = 0.1
  ground = createSprite(400,800,900,10);
  ground.velocityX=-8;
  ground.x=ground.width/2;
  ground.addImage ("ground", groundImage)
  ground.scale = 4
  console.log(ground.x)

  spikesGroup = new Group();
  coinGroup = new Group();

  score = 0;
 
  
}


function draw() {
  
  background("cyan");
  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  console.log(cube.y)
  spikesGroup.debug = true
   
    if(keyDown("space")&& cube.y>=638) {
      cube.velocityY = -17;
    }
    cube.velocityY = cube.velocityY + 1.4;
  
    cube.collide(ground);   
    spawnSpikes();
 spawnCoins();
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 300,50);        
  if(coinGroup.isTouching(cube)){
        coinGroup.destroyEach();
         score++
    }
    
    if(spikesGroup.isTouching(cube)){
        cube.velocityY = 0;
      ground.velocity = 0
        spikesGroup.setVelocityXEach(0);
        spikesGroup.setLifetimeEach(-1);
      coinGroup.setVelocityXEach(0);
        coinGroup.setLifetimeEach(-1);
      text("Game Over, Refresh to Try Again!", 50, 200)
    }
       
  
    }
function spawnSpikes() {
  if(frameCount % 35 === 0) {
    spike = createSprite(800,640,20,30);
    spike.scale=(random(0.14,0.17));
    spike.velocityX = -8;
     spike.addImage(spikeImg)
    spike.debug = true
    
        
    spike.lifetime = 300;
    
    spikesGroup.add(spike);
    
  }
}
function spawnCoins() {
  if(frameCount % 140 === 0) {
    coin = createSprite(800,550,20,30);
    coin.velocityX = -8;
     coin.addImage(coinImg)
        coin.scale = 0.3
    coin.lifetime = 300;
    
    coinGroup.add(coin);
    
  }
  
}
//this is based off of one of my favoite games, geometry dash, where you have to jump over the spikes.
