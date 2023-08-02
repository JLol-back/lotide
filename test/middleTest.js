const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');


console.log(assertArraysEqual(middle("string"), "Error: Not an array")); // PASS - Tests handling for if the element passed to the middle function is not an array.
console.log(assertArraysEqual(middle([1, 2, 3]), [2])); // PASS - Confirms an ODD number of array elements returns an array with a single element.
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])); // PASS - Confirms an ODD number of array elements returns an array with a single element.
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])); // PASS - Confirms an EVEN number of array elements returns an array with two elements.
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])); // PASS - Confirms an EVEN number of array elements returns an array with two elements.