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

// check if a value is inside an array
function isInsideArray(value, array) {
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  }
  return false;
}

// return a subset of a given array, removing unwanted elements
const without = function(source, itemsToRemove) {
  let newSource = [];
  // loop through source array
  for (var i = 0; i < source.length; i++) {
    // if source item is not equivalent to itemsToRemove, push source item to newArray
    if (!isInsideArray(source[i], itemsToRemove)) {
      newSource.push(source[i]);
    }
  }
  return newSource;
}


assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
