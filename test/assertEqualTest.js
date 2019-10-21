const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#assertEqualTest", () => {
  it("returns false for input are the same", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"),false);
  });
  it("returns true for arrays that dont have same elements types", () => {
    assert.strictEqual(assertEqual(1, 1), true); 
  });
});
