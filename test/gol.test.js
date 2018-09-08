const gol = require('../src/gol');

describe('Game of Life', () => {
    describe('populateCell', () => {
        it('should return a number between 0 and 1', () => {
            expect(gol.populateCell()()).toBeGreaterThanOrEqual(0);
            expect(gol.populateCell()()).toBeLessThanOrEqual(1);
        });
        it('should return 1 when randomness is set at 100', () => {
            expect(gol.populateCell(100)()).toEqual(1);
        });
        it('should return 0 when randomness is set at 0', () => {
            expect(gol.populateCell(0)()).toEqual(0);
        });
    });

    describe('getAliveAndDeadInArray', () => {
        const arr = [0, 1, 0, 1, 0, 0, 1, 0];
        it('should return an object with life and death keys',  () => {
            expect(gol.getAliveAndDeadInArray(arr)).toBeInstanceOf(Object);
            expect(gol.getAliveAndDeadInArray(arr)).toHaveProperty('alive');
            expect(gol.getAliveAndDeadInArray(arr)).toHaveProperty('dead');
        });
        it('should return an give the correct life and death counts', () => {
            expect(gol.getAliveAndDeadInArray(arr)).toMatchObject({
                alive: 3,
                dead: 5,
            })
        });
    });

    describe('evaluateCellMotality', () => {

        it('should die if cell is alive has fewer than two live neighbours', () => {

            const cellState = {
                alive: 1,
                dead: 7,
            }
            expect(gol.evaluateCellMortality(1, cellState)).toEqual(0);
        });

        it('should live if the cell is alive and has two to three live neighbours', () => {

            const cellState = {
                alive: 2,
                dead: 6,
            }
            const cellState2 = {
                alive: 3,
                dead: 5,
            }
            expect(gol.evaluateCellMortality(1, cellState)).toEqual(1);
            expect(gol.evaluateCellMortality(1, cellState2)).toEqual(1);
        });

        it('should die if cell is alive has more than three live neighbours', () => {
            const cellState = {
                alive: 4,
                dead: 4,
            }
            expect(gol.evaluateCellMortality(1, cellState)).toEqual(0);
        });

        it('should become alive if cell is dead has three live neighbours', () => {
            const cellState = {
                alive: 3,
                dead: 5,
            }
            expect(gol.evaluateCellMortality(0, cellState)).toEqual(1);
        });
    });

    describe('generateNextGrid', () => {
        const grid = [
            [0, 0, 0, 0, 1],
            [0, 1, 1, 0, 0],
            [0, 0, 1, 1, 1],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 1, 0]
        ];
        const expectedGrid = [
            [0, 0, 1, 1, 0],
            [1, 1, 1, 0, 1],
            [0, 0, 0, 0, 0],
            [0, 0, 1, 0, 1],
            [0, 0, 0, 1, 0]
        ];
        it('should return the correct gol iteration on a grid', () => {
            expect(gol.generateNextGrid(grid)).toEqual(expectedGrid);
        });
    });

});