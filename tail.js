// check if two values are equivalent
const assertEqual = require('./assertEqual');

// return all items in array except the first
const tail = function(array) {
  let newTail = array.slice(1);
  return newTail;
};

module.exports = tail;