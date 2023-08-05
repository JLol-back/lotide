/**
 * letterPositions takes in a string and returns all indices of letter positions in the string.
 * @param {string} sentence
 * @returns {object} containing a key for each unique letter present within the string, with a corresponding value {array} of all indices of the letters position in the string.
 */

const letterPositions = function(sentence) {
  const results = {};
  let string = sentence.toLowerCase(); // Force all letters to lowercase so they're aggregated correctly
  for (const letter of string) {
    // Initializing Arrays for every letter in supplied sentence
    if (letter !== " ") {
      // Ignoring spaces between letters in the given string
      results[letter] = []; // Create a key in the results object equal to letter, and assign it the value of an empty array
    }
  }

  let n = 0;
  for (const letter of string) {
    // Second loop through to update arrays with index values for each letter.
    if (letter === " ") {
      // If we come across a space, increment the index counter (n) and don't change any values
      n++;
    } else {
      results[letter].push(n); // Access the current letter key within the results object and push the current index counter value to the array.
      n++;
    }
  }
  return results;
};

module.exports = letterPositions;
