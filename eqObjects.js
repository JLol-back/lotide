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


// START OF EQOBJECTS SOLUTION

/*
const eqObjects = function(object1, object2) {
  let result;

  if ((Object.keys(object1).length) !== (Object.keys(object2).length)) { // Guard - Check to see if objects have different number of keys 
    result = false;
    return result;
  }

  if ((Object.keys(object1).length) === (Object.keys(object2).length)) { 
    for (const key in object1) {                                     // Loop through each key in first object
      if (Array.isArray(object1[key])) {                            // Check to see if key in first object is an array 
        if ((eqArrays(object1[key], object2[key])) === false) {      // If array, compare the given key values between object1 with object 2 using eqArrays function
          console.log("Arrays are not equal");
          result = false;
        }
      }
      if (object1[key] !== object2[key]) { // If at values of corresponding keys in each object don't match, false and return out of function
        result = false;
        return result;
      } else if (object1[key] === object2[key]) { 
        result = true;
      }
    }
    return result;
  }
}
*/

// TESTING GROUND

const eqObjects = function(object1, object2) {
  let result;

  if ((Object.keys(object1).length) !== (Object.keys(object2).length)) { // Guard - Check to see if objects have different number of keys 
    result = false;
    return result;
  }

  for (const key in object1) {                                     // Loop through each key in first object
    if (Array.isArray(object1[key])) {                            // Check to see if key in first object is an array 
      if ((eqArrays(object1[key], object2[key])) === false) {      // If array, compare the given key values between object1 with object 2 using eqArrays function
        result = false;
        return result;
      }
    } else if (object1[key] !== object2[key]) { // If at values of corresponding keys in each object don't match, false and return out of function
      result = false;
      return result;
    }
  }
  result = true;
  return result;
}




// TEST CASES


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };


eqObjects(shirtObject , anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // false
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false



console.log("--------TEST EQARRAYS--------")
console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], ["1", 2, 3]));
console.log(eqArrays([1, 2, 3], [1, 2]));








