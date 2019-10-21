const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns two elements", () => {
    assert.strictEqual(result.length, 2);
  });
  it("checks first element", () => {
    assert.strictEqual(result[0], "Lighthouse");
  });
  it("checks second element", () => {
    assert.strictEqual(result[1], "Labs");
  });
  it("doesn't change the original array", () => {
    assert.strictEqual(words.length, 3);
  });
});

// test code
const result = tail(["Hello", "Lighthouse", "Labs"]);

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
