import { currentPlayer } from "./updatePlayer.js";

const currentScore = {
  rounds: 1,
  playerOne: 0,
  playerTwo: 0,
};

let updateScore = function (square, open, player) {
  if (square.classList.contains("clicked")) {
    open = false;
    return;
  } else {
    square.classList.add("clicked");
    currentScore.rounds--;
    if (currentPlayer === "playerOne") {
      currentScore.playerOne++;
      console.log(currentScore);
    } else {
      currentScore.playerTwo++;
      console.log(currentScore);
    }
  }
};

export { currentScore, updateScore };
