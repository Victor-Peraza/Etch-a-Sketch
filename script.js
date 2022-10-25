const container = document.querySelector("#container");
let squares = 16;
let dimensions = squares * squares;
let padding = 1;
const makeBlack = (event) => (event.target.style.backgroundColor = "black");
for (let i = 0; i < dimensions; i++) {
  const gridSquares = document.createElement("div");
  container.style =
    "grid-template-columns: repeat(" +
    squares +
    "," +
    padding +
    "fr);grid-template-rows: repeat(" +
    squares +
    "," +
    padding +
    "fr);";

  gridSquares.classList.add("boxes");
  container.appendChild(gridSquares);

  //one click and paint
  gridSquares.addEventListener("mousedown", (event) => {
    if (event.buttons == 1) {
      makeBlack(event);
    }
  });

  //click and hold/drag mouse then paint
  gridSquares.addEventListener("mouseenter", (event) => {
    if (event.buttons == 1) {
      makeBlack(event);
    }
  });
}
