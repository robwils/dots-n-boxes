console.log("connected");

const cells = document.querySelectorAll(".cell");

console.log(cells);

cells.forEach((element) => {
  element.addEventListener("click", cellClicked);
});

function cellClicked(e) {
  console.log("clicked");
}
