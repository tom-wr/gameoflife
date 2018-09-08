const gridManager = require('../src/gridManager');

describe('Grid Factory create grid', () => {

    describe('createGrid', () => {

        const gridSize = 5;
        
        it('should create a grid with a given number of rows', () => {
            expect(gridManager.createGrid(gridSize, () => 0).length).toEqual(gridSize);
        });

        it('should create a grid with a given number of columns', () => {
            const grid = gridManager.createGrid(gridSize, () => 0);
            expect(grid[0].length).toEqual(gridSize);
        });

    });

    describe('wrapInRange', () => {
        it('should wrap an index over an array range', () => {
            expect(gridManager.wrapOverRange(2, 4)).toEqual(2);
            expect(gridManager.wrapOverRange(-1, 4)).toEqual(4);
            expect(gridManager.wrapOverRange(5, 4)).toEqual(0);
        });
    });

    describe('getSurroundingValues', () => {
        const grid = [
            [0, 0, 0, 0, 1],
            [0, 1, 1, 0, 0],
            [0, 0, 1, 1, 1],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 1, 0]
        ];
        it('should be an array with a length of 8', () => {
            expect(gridManager.getSurroundingValues(2, 2, grid)).toBeInstanceOf(Array);
            expect(gridManager.getSurroundingValues(2, 2, grid)).toHaveLength(8);
        });
        it('should return an array containing correct values', () => {
            expect(gridManager.getSurroundingValues(2, 2, grid)).toEqual([1, 1, 0, 0, 1, 0, 1, 0]);
            expect(gridManager.getSurroundingValues(2, 4, grid)).toEqual([0, 0, 0, 1, 0, 0, 0, 0]);

            expect(gridManager.getSurroundingValues(0, 0, grid)).toEqual([0, 0, 0, 1, 0, 0, 0, 1]);
            expect(gridManager.getSurroundingValues(4, 4, grid)).toEqual([0, 0, 0, 1, 0, 0, 1, 0]);
            expect(gridManager.getSurroundingValues(0, 4, grid)).toEqual([1, 0, 0, 0, 0, 0, 0, 0]);
            expect(gridManager.getSurroundingValues(4, 0, grid)).toEqual([0, 0, 0, 0, 0, 1, 0, 0]);
        });
    });
});
