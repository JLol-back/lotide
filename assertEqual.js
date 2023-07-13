const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`👎 👎 👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE

assertEqual("Jake", "Lollback");
assertEqual(1, 1);
assertEqual("Jake", "Jake");
assertEqual("Jake", "jake");
assertEqual(25, 25);
assertEqual(25, "25");
assertEqual(25, 52);