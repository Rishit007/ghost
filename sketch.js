var ghost;
var climber, climberGroup;
var door, doorGroup;
var backGround;

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
}

function setup(){
  createCanvas(600,600);
  
  backGround = createSprite(300,300);
  backGround.addImage(towerImg);
  backGround.velocityY= 2;
  
  ghost = createSprite(300,300);
  ghost.addImage(ghostImg);
  ghost.scale=0.4;
  
  climberGroup = new Group();
  doorGroup = new Group();
}

function draw(){
  
  if(backGround.y>600){
    backGround.y=300;
  }
  
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-5;
  }
  if(keyDown("right_arrow")){
    ghost.x=ghost.x+5;
  }
  if(keyDown("space")){
    ghost.velocityY=-5;
  }   
  ghost.velocityY=ghost.velocityY+0.5;
  
  ghost.collide(climberGroup);

  spawnDoors();
  
  drawSprites();
}

function spawnDoors(){
  if(frameCount%100===0){
    door= createSprite(Math.round(random(100,500)),-100);
    door.addImage(doorImg);
    door.velocityY=2;
    door.lifetime=350;
    
    climber= createSprite(door.x,door.y+70);
    climber.addImage(climberImg);
    climber.velocityY=door.velocityY;
    climber.lifetime=350;
    
    ghost.depth=door.depth+1;     
    
    doorGroup.add(door);
    climberGroup.add(climber);
  }
}