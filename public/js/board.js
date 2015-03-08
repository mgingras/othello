function Board(players) {
  this.height = 8;
  this.width = this.height;

  this._placeBoard();
  this._placePlayers(players);
}

// Place walls and empty slots
Board.prototype._placeBoard = function() {
  var board = [];
  for (var x = 0; x < this.width; x++) {
    board[x] = [];
    for (var y = 0; y < this.height; y++) {
      board[x][y] = {
        type: 'empty',
        pos: {
          x: x,
          y: y
        }
      };
    }
  }
  this.board = board;
};

Board.prototype._placePlayers = function(players) {
  var player;
  var piece;
  for (var i = players.length - 1; i >= 0; i--) {
    player = players[i]
    for (var j = player.pieces.length - 1; j >= 0; j--) {
      piece = player.pieces[j];
      this.board[piece.pos.x][piece.pos.y] = {
        type: 'p' + player.pNum,
        pos: piece.pos
      }
    };
  };
}
