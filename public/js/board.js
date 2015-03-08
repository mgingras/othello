function Board() {
  this.height = 8;
  this.width = this.height;

  this.update();
}

Board.prototype.update = function() {
  this._placeBoard();
};

// Place walls and empty slots
Board.prototype._placeBoard = function() {
  var board = [];
  for (var x = 0; x < this.width; x++) {
    board[x] = [];
    for (var y = 0; y < this.height; y++) {
      if(x === 0 || y === 0 || x === this.width - 1 || y === this.height - 1){
        board[x][y] = {
          type: 'border'
        };
      } else {
        board[x][y] = {
          type: 'empty'
        };
      }
      board[x][y].pos = {
        x: x,
        y: y
      };
    }
  }
  this.board = board;
};
