var PLAY =1;
var END = 0;
var gameState = PLAY;

var canvas, backgroundImage;
var ball;
var tilesG;
var tiles2G;
var danger1,danger2,tileimg1,tileimg2,tileimg3,ballimg;


function preload(){
  backgroundImage = loadImage("background.jpg");
  danger1 = loadImage("dan2.png");
  danger2 = loadImage("danger2.png");
  ballimg = loadImage("ball1.jpg");
  tileimg1 = loadImage("1.jpg");
  tileimg2 = loadImage("tile2.jpg");
  tileimg3 = loadImage("tile3.png");
}

function setup(){
 createCanvas (500,900);

 ball = createSprite(250,820,40,40);
 //ball.shapeColor = 'red';
  ball.addImage(ballimg);
  //ball.scale = 0.1


  tilesG = new Group();
  tiles2G = new Group();
}

function draw(){
background(backgroundImage);

  if (keyDown(LEFT_ARROW)) {
    ball.x -= 10;
  }

  if (keyDown(RIGHT_ARROW)) {
    ball.x += 10;
  }

  

  /*if(tilesG.isTouching(ball)) {
    tiles.shapeColor = 'yellow';
    console.log("this is a game")
    //ball.bounce(tilesG);
    if (keyDown (UP_ARROW)){
      ball.velocityY = -3
    }

    ball.velocityY = ball.velocityY + 0.4;
  }*/
  
  for(var i =0; i<tilesG.length; i++){
    if(tilesG.get(i).isTouching(ball))
    //tilesG.get(i).destroy();
    ball.velocityY = -1;
  } 

  spawnTiles();
drawSprites();
}

function spawnTiles(){
  if (frameCount % 200 === 0){
    tiles = createSprite(250,-50)
    tiles.y = Math.round(random(10,300))
    //tiles.shapeColor = 'red'
    tiles.velocityX = 0;
    tiles.velocityY = 4;



    var rand = Math.round(random(1,3));
       switch(rand) {
         case 1: tiles.addImage(tileimg1);
                 break;
         case 2: tiles.addImage(tileimg2);
         tiles.scale = 0.4;
                 break;
         case 3: tiles.addImage(tileimg3);
         tiles.scale = 0.1;
                 break;
         default: break;
       }

       //tiles.scale = 0.3;

    tiles.lifeTime = 400;

    tilesG.add (tiles);

  }

  if(frameCount % 450 === 0) {
    tiles2 = createSprite(100,-10)
    tiles2.velocityX = 0;
    tiles2.velocityY = 3;
    //tiles2.shapeColor = 'blue'
    //tiles2.x = Math.round(random(10,400));

    var rand = Math.round(random(1,2));
       switch(rand) {
         case 1: tiles2.addImage(danger1);
                 break;
         case 2: tiles2.addImage(danger2);
                 break;
         default: break;
       }

       tiles2.scale = 0.4;

    //tiles2.velocityX = 0;
    //tiles2.velocityY = 3;
    tiles2.lifeTime = 400;

    tiles2G.add (tiles2);

  }

  
    


  
  
}

/*for(var i =0; i<tilesG.lenght; i++){
  if(tilesG.get(i).isTouching(ball))
  tilesG.get(i).destroy();
} */