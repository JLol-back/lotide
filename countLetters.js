/**
 * countLetters takes in a string and returns a count of each of the letters present in the string.
 * @param {*} string
 * @returns an object containing one key for each unique letter found in the string with a value equal to how many times the letter was present within the string.
 */

const countLetters = function(string) {
  let letterCount = {};
  let lowerCase = string.toLowerCase();
  for (const letter of lowerCase) {
    if (letter !== " ") {
      if (letterCount[letter]) {
        letterCount[letter] += 1;
      } else if (!letterCount[letter]) {
        letterCount[letter] = 1;
      }
    }
  }
  return letterCount;
};

module.exports = countLetters;
