function AI() {

}

AI.prototype.move = function(arguments) {
	// body...
}

// Heuristic one. Frontier Disks - Less disks next to empty spots to minimize oponent mobility.
AI.prototype.frontierDisks = function(node, board) {
	var x = node.pos.x;
	var y = node.pos.y;
	var val = 0;
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
// Heuristic two. Max number blocks loseable in next turn
AI.prototype.minLosses = function(arguments) {
	
}
