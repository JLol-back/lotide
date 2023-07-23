function eqArrays(array1, array2) {
  let isEqual;
  if (array1.length !== array2.length) {
    isEqual = false;
    return isEqual;
  } else if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        //console.log(`Arrays are not equal: Array 1, position ${i} (${array1[i]}) does not equal Array 2, position ${i} (${array1[i]})`);
        isEqual = false;
        //console.log(isEqual);
      } else {
        //console.log("Arrays are equal")
        isEqual = true;
      }

    }
  } return isEqual;
}

const assertArraysEqual = function(first, second) {

  if (eqArrays(first, second) === true) {
    console.log(`✅✅✅ Assertion Passed: ${first} exactly matches ${second}`);
  } else if (eqArrays(first, second) === false) {
    console.log("👎 👎 👎 Assertion Failed: these arrays do not match");
  }
};


// letterPositions Starts Here

const letterPositions = function(sentence) {
  const results = {};
  let string = sentence.toLowerCase();     // Force all letters to lowercase so they're aggregated correctly
  for (const letter of string) {           // Initializing Arrays for every letter in supplied sentence
    if (letter !== ' ') {                  // Ignoring spaces between letters in the given string 
      results[letter] = [];                // Create a key in the results object equal to letter, and assign it the value of an empty array
    }
  }

  let n = 0;
  for (const letter of string) {  // Second loop through to update arrays with index values for each letter.
    if (letter === ' ') {         // If we come across a space, increment the index counter (n) and don't change any values
      n++;
    } else {               
      results[letter].push(n);    // Access the current letter key within the results object and push the current index counter value to the array.
      n++;
    }
  }
  return results;
};


//Equal Array Test Cases

assertArraysEqual(letterPositions("hello").e, [1]);     // SHOULD PASS Simple test
assertArraysEqual(letterPositions("Test").t, [0, 3]);   // SHOULD PASS Upper and lower case test
assertArraysEqual(letterPositions("hello hello").l, [2, 3, 8, 9]); // SHOULD FAIL Test with multiple words separated by a space
assertArraysEqual(letterPositions("hello hello").l, [2, 3, 7, 8]); // SHOULD PASS Test with multiple words separated by a space
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);

