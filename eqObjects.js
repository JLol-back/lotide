const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`👎 👎 👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};




// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let result;

  if ((Object.keys(object1).length) !== (Object.keys(object2).length)) { // Guard - Check to see if objects have different number of keys 
    let result = false;
    return result;
    //console.log(result + " Objects have different number of keys");
  }

  if ((Object.keys(object1).length) === (Object.keys(object2).length)) { // Probably can refactor this out?
    for (const key in object1) {
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



const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };


eqObjects(shirtObject , anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject)); // => false