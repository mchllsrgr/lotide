// check if two values are equivalent
const assertEqual = require('./assertEqual');

// check if two arrays are equal
const eqArrays = function(arr1, arr2) {
  let result = true;
  if (arr1.length === arr2.length) {
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        result = false;
      } else {
        result = true;
      }
    }
  } else {
    result = false;
  }
  return result;
}

module.exports = eqArrays;
