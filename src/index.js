const gol = require('./gol');
const gridManager = require('./gridManager');
let grid = [];

const tick = () => {
    gridManager.printGrid(grid);
    grid = gol.generateNextGrid(grid);
}

const start = () => {
    grid = gridManager.createGrid(60, gol.populateCell(50));
    setInterval(tick, 200);
}

start();