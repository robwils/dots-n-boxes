console.log("connected");

// Define UI variables
const reset = document.querySelector(".reset");
const lines = document.querySelectorAll(".line");
const squares = document.querySelectorAll(".square");

// Define objects
class Box {
  constructor(leftLine, topLine, rightLine, bottomLine) {
    this.leftLine = leftLine;
    this.topLine = topLine;
    this.rightLine = rightLine;
    this.bottomLine = bottomLine;
  }
}

reset.addEventListener("click", () => {
  console.log("reset");
});

lines.forEach((element) => {
  element.addEventListener("click", () => {
    console.log(`${element.id} clicked`);
  });
});

squares.forEach((element) => {
  element.addEventListener("click", () => {
    console.log(`${element.id} clicked`);
  });
});

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
