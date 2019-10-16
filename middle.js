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

// take the middle element(s) of an array
const middle = function(array) {
  let middleNum = [];
  const midIndex = Math.floor(array.length/2);
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      middleNum.push(array[midIndex - 1], array[midIndex]);
    } else {
      middleNum.push(array[midIndex]);
    }
  }
  return middleNum;
}

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([, 2, 3, 4, 5, 6]), [3, 4]);