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

const assertArraysEqual = function(first, second) {

  if (eqArrays(first, second) === true) {
    console.log(`✅✅✅ Assertion Passed: ${first} exactly matches ${second}`);
  } else if (eqArrays(first, second) === false) {
    console.log("👎 👎 👎 Assertion Failed: these arrays do not match");
  }
};


// TEST CODE

assertArraysEqual([1, 2, 3], [1, 2, 3]) // Should PASS
assertArraysEqual([1, 2, 3], [1, 2]) // Should FAIL
assertArraysEqual([1, 2, 3], [3, 2, 1]) // Should FAIL
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // Should FAIL