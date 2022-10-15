import {
  squares,
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

// define box class
class Box {
  constructor(boxNumber, leftLine, topLine, rightLine, bottomLine) {
    this.boxNumber = boxNumber;
    this.leftLine = leftLine;
    this.topLine = topLine;
    this.rightLine = rightLine;
    this.bottomLine = bottomLine;
  }
  isClicked = function () {
    if (
      this.leftLine.classList.contains("clicked") &&
      this.topLine.classList.contains("clicked") &&
      this.rightLine.classList.contains("clicked") &&
      this.bottomLine.classList.contains("clicked")
    ) {
      return "boxClosed";
    } else {
      return "boxOpen";
    }
  };
}

// define box array
const boxArray = [];

const box1 = new Box(
  "box1",
  square1.item(1),
  square1.item(0),
  square1.item(2),
  square1.item(3)
);

boxArray.push(box1);

const box2 = new Box(
  "box2",
  square2.item(1),
  square2.item(0),
  square2.item(2),
  square2.item(3)
);
boxArray.push(box2);

const box3 = new Box(
  "box3",
  square3.item(1),
  square3.item(0),
  square3.item(2),
  square3.item(3)
);
boxArray.push(box3);

const box4 = new Box(
  "box4",
  square4.item(1),
  square4.item(0),
  square4.item(2),
  square4.item(3)
);
boxArray.push(box4);

const box5 = new Box(
  "box5",
  square5.item(1),
  square5.item(0),
  square5.item(2),
  square5.item(3)
);
boxArray.push(box5);

const box6 = new Box(
  "box6",
  square6.item(1),
  square6.item(0),
  square6.item(2),
  square6.item(3)
);
boxArray.push(box6);

const box7 = new Box(
  "box7",
  square7.item(1),
  square7.item(0),
  square7.item(2),
  square7.item(3)
);
boxArray.push(box7);

const box8 = new Box(
  "box8",
  square8.item(1),
  square8.item(0),
  square8.item(2),
  square8.item(3)
);
boxArray.push(box8);

const box9 = new Box(
  "box9",
  square9.item(1),
  square9.item(0),
  square9.item(2),
  square9.item(3)
);
boxArray.push(box9);

const box10 = new Box(
  "box10",
  square10.item(1),
  square10.item(0),
  square10.item(2),
  square10.item(3)
);
boxArray.push(box10);

const box11 = new Box(
  "box11",
  square11.item(1),
  square11.item(0),
  square11.item(2),
  square11.item(3)
);
boxArray.push(box11);

const box12 = new Box(
  "box12",
  square12.item(1),
  square12.item(0),
  square12.item(2),
  square12.item(3)
);
boxArray.push(box12);

const box13 = new Box(
  "box13",
  square13.item(1),
  square13.item(0),
  square13.item(2),
  square13.item(3)
);
boxArray.push(box13);

const box14 = new Box(
  "box14",
  square14.item(1),
  square14.item(0),
  square14.item(2),
  square14.item(3)
);
boxArray.push(box14);

const box15 = new Box(
  "box15",
  square15.item(1),
  square15.item(0),
  square15.item(2),
  square15.item(3)
);
boxArray.push(box15);

const box16 = new Box(
  "box16",
  square16.item(1),
  square16.item(0),
  square16.item(2),
  square16.item(3)
);
boxArray.push(box16);

export default boxArray;
