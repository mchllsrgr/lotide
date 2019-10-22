const flatten = require('../flatten');
const assert = require('chai').assert;

describe("#flatten", () => {
  it("should take nested arrays and return single-level array", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});