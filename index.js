import boxArray from "./modules/boxArray.js";
import { square1 } from "./modules/boxData.js";
// create prototype box object
// create array of box objects and export as module
// objects should have methods to:
// -- determine if the box is won
// -- if box is won gray it out
// -- who was the user who won

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

lines.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.add("clicked");
    boxArray[0].isClicked();
  });
});

boxArray.forEach((element) => {
  console.log(element.boxNumber + element.isClicked());
});

console.log(square1);
console.log(boxArray);
