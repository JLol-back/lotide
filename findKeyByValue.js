// findKeyByValue takes in an object and a value and returns the first key that corresponds to that value.

const findKeyByValue = function(object, value) {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;