// check if two values are equivalent
const assertEqual = require('./assertEqual');

// return all items in array except the first
const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;