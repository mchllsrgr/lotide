// check if two inputs are equivalent
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(string) {
  const results = {};
  const noSpaces = string.split(" ").join("");
  for (const letter of noSpaces) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
}

module.exports = countLetters;

// countLetters('lighthouse in the house')