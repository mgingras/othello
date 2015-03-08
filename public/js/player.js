function Player(isAI, pNum) {
  this.isAI = isAI;
  this.pNum = pNum;
  this.pieces = [];
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
  } else{
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
}

Player.prototype.move = function(/*arguments*/) {
  if(!this.isAI){
    this.pieces.push({
      player: this.pNum,
      pos: arguments[0]
    });
  } else{
    // DOAI
  }
}