var FoodIMG,Food2IMG,Food3IMG,Food4IMG,Food
var  backgroundIMG
var F1,F2,F3,F
 var ground
 var database
var brick1,brick2,brick3 ,brickIMG
var brick4,brick5,brick6,brick7
var  WaterIMG,water
var bird,birdIMG
function preload(){
backgroundIMG = loadImage('images/BackGround.png');
brickIMG = loadImage('images/Bricks.png');
WaterIMG = loadImage('images/Water.png');
birdIMG = loadImage('images/Bird.png');
FoodIMG = loadImage('images/Food.png');
Food2IMG = loadImage('images/Food2.jpg');
Food3IMG = loadImage('images/Food3.jpg');
Food4IMG = loadImage('images/Food4.jpg');
}
function setup(){
    createCanvas(1200,400);
database = firebase.database();
bird =createSprite(120,300);
bird.addImage(birdIMG)
bird.scale = 0.01
    F = createSprite(120,30);
    F.addImage(FoodIMG);
    F.scale = 9
water = createSprite(500,490);
water.addImage(WaterIMG);
water.velocityX = 3 
    if (water.x < 0){
      water.x = water.width/2;    
    }


brick1 = createSprite(70,350);
brick1.addImage(brickIMG);
brick1.scale = 0.3


brick2 = createSprite(100,350);
brick2.addImage(brickIMG);
brick2.scale = 0.3


brick3 = createSprite(900,350);
brick3.addImage(brickIMG);
brick3.scale = 0.3
    brick4 = createSprite(400,350);
brick4.addImage(brickIMG);
brick4.scale = 0.3
        brick5 = createSprite(250,300);
    brick5.addImage(brickIMG);
    brick5.scale = 0.3
        brick6 = createSprite(1000,50,20,20);
        brick6.addImage(brickIMG);
        brick6.scale = 0.2
        

ground = createSprite(600,600,1200,400)
ground.addImage(backgroundIMG);




}
function draw(){
    background(20);
    if(keyWentDown('UP_ARROW')){
        bird.velocityX = 0
        bird.velocityY = -4
        }
        if(keyWentDown('Down_ARROW')){
            bird.velocityX = 0
            bird.velocityY = 4
            }
            if(keyWentDown('LEFT_ARROW')){
                bird.velocityX = -5
                bird.velocityY = 0
                }
                if(keyWentDown('RIGHT_ARROW')){
                    bird.velocityX = 5
                    bird.velocityY = 0
                    }
                
        
food();
    
drawSprites();
F.display();
ground.display();
brick1.display();
brick2.display();
brick3.display()
brick4.display();
brick5.display()
brick6.display()
//brick.display()
water.display();
bird.display();
}
function food(){
if(World.frameCount% 80===0){
    Food = createSprite(120,200,30,30);
    Food.scale = 0.1;
  var r = Math.round(random(1,4))
  if(r===1){
      Food.addImage(FoodIMG);
  }
  if(r===2){
      Food.addImage(Food2IMG);
  }
if(r===3){
    Food.addImage(Food3IMG);
}
if(r===4){
    Food.addImage(Food4IMG);
}
}
}