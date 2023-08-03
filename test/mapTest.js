const map = require('../map');
const assert = require('chai').assert;


const words = ["ground", "control", "to", "major", "tom"];
const nums = [1, 2, 3, 4, 5];
const empty = [];


describe("#map", () => {
  it("returns [ 'g', 'c', 't', 'm', 't' ] for ['ground', 'control', 'to', 'major', 'tom'] where the callback isolates the first letter of each work - word[0]", () => {
    assert.deepEqual((map(words, word => word[0])), [ 'g', 'c', 't', 'm', 't' ]);
  });

  it("returns [10, 20, 30, 40, 50] for [1, 2, 3, 4, 5] where the callback multiplies each value by 10 - num * 10", () => {
    assert.deepEqual((map(nums, num => num * 10)), [10, 20, 30, 40, 50]);
  });

  it("returns 'Error: Provided array is empty' if the supplied array is empty", () => {
    assert.deepEqual((map(empty, element => element * 10)), 'Error: Provided array is empty');
  });

});  
