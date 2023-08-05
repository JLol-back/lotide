/**
 * maptakes in an array and a callback and returns a new array based on the results of the callback on each item in the array.
 * @param {array} array
 * @param {callback function} callback
 * @returns {array} NEW array based on the results of the callback on each item in the array.
 */

const map = function(array, callback) {
  if (array.length === 0) {
    return "Error: Provided array is empty";
  }

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;
