var bg1, bg2 
var gamestate = 0; 
var groundimg, ground1, ground2;
var avatar, avatar2, avatarIMG, avatar2IMG;
var player
var greeting;
var nameac;
var entrance;
var player;

function preload() { 
    bg1 = loadImage("images/bgimg.png");
   avatarIMG = loadImage("images/character.png")
   bg1 = loadImage("images/background.jpg");
   avatar2IMG = loadImage("images/character2.png");
   groundimg = loadImage("images/ground.png")
}
function setup() {
  createCanvas(800, 800);
  entrance = createSprite(550,760,50,110) ;
  entrance.visible = false;
  player = createSprite(100,780,33,33);
  player.visible = false;
  var name = createInput();
  name.position(320,400) 
  var play = createButton("play");
  play.position(320,430); 
  avatar = createSprite(200,400,33,33);
  avatar.addImage("avatar1", avatarIMG);
avatar.visible = false
  avatar.shapeColor = "green"
  avatar2= createSprite(500,400,33,33);
avatar2.visible = false
avatar2.addImage("character2", avatar2IMG);
  avatar2.shapeColor = "red"
 
  
  play.mousePressed(()=>{
      name.hide();
      play.hide();
      gamestate = 1;
      greeting = createElement('h2');
      greeting.html("Hello "+ name.value());
     greeting.position(400,400);
})

  
  


  }


function draw() {
  

  background(bg1);
   drawSprites();
   text(mouseX+","+mouseY,mouseX,mouseY);
   if (gamestate === 1 ){
    avatars();
   fill("black");
   textSize(23);
   textFont("georgia")
  fill("gold")
   text("CHOOSE YOUR AVATAR!", 250,200);
 
  }
 if(mousePressedOver(avatar)){
  gamestate = 2;
player.addImage("c1", avatarIMG)
player.scale = 1/4;
 }
 if(mousePressedOver(avatar2)){
  gamestate = 2;
player.addImage("c1", avatar2IMG)
player.scale = 1/4;
 }
 if (gamestate === 2 ){
   startGame();
   
   greeting.hide();
 }
}
function avatars () { 
 
  avatar.visible = true ;
  avatar2.visible = true ;
  
}

function startGame (){ 
  avatar2.visible = false
  avatar.visible = false;
 player.visible = true;
  player.shapeColor = "green";
  entrance.visible = true;
  avatar.scale = 1.1;
  var ground = createSprite(400,840, 800, 100);
  player.collide(ground);
  player.velocityY = player.velocityY +11
 move();
   if (keyWentDown("UP_ARROW") && player.isTouching(entrance)){
     gamestate = 3
   }

   if(gamestate === 3){
     entrance.visible = false;
   play();
   
   }
  }

  function play(){
player.x = 63;
player.y = 153;
     ground1 = createSprite(100,200,199,33)
  player.collide(ground1);
  //player.collide(ground)
 ground2 = createSprite(277,311,110, 33)
 player.collide(ground2)
 move();
  }


  function move() {
    if(keyIsDown(RIGHT_ARROW)){
      player.x = player.x + 11
   
     }
     if(keyIsDown(LEFT_ARROW)){
       player.x = player.x - 11
    
      }
      if(keyWentDown("space")){
       player.velocityY = -33
      }
  }
  