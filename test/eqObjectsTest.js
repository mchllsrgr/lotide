const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };


describe("#eqObjects", () => {
  it("should return true for ({ a: \"1\", b: \"2\" }, { b: \"2\", a: \"1\" })", () => {
    assert.deepEqual(eqObjects(ab, ba), true);
  });
  it("should return false for ({ a: \"1\", b: \"2\" }, { a: \"1\", b: \"2\", c: \"3\" })", () => {
    assert.deepEqual(eqObjects(ab, abc), false);
  });
  it("should return true for ({ c: \"1\", d: [\"2\", 3] }, { d: [\"2\", 3], c: \"1\" })", () => {
    assert.deepEqual(eqObjects(cd, dc), true);
  });
  it("should return false for ({ c: \"1\", d: [\"2\", 3] }, { c: \"1\", d: [\"2\", 3, 4] })", () => {
    assert.deepEqual(eqObjects(cd, cd2), false);
  });
});