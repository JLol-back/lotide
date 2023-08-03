const takeUntil = require('../takeUntil');
const assert = require('chai').assert;


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const data3 = [5, 2, 9, 1, 17, 11, 3];
const data4 = [-1, 9, 13, 1, 4];


describe("#takeUntil", () => {
  it("returns [ 1, 2, 5, 7, 2 ] for [1, 2, 5, 7, 2, -1, 2, 4, 5] where callback is looking for values of less than 0", () => {
    assert.deepEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
  });

  it("returns [ 'I\'ve', 'been', 'to', 'Hollywood' ] for ['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood'] where the callback is looking for a comma ',' within a string", () => {
    assert.deepEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  });

  it("returns the full array if the callback function never returns a truthy value", () => {
    assert.deepEqual(takeUntil(data3, x => x < 0), data3);
  });

  it("returns an empty array if the callback function returns a truthy value on the first iteration", () => {
    assert.deepEqual(takeUntil(data4, x => x < 0), []);
  });

});  

