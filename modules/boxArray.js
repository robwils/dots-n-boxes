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
  constructor(leftLine, topLine, rightLine, bottomLine) {
    this.leftLine = leftLine;
    this.topLine = topLine;
    this.rightLine = rightLine;
    this.bottomLine = bottomLine;
  }
}

// define box array
const boxArray = [];

const box1 = new Box(
  square1.item(1).id,
  square1.item(0).id,
  square1.item(2).id,
  square1.item(3).id
);
boxArray.push(box1);

const box2 = new Box(
  square2.item(1).id,
  square2.item(0).id,
  square2.item(2).id,
  square2.item(3).id
);
boxArray.push(box2);

const box3 = new Box(
  square3.item(1).id,
  square3.item(0).id,
  square3.item(2).id,
  square3.item(3).id
);
boxArray.push(box3);

const box4 = new Box(
  square4.item(1).id,
  square4.item(0).id,
  square4.item(2).id,
  square4.item(3).id
);
boxArray.push(box4);

const box5 = new Box(
  square5.item(1).id,
  square5.item(0).id,
  square5.item(2).id,
  square5.item(3).id
);
boxArray.push(box5);

const box6 = new Box(
  square6.item(1).id,
  square6.item(0).id,
  square6.item(2).id,
  square6.item(3).id
);
boxArray.push(box6);

const box7 = new Box(
  square7.item(1).id,
  square7.item(0).id,
  square7.item(2).id,
  square7.item(3).id
);
boxArray.push(box7);

const box8 = new Box(
  square8.item(1).id,
  square8.item(0).id,
  square8.item(2).id,
  square8.item(3).id
);
boxArray.push(box8);

const box9 = new Box(
  square9.item(1).id,
  square9.item(0).id,
  square9.item(2).id,
  square9.item(3).id
);
boxArray.push(box9);

const box10 = new Box(
  square10.item(1).id,
  square10.item(0).id,
  square10.item(2).id,
  square10.item(3).id
);
boxArray.push(box10);

const box11 = new Box(
  square11.item(1).id,
  square11.item(0).id,
  square11.item(2).id,
  square11.item(3).id
);
boxArray.push(box11);

const box12 = new Box(
  square12.item(1).id,
  square12.item(0).id,
  square12.item(2).id,
  square12.item(3).id
);
boxArray.push(box12);

const box13 = new Box(
  square13.item(1).id,
  square13.item(0).id,
  square13.item(2).id,
  square13.item(3).id
);
boxArray.push(box13);

const box14 = new Box(
  square14.item(1).id,
  square14.item(0).id,
  square14.item(2).id,
  square14.item(3).id
);
boxArray.push(box14);

const box15 = new Box(
  square15.item(1).id,
  square15.item(0).id,
  square15.item(2).id,
  square15.item(3).id
);
boxArray.push(box15);

const box16 = new Box(
  square16.item(1).id,
  square16.item(0).id,
  square16.item(2).id,
  square16.item(3).id
);
boxArray.push(box16);

export default boxArray;
