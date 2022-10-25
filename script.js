const container = document.querySelector('#container');
let squares =16;
let dimensions = squares * squares;
let padding = 1;
for (let i = 0; i < dimensions; i++) {
    const gridSquares = document.createElement('div');
    container.style = 'grid-template-columns: repeat('+squares+',' + padding + 'fr);grid-template-rows: repeat('+squares+',' + padding + 'fr);'
    gridSquares.classList.add('boxes');
    container.appendChild(gridSquares);
}







