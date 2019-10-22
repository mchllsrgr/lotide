const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("#letterPositions", () => {
  it("should return [1] for e in \"hello\"", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
  it("should return [0, 2] for a in \"a basic sentence\"", () => {
    assert.deepEqual(letterPositions("a basic sentence").a, [0,2]);
  });
});