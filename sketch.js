var monster, knight;
var monsterImage,knightImage;
var bg, bgImage, gameOver,gameOverImage;
var wWidth,wHeight;
var floor, floorGroup, monsterGroup;
var f1,f2,f3,f4,f5,f6,f7;
var score=0; 
var sound;
var gameState=0

function preload(){
  monsterImage=loadImage("ogregame.png");
  knightImage=loadImage("Knight Hero.png");
  bgImage=loadImage("newerbackground.jpg");
  //sound=loadSound("Music.mp3")
  gameOverImage=loadImage("gameOver.webp")
}



function setup() {
  wWidth=displayWidth-50;
  wHeight=displayHeight-100;
  createCanvas(wWidth,wHeight);
  //sound.play();


  
  

  bg=createSprite(wWidth/2,wHeight/2,10,10)
  bg.addImage(bgImage);
  bg.scale=3
  bg.velocityX=-2

  knight=createSprite(100,wHeight-350,20,20);
  knight.addImage(knightImage);
  knight.scale=0.25

  monster=createSprite(100,wHeight-600, 100, 20);
  monster.addImage(monsterImage);
  monster.scale=0.25
  
  floorGroup=new Group()
 
  
  //monster
  f8=createSprite(100, wHeight-600,100,20)
  f2=createSprite(300,wHeight-500,100,20)
  f3=createSprite(500,wHeight-600,100,20)
  f4=createSprite(700,wHeight-550,100,20)
  f5=createSprite(900,wHeight-700,100,20)
  f6=createSprite(1150,wHeight-600,100,20)
  f7=createSprite(1400,wHeight-400,100,20)
  
  //knight
  f1=createSprite(100,wHeight-250,100,20)
  f9=createSprite(300,wHeight-150,100,20)
  f10=createSprite(500,wHeight-250,100,20)
  f11=createSprite(700,wHeight-200,100,20)
  f12=createSprite(900,wHeight-350,100,20)
  f13=createSprite(1150,wHeight-250,100,20)
  f14=createSprite(1400,wHeight-50,100,20)
 
  f2.shapeColor=("white")
  f3.shapeColor=("white")
  f4.shapeColor=("white")
  f5.shapeColor=("white")
  f6.shapeColor=("white")
  f7.shapeColor=("white")
  f8.shapeColor=("white")
  
  f1.shapeColor=rgb(105, 82, 65)
  f9.shapeColor=rgb(105, 82, 65)
  f10.shapeColor=rgb(105, 82, 65)
  f11.shapeColor=rgb(105, 82, 65)
  f12.shapeColor=rgb(105, 82, 65)
  f13.shapeColor=rgb(105, 82, 65)
  f14.shapeColor=rgb(105, 82, 65)

  f1.velocityX=-3
  f2.velocityX=-3
  f3.velocityX=-3
  f4.velocityX=-3
  f5.velocityX=-3
  f6.velocityX=-3
  f7.velocityX=-3
  f8.velocityX=-3
  f9.velocityX=-3
  f10.velocityX=-3
  f11.velocityX=-3
  f12.velocityX=-3
  f13.velocityX=-3
  f14.velocityX=-3
 
  
  

  //monsterGroup=new Group()

}



