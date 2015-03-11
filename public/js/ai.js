function AI(pNum, type, maxDepth) {
  this.pNum = pNum;
  this.maxDepth = maxDepth || 4;
  this.type = type;

  // Use frontier disks heuristics, mobility heuristics or combined
  if(this.type === 'coinParity'){
    this.calculateValue = function(board) {
      return this.coinParity(board);
    }.bind(this);
    // this.calculateValue = this.frontierDisks;
  }else if(this.type === 'mobility'){
    this.calculateValue = function(board) {
      return this.mobility(board);
    }.bind(this);
    // this.calculateValue = this.mobility;
  } else {
    this.calculateValue = function(board) {
      return this.mobility(board) + this.cornerHunter(board) + this.coinParity(board);
    }.bind(this);
  }
}

/**
 * Generate a move from the AI
 * @param  {Object} board Board Object representing the current state of the board
 * @return {Object} pos      Returns an position object
 * @return {Number} pos.x    The x coordinate to move to
 * @return {Number} pos.y    The y coordinate to move to
 */
AI.prototype.move = function(board) {
  this.visits = 0;
  var res = this.minimax(board, 0, this.pNum, this.maxDepth, -100000, 100000);
  console.log(this.visits)
  // console.dir(res);
  return res.pos;

}
/**
 * Minimax algo
 * @param  {Object} board    Board state at current depth
 * @param  {Number} depth    Current depth
 * @param  {Number} pNum     Current player to evaluate for
 * @param  {Number} maxDepth Max depth to recurse
 * @param  {Object} move     Move that got you there
 * @return {Object} result
 * @return {Number} result.score  Score resulting from this recurse
 * @return {Number} result.move   Move that got you there
 */
AI.prototype.minimax = function(board, depth, pNum, maxDepth, alpha, beta) {
  // console.log(depth);
  this.visits++;
  var newBoard, score, move;
  var bestMove;
  var moves = board.getAllMoves(pNum);
  if(depth >= maxDepth || moves.length === 0){
    // console.log(this.calculateValue(board));
    return this.calculateValue(board);
  }
  if(pNum === this.pNum){
    // Maximize
    for (var i = moves.length - 1; i >= 0; i--) {
      move = moves[i];
      newBoard = board.copy();
      this._applyMove(newBoard, move.pos, pNum);
      score = this.minimax(newBoard, (depth + 1), (pNum ? 0 : 1), maxDepth, alpha, beta);
      move.score = score;
      if(score > alpha){
        alpha = score;
        bestMove = move;
      }
      if(beta <= alpha){
        break;
      }
    }
    if(depth === 0){
      return bestMove;
    } else {
      return alpha;
    }
  } else {
    // Minimize
    var min = 100000;
    for (var i = moves.length - 1; i >= 0; i--) {
      move = moves[i];
      newBoard = board.copy();
      this._applyMove(newBoard, move.pos, pNum);
      score = this.minimax(newBoard, (depth + 1), (pNum ? 0 : 1), maxDepth, alpha, beta);

      if(score < beta){
        beta = score;
      }
      if(beta <= alpha){
        break;
      }
    }
    return beta;
  }
}

/**
 * Apply a move to a board for a player
 * @param  {Object} board A board object
 * @param  {Object} pos   The x,y coordinates to move to
 * @param  {Number} pNum  The player for which to execute the move
 */
AI.prototype._applyMove = function(board, pos, pNum) {
  board.players[pNum].move(pos, true); // !force
}


AI.prototype.frontierDisks = function(board) {
  // board = board.board;
  var piece, pieces = board.players[this.pNum].pieces;
  var x, y, score = 0;
  board = board.board;
  for (var i = pieces.length - 1; i >= 0; i--) {
    piece = pieces[i];
    x = piece.pos.x;
    y = piece.pos.y;
    // Left
    if(x > 0){
      if(board[x-1][y].type !== 'empty'){
        score++;
      }
    }
    // Right
    if(x < 7){
      if(board[x+1][y].type !== 'empty'){
        score++;
      }
    }
    // Up
    if(y > 0){
      if(board[x][y-1].type !== 'empty'){
        score++;
      }
    }
    // Down
    if(y < 7){
      if(board[x][y+1].type !== 'empty'){
        score++;
      }
    }
    // Up Left
    if(x > 0 && y > 0){
      if(board[x-1][y-1].type !== 'empty'){
        score++;
      }
    }
    // Down Left
    if(x > 0 && y < 7){
      if(board[x-1][y+1].type !== 'empty'){
        score++;
      }
    }
    // Up Right
    if(x < 7 && y > 0){
      if(board[x+1][y-1].type !== 'empty'){
        score++;
      }
    }
    // Down Right
    if(x < 7 && y < 7){
      if(board[x+1][y+1].type !== 'empty'){
        score++;
      }
    }
  }
  return 0 - score;
}


AI.prototype.mobility = function(board) {
  var aiMoves = board.getAllMoves(this.pNum).length;
  var oppMoves = board.getAllMoves(this.pNum ? 0 : 1).length;
  return Math.ceil((oppMoves + aiMoves) === 0 ? 0 : 100 * ((aiMoves - oppMoves)/(aiMoves + oppMoves)));
}

AI.prototype.cornerHunter = function(board) {
  var board = board.board;
  var oppCorners = 0, aiCorners = 0;
  var oppNum = (this.pNum ? 0 : 1);
  if(board[0][0].type !== 'p'+this.pNum){
    aiCorners++;
  }else if(board[0][0].type === 'p'+oppNum){
    oppCorners++;
  }
  if(board[7][0].type !== 'p'+this.pNum){
    aiCorners++;
  }else if(board[7][0].type === 'p'+oppNum){
    oppCorners++;
  }
  if(board[0][7].type !== 'p'+this.pNum){
    aiCorners++;
  }else if(board[0][7].type === 'p'+oppNum){
    oppCorners++;
  }
  if(board[7][7].type !== 'p'+this.pNum){
    aiCorners++;
  }else if(board[7][7].type === 'p'+oppNum){
    oppCorners++;
  }
  return Math.ceil(100 * ((aiCorners - oppCorners) / (aiCorners + oppCorners)));
};

AI.prototype.coinParity = function(board) {
  var aiPieces = board.players[this.pNum].pieces.length;
  var oppPieces = board.players[(this.pNum ? 0 : 1)].pieces.length;
  return  Math.ceil(100 * ((aiPieces - oppPieces) / (aiPieces + oppPieces)));
};
