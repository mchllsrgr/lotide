// check if two values are equal
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

// scan the object and return the first key for which the callback returns a truthy value.
// If no key is found, then it should return undefined

const findKey = function(object, callback) {
  let keys = Object.keys(object);
  for (let i in keys) {
    let objectKey = keys[i];
    let objectValue = object[objectKey];
    if (callback(objectValue)) {
      return objectKey;
    }
  }
};


// test code
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");
