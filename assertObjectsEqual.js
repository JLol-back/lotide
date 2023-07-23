// EQOBJECTS

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

// ASSERT OBJECTS EQUAL SOLUTION

const obj1 = { a: '1', b: 2 };
const obj2 = { b: 2, a: '1' };
const obj3 = { a: '1', b: 2 };
const obj4 = { b: 3, a: '1' };

const assertObjectsEqual = function (first, second) {
  const inspect = require('util').inspect;
  if (eqObjects(first, second)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(first)} === ${inspect(second)}`);
  } else if (!eqObjects(first, second)) {
    console.log(`👎 👎 👎 Assertion Failed: ${inspect(first)} !== ${inspect(second)}`);
  }
};


assertObjectsEqual(obj1, obj2); // PASS
assertObjectsEqual(obj3, obj4); // FAIL