const Game = function(){
  this.players = [];
  this.totalMoves = 0;
  this.correntPlayer = 0;
  this.state = `it's play`;
}

Game.prototype.addPlayers = function(){
  this.players.push(new Player('player1','X'));
  this.players.push(new Player('player2','O'));
}

Game.prototype.getCorrPlayer = function(){
  return this.players[this.correntPlayer];
}

Game.prototype.hasMoveHappend = function(move) {
  return this.players[0].hasThisMove(move) || this.players[1].hasThisMove(move);
}

Game.prototype.changeCorrPlayer = function(){
  this.correntPlayer=1-this.correntPlayer;
}

Game.prototype.updateMoves = function(id,correntPlayer){
  this.totalMoves++;
  correntPlayer.updateMoves(id);
}

Game.prototype.isInPlayState = function(){
  return this.state == `it's play`;
}

Game.prototype.isDrow = function(){
  return this.totalMoves == 9 ;
}
