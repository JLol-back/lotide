const without = require('../without');
const assert = require('chai').assert;


const words = ["hello", "world", "lighthouse"];

describe("#without", () => {
  it("returns [2] for array of [1, 2, 3] and items to remove of [1, 3]", () => {
    assert.deepEqual(without([1, 2, 3], [1, 3]), [2]);
  });

  it("returns [2, 3] for array of [1, 2, 3] and items to remove of [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it("returns ['1, '2'] for array of ['1', '2', '3'] and items to remove of [1, 2, '3']", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  it("returns a NEW array and does not modify the original source array", () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ['lighthouse']);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });

});
