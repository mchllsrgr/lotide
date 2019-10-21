const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#assertArraysEqualTest", () => {
  it("returns true for arrays that have same strings", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  it("returns false for arrays that dont have same elements types", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); 
  });
});
