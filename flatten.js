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

// take in an array of arrays and flatten to a single-level array
const flatten = function(array) {
  let flatArray = [];
  // loop through the outer layer and determine if it's a number or array
  array.forEach(function(outsideElement) {
    // if number, push number to flattenArray
    if (typeof outsideElement === "number") {
      flatArray.push(outsideElement);
    } else if (Array.isArray(outsideElement)) { // if array, loop through inner array and push inner array element
      outsideElement.forEach(function(insideElement) {
        flatArray.push(insideElement);
      })
    }
  });
  return flatArray;
}

module.exports = flatten;

// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);