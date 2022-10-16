import {
  square1,
  square2,
  square3,
  square4,
  square5,
  square6,
  square7,
  square8,
  square9,
  square10,
  square11,
  square12,
  square13,
  square14,
  square15,
  square16,
} from "./boxData.js";
import { currentPlayer, updatePlayer } from "./updatePlayer.js";
import { currentScore, updateScore } from "./updateScore.js";
import updateBox from "./updateBox.js";

// define box class
class Box {
  constructor(squareName, leftLine, topLine, rightLine, bottomLine, square) {
    this.squareName = squareName;
    this.leftLine = leftLine;
    this.topLine = topLine;
    this.rightLine = rightLine;
    this.bottomLine = bottomLine;
    this.square = square;
    this.player;
    this.squareOpen = true;
  }
  isClicked = function (player) {
    if (
      this.leftLine.classList.contains("clicked") &&
      this.topLine.classList.contains("clicked") &&
      this.rightLine.classList.contains("clicked") &&
      this.bottomLine.classList.contains("clicked") &&
      this.squareOpen === true
    ) {
      updateScore(this.square, this.squareOpen, this.player);
      this.player = player;
      updateBox(this.square, this.player);
      console.log(`box taken by: ${this.player}`);
    }
  };
}

// define box array
const boxArray = [];

const box1 = new Box(
  "square1",
  square1.item(1),
  square1.item(0),
  square1.item(3),
  square1.item(4),
  square1.item(2)
);

boxArray.push(box1);

const box2 = new Box(
  "square2",
  square2.item(1),
  square2.item(0),
  square2.item(3),
  square2.item(4),
  square2.item(2)
);
boxArray.push(box2);

const box3 = new Box(
  "square3",
  square3.item(1),
  square3.item(0),
  square3.item(3),
  square3.item(4),
  square3.item(2)
);
boxArray.push(box3);

const box4 = new Box(
  "square4",
  square4.item(1),
  square4.item(0),
  square4.item(3),
  square4.item(4),
  square4.item(2)
);
boxArray.push(box4);

const box5 = new Box(
  "square5",
  square5.item(1),
  square5.item(0),
  square5.item(3),
  square5.item(4),
  square5.item(2)
);
boxArray.push(box5);

const box6 = new Box(
  "square6",
  square6.item(1),
  square6.item(0),
  square6.item(3),
  square6.item(4),
  square6.item(2)
);
boxArray.push(box6);

const box7 = new Box(
  "square7",
  square7.item(1),
  square7.item(0),
  square7.item(3),
  square7.item(4),
  square7.item(2)
);
boxArray.push(box7);

const box8 = new Box(
  "square8",
  square8.item(1),
  square8.item(0),
  square8.item(3),
  square8.item(4),
  square8.item(2)
);
boxArray.push(box8);

const box9 = new Box(
  "square9",
  square9.item(1),
  square9.item(0),
  square9.item(3),
  square9.item(4),
  square9.item(2)
);
boxArray.push(box9);

const box10 = new Box(
  "square10",
  square10.item(1),
  square10.item(0),
  square10.item(3),
  square10.item(4),
  square10.item(2)
);
boxArray.push(box10);

const box11 = new Box(
  "square11",
  square11.item(1),
  square11.item(0),
  square11.item(3),
  square11.item(4),
  square11.item(2)
);
boxArray.push(box11);

const box12 = new Box(
  "square12",
  square12.item(1),
  square12.item(0),
  square12.item(3),
  square12.item(4),
  square12.item(2)
);
boxArray.push(box12);

const box13 = new Box(
  "square13",
  square13.item(1),
  square13.item(0),
  square13.item(3),
  square13.item(4),
  square13.item(2)
);
boxArray.push(box13);

const box14 = new Box(
  "square14",
  square14.item(1),
  square14.item(0),
  square14.item(3),
  square14.item(4),
  square14.item(2)
);
boxArray.push(box14);

const box15 = new Box(
  "square15",
  square15.item(1),
  square15.item(0),
  square15.item(3),
  square15.item(4),
  square15.item(2)
);
boxArray.push(box15);

const box16 = new Box(
  "square16",
  square16.item(1),
  square16.item(0),
  square16.item(3),
  square16.item(4),
  square16.item(2)
);
boxArray.push(box16);

export { boxArray, currentScore, currentPlayer };
