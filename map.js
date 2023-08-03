/* 
Our map function will take in two arguments:
  1. An array to map
  2. callback function
The map function will return a new array based on the results of the callback function.
*/

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
