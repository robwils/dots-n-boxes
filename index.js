import { boxArray, currentScore } from "./modules/boxArray.js";
import { updatePlayer, currentPlayer } from "./modules/updatePlayer.js";
// create prototype box object
// create array of box objects and export as module
// objects should have methods to:
// -- determine if the box is won
// -- if box is won gray it out
// -- who was the user who won
// if you complete a box get another turn

// create array of unclicked lines?

// create function to reset game
// create a function to keep score
// create function to determine when game is won
// create a function to flag which player won the square
// create a click function and add it to lines
// data as modules

// define UI variables
const reset = document.querySelector(".reset");
const lines = document.querySelectorAll(".line");

// reset
reset.addEventListener("click", () => {
  console.log("reset");
});

// check all boxes
let boxesClicked = () => {
  boxArray[0].isClicked(currentPlayer);
  boxArray[1].isClicked(currentPlayer);
  boxArray[2].isClicked(currentPlayer);
  boxArray[3].isClicked(currentPlayer);
  boxArray[4].isClicked(currentPlayer);
  boxArray[5].isClicked(currentPlayer);
  boxArray[6].isClicked(currentPlayer);
  boxArray[7].isClicked(currentPlayer);
  boxArray[8].isClicked(currentPlayer);
  boxArray[9].isClicked(currentPlayer);
  boxArray[10].isClicked(currentPlayer);
  boxArray[11].isClicked(currentPlayer);
  boxArray[12].isClicked(currentPlayer);
  boxArray[13].isClicked(currentPlayer);
  boxArray[14].isClicked(currentPlayer);
  boxArray[15].isClicked(currentPlayer);
};

lines.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.add("clicked");
    boxesClicked();
    currentScore.rounds++;
    updatePlayer(element);
  });
});

export default currentPlayer;
