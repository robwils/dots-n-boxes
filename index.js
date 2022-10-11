console.log("connected");

const lines = document.querySelectorAll(".line");
const state = [];
console.log(lines);

lines.forEach((element) => {
  state.push({ element: element });
  element.addEventListener("click", cellClicked);
});

console.log(state);

function cellClicked(event) {
  console.log("clicked");
}
