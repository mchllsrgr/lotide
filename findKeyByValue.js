// scan object and return the first key which contains the given value
// if no key with that given value is found, return undefined
const findKeyByValue = function(object, value) {
  let keys = Object.keys(object);
  for (let i in keys) {
    // let objectKey = keys[i];
    // let objectValue = object[objectKey];
    if (object[keys[i]] === value) { 
      return keys[i];
    }
  }
}

module.exports = findKeyByValue;