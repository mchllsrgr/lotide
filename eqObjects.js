const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;