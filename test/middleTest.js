const assertArraysEqual = require ('../assertArraysEqual');
const middle = require('../middle');
const expect = require('chai').expect;

describe("#middle", () => {
  it("returns [] for [1]", () => {
    expect(middle([1])).to.include.all.members([]);
  });
  it("returns [] for [1, 2]", () => {
    expect(middle([1, 2])).to.include.all.members([]); 
  });
  it("returns [2] for [1, 2, 3]", () => {
    expect(middle([1, 2, 3])).to.include.all.members([2]); 
  });
  it("returns [3] for 1, 2, 3, 4, 5]", () => {
    expect(middle([1, 2, 3, 4, 5])).to.include.all.members([3]); 
  });
  it("returns [2, 3] for [1, 2, 3]", () => {
    expect(middle([1, 2, 3, 4])).to.include.all.members([2, 3]); 
  });
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    expect(middle([1, 2, 3, 4, 5, 6])).to.include.all.members([3, 4]); 
  });
});