/**
 * flatten takes in a array that contains elements including nested/multi-dimensional arrays of elements and returns a flattened version of the array.
 * @param {*} array - Multi-dimensional array
 * @returns {array} a one dimensional array containing all the values found in the nested array.
 */

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
};

module.exports = flatten;
