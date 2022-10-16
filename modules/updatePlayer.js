import { currentScore } from "./updateScore.js";

let currentPlayer = "playerOne";
console.log(`begin ${currentPlayer}`);

// update player
let updatePlayer = (line) => {
  line.classList.add(currentPlayer);

  if (currentScore.rounds % 2 === 0) {
    currentPlayer = "playerTwo";
  } else {
    currentPlayer = "playerOne";
  }

  console.log(`current player is: ${currentPlayer}`);
};

export { currentPlayer, updatePlayer };
