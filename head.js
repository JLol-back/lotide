const assertEqual = require('./assertEqual');

const head = function (array) { 
  if (array.length === 0) {      // If array is empty, return undefined and function ends there.
    return undefined;
  } else {                       // Otherwise return the 1st (0th) index of the array.
    return array[0];
  }
}

module.exports = head;