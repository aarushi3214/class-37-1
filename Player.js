class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }
   
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  static getplayinfo(){
    var playerinfo = database.ref("players");
    playerinfo.on("value",(data)=>{
    allPlayers= data.val();
    //we need to change the ref to the database as all the players r gonna be inside the "players"in the database
    //we vl use the property 'index' of the player to update the particular player's val in the database
    });
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name, 
      distance:this.distance
    });
  }
}
