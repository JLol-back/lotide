//assertArraysEqual

const assertArraysEqual = function(first, second) {

  if (eqArrays(first, second) === true) {
    console.log(`✅✅✅ Assertion Passed: ${first} exactly matches ${second}`);
  } else if (eqArrays(first, second) === false) {
    console.log("👎 👎 👎 Assertion Failed: these arrays do not match");
  }
};

//eqArrays

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

// flatten

flatten = function(array) {
  let flatArray = [];                                // Define a new array to contain our new flattened array
  for (let i = 0; i < array.length; i++) {           // Loop through outermost array
    let arrCheck = Array.isArray(array[i]);          // Define array checker function using isArray method.
    if (arrCheck) {                                  // If given element of outermost array is also an array
      for (ii = 0; ii < array[i].length; ii++) {     // Start a second loop through the next level down array
        flatArray.push(array[i][ii]);                // Push method to send each element we find to the flatArray variable
      } 
    }
    if (!arrCheck) {                                 // If the outermost element is not an array
      flatArray.push(array[i]);                      // Push that value to the flatArray variable 
    }
  };
  return flatArray;                                  // Once loop is finished, return our newly flattened array.
}


console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]




console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])); // SHOULD PASS

console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [7]]), [1, 2, 3, 4, 5, 6])); // SHOULD FAIL