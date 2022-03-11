var platform
var platformG
var rockG
var form1
var PLAY = 1
var score = 0
var END = 0
var LOGING = 2
var gameState = LOGING
var hearts = 3;
var jumpSound

var backgroundimg, boyRunning, rockimg, roadimg, fireimg, andesiteimg, heart1img, heart2img, heart3img, platformimg, boximg;

function preload() {
  console.log("preload ")
  backgroundimg = loadImage("beach background.jpg")
  backgroundimg1 = loadImage("assets/bg.jpg")
  boyRunning = loadImage('./assets/boyrunning.gif')
  rockimg = loadImage('./assets/rock.png')
  roadimg = loadImage('./assets/road.png')
  fireimg = loadImage('./assets/fire.png')
  andesiteimg = loadImage('./assets/andesite.png')
  heart1img = loadImage('./assets/heart1.png')
  heart2img = loadImage('./assets/heart2.png')
  heart3img = loadImage('./assets/heart3.png')
  //boximg = loadImage("assets/box.png")
  platformimg = loadImage('./assets/platform.png')

  jumpSound = loadSound("assets/jump.mp3")
}



function setup() {
  createCanvas(1200, 800)
  //background image
  //bg = createSprite(590,385,1,1);
  //bg.addImage(backgroundimg);
  //bg.scale = 1.3

  player = createSprite(140, 620, 40, 40)
  player.addImage("boy", boyRunning)
  player.scale = 0.2
  player.debug = true
  player.setCollider("rectangle", 70, 30, 650, 850)

  road = createSprite(340, 780, 400, 100)
  console.log()
  road.addImage(roadimg)
  road.velocityX = -4

  heart1 = createSprite(400, 100, 20, 20)
  heart1.addImage(heart1img)
  heart1.scale = 0.2

  heart2 = createSprite(800, 100, 20, 20)
  heart2.addImage(heart2img)
  heart2.scale = 0.2

  heart3 = createSprite(600, 100, 20, 20)
  heart3.addImage(heart3img)
  heart3.scale = 0.2

  //box = createSprite(990,70,200,200)
  //box.addImage(boximg)
  //box.scale=0.8
  rockG = new Group()
  platformG = new Group()

  //platform.velocity=-4
}

function draw() {
  background(backgroundimg);





  if (gameState == LOGING) {
    start();
  }


  if (gameState == PLAY) {
    background(backgroundimg1);
    if (road.x < 600) {
      road.x = road.width / 2

    }
    player.velocityY = player.velocityY + 0.5
    player.collide(road)

    stroke("black")
    fill("yellow")
    textSize(50)
    text("Score:" + score, 600, 100)

    score = Math.round(frameCount / 200 + score)

    if (keyDown("space")) {
      player.velocityY = -17
      jumpSound.play()
    }
    if (player.x < 140) {
      player.x = 140
    }
    sponePlatform();
    spone();
    player.collide(platformG)



    if (player.isTouching(rockG)) {
      hearts = hearts - 1
      //console.log(hearts)
    }
    if (hearts == 3) {
      heart1.visivble == true
      heart2.visivble == true
      heart3.visivble == true
    }
    else if (hearts == 2) {
      heart1.visivble == false
      heart2.visivble == true
      heart3.visivble == true
    }
    else if (hearts == 1) {
      heart1.visivble == false
      heart2.visivble == false
      heart3.visivble == true
    }
    else if (hearts == 0) {
      //gameState=END
    }
    drawSprites()
  }


  if (gameState == END) {

  }















}

function spone() {
  if (frameCount % 150 == 0) {
    rock = createSprite(1000, 690, 40, 40)
    var r = Math.round(random(1, 3))
    rockG.add(rock)
    if (r == 1) {
      rock.addImage(rockimg)
      rock.scale = 0.5
      rock.velocityX = -7
    }
    else if (r == 2) {
      rock.addImage(fireimg)
      rock.scale = 0.7
      rock.velocityX = -5
    }
    else if (r == 3) {
      rock.addImage(andesiteimg)
      rock.scale = 0.2
      rock.velocityX = -8
    }



    // fire = createSprite(500,660,20,20)
    // fire.addImage(fireimg)
    //fire.scale=0.3
    //fire.velocityX=-3

    //andesite = createSprite(900,660,20,20)
    //andesite.addImage(andesiteimg)
    // andesite.scale=0.3
    // andesite.velocityX=-3
  }


}
function sponePlatform() {
  if (frameCount % 200 == 0) {
    //console.log("hi")  
    var p = Math.round(random(400, 500))
    platform = createSprite(800, p, 50, 50)
    platform.addImage(platformimg)
    platform.scale = 0.7
    platform.velocityX = -5
    platformG.add(platform)
  }

}

function start() {
  //console.log("hi")
  form1 = new Form();

  form1.display();
}
