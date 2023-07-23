// ASSERT EQUAL FUNCTION FROM PREVIOUS EXERCISE

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`👎 👎 👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// EQARRAYS FUNCTION FROM PREVIOUS EXERCISE

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


// EQOBJECTS SOLUTION

const eqObjects = function(object1, object2) {
  if ((Object.keys(object1).length) !== (Object.keys(object2).length)) { // Guard - Check to see if objects have different number of keys 
    return false;
  }

  for (const key in object1) {                                     // Loop through each key in first object
    if (Array.isArray(object1[key])) {                            // Check to see if key in first object is an array 
      if ((eqArrays(object1[key], object2[key])) === false) {     // If array, compare the given key values between object1 with object 2 using eqArrays function, if they don't match, return false.
        return false;
      }
    } else if (object1[key] !== object2[key]) {                   // If at values of corresponding keys in each object don't match, return false.
      return false;
    }
  }
  return true;
}


// TEST CASES

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

console.log(eqObjects(shirtObject, anotherShirtObject) + "should be TRUE"); // => true
assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // PASS same keys and values
console.log(eqObjects(shirtObject, longSleeveShirtObject) + "should be FALSE"); // FALSE - Fails because the two objects have a different amount of keys
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // PASS (correctly asserted that shirtObject and longSleeveShirtObject are not equal)
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // PASS - correctly compares the values of two objects, including handling for array values
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // PASS - correctly asserts that multiColorShirtObject and longSleeveMultiColorShirtObject are not equal

