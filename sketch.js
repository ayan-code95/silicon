var newx=50
var platformGroup
var gameState="play"

function preload(){
  groundImg=loadImage("image/ground.jpg")
  lavaImg=loadImage("image/lava.png")
  treeImg=loadImage("image/birch.png")
  endImg=loadImage("image/unnamed.png")
  brickImg=loadImage("image/nether brick.png")
  portalImg=loadImage("image/nether portal save.png")
  dragonImg=loadImage("image/dragon.png")

}
 
  
function setup() {
  createCanvas(displayWidth,displayHeight);

  platformGroup=new Group()

  for(var i=0;i<50;i++){
  platform1=new Platform(newx)
  platformGroup.add(platform1.body)
  newx+=200
  }

  lavaPit1=new Lava(3000)
  lavaPit2=new Lava(3200)
 
  tree1=new Tree(1000)
  player=new Player()

  portal=createSprite(newx,height/2)
  portal.addImage(portalImg)
  portal.scale=2

}

function draw() {
  background(0); 

  player.applyGravity()

  player.spt.collide(platformGroup)
  player.spt.collide(tree1.body)
  player.spt.collide(tree1.body2,life)

  camera.position.x=player.spt.x+400
  camera.position.y=player.spt.y-150

  if(gameState==="play"||gameState==="sponser"){

  
  if(keyDown("right")){
    player.moveRight()
  }  

  if(keyDown("left")){
    player.moveLeft()
  }  

  if(keyDown("space")&&player.spt.velocityY===0){
    player.jump()
  }  
  }
  if(gameState==="end"){
    alert("game over")
  }
  if(player.spt.isTouching(lavaPit1.body)||player.spt.isTouching(lavaPit2.body)){
    gameState="end"
  }

  if(player.spt.isTouching(portal)){
    gameState="sponser"
    portal.destroy()
    tree1.body.destroy()
    lavaPit1.body.destroy()
    lavaPit2.body.destroy()
    player.spt.x=100
    dragon=createSprite(4000,500,50,50)

  }
  if(gameState==="sponser"){
    dragon.addImage(dragonImg)
    dragon.scale= 2

    if(player.spt.isTouching(dragon)){
      gameState="win"
    }
    //platform1.body.Image("endImg")

  }
  if(gameState==="win"){
    alert("you win")
  }

  drawSprites();
}

function life(){
  tree1.life--
  player.spt.y+=5
  if(tree1.life===0){
    tree1.body.destroy()
    tree1.body2.destroy()
  }

}