function draw() {
  background("white");

  if(gameState===0){
    text("Dungeon Dash",displayWidth/2,displayHeight/5)
    text("Instructions: use the ARROW keys to move the knight and WASD keys for the monster",displayWidth/2-100, displayHeight/4)
    text("If the characters touch eachother, or move out of frame the game will end", displayWidth/2-200, displayHeight/3)
    text("press SPACE to start",displayWidth/2-300,displayHeight/2)
  }  
  if(keyDown==="space"){
    gameState="play"
  }

  if(gameState==="play"){
  score=score+Math.round(frameRate()/30)
  if(bg.x<=0){
    bg.x=bg.width/2;
  }
  if(keyIsDown(UP_ARROW)){
    knight.velocityY=-4
  }
  if(keyIsDown(RIGHT_ARROW)){
    knight.velocityX=2
  }
  if(keyIsDown(LEFT_ARROW)){
    knight.velocityX=-2
  }
  if(keyIsDown(DOWN_ARROW)){
    knight.velocityY=3
  }

  if(keyDown("w")){
    monster.velocityY=-4
  }
  if(keyDown("d")){
    monster.velocityX=2
  }
  if(keyDown("a")){
    monster.velocityX=-2
  }
  if(keyDown("s")){
    monster.velocityY=3
  }

  knight.velocityY+=0.5
  monster.velocityY+=0.5
  
  if(f1.isTouching(knight)||f2.isTouching(knight)||f3.isTouching(knight)
  ||f4.isTouching(knight)||f5.isTouching(knight)||f6.isTouching(knight)||f7.isTouching(knight)
  ||f8.isTouching(knight)||f9.isTouching(knight)||f10.isTouching(knight)||f11.isTouching(knight)
  ||f12.isTouching(knight)||f13.isTouching(knight)||f14.isTouching(knight)){
    knight.bounceOff(f1)
    knight.bounceOff(f2)
    knight.bounceOff(f3)
    knight.bounceOff(f4)
    knight.bounceOff(f5)
    knight.bounceOff(f6)
    knight.bounceOff(f7)
    knight.bounceOff(f8)
    knight.bounceOff(f9)
    knight.bounceOff(f10)
    knight.bounceOff(f11)
    knight.bounceOff(f12)
    knight.bounceOff(f13)
    knight.bounceOff(f14)
  }  


  if(f1.isTouching(monster)||f2.isTouching(monster)||f3.isTouching(monster)
  ||f4.isTouching(monster)||f5.isTouching(monster)||f6.isTouching(monster)||f7.isTouching(monster)
  ||f8.isTouching(monster)||f9.isTouching(monster)||f10.isTouching(monster)||f11.isTouching(monster)
  ||f12.isTouching(monster)||f13.isTouching(monster)||f14.isTouching(monster)){
    monster.bounceOff(f1)
    monster.bounceOff(f2)
    monster.bounceOff(f3)
    monster.bounceOff(f4)
    monster.bounceOff(f5)
    monster.bounceOff(f6)
    monster.bounceOff(f7)
    monster.bounceOff(f8)
    monster.bounceOff(f9)
    monster.bounceOff(f10)
    monster.bounceOff(f11)
    monster.bounceOff(f12)
    monster.bounceOff(f13)
    monster.bounceOff(f14)
  }  




  spawnFloor();
  if(floorGroup.isTouching(knight)){
    knight.bounceOff(floorGroup)
  }

  if(floorGroup.isTouching(monster)){
    monster.bounceOff(floorGroup)
  }
  //spawnMonster();
  if(monster.isTouching(knight)|| monster.x>wWidth||knight.x>wWidth||knight.x<0||monster.x<0){
    gameState="END";
  }
}
if(gameState==="END"){
  knight.velocityX=0;
  knight.velocityY=0;
  floorGroup.setVelocityEach(0)
  monster.velocityX=0
  monster.velocityY=0
  bg.velocityX=0
  gameOver=createSprite(wWidth/2,wHeight/2)
  gameOver.addImage(gameOverImage);
}
  drawSprites();
  stroke("white")
  textSize(30)
  text("score:"+score,displayWidth-200,50)
}


function spawnFloor(){
  if(frameCount%30===0){
    floor=createSprite(displayWidth,random(300,700),100,20)
    floor.shapeColor=rgb(105, 82, 65)
    floor.velocityX=-3
    floorGroup.add(floor)
  }
}

/*function spawnMonster(){
  if(frameCount%250===0){
    monster=createSprite(floor.x,floor.y-70)
    monster.addImage(monsterImage)
    monster.velocityX=-3
    monster.scale=0.25
    monsterGroup.add(monster)
  }
}*/