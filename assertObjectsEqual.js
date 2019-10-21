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

// check if two objects are equal
const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  if (object1Keys.length === object2Keys.length) {
    for (let key of object1Keys) {
      let object1Value = object1[key];
      let object2Value = object2[key];
      if (Array.isArray(object1Value) && Array.isArray(object2Value)) {
        return eqArrays(object1Value, object2Value);
      } else if (object1Value !== object2Value) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

// take two objects and console.log appropriate message
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // import util library to use the inspect function
  let objectCheck = eqObjects(actual, expected);
  if (objectCheck === true) {
    console.log(`✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertObjectsEqual(ab, ba);

// const abc = { a: "1", b: "2", c: "3" };
// assertObjectsEqual(ab, abc);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertObjectsEqual(cd, dc);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertObjectsEqual(cd, cd2);