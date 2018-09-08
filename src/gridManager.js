
const createGrid = (gridSize = 10, populateCell = () => 0 ) => {
    return Array.from(Array(gridSize), (row) => {
        return Array.from(Array(gridSize), (cell) => {
            return populateCell();
        });
    });
}

const getSurroundingValues = (x, y, grid) => {
    const surroundingValues = [];
    for (let row = (x - 1); row <= (x + 1); row++) {

        for (let col = (y - 1); col <= (y + 1); col++) {

            if (row === x && col === y) continue;
            const wrappedRow = wrapOverRange(row, grid.length - 1);
            const wrappedCol = wrapOverRange(col, grid[x].length - 1);
            surroundingValues.push(grid[wrappedRow][wrappedCol]);
        }
    }
    return surroundingValues;
}

const wrapOverRange = (index, range) => {
    if( index < 0 ) return range + index + 1;
    else if (index > range) return (range + 1) - index;
    else return index;
}

const printGrid = (grid) => {
    console.clear();
    console.log('\n');
    for(let row of grid) {
        let line = '\t\t\t\t\t';
        for(let cell of row) {
            line += (cell === 0) ? '\u25A1 ' : '\u25A0 ';
        }
        console.log(line);
    }
    console.log('\n');
}

module.exports = {
    createGrid,
    printGrid,
    wrapOverRange,
    getSurroundingValues,
}