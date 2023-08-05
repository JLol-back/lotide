/**
 * eqArraystakes compares the values of 2 arrays to determine if they are equal.
 * @param {array} array1
 * @param {array} array2
 * @returns boolean - TRUE if the arrays are equal and FALSE otherwise.
 */
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    // If arrays have different lengths, return false
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;
