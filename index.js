console.log("connected");

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
const squares = document.querySelectorAll(".square");
const square1 = document.querySelectorAll(".box-1");

// define box class
class Box {
  constructor(leftLine, topLine, rightLine, bottomLine) {
    this.leftLine = leftLine;
    this.topLine = topLine;
    this.rightLine = rightLine;
    this.bottomLine = bottomLine;
  }
}

console.log(square1.item(2).classList[2]);

const box1 = new Box(
  square1.item(1).id,
  square1.item(0).id,
  square1.item(2).id,
  square1.item(3).id
);

console.log(box1);

// reset
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
