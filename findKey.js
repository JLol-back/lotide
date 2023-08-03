/* findKey takes in an object and callback and returns the
 first key that meets the criteria specified in callback.
*/

const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key]) === true) {
      return key;
      if (callback(object[key]) !== false) {
        return undefined;
      }
    }
  }
};

module.exports = findKey;
