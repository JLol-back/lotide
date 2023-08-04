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