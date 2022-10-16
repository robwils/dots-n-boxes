const currentScore = {
  rounds: 1,
  playerOne: 0,
  playerTwo: 0,
};

let updateScore = function () {
  currentScore.rounds--;
};

export { currentScore, updateScore };
