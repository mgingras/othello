var players = [];
var turn; // Player Number
var board;

$(function() {
  $(document).on('keydown', function(e) {
    if(e.keyCode  === 32){
      gameType = $("input[type='radio'][name='gameType']:checked").val();
      newGame(gameType);
    }
  });
  $('#start').on('click', function() {
    gameType = $("input[type='radio'][name='gameType']:checked").val();
    newGame(gameType);
  })
});

function newGame(gameType) {
  $(document).off('keydown').on('keydown', function(e) {
    if(e.keyCode === 27){
      location.reload();
    }
  });
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
  board = new Board(players, turn);
  var htmlBoard = renderBoard({
    board: board.board,
    turn: turn ? 'White\'s' : 'Black\'s'
  });
  $('body').html(htmlBoard);
  setTimeout(function() {
    detectGameOver();
    takeTurn();
  }, 100);
}


function takeTurn() {
  if(!players[turn].isAI){
    $(document).on('click', function(e) {
      if(e.target.classList.contains('empty')){
        var move;
        try{
          move = JSON.parse(e.target.classList[2]);
        } catch(e){}
        var valid = board.validateMove(move, turn);
        if(move && board.validateMove(move, turn)){
          $(document).off('click');
          players[turn].move(move, board);
          turn = (turn === 0) ? 1 : 0; // Switch turn
          updateBoard();
        }
      }
    })
  } else {
    players[turn].move(board);
    turn = (turn === 0) ? 1 : 0; // Switch turn
    updateBoard();
  }
}

function detectGameOver() {
  var playerToMove = board.detectGameOver(turn);
  var noMoreMoves = false;
  if(playerToMove >= 0){
    turn = playerToMove;
  } else {
    noMoreMoves = true;
  }
  if((players[0].pieces.length + players[1].pieces.length) === 64 || noMoreMoves){
    if(players[0].pieces.length === players[1].pieces.length){
      alert('Game over: Tie Game!\nBlack: ' + players[0].pieces.length + '\nWhite: ' + players[1].pieces.length);
      return location.reload();
    }
    var p0Wins = players[0].pieces.length > players[1].pieces.length
    alert('Game Over: ' + (p0Wins? 'Black wins!!!' : 'White wins!!!') + '\nBlack: ' + players[0].pieces.length + '\nWhite: ' + players[1].pieces.length);
    return location.reload();
  }
}
