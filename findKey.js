const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key]) === true) {
      return key;
    }
  }
};

module.exports = findKey;
