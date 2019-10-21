// check if two arrays are equal
const eqArrays = function(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

// take two arrays and console.log appropriate message
const assertArraysEqual = function(arr1, arr2) {
  let arrayCheck = eqArrays(arr1, arr2);
  if (arrayCheck === true) {
    console.log(`✅ Assertion passed: ${arr1} === ${arr2}`);
  } else if (arrayCheck === false) {
    console.log(`🛑 Assertion failed: ${arr1} !== ${arr2}`);
  }
}


const letterPositions = function(sentence) {
  const results = {};
  const noSpaces = sentence.split(" ").join("");
  for (let index in noSpaces) {
    if (results[noSpaces[index]]) {
      results[noSpaces[index]].push(Number(index));
    } else {
      results[noSpaces[index]] = [Number(index)];
    }
  }
  return results;
};

module.exports = letterPositions;

// assertArraysEqual(letterPositions("hello").e, [1]);
