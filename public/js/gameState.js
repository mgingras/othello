var players = [];
var turn = false; // false = black, true = white

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
  }
  updateBoard();
}

function updateBoard() {
  var board = new Board(players);
  var htmlBoard = renderBoard({
    board: board.board
    turn: turn ? 'White\'s turn' : 'Black\'s turn'
  });
  $('body').html(htmlBoard);
}

var snakeBoard;
function newSnakeGame () {
  snakeBoard = new Board(); // Create a new board

  var htmlBoard = renderBoard({board: snakeBoard.board});
  return {
    board: snakeBoard.board,
    head: snakeBoard.snake.head(),
    food: snakeBoard.food,
    html: htmlBoard
  };
}

function moveSnake(moveDirection) {
  if(!snakeBoard){
    return {error: 'Error moving snake'};
  }
  snakeBoard.snake.move(moveDirection);
  if(snakeBoard.gameOver){
    return 'gameOver';
    return;
  }
  var htmlBoard = renderBoard({board: snakeBoard.board});
  return {
    board: snakeBoard.board,
    head: snakeBoard.snake.head(),
    food: snakeBoard.food,
    html: htmlBoard
  };
}
