// check if two arrays are equal
const eqArrays = require('./eqArrays');

// take two arrays and console.log appropriate message
const assertArraysEqual = require('./assertArraysEqual');

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


module.exports = middle;