
const middle = function(array) {
  result = [];  
  if (!Array.isArray(array)) {
    return "Error: Not an array"
  }

  if (array.length <= 2) {                      //LOGIC FOR ONE OR TWO ELEMENTS
    return [];
  }

  if (array.length % 2 !== 0) {                //LOGIC FOR ODD NUMBER OF ELEMENTS
    let x = Math.floor(array.length / 2);      // Half the array length and round down to the nearest whole number
    result.push(array[x]);
  }

  if (array.length % 2 == 0) {                 // LOGIC FOR EVEN NUMBER OF ELEMENTS
    let x = array.length / 2;
    result.push(array[x-1]);
    result.push(array[x]);
  }
  return result;
}

module.exports = middle;
