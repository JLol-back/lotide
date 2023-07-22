// Implement Map - M1W2

const eqArrays = function(array1, array2) {
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


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);



// TEST CASES

console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]));