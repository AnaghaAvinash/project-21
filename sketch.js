var bullet,wall;
var speed;
var weight;
var thickness;


function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 10, 10);
  speed=random(55,90);
  weight=random(400,1500);
  bullet=createSprite(50,200,100,30);
  bullet.shapeColor="white";
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background("black");  
  bullet.velocityX=speed;
 
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness * thickness);
  }
  
  if(damage>10)
  {
    wall.shapeColor=color(255,0,0);
  }
 
  else if (damage<10)
  {
    wall.shapeColor=color(0,255,0);
  }
  
  

  




  speed=random(223,321);
  thickness=random(22,83);
  weight=random(30,52);
  

  drawSprites();



}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;

  }
  return false;
}