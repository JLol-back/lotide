/**
 * takeUntil takes in an array and callback and returns a slice of the array based on the criteria specified in the callback.
 * @param {array} array
 * @param {callback function} callback
 * @returns {array} containing elements that returned a truthy value after having the callback function applied to them.
 */

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item) === false) {
      results.push(item);
    } else {
      return results;
    }
  }
  return results;
};

module.exports = takeUntil;
