class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
    gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state,
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var countref = await database.ref("playerCount"). once("value");
      if(countref.exists()){
       playerCount = countref.val();
       player.getCount();
       //async func vl await for player count val and only then the form vl be created and displayed
       //opening the form and quickly pressing the play button vl throw an error coz the database query to get playerCount hasn't been completed yet
      }
      form = new Form();
      form.display();
    }
  }

    play(){
       form.hide();
       text("GAME START",120,100);
       Player.getplayinfo();

       if(allPlayers !== undefined){
          var gap = 130;
          for(var plr in allPlayers){
            if(plr == "player"+ player.index){
              fill("red");
            }
            else{
              fill(0);
            }
            gap = gap +20;
            text(allPlayers [plr].name + ":" + allPlayers[plr].distance,120,gap);
          }
       }

       if(keyIsDown(UP_ARROW) && player.index !== null){
          player.distance +=50;
          player.update();
       }
    }
  
}
