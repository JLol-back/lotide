const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns TRUE if given two exactly equal arrays - [1, 2, 3] and [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns FALSE if arrays provided have different lengths - [1, 2, 3] and [1, 2]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2]), false);
  });

  it("returns FALSE if arrays provided contain similar values of different types - ['1', '2', '3'], ['1', '2', 3]", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });

});