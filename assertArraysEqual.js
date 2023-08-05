const eqArrays = require("./eqArrays");

/**
 * assertArraysEqual compares two arrays using eqArrays and prints an appropriate message after comparing the two arrays.
 * @function {eqArrays}
 * @param {array} first
 * @param {array} second
 * @returns prints to the console a message of '✅✅✅ Assertion Passed' if eqArrays evaluates to TRUE and '👎 👎 👎 Assertion Failed' if eqArrays evaluates to FALSE.
 */

const assertArraysEqual = function(first, second) {
  if (eqArrays(first, second) === true) {
    console.log(`✅✅✅ Assertion Passed: ${first} exactly matches ${second}`);
  } else if (eqArrays(first, second) === false) {
    console.log("👎 👎 👎 Assertion Failed: these arrays do not match");
  }
};

module.exports = assertArraysEqual;

/*
Test cases - Didn't convert to separate test files because the function has side-effects (they console.log instead of return) which makes them harder to test.)

assertArraysEqual([1, 2, 3], [1, 2, 3]) // Should PASS
assertArraysEqual([1, 2, 3], [1, 2]) // Should FAIL
assertArraysEqual([1, 2, 3], [3, 2, 1]) // Should FAIL
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // Should FAIL


*/
