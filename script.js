const grid = document.querySelector("#grid");
let squares = 16;
const dimensions = squares * squares;
const padding = 1;

const draw = document.querySelector("#draw");
const eraser = document.querySelector("#eraser");
const clear = document.querySelector("#clear");

const pickColor = document.querySelector("#colorPicker");

const makeColor = (event) =>
  (event.target.style.backgroundColor = pickColor.value);
const makeErase = (event) => (event.target.style.backgroundColor = "#F8F8F8");
const makeClear = (event) => (event.style.backgroundColor = "#F8F8F8");

for (let i = 0; i < dimensions; i++) {
  const gridSquares = document.createElement("div");

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

  gridSquares.classList.add("boxes");
  grid.appendChild(gridSquares);
  draw.click(); // clicked by default

  //DRAW Function
  draw.addEventListener("click", () => {
    eraser.setAttribute("style", "color: black");
    draw.setAttribute("style", "background: black; color: white");

    //one click and paint
    gridSquares.addEventListener("mousedown", (event) => {
      if (event.buttons == 1) {
        makeColor(event);
      }
    });

    //drag click to paint
    gridSquares.addEventListener("mouseenter", (event) => {
      if (event.buttons == 1) {
        makeColor(event);
      }
    });
  });

  //ERASER Function
  eraser.addEventListener("click", () => {
    eraser.setAttribute("style", "background: black; color: white");
    draw.setAttribute("style", "color: black");

    gridSquares.addEventListener("mouseenter", (event) => {
      if (event.buttons == 1) {
        makeErase(event);
      }
    });

    gridSquares.addEventListener("mousedown", (event) => {
      if (event.buttons == 1) {
        makeErase(event);
      }
    });
  });

  //CLEAR
  clear.addEventListener("click", () => {
    eraser.setAttribute("style", "; color: black");
    draw.setAttribute("style", "background: black; color: white");
    makeClear(gridSquares);
  });
}

/*
 eraser.setAttribute("style", "background: black; color: white");
  draw.setAttribute("style", "background: black; color: white");
*/
