/*
takeUntil takes in two parameters:
  1) An array to work with
  2) A callback function
And returns a "slice of the array with elements taken from the beginning." 
It should keep going until the callback returns a truthy value.
*/

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