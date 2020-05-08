var Calc = require('../src/calc');

var calculator = new Calc();

describe("add method", function () {
    it('adds 2 + 2 to equal 4', () => {
        expect(calculator.add(2, 2)).toBe(4);
    });
    it('adds 1 + 3 to equal 4', () => {
        expect(calculator.add(1, 3)).toBe(4);
    });
    it('adds 2 + 3 to equal 5', () => {
        expect(calculator.add(2, 3)).toBe(5);
    });
})
describe("subtract method", function () {
    it('subtracts 2 - 2 to equal 0', () => {
        expect(calculator.subtract(2, 2)).toBe(0);
    });
    it('subtracts 3 - 1 to equal 2', () => {
        expect(calculator.subtract(3, 1)).toBe(2);
    });
    it('subtracts 2 - 3 to equal -1', () => {
        expect(calculator.subtract(2, 3)).toBe(-1);
    });
})