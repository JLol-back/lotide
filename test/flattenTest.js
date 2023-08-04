const flatten = require('../flatten');
const assert = require('chai').assert;

describe("#flatten", () => {
  it("returns '[1, 2, 3, 4, 5, 6]' for '[1, 2, [3, 4], 5, [6]]'", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("returns '[1, 2, 3, 4, 5, 6, 7, 8, 9]' for '[[1,2,3], [4,5,6], [7,8,9, [5,6]]]'", () => {
    assert.deepEqual(flatten([[1,2,3], [4,5,6], [7,8,9, [5,6]]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 6]);
  });

  it("returns '['A', 'B', 'C', 'D', 'E']' for '['A', [['B', ['C']], [[['D']], 'E']]]'", () => {
    assert.deepEqual(flatten(['A', [['B', ['C']], [[['D']], 'E']]]), ['A', 'B', 'C', 'D', 'E']);
  });

});
