/**
 * head takes in an array and returns the first element found within that array.
 * @param {array} array
 * @returns the first element itself, i.e. not as an array. An empty array will return undefined.
 */

const head = function(array) {
  if (array.length === 0) {
    // If array is empty, return undefined and function ends there.
    return undefined;
  } else {
    // Otherwise return the 1st (0th) index of the array.
    return array[0];
  }
};

module.exports = head;
