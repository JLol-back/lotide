/**
 * assertObjectsEqual compares two objects using eqObjects and prints an appropriate message after based on whether they match or not.
 * @function {eqObjects}
 * @param {object} first
 * @param {object} second
 * @returns prints to the console a message of '✅✅✅ Assertion Passed' if eqObjects evaluates to TRUE and '👎 👎 👎 Assertion Failed' if eqObjects evaluates to FALSE.
 */

const eqObjects = require("./eqObjects");


/*
TEST VARIABLES

const obj1 = { a: "1", b: 2 };
const obj2 = { b: 2, a: "1" };
const obj3 = { a: "1", b: 2 };
const obj4 = { b: 3, a: "1" };

*/

const assertObjectsEqual = function(first, second) {
  const inspect = require("util").inspect;
  if (eqObjects(first, second)) {
    console.log(
      `✅✅✅ Assertion Passed: ${inspect(first)} === ${inspect(second)}`
    );
  } else if (!eqObjects(first, second)) {
    console.log(
      `👎 👎 👎 Assertion Failed: ${inspect(first)} !== ${inspect(second)}`
    );
  }
};

module.exports = assertObjectsEqual;

/*

//TEST CASES - Didn't convert to separate test files because the function has side-effects (they console.log instead of return) which makes them harder to test.)

assertObjectsEqual(obj1, obj2); // SHOULD PASS
assertObjectsEqual(obj3, obj4); // SHOULD FAIL

*/
