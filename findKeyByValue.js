/**
 * findKeyByValue takes in an object and a value and scans the object to identify the first key which contains the given value.
 * @param {object} object
 * @param {*} value
 * @returns {string} the first key that corresponds to the value passed into the function. If no key with that given value is found, then it should return undefined.
 */

const findKeyByValue = function(object, value) {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
