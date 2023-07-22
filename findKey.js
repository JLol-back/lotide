// Implement findKey - M1W2

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`👎 👎 👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key]) === true) {
      return key;
      if (callback(object[key]) !== false) {
        return undefined;
      }
    }
  }
};

results1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)

console.log(results1);


results2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 4)

console.log(results2);


console.log(assertEqual(results1, "noma")); // PASS
console.log(assertEqual(results2, undefined)); // PASS No matches, returns undefined.
console.log(assertEqual(results1, "Ora"));  // FAIL (Returns FIRST match)

