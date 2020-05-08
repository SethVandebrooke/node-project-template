"use strict";

/**
 * Calcualtor instance
 * @constructor
 * @example
 * var calculator = new Calc();
 */
function Calc() {
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
    return a - b;
  };
}

module.exports = Calc;