class TicTacToe {
  constructor() {
    this.count = 0;
    this.cur = "x";
    this.field = Array.from({ length: 3 }, () => new Array(3).fill(null));
  }

  getCurrentPlayerSymbol() {
    return this.cur;
  }

  nextTurn(rowIndex, columnIndex) {
    if (
      this.field[rowIndex][columnIndex] !== "x" &&
      this.field[rowIndex][columnIndex] !== "o"
    ) {
      this.field[rowIndex][columnIndex] = this.cur;
      switch (this.cur) {
        case "x":
          this.cur = "o";
          break;
        case "o":
          this.cur = "x";
          break;
        default:
          this.cur = "x";
      }
      this.count++;
    }
  }

  isFinished() {
    return !!this.getWinner() || this.isDraw();
  }

  getWinner() {
    //for row arrays
    for (let i = 0; i < this.field.length; i++) {
      if (this.field[i].every((el) => el === "x")) return "x";
      if (this.field[i].every((el) => el === "o")) return "o";
    }
    // for col arrays
    for (let j = 0; j < this.field.length; j++) {
      let rowArray = [];
      for (let k = 0; k < this.field.length; k++) {
        rowArray.push(this.field[k][j]);
      }
      if (rowArray.every((el) => el === "x")) return "x";
      if (rowArray.every((el) => el === "o")) return "o";
    }
    // for diagonal arrays
    let rightDiagArray = [];
    let revDiagArray = [];
    for (let l = 0; l < this.field.length; l++) {
      rightDiagArray.push(this.field[l][l]);
      revDiagArray.push(this.field[l][2 - l]);
    }
    if (rightDiagArray.every((el) => el === "x")) return "x";
    if (rightDiagArray.every((el) => el === "o")) return "o";
    if (revDiagArray.every((el) => el === "x")) return "x";
    if (revDiagArray.every((el) => el === "o")) return "o";
    return null;
  }

  noMoreTurns() {
    return this.count === 9;
  }

  isDraw() {
    return this.noMoreTurns() && this.getWinner() === null;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.field[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
