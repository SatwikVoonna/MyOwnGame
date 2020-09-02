class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    Player1 = createSprite(1300,200);
    Player1.addImage("Player1",Player1_img);
    Player1.scale = 0.3;
    Player2 = createSprite(1300,700);
    Player2.addImage("Player2",Player2_img);
    Player2.scale = 0.4;
    Player3 = createSprite(200,700);
    Player3.addImage("Player3",Player3_img);
    Player3.scale = 0.4;
    Player4 = createSprite(200,200);
    Player4.addImage("Player4",Player4_img);
    Player4.scale = 0.3;
    Players = [Player1, Player2, Player3, Player4];
  }
  play(){
    form.hide();
    
    Player.getPlayerInfo();

    player.getCarsAtEnd();
    
    if(allPlayers !== undefined){
      background(battleGround);
      //image(battleGround, 0,displayHeight,displayWidth, displayHeight);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      

      //x and y position of the cars
      var x = 200 ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;
      }
      
    }

        //position the cars a little away from each other in x direction
        //x = x + 245;
        //use data form the database to display the cars in y direction
        /*y = displayHeight - allPlayers[plr].distance;
        Players[index-1].x = x;
        Players[index-1].y = y;
       // console.log(index, player.index)

       
        
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

   

    if(player.distance > 4300){
      gameState = 2;
      player.rank = player.rank + 1;
      Player.updateCarsAtEnd(player.rank);
      fill("white");
      textSize(25);
      text("Your Rank:" + player.rank,displayWidth/2 - 50, y-12);
    }*/
    
    
    if(keyIsDown("w") ){
      player.distance -=10
      
      player.update();
    }
    if(keyIsDown("a") ){
      player.distance -=10
      
      player.update();
    }
    if(keyIsDown("s") ){
      player.distance +=10
     
      player.update();
    }
    if(keyIsDown("d") ){
      player.distance +=10
      
      player.update();
    }
   
    drawSprites();
  }
  createBullets1(                                                                                                                                                                               ){
    var bullets = createSprite(200,360,5,10);
    bullets.velocityY = -6;
    bullets.x = Player1.x;
    bullets.y = Player1.y;
    bulletsGroup1.add(bullets);
    bullets.addImage("images/bullet.png");
    return bullets;
  }
  createBullets2(                                                                                                                                                                               ){
    var bullets = createSprite(200,360,5,10);
    bullets.velocityY = -6;
    bullets.x = Player2.x;
    bullets.y = Player1.y;
    bulletsGroup2.add(bullets);
    bullets.addImage("images/bullet2.png");
    return bullets;
  }
  createBullets3(                                                                                                                                                                               ){
    var bullets = createSprite(200,360,5,10);
    bullets.velocityY = -6;
    bullets.x = Player3.x;
    bullets.y = Player1.y;
    bulletsGroup3.add(bullets);
    bullets.addImage("images/bullet3.png");
    return bullets;
  }
  createBullets4(                                                                                                                                                                               ){
    var bullets = createSprite(200,360,5,10);
    bullets.velocityY = -6;
    bullets.x = Player4.x;
    bullets.y = Player1.y;
    bulletsGroup4.add(bullets);
    bullets.addImage("images/bullet4.png");
    return bullets;
  }


   end(){
    console.log("Game Ended");
  }
}
