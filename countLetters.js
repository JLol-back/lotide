const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`👎 👎 👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};



//The function should take in a sentence (as a string) and then 
// return a count of each of the letters in that sentence.


function countLetters(string) {
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
  console.log(letterCount);
  return (letterCount);
}


countLetters("test"); // Handling for simple, lowercase string
countLetters("Test"); // Handling for uppercase string, should be handled by lowerCase variable.
countLetters("Test Test"); // Handling for string with space
countLetters("lighthouse in the house"); // Test case from exercise
