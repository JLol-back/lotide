const head = function (array) { 
  if (array.length === 0) {      // If array is empty, return undefined and function ends there.
    return undefined;
  } else {                       // Otherwise return the 1st (0th) index of the array.
    return array[0];
  }
}

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`👎 👎 👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};


assertEqual(head([5,6,7]), 5);     
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);     
assertEqual(head([]), 5);      // empty array should return undefined