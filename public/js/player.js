function Player(isAI, pNum, pieces) {
  this.isAI = isAI;
  this.pNum = pNum;
  this.pieces = [];
  if(!pieces){
    if(pNum === 1){
      this.pieces.push({
        player: pNum,
        pos: {
          x: 3,
          y: 3
        }
      });
      this.pieces.push({
        player: pNum,
        pos: {
          x: 4,
          y: 4
        }
      });
    } else {
      this.pieces.push({
        player: pNum,
        pos: {
          x: 4,
          y: 3
        }
      });
      this.pieces.push({
        player: pNum,
        pos: {
          x: 3,
          y: 4
        }
      });
    }
  }else{
    this.pieces = pieces;
  }
}

Player.prototype.move = function(arg1, force) {
  if(!this.isAI || force){
    move = arg1;
    this.pieces.push({
      player: this.pNum,
      pos: move
    });
  } else{
    var board = arg1;
    move = this._getMove(board);
    this.pieces.push({
      player: this.pNum,
      pos: move
    });
  }
  this.lastMove = move;
}
Player.prototype._getMove = function(board) {
  var allMoves = board.getAllMoves(this.pNum);
  return allMoves[0].pos;
}
