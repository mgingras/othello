var players = [];
var turn; // Player Number

$(function() {
  $(document).on('keydown', function(e) {
    if(e.keyCode  === 32){
      gameType = $("input[type='radio'][name='gameType']:checked").val();
      newGame(gameType);
    }
  });
});

function newGame(gameType) {
  console.log('here')
  players = [];
  if(gameType === 'PvC'){
    players.push((new Player(false, 0)));
    players.push((new Player(true, 1)));
  } else if(gameType === 'CvC'){
    players.push((new Player(true, 0)));
    players.push((new Player(true, 1)));
  } else if(gameType === 'PvP'){
    players.push((new Player(false, 0)));
    players.push((new Player(false, 1)));
  }
  turn = 0; // player 0
  updateBoard();
}

function updateBoard() {
  var board = new Board(players);
  var htmlBoard = renderBoard({
    board: board.board,
    turn: turn ? 'White\'s turn' : 'Black\'s turn'
  });
  $('body').html(htmlBoard);
  takeTurn();
}


function takeTurn() {
  if(!players[turn].isAI){
    $(document).on('click', function(e) {
      if(e.target.classList.contains('empty')){
        var move;
        try{
          move = JSON.parse(e.target.classList[2]);
        } catch(e){}
        if(move){
          $(document).off('click');
          players[turn].move(move);
          turn = (turn === 0) ? 1 : 0; // Switch turn
          updateBoard();
        }
      }
      console.dir(e);
    })
  } else {
    players[turn].move();
  }
  
}
