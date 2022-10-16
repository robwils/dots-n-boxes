import { boxArray, score } from "./modules/boxArray.js";
import { square1 } from "./modules/boxData.js";
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
  boxArray[0].isClicked();
  boxArray[1].isClicked();
  boxArray[2].isClicked();
  boxArray[3].isClicked();
  boxArray[4].isClicked();
  boxArray[5].isClicked();
  boxArray[6].isClicked();
  boxArray[7].isClicked();
  boxArray[8].isClicked();
  boxArray[9].isClicked();
  boxArray[10].isClicked();
  boxArray[11].isClicked();
  boxArray[12].isClicked();
  boxArray[13].isClicked();
  boxArray[14].isClicked();
  boxArray[15].isClicked();
};

lines.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.add("clicked");
    boxesClicked();
    score.rounds++;
    console.log(score.rounds);
    updatePlayer();
  });
});

console.log(square1);
console.log(boxArray);

export default currentPlayer;
