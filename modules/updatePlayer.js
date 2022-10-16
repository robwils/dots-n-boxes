import { score } from "./updateScore.js";

let currentPlayer = "playerOne";
console.log(currentPlayer);

// update player
let updatePlayer = () => {
  if (score.rounds % 2 === 0) {
    currentPlayer = "playerTwo";
    console.log(currentPlayer);
  } else {
    currentPlayer = "playerOne";
    console.log(currentPlayer);
  }
};

export { updatePlayer, currentPlayer };
