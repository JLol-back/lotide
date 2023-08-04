// flatten takes in an array that contains elements including nested array 
// of elements and returns a flattened version of the array.

const flatten = function(array) {
  let flatArray = [];
  array.forEach((item) => {
    if (Array.isArray(item)) {
      flatArray = flatArray.concat(flatten(item));
    } else {
      flatArray.push(item);
    }
  });
  return flatArray;
}

module.exports = flatten;
