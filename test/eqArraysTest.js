const assertEqual = require('../assertEqual.js');
const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArray", () => {
  it("shoule return true if two arrays is the same", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("should return false if two arrays are not same", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); 
  });
});
