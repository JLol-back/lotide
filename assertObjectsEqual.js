const eqObjects = require('./eqObjects');

// assertObjectsEqual takes in 2 objects and returns true if they are equal and false otherwise.

//TEST VARIABLES

const obj1 = { a: '1', b: 2 };
const obj2 = { b: 2, a: '1' };
const obj3 = { a: '1', b: 2 };
const obj4 = { b: 3, a: '1' };

const assertObjectsEqual = function (first, second) {
  const inspect = require('util').inspect;
  if (eqObjects(first, second)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(first)} === ${inspect(second)}`);
  } else if (!eqObjects(first, second)) {
    console.log(`👎 👎 👎 Assertion Failed: ${inspect(first)} !== ${inspect(second)}`);
  }
};

module.exports = assertObjectsEqual;

/*

//TEST CASES - Didn't convert to separate test files because the function has side-effects (they console.log instead of return) which makes them harder to test.)

assertObjectsEqual(obj1, obj2); // SHOULD PASS
assertObjectsEqual(obj3, obj4); // SHOULD FAIL

*/