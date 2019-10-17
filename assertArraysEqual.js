// check if two arrays are equal
const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
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