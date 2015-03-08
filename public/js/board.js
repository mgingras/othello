function Board(players, turn) {
  this.height = 8;
  this.width = this.height;

  this._placeBoard();
  this._placePlayers(players);
  this._resolveBoard(players, turn);
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

Board.prototype._resolveBoard = function(players, turn){
  var turn = turn ? 0 : 1;
  if(!players[turn].lastMove){
    return; // First turn
  }
  var move = players[turn].lastMove;
  var flipped = [];
  var up = this._getUp(move.x, move.y - 1, turn);
  flipped = flipped.concat(up ? up : []);
  var down = this._getDown(move.x, move.y + 1, turn);
  flipped = flipped.concat(down ? down : []);
  var left = this._getLeft(move.x - 1, move.y, turn);
  flipped = flipped.concat(left ? left : []);
  var right = this._getRight(move.x + 1, move.y, turn);
  flipped = flipped.concat(right ? right : []);
  var upLeft = this._getUpLeft(move.x - 1, move.y - 1, turn);
  flipped = flipped.concat(upLeft ? upLeft : []);
  var downLeft = this._getDownLeft(move.x - 1, move.y + 1, turn);
  flipped = flipped.concat(downLeft ? downLeft : []);
  var upRight = this._getUpRight(move.x + 1, move.y - 1, turn);
  flipped = flipped.concat(upRight ? upRight : []);
  var downRight = this._getDownRight(move.x + 1, move.y + 1, turn);
  flipped = flipped.concat(downRight ? downRight : []);
  for (var i = flipped.length - 1; i >= 0; i--) {
    players[turn].pieces.push({
      player: turn,
      pos: flipped[i].pos
    });
  };
  var otherPlayer = turn ? 0 : 1;
  for (var j = flipped.length - 1; j >= 0; j--) {
    _.remove(players[otherPlayer].pieces, function(piece) {
      return piece.pos.x === flipped[j].pos.x && piece.pos.y === flipped[j].pos.y;
    })
  };
  // console.dir(flipped);
}

Board.prototype.validateMove = function(move, turn){
  var x = move.x;
  var y = move.y;
  var valid = false;
  valid = valid || this._getUp(x, y - 1, turn);
  valid = valid || this._getDown(x, y + 1, turn);
  valid = valid || this._getLeft(x - 1, y, turn);
  valid = valid || this._getRight(x + 1, y, turn);
  valid = valid || this._getUpLeft(x - 1, y - 1, turn);
  valid = valid || this._getDownLeft(x - 1, y + 1, turn);
  valid = valid || this._getUpRight(x + 1, y - 1, turn);
  valid = valid || this._getDownRight(x + 1, y + 1, turn);
  return !!valid;
}

Board.prototype._getUp = function(x, y, turn){
  var pieces = [];
  while(y >= 0){
    if(this.board[x][y].type === 'empty'){
      return false;
    }
    if(this.board[x][y].type === 'p'+turn){
      if(pieces.length === 0){
        return false;
      } else {
        return pieces;
      }
    }
    pieces.push(this.board[x][y]);
    y--;
  }
  return false;
}
Board.prototype._getDown = function(x, y, turn){
  var pieces = [];
  while(y <= 7){
    if(this.board[x][y].type === 'empty'){
      return false;
    }
    if(this.board[x][y].type === 'p'+turn){
      if(pieces.length === 0){
        return false;
      } else {
        return pieces;
      }
    }
    pieces.push(this.board[x][y]);
    y++;
  }
  return false;
}
Board.prototype._getLeft = function(x, y, turn){
  var pieces = [];
  while(x >= 0){
    if(this.board[x][y].type === 'empty'){
      return false;
    }
    if(this.board[x][y].type === 'p'+turn){
      if(pieces.length === 0){
        return false;
      } else {
        return pieces;
      }
    }
    pieces.push(this.board[x][y]);
    x--;
  }
  return false;
}
Board.prototype._getRight = function(x, y, turn){
  var pieces = [];
  while(x <= 7){
    if(this.board[x][y].type === 'empty'){
      return false;
    }
    if(this.board[x][y].type === 'p'+turn){
      if(pieces.length === 0){
        return false;
      } else {
        return pieces;
      }
    }
    pieces.push(this.board[x][y]);
    x++;
  }
  return false;
}
Board.prototype._getUpLeft = function(x, y, turn){
  var pieces = [];
  while(x >= 0 && y >= 0){
    if(this.board[x][y].type === 'empty'){
      return false;
    }
    if(this.board[x][y].type === 'p'+turn){
      if(pieces.length === 0){
        return false;
      } else {
        return pieces;
      }
    }
    pieces.push(this.board[x][y]);
    x--;
    y--;
  }
  return false;
}
Board.prototype._getDownLeft = function(x, y, turn){
  var pieces = [];
  while(x >= 0 && y <= 7){
    if(this.board[x][y].type === 'empty'){
      return false;
    }
    if(this.board[x][y].type === 'p'+turn){
      if(pieces.length === 0){
        return false;
      } else {
        return pieces;
      }
    }
    pieces.push(this.board[x][y]);
    x--;
    y++
  }
  return false;
}
Board.prototype._getUpRight = function(x, y, turn){
  var pieces = [];
  while(x <= 7 && y >= 0){
    if(this.board[x][y].type === 'empty'){
      return false;
    }
    if(this.board[x][y].type === 'p'+turn){
      if(pieces.length === 0){
        return false;
      } else {
        return pieces;
      }
    }
    pieces.push(this.board[x][y]);
    x++;
    y--;
  }
  return false;
}
Board.prototype._getDownRight = function(x, y, turn){
  var pieces = [];
  while(x <= 7 && y <= 7){
    if(this.board[x][y].type === 'empty'){
      return false;
    }
    if(this.board[x][y].type === 'p'+turn){
      if(pieces.length === 0){
        return false;
      } else {
        return pieces;
      }
    }
    pieces.push(this.board[x][y]);
    x++;
    y++;
  }
  return false;
}

Board.prototype.getAllMoves = function(turn) {
  var moves = [];
  for (var i = players[turn].pieces.length - 1; i >= 0; i--) {
    piece = players[turn].pieces[i];
    moves = moves.concat(this._movesAvailable(piece.pos, turn));
  }
  return moves;
}

// DETECT GAME OVER SHIT
Board.prototype.detectGameOver = function(turn){
  var piece;
  for (var i = players[turn].pieces.length - 1; i >= 0; i--) {
    piece = players[turn].pieces[i];
    if(this._movesAvailable(piece.pos, turn).length > 0){
      return false;
    }
  }
  return true;
}

Board.prototype._movesAvailable = function(move, turn){
  var x = move.x;
  var y = move.y;
  var moves = [];

  moves = moves.concat(this._movesUp(x, y - 1, turn));
  moves = moves.concat(this._movesDown(x, y + 1, turn));
  moves = moves.concat(this._movesLeft(x - 1, y, turn));
  moves = moves.concat(this._movesRight(x + 1, y, turn));
  moves = moves.concat(this._movesUpLeft(x - 1, y - 1, turn));
  moves = moves.concat(this._movesDownLeft(x - 1, y + 1, turn));
  moves = moves.concat(this._movesUpRight(x + 1, y - 1, turn));
  moves = moves.concat(this._movesDownRight(x + 1, y + 1, turn));
  // console.dir(moves);
  return moves;
}

Board.prototype._movesUp = function(x, y, turn){
  var pieces = [];
  while(y >= 0){
    if(this.board[x][y].type === 'empty'){
      return pieces.length === 0 ? [] : [this.board[x][y]];
    }
    if(this.board[x][y].type === 'p'+turn){
      return [];
    }
    pieces.push(this.board[x][y]);
    y--;
  }
  return [];
}
Board.prototype._movesDown = function(x, y, turn){
  var pieces = [];
  while(y <= 7){
    if(this.board[x][y].type === 'empty'){
      return pieces.length === 0 ? [] : this.board[x][y];
    }
    if(this.board[x][y].type === 'p'+turn){
      return [];
    }
    pieces.push(this.board[x][y]);
    y++;
  }
  return [];
}
Board.prototype._movesLeft = function(x, y, turn){
  var pieces = [];
  while(x >= 0){
    if(this.board[x][y].type === 'empty'){
      return pieces.length === 0 ? [] : this.board[x][y];
    }
    if(this.board[x][y].type === 'p'+turn){
      return [];
    }
    pieces.push(this.board[x][y]);
    x--;
  }
  return [];
}
Board.prototype._movesRight = function(x, y, turn){
  var pieces = [];
  while(x <= 7){
    if(this.board[x][y].type === 'empty'){
      return pieces.length === 0 ? [] : this.board[x][y];
    }
    if(this.board[x][y].type === 'p'+turn){
      return [];
    }
    pieces.push(this.board[x][y]);
    x++;
  }
  return [];
}
Board.prototype._movesUpLeft = function(x, y, turn){
  var pieces = [];
  while(x >= 0 && y >= 0){
    if(this.board[x][y].type === 'empty'){
      return pieces.length === 0 ? [] : this.board[x][y];
    }
    if(this.board[x][y].type === 'p'+turn){
      return [];
    }
    pieces.push(this.board[x][y]);
    x--;
    y--;
  }
  return [];
}
Board.prototype._movesDownLeft = function(x, y, turn){
  var pieces = [];
  while(x >= 0 && y <= 7){
    if(this.board[x][y].type === 'empty'){
      return pieces.length === 0 ? [] : this.board[x][y];
    }
    if(this.board[x][y].type === 'p'+turn){
      return [];
    }
    pieces.push(this.board[x][y]);
    x--;
    y++
  }
  return [];
}
Board.prototype._movesUpRight = function(x, y, turn){
  var pieces = [];
  while(x <= 7 && y >= 0){
    if(this.board[x][y].type === 'empty'){
      return pieces.length === 0 ? [] : this.board[x][y];
    }
    if(this.board[x][y].type === 'p'+turn){
      return [];
    }
    pieces.push(this.board[x][y]);
    x++;
    y--;
  }
  return [];
}
Board.prototype._movesDownRight = function(x, y, turn){
  var pieces = [];
  while(x <= 7 && y <= 7){
    if(this.board[x][y].type === 'empty'){
      return pieces.length === 0 ? [] : this.board[x][y];
    }
    if(this.board[x][y].type === 'p'+turn){
      return [];
    }
    pieces.push(this.board[x][y]);
    x++;
    y++;
  }
  return [];
}
