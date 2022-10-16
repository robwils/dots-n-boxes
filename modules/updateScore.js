import { currentPlayer } from "./updatePlayer.js";

const currentScore = {
  rounds: 1,
  playerOne: 0,
  playerTwo: 0,
};

let updateScore = function (square, open) {
  if (square.classList.contains("clicked")) {
    open = false;
    return;
  } else {
    square.classList.add("clicked");

    if (currentPlayer === "playerOne") {
      currentScore.playerOne++;
    } else {
      currentScore.playerTwo++;
    }
  }

  console.log(currentScore);
};

export { currentScore, updateScore };
