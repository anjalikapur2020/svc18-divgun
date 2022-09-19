var play, about, how, next, home
var gameState = "waitstate"
var dropsGroup, drops, player, playerimg, tap1, tap2, tap3, tap4, monster,monster1,monster2,monster2,life,lifeearned
var watercollected = 10
var score=10

function preload() {
    bgwait = loadImage("splashOut.gif")
    dropimg = loadImage("waterdrop.png")
   // bglevel1img = loadImage("bglevell1.gif")
    bglevel1img = loadImage("bglevel1.jpg")

    popupimghow = loadImage("popup2.png")
    popupimgabout = loadImage("popup1.png")
    playerimg = loadImage("character.png")
    closetap = loadImage("closeTap.png")
    runningTap = loadImage("runningTap.gif")
    cloud1img = loadImage("cloud1img.png")
    cloud2img = loadImage("cloud2img.png")
    playerflipimg = loadImage("playerflip.png")
    bglevel2 = loadImage("bglevel2.jpg")
    monsterimg1 = loadImage("moster1.gif")
    monsterflipimg = loadImage("monsterflip.gif")

    gameoverbg = loadImage("gameover.gif")

//upload sound
level1sound=loadSound("level1bg.mp3")
level2sound=loadSound("level2bg.mp3")
glasssound=loadSound("wateringlass.mp3")
waitsound=loadSound("waitmusic.mp3")




}


function setup() {
    createCanvas(windowWidth, windowHeight)

    waitsound.loop()
    



    play = createImg("play2.png")
    play.position(23, height - 180)
    play.size(150, 150)

    about = createImg("info.png")
    about.position(30, height / 3.7)
    about.size(150, 130)

    how = createImg("how.png")
    how.position(28, height / 2)
    how.size(140, 130)

    next = createImg("next.png")
    next.position(200, 100)
    next.size(170, 150)

    home = createImg("home2.png")
    home.position(width - 110, height - 110)
    home.size(100, 100)
    home.hide()

    infopop1 = createSprite(width / 2, height / 2)
    infopop1.visible = false
    infopop1.addImage(popupimgabout)
    infopop1.scale = 1.65

    infopop2 = createSprite(width / 2, height / 2)
    infopop2.visible = false
    infopop2.addImage(popupimghow)
    infopop2.scale = 1.65

    ground=createSprite(width/2,height/2,width,height)
    ground.addImage(bglevel1img)
    ground.scale=3.5
    ground.visible=false


    invisibleground = createSprite(width / 2, height - 15, width, 10)
    invisibleground.visible = false

    player = createSprite(70, height - 80, 50, 50)
    player.visible = false
    player.addImage(playerimg)
    player.scale = .25
   // player.debug = true
    //player.setCollider("circle", (player.width) / 2.5, -95, 65)



    //level 2 sprites
    tap1 = createSprite(300, 100)
    tap1.addImage(runningTap)
    tap1.scale = 0.5

    tap2 = createSprite(500, 100)
    tap2.addImage(runningTap)
    tap2.scale = .5

    tap3 = createSprite(700, 100)
    tap3.addImage(runningTap)
    tap3.scale = .5

    tap4 = createSprite(900, 100)
    tap4.addImage(runningTap)
    tap4.scale = .5

    tap5 = createSprite(900, 100)
    tap5.addImage(runningTap)
    tap5.scale = .5

    tap6 = createSprite(900, 100)
    tap6.addImage(runningTap)
    tap6.scale = .5


    tap7 = createSprite(900, 100)
    tap7.addImage(runningTap)
    tap7.scale = .5


    tap8 = createSprite(900, 100)
    tap8.addImage(runningTap)
    tap8.scale = .5


    tap9 = createSprite(900, 100)
    tap9.addImage(runningTap)
    tap9.scale = .5

    tap10 = createSprite(900, 100)
    tap10.addImage(runningTap)
    tap10.scale = .5



    monster = createSprite(900, 100)
    monster.addImage(monsterimg1)
    monster.scale = .25
    //monster.velocityX=-8
    monster.visible=false


  
    monster1 = createSprite(width, 100)
    monster1.addImage(monsterflipimg)
    monster1.scale=.25
    //monster.velocityX=-8
    monster1.visible = false

    monster2 = createSprite(900, 100)
    monster2.addImage(monsterimg1)
    monster2.scale = .25
    //monster.velocityX=-8
    monster2.visible=false


  
    monster3 = createSprite(width, 100)
    monster3.addImage(monsterflipimg)
    monster3.scale=.25
    //monster.velocityX=-8
    monster3.visible = false



    tap1.visible = false
    tap2.visible = false
    tap3.visible = false
    tap4.visible = false
    tap5.visible = false
    tap6.visible = false
    tap7.visible = false
    tap8.visible = false
    tap9.visible = false
    tap10.visible = false

    dropsGroup = new Group()
    tapsGroup = new Group()
    cloudsGroup = new Group()
}

