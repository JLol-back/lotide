const eqArrays = require('./eqArrays');

// eqObjects takes in 2 objects and return true if they are equal and false otherwise.


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

module.exports = eqObjects;