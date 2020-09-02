var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var Players, Player1, Player2, Player3, Player4;

var track, Player1_img, Player2_img, Player3_img, Player4_img;

var battleGround;

var bulletGroup1, bulletGroup2, bulletGroup3, bulletGroup4;

function preload(){
  track = loadImage("images/BattleGround.jpg");
  battleGround = loadImage("images/BattleGround.jpg");
  Player1_img = loadImage("images/Player1.png");
  Player2_img = loadImage("images/Player2.png");
  Player3_img = loadImage("images/Player3.png");
  Player4_img = loadImage("images/Player4.png");
  
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