function draw() {

    if (gameState === "waitstate") {
        background(bgwait)
        home.hide()
        play.show()
        about.show()
        how.show()
        next.hide()
        infopop1.visible = false
        infopop2.visible = false
        player.visible = false
        //  watercollected = 0
       // drop.visible=false
//life.visible=false
//lifeearned.visible=false

    }

    //play button functioning

    if (play.mousePressed(() => {
        gameState = "playLevel1"

    }))



        if (gameState === "playLevel1") {
            background("blue")
ground.visible=true
ground.velocityX=-2

if(ground.x<=width/2.5){
    ground.x=width/2}
            home.show()
            play.hide()
            about.hide()
            how.hide()
            next.hide()
            Level1()
            player.visible = true
            if (keyDown("RIGHT_ARROW")) {
                player.x = player.x + 10
                //  player.setCollider("circle", (player.width) / 2.5, -95, 65)

                player.addImage(playerimg)
            }
            if (keyDown("LEFT_ARROW")) {
                player.x = player.x - 10
                //player.setCollider("circle",(player.width)-(player.width)/10,-95,65)

                player.addImage(playerflipimg)

            }
            //fill(0)
            // text("watercollect: "+watercollected,50,50)
            var drop=createSprite(30,20, 40, 40)
            drop.addImage(playerimg)
            drop.scale=0.1


            image(playerimg, 20, 40, 40, 40);
            
            var life= createSprite(150, 20, 170, 20);
          life.shapeColor="white"
            
            var lifeearned =createSprite (150,20, watercollected, 20);
            lifeearned.shapeColor="blue"

            if (player.x >= width) {
                player.x = 50
            }
            if (player.x <= 0) {
                player.x = width - 100
            }

            for (i = 0; i < dropsGroup.length; i++) {
                if (dropsGroup.get(i).isTouching(player)) {
                    dropsGroup.get(i).visible = false
                    watercollected +=25
glasssound.play()
console.log("done")
                    dropsGroup.get(i).destroy()
                    
                    fill("red")
                    text("touched", width / 2, height / 2)
                }
                
            }


            if (watercollected >= 185) {
                gameState = "playLevel2"
                dropsGroup.destroyEach()
                cloudsGroup.destroyEach()
                life.destroy()
                lifeearned.destroy()
            }

        }


    if (gameState === "playLevel2") {
        background(bglevel2)
        textSize(30)
        text("Score : "+score, width-200,50)
        if(!level2sound.isPlaying()){
            level2sound.play()}
//drop.visible=false
//life.visible=false
//lifeearned.visible=false

        //tap closed 
        image(closetap, 10, 40, 50, 50);
        fill("white");
        rect(50, 50, 0, 20);
        fill("blue");
        rect(50, 50, score, 20);


        player.visible = false

        if (monster.x <= 0) {
            monster.x = width
        }

        if (frameCount % 80 == 0) {
            monster.visible = true
            monster.velocityX = -8
            monster.x = Math.round(random(100, width - 100))
            monster.y = Math.round(random(100, height - 100))

            monster1.visible = true
            monster1.velocityX = 8
            monster1.x = Math.round(random(100, width - 100))
            monster1.y = Math.round(random(100, height - 100))

            monster3.visible = true
            monster3.velocityY = -8
            monster3.x = Math.round(random(100, width - 100))
            monster3.y = Math.round(random(100, height - 100))

            monster2.visible = true
            monster2.velocityY = 8
            monster2.x = Math.round(random(100, width - 100))
            monster2.y = Math.round(random(100, height - 100))

        }



        if (frameCount % 60 == 0) {
            tap1.visible = true
            tap1.x = Math.round(random(100, width - 100))
            tap1.y = Math.round(random(100, height - 100))

            tap2.visible = true
            tap2.x = Math.round(random(100, width - 100))
            tap2.y = Math.round(random(100, height - 100))

            tap3.visible = true
            tap3.x = Math.round(random(100, width - 100))
            tap3.y = Math.round(random(100, height - 100))

            tap4.visible = true
            tap4.x = Math.round(random(100, width - 100))
            tap4.y = Math.round(random(100, height - 100))

            tap5.visible = true
            tap5.x = Math.round(random(100, width - 100))
            tap5.y = Math.round(random(100, height - 100))

            tap6.visible = true
            tap6.x = Math.round(random(100, width - 100))
            tap6.y = Math.round(random(100, height - 100))

            tap7.visible = true
            tap7.x = Math.round(random(100, width - 100))
            tap7.y = Math.round(random(100, height - 100))

            tap8.visible = true
            tap8.x = Math.round(random(100, width - 100))
            tap8.y = Math.round(random(100, height - 100))

            tap9.visible = true
            tap9.x = Math.round(random(100, width - 100))
            tap9.y = Math.round(random(100, height - 100))

            tap10.visible = true
            tap10.x = Math.round(random(100, width - 100))
            tap10.y = Math.round(random(100, height - 100))

        }




        if (mousePressedOver(tap1)) {
            tap1.addImage(closetap)
            console.log(1)
            score +=1
            level2sound.stop()
        }

        if (mousePressedOver(tap2)) {
            tap2.addImage(closetap)
            console.log(2)
            score +=1
            level2sound.stop()

        }


        if (mousePressedOver(tap3)) {
            tap3.addImage(closetap)
            console.log(3)
            score +=1
            level2sound.stop()

        }


        if (mousePressedOver(tap4)) {
            tap4.addImage(closetap)
            console.log(4)
            score +=1
            level2sound.stop()

        }

        if (mousePressedOver(tap5)) {
            tap5.addImage(closetap)
            console.log(5)
            score +=1
            level2sound.stop()

        }

        if (mousePressedOver(tap6)) {
            tap6.addImage(closetap)
            console.log(6)
            score +=1
            level2sound.stop()

        }


        if (mousePressedOver(tap7)) {
            tap7.addImage(closetap)
            console.log(7)
            score +=1
            level2sound.stop()

        }


        if (mousePressedOver(tap8)) {
            tap8.addImage(closetap)
            console.log(8)
            level2sound.stop()
            score +=1

        }

        if (mousePressedOver(tap9)) {
            tap9.addImage(closetap)
            console.log(9)
            score +=1
            level2sound.stop()

        }


        if (mousePressedOver(tap10)) {
            tap10.addImage(closetap)
            console.log(10)
            score +=1
            level2sound.stop()

        }

        if (mousePressedOver(monster)) {
            gameState = "gameover"
        }

        
        if (mousePressedOver(monster1)) {
            gameState = "gameover"
        }
       

    }

    if (about.mousePressed(() => {
        gameState = "aboutstate"
        infopop1.visible = true
        how.hide()
        next.hide()

    }))

        if (how.mousePressed(() => {
            gameState = "howstate"
            infopop2.visible = true
            about.hide()
            next.hide()
            home.show()
            play.hide()
            how.hide()
        }))

            if (home.mousePressed(() => {
                gameState = "waitstate"


            }))


                if (gameState === "aboutstate") {
                    // background(180)
                    home.show()
                    play.hide()
                    about.hide()
                    player.visible = false

                }





    drawSprites()
    
   


    if(gameState !== "playLevel2"){
        if(level2sound.isPlaying()){
            level2sound.stop()}
    }
    if (gameState === "playLevel1"){
        ground.visible=true
        
        

        if(!level1sound.isPlaying()){
       level1sound.play()
    }
    }
    else{ground.visible=false
        level1sound.stop()
        glasssound.stop()
    }

    if(score>=25){
        win()
    }

    if (gameState === "gameover") {
        background(gameoverbg)
        gameOver()
        //drop.visible=false
//life.visible=false
//lifeearned.visible=false
    }
   /* if(gameState==="playLevel2"){
        textSize(30)
            text("Score : "+score, width-200,50)
            if(!level2sound.isPlaying()){
                level2sound.play()}
          
    
        }*/
}


