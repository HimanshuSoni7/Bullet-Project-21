var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1400,400);
  bullet=createSprite(80, 200, 40, 15);
  bullet.shapeColor=color(255, 255, 255);
  weight=random(30, 52);
  speed=random(223, 321);
  bullet.velocityX=speed;

  thickness=random(22, 83);

  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0); 
  
  if(hasCollided(bullet, wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10)
    {
      wall.shapeColor=color(0, 255, 0);
    }
  }

  drawSprites();
}

function hasCollided(bullet, wall)
{
  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}