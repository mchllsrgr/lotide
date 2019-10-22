// take array and object, return object containing total of everything that the input object listed

// only keys which have a truthy value should be counted in the resulting object
// All other strings (either set to false or not included at all in the object) should not be counted
// That said, if a particular string is meant to be counted but does not exist in the input array 
// (like "f" in the example above), it also does not have to be included in the final count.

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const getKey = function(object, item) {
  // loop through properties in object
  for (key in object) {
    // check if object's key value is equivalent to item variable
    if (key === item) {
      return key;
    }
  }
  return undefined;
}

const countOnly = function(allItems, itemsToCount) {
  // create emptyObject
  let result = {};
  // loop through items in allItems
  for (item of allItems) {
    let key = getKey(itemsToCount, item); // check if item in array is inside itemsToCount object
    if (key) { // key exists
      if (result[key]) {
        result[key] += 1; // increment by 1
      } else {
        result[key] = 1; // else, set it to 1
      }
    }
  }
  return result;
}

module.exports = countOnly;
  