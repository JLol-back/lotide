const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`👎 👎 👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;


/*
Test Cases - Didn't convert to separate test files because the function has side-effects (they console.log instead of return) which makes them harder to test.)

assertEqual("Jake", "Lollback"); =>  Should Fail
assertEqual(1, 1);               =>  Should Pass
assertEqual("Jake", "Jake");     =>  Should Pass 
assertEqual("Jake", "jake");     =>  Should Fail
assertEqual(25, 25);             =>  Should Pass
assertEqual(25, "25");           =>  Should Fail
assertEqual(25, 52);             =>  Should Fail

*/