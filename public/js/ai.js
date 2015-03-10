function AI(pNum, type, maxDepth) {
  this.pNum = pNum;
  this.maxDepth = maxDepth || 5;
  this.type = type;

  // Use frontier disks heuristics, mobility heuristics or combined
  if(this.type === 'frontier'){
    this.calculateValue = function(board) {
      return this.frontierDisks(board) + this.gameOver(board);
    }.bind(this);
    // this.calculateValue = this.frontierDisks;
  }else if(this.type === 'mobility'){
    this.calculateValue = function(board) {
      return this.mobility(board) + this.gameOver(board);
    }.bind(this);
    // this.calculateValue = this.mobility;
  } else {
    this.calculateValue = function(board) {
      return this.mobility(board) + this.frontierDisks(board) + this.gameOver(board);
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
  if(board.getAllMoves(this.pNum).length === 0){
    return;
  }
  var res = this.minimax(board, 0, this.pNum, this.maxDepth, -1000, 1000);
  console.log(this.visits)
  console.dir(res);
  return res.pos;
  // var allMoves = board.getAllMoves(this.pNum);
  // console.dir(allMoves);
  // var move, bestMove, bestScore = 0, score;
  // for (var i = allMoves.length - 1; i >= 0; i--) {
  //   move = allMoves[i];
  //   score = this.calculateValue(move.pos, board);
  //   if(score > bestScore){
  //     bestScore = score;
  //     bestMove = move;
  //   }
  // }
  // return bestMove ? bestMove.pos : false;
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
  this.visits++;
  if(depth >= maxDepth){
    return this.calculateValue(board);
  }

  var newBoard, score, move, moves = board.getAllMoves(pNum);
  if(pNum === this.pNum){
    // Maximize
    for (var i = moves.length - 1; i >= 0; i--) {
      move = moves[i];
      newBoard = board.copy();
      score = this.minimax(newBoard, (depth + 1), (pNum ? 0 : 1), maxDepth, alpha, beta);
      if(score > alpha){
        alpha = score;
      }
      if(alpha >= beta){
        break;
      }
    }
    if(depth === 0){
      return move;
    } else {
      return alpha;
    }
  } else {
    // Minimize
    for (var i = moves.length - 1; i >= 0; i--) {
      move = moves[i];
      newBoard = board.copy();
      score = this.minimax(newBoard, (depth + 1), (pNum ? 0 : 1), maxDepth, alpha, beta);
      if(score < beta){
        beta = score;
      }
      if(alpha >= beta){
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

/**
 * Heuristic one. Frontier Disks - Less disks next to empty spots to minimize oponent mobility.
 * @param  {Object} pos             The position on the board to evaluate
 * @param  {Number} pos.x           The x coordinate
 * @param  {Number} pos.y           The y coordinate
 * @param  {[Object][Object]} board A two dimensional array ov objects representing the board
 * @return {Number}                 A score for the pos based on the heuristic
 */
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
  return score;
}

/**
 * Heuristic one. Frontier Disks - Less disks next to empty spots to minimize oponent mobility.
 * @param  {[Object][Object]} board  A board object
 * @param  {Number}           pNum   The player who we're evaluation their mobility
 * @return {Number}                  A score to evalute a players ability to move
 */
AI.prototype.mobility = function(board) {
  return board.getAllMoves(this.pNum).length;
}

AI.prototype.gameOver = function(board) {
  var gameState = board.detectGameOver(this.pNum);
  if(gameState < 0){
    // A move resulting in neither player having moves
    if(board.players[this.pNum].pieces.length > board.players[this.pNum].pieces.length){
      // This player has more pieces
      return 10000
    } else {
      // The other player has more pieces
      return -10000
    }
  } else if (gameState !== this.pNum){
    // A move resulting in no moves left for this player, not as bad as losing but still shit
    return -1000;
  }
  // body...
}
