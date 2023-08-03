//countLetters takes in a sentence (as a string) and then 
// return a count of each of the letters in that sentence.

const countLetters = function (string) {
  let letterCount = {};
  let lowerCase = string.toLowerCase();
  for (const letter of lowerCase) {
    if (letter !== ' ') { 
      if (letterCount[letter]) {
        letterCount[letter] += 1;
      } else if (!letterCount[letter]) {
        letterCount[letter] = 1;
      }
  }
}
  return letterCount;
}

module.exports = countLetters;
