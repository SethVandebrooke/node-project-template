
// ### Description
// This is an *example* nodejs module.
// It's **only** purpose is to present the functionality of this system.

/**
 * Calcualtor instance
 * @constructor
 * @example
 * var calculator = new Calc();
 */
function Calc () {

    // create self reference for scoping
    var self = this;

    /**
     * Add two numbers together
     * @name Calc#add
     * @function
     * @param {number} a first number to add
     * @param {number} b second number to add
     * @returns {number}
     * @example
     * var calculator = new Calc();
     * calculator.add(2, 2); // 4
     */
    self.add = function (a, b) {
        // add a and b together
        return a + b;
    };

    /**
     * Subtract one number from another
     * @name Calc#subtract
     * @function
     * @param {number} a the number to start with
     * @param {number} b the number to subtract from the first number
     * @returns {number}
     * @example
     * var calculator = new Calc();
     * calculator.subtract(4, 2) // 2
     */
    self.subtract = function (a, b) {
        // subtract b from a
        return a - b;
    }
}

module.exports = Calc;