//gameover function
function gameOver() {
    swal(
        {

            title: `Game Over!!!`,
            text: "\t\tThanks for playing!! \n\t\tWater is Life!!\n\t\t Save It!!",
            imageUrl: "restart.png",
            imageSize: "150x150",
            confirmButtonText: "Restart"
        },
        function (isConfirm) {
            if (isConfirm) {
                location.reload();
            }
        }
    )
}



//win function
function win() {
    swal(
        {

            title: `You did a Splendid Job !!!`,
            text: "\t\tThanks for playing!! \n\t\tWater is Life!!\n\t\t Save It!!",
            imageUrl: "win2.png",
            imageSize: "150x150",
            confirmButtonText: "Restart"
        },
        function (isConfirm) {
            if (isConfirm) {
                location.reload();
            }
        }
    )
}


// LEVEL 1
function Level1() {

    if (frameCount % 30 === 0) {
        drops = createSprite(width, 20)
        drops.y = Math.round(random(10, 40))
        drops.x = Math.round(random(width, 20))

        drops.velocityX = -4
        drops.velocityY = Math.round(random(2, 6))
        drops.addImage(dropimg)
        drops.scale = .05


        dropsGroup.add(drops)


        y2 = Math.round(random(height / 8, height / 3.5))
        cloud = createSprite(width, y2)
        cloud.x = drops.x
        cloud.velocityX = 4

        rand = Math.round(random(1, 2))
        switch (rand) {
            case 1: cloud.addImage(cloud1img)
                break;

            case 2: cloud.addImage(cloud2img)
                break;

            default: break;
        }
        cloud.scale = .5
        cloudsGroup.add(cloud)


    }

}


// LEVEL 2



function Level2() {


    //if (frameCount % 60 === 0) {
    tap1 = createSprite(300, 100)
    tap1.addImage(runningTap)
    tap1.scale = 0.5

    tap2 = createSprite(500, 100)
    tap2.addImage(runningTap)
    tap2.scale = .5

    tap3 = createSprite(700, 100)
    tap3.addImage(runningTap)
    tap3.scale = .5

    tap4 = createSprite(900, 100)
    tap4.addImage(runningTap)
    tap4.scale = .5

    monster = createSprite(width, 100)
    monster.addImage(monsterimg1)
    //monster.scale=.25
    //monster.velocityX=-8
    monster.visible = false
    
    monster1 = createSprite(width, 100)
    monster1.addImage(monsterflipimg)
    //monster.scale=.25
    //monster.velocityX=-8
    monster1.visible = false


    player.visible = false




    //  }

  /*  if (mousePressedOver(tap1)) {
        tap1.addImage(closetap)
        console.log("closed")
        level2sound.stop()
    }*/

}

