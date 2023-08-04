const map = function(array, callback) {
  
  if (array.length === 0) {
    return 'Error: Provided array is empty';
  }

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;
