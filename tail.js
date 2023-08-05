/**
 * tail takes in an array and returns every element except the (first element) of the array.
 * @param {array} array
 * @returns {array} every element except the head (first element) of the array.
 */

const tail = function(array) {
  let newArray = array.slice(1);
  return newArray;
};

module.exports = tail;
