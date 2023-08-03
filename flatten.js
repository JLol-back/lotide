// flatten takes in an array that contains elements including nested array 
// of elements and returns a flattened version of the array.

flatten = function(array) {
  let flatArray = [];                                // Define a new array to contain our new flattened array
  for (let i = 0; i < array.length; i++) {           // Loop through outermost array
    let arrCheck = Array.isArray(array[i]);          // Define array checker function using isArray method.
    if (arrCheck) {                                  // If given element of outermost array is also an array
      for (ii = 0; ii < array[i].length; ii++) {     // Start a second loop through the next level down array
        flatArray.push(array[i][ii]);                // Push method to send each element we find to the flatArray variable
      } 
    }
    if (!arrCheck) {                                 // If the outermost element is not an array
      flatArray.push(array[i]);                      // Push that value to the flatArray variable 
    }
  };
  return flatArray;                                  // Once loop is finished, return our newly flattened array.
}

module.exports = flatten;
