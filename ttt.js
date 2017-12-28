let game =  new Game()


const startGame = function(){
  game.addPlayers();
  displayPlayerTurn();
}


const reloadGame = function(){
  location.reload();
}

const displayPlayerTurn = function(){
  let correntPlayerName = game.getCorrPlayer().getName();
  document.getElementById('display').innerText = `${correntPlayerName}'s turn `;
}

const displayDrow = function(){
  document.getElementById('display').innerText = 'game drown';
}

const displayWinner = function(playerName){
  document.getElementById('display').innerText = `${playerName} has won`;
}

const updateClickedCell = function(cell,symbol){
  cell.innerText = symbol;
}

const handleMove = function (id,correntPlayer) {
  let cell =  document.getElementById(id);
  let symbol = correntPlayer.getSymbol();
  if(game.hasMoveHappend(id)){
    cell.disabled = true;
  }else {
    game.updateMoves(id,correntPlayer);
    updateClickedCell(cell,symbol);
    game.changeCorrPlayer();
    displayPlayerTurn();
  }
}

const updateTable = function(event){
  let id = +(event.target.id);
  let correntPlayer = game.getCorrPlayer();

  if(game.isInPlayState()){
    handleMove(id,correntPlayer);
  }
  if(correntPlayer.hasWon()){
    game.state = 'won';
    displayWinner(correntPlayer.getName());
  }
  if(game.isDrow()){
    game.state = 'Drow';
    displayDrow();
  }
}


const insertStartClickListner = function(){
  let reload = document.getElementById('reload');
  reload.onclick = reloadGame ;

}

const insertClickListener = function(){
  let board = document.getElementById('tttBoard');
  board.onclick = updateTable;

}

const loadGame = function(){
  insertClickListener();
  insertStartClickListner();
  startGame();
}
window.onload = loadGame;
