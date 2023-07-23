// eqArrays

function eqArrays(array1, array2) {
  let isEqual;
  if (array1.length !== array2.length) {
    isEqual = false;
    return isEqual;
  } else if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        //console.log(`Arrays are not equal: Array 1, position ${i} (${array1[i]}) does not equal Array 2, position ${i} (${array1[i]})`);
        isEqual = false;
        //console.log(isEqual);
      } else {
        //console.log("Arrays are equal")
        isEqual = true;
      }

    }
  } return isEqual;
}

// assertArraysEqual

const assertArraysEqual = function(first, second) {
  const inspect = require('util').inspect;                              // Added inspect solution from Implement assertObjectsEqual exercise
  if (eqArrays(first, second) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(first)} exactly matches ${inspect(second)}`);
  } else if (eqArrays(first, second) === false) {
    console.log(`👎 👎 👎Assertion Passed: ${inspect(first)} DOES NOT match ${inspect(second)}`);
  }
};


// middle

const middle = function(array) {
  result = [];  
  if (!Array.isArray(array)) {
    return "Error: Not an array"
  }

  if (array.length <= 2) {                      //LOGIC FOR ONE OR TWO ELEMENTS
    return [];
  }

  if (array.length % 2 !== 0) {                //LOGIC FOR ODD NUMBER OF ELEMENTS
    let x = Math.floor(array.length / 2);      // Half the array length and round down to the nearest whole number
    result.push(array[x]);
  }

  if (array.length % 2 == 0) {                 // LOGIC FOR EVEN NUMBER OF ELEMENTS
    let x = array.length / 2;
    result.push(array[x-1]);
    result.push(array[x]);
  }
  return result;
}


// Test Cases
//console.log(middle("string") + " Error"); // => Error
//console.log(middle([1, 2]) + " should equal []"); // => []
//console.log(middle([1, 2, 3]) + " should equal [2]"); // => [2]
//console.log(middle([1, 2, 3, 4, 5]) + " should equal [3]"); // => [3]
//console.log(middle([1, 2, 3, 4])+ " should equal [2, 3]"); // => [2, 3]
//console.log(middle([1, 2, 3, 4, 5, 6]) + " should equal [3, 4]"); // => [3, 4]

console.log(assertArraysEqual(middle("string"), "Error: Not an array")); // PASS - Tests handling for if the element passed to the middle function is not an array.
console.log(assertArraysEqual(middle([1, 2, 3]), [2])); // PASS - Confirms an ODD number of array elements returns an array with a single element.
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])); // PASS - Confirms an ODD number of array elements returns an array with a single element.
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])); // PASS - Confirms an EVEN number of array elements returns an array with two elements.
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])); // PASS - Confirms an EVEN number of array elements returns an array with two elements.