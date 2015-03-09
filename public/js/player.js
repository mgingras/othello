/**
 * Player object
 * @param {Object|Boolean} AI     If the player is AI controlled
 * @param {[number]}  pNum     The player number
 * @param {[object]}  [pieces] Optional array of pieces the player controlls
 */
function Player(AI, pNum, pieces) {
  this.isAI = !!AI;
  if(isAI){
    this.typeofAI = isAI.aiType;
  }
  this.pNum = pNum;
  this.pieces = [];
  if(this.isAI){
    this.AI = new AI(this.pNum, this.typeofAI);
  }

  // Default starting pieces if the pieces aren't passed in
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
  } else {
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
    if(!move){
      return;
    }
    this.pieces.push({
      player: this.pNum,
      pos: move
    });
  }
  this.lastMove = move;
}
/**
 * Helper function used by AI to determine move
 * @param  {Board}           Board objec of the current board state
 * @return {Object} pos      Returns an position object
 * @return {Number} pos.x    The x coordinate to move to
 * @return {Number} pos.y    The y coordinate to move to
 */
Player.prototype._getMove = function(board) {
  if(!this.isAI){
    return console.error('Tried to use _getMove by player not AI');
  }

  var allMoves = board.getAllMoves(this.pNum);
  if(allMoves.length > 0){
    return allMoves[0].pos;
  }
}
