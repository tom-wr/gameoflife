const gridManager = require('./gridManager');

const populateCell = (randomness = 75) => () => {
    return (Math.random() < (randomness / 100)) ? 1 : 0;
}

const getAliveAndDeadInArray = (arr) => {
    return {
        alive: arr.filter(x => x === 1).length,
        dead: arr.filter(x => x === 0).length,
    }
}

const generateNextGrid = (grid) => {
    let newGrid = gridManager.createGrid(grid.length);
    for(let x = 0; x < grid.length; x++) {
        for(let y = 0; y < grid[x].length; y ++) {
            const surroundingValues = gridManager.getSurroundingValues(x, y, grid);
            const surroundingLifeState = getAliveAndDeadInArray(surroundingValues);
            newGrid[x][y] = evaluateCellMortality(grid[x][y], surroundingLifeState);
        }
    }
    return newGrid;
}

const evaluateCellMortality = (currentState, {alive, dead} = surroundingLifeState) => {
    if(currentState) {
        if(alive < 2) return 0;
        else if (alive > 3) return 0;
        else return 1;
    } else {
        if(alive === 3 ) return 1;
        else return 0;
    }
}

module.exports = {
    populateCell,
    getAliveAndDeadInArray,
    generateNextGrid,
    evaluateCellMortality,
}