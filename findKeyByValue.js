const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

// scan object and return the first key which contains the given value
// if no key with that given value is found, return undefined
const findKeyByValue = function(object, value) {
  let keys = Object.keys(object);
  for (i in keys) {
    let objectKey = keys[i];
    let objectValue = object[objectKey];
    if (objectValue === value) { 
      return objectKey;
    }
  }
}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
