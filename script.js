const grid = document.querySelector("#grid");
const draw = document.querySelector("#draw");
const eraser = document.querySelector("#eraser");
const clear = document.querySelector("#clear");
const pickColor = document.querySelector("#colorPicker");
const pickNumOfSquares = document.querySelector("#range");
const rangeValue = document.querySelector("#range-value");

const makeColor = (event) =>
  (event.target.style.backgroundColor = pickColor.value);
const makeErase = (event) => (event.target.style.backgroundColor = "#F8F8F8");
const makeClear = (event) => (event.style.backgroundColor = "#F8F8F8");

rangeValue.textContent = pickNumOfSquares.value + " x " + pickNumOfSquares.value;

let currentMode = "draw";
function setCurrentMode(mode) {
  currentMode = mode;
}

function createGrid(squares) {
  let dimensions = squares * squares;
  const padding = 1;
  grid.style =
    "grid-template-columns: repeat(" +
    squares +
    "," +
    padding +
    "fr);grid-template-rows: repeat(" +
    squares +
    "," +
    padding +
    "fr);";

  for (let i = 0; i < dimensions; i++) {
    const gridSquares = document.createElement("div");
    gridSquares.classList.add("boxes"); //makes pixel not draggable as link and adds class name
    grid.appendChild(gridSquares);

    //one click and paint and erase
    gridSquares.addEventListener("mousedown", toolMode);
    //drag click to paint and erase
    gridSquares.addEventListener("mouseenter", toolMode);

    clear.addEventListener("click", () => {
      makeClear(gridSquares);
    });
  }
}

function toolMode(e) {
  if (e.buttons == 1 && currentMode == "draw") {
    makeColor(e);
  } else if (e.buttons == 1 && currentMode == "erase") {
    makeErase(e);
  }
}

function pixelSize() {
  let gridPixels = grid.querySelectorAll("div");
  gridPixels.forEach((gridPixel) => gridPixel.remove("div"));
  rangeValue.textContent = pickNumOfSquares.value + " x " + pickNumOfSquares.value;
  createGrid(pickNumOfSquares.value);
}

draw.onclick = () => {
  setCurrentMode("draw");
  draw.classList.add("button-active");
  eraser.classList.remove("button-active");
};

eraser.onclick = () => {
  setCurrentMode("erase");
  draw.classList.remove("button-active");
  eraser.classList.add("button-active");
};

createGrid(pickNumOfSquares.value);
draw.click(); //draw clicked by default
pickNumOfSquares.addEventListener("mouseup", pixelSize);
