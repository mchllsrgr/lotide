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
};

// take two arrays and console.log appropriate message
const assertArraysEqual = function(arr1, arr2) {
  let arrayCheck = eqArrays(arr1, arr2);
  if (arrayCheck === true) {
    console.log(`✅ Assertion passed: ${arr1} === ${arr2}`);
  } else if (arrayCheck === false) {
    console.log(`🛑 Assertion failed: ${arr1} !== ${arr2}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];
const animals = ["giraffe", "cat", "tiger", "monkey", "tarantula"];

// return a new array based on the results of the callback function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


module.exports = map;

// test code
// const results1 = map(words, word => word[0]);
// const results2 = map(animals, animal => animal[0]);
// console.log(assertArraysEqual(results1, results2));
