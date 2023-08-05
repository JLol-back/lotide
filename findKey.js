/**
 * findKey takes in an object and callback and returns the first key that meets the criteria specified in callback.
 * @param {object} - the object that will be iterated through.
 * @param {callback} - the conditional statement that will be evaluated for each object key.
 * @returns {string} -  the first key for which the callback returns a truthy value.
 */

const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key]) === true) {
      return key;
    }
  }
};

module.exports = findKey;
