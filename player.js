let isSubset = function(set,superSet){
  return superSet.some(function(mainSet){
    return mainSet.every(function(element){
      return set.includes(element);
    });
  });
}
let winningConditions = [[1,2,3],[4,5,6],[7,8,9],[1,5,9],[3,5,7],[1,4,7],
[2,5,8],[3,6,9]];


let Player = function(playerName,symbol){
  this.playerName = playerName;
  this.symbol = symbol;
  this.moves = [];
}
Player.prototype.getName = function(){
  return this.playerName;
}

Player.prototype.getSymbol = function(){
  return this.symbol;
}

Player.prototype.hasWon= function () {
  return isSubset(this.moves,winningConditions);
};

Player.prototype.hasThisMove = function(move){
  return this.moves.includes(move);
}

Player.prototype.updateMoves = function(move){
  this.moves.push(move);
}
