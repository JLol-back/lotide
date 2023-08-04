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
