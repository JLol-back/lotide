const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2]), true); // => should FAIL - Not the same number of elements in each array
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // should FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // should PASS