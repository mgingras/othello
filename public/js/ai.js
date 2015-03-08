function AI(pNum, maxDeapth) {
	this.pNum = pNum;
	this.maxDeapth = maxDeapth || 5;
}

AI.prototype.move = function(arguments) {
	var depth = 0;
	while(depth < this.maxDepth){
		depth++;
	}
}

// Heuristic one. Frontier Disks - Less disks next to empty spots to minimize oponent mobility.
// High score is better
AI.prototype.frontierDisks = function(pos, board) {
	var x = pos.x;
	var y = pos.y;
	var val = 0;
	board = board.board;
	// Left
	if(x > 0){
		if(board[x-1][y].type !== 'empty'){
			val++;
		}
	}
	// Right
	if(x < 7){
		if(board[x+1][y].type !== 'empty'){
			val++;
		}
	}
	// Up
	if(y > 0){
		if(board[x][y-1].type !== 'empty'){
			val++;
		}
	}
	// Down
	if(y < 7){
		if(board[x][y+1].type !== 'empty'){
			val++;
		}
	}
	// Up Left
	if(x > 0 && y > 0){
		if(board[x-1][y-1].type !== 'empty'){
			val++;
		}
	}
	// Down Left
	if(x > 0 && y < 7){
		if(board[x-1][y+1].type !== 'empty'){
			val++;
		}
	}
	// Up Right
	if(x < 7 && y > 0){
		if(board[x+1][y-1].type !== 'empty'){
			val++;
		}
	}
	// Down Right
	if(x < 7 && y < 7){
		if(board[x+1][y+1].type !== 'empty'){
			val++;
		}
	}
	return val;
}
// Heuristic two. Mobility, how many moves are avaliable given taking a specific block
AI.prototype.mobility = function(pos, board) {
	var tempPlayers = _.clone(board.players, true);
	for (var i = tempPlayers.length - 1; i >= 0; i--) {
		tempPlayers[i] = new Player(tempPlayers[i].isAI, tempPlayers[i].pNum, tempPlayers[i].pieces);
	};
	tempPlayers[this.pNum].move(pos, true); // !force
	var tempBoard = new Board(tempPlayers, this.pNum);
	return tempBoard.getAllMoves(this.pNum).length;
}
