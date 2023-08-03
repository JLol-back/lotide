const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("#letterPositions", () => {
  it("returns { h: [0], e: [1], l: [2, 3], o: [4] } for 'hello' ", () => {
    assert.deepEqual(letterPositions("hello"), { h: [0], e: [1], l: [2, 3], o: [4] });
  });

  it("does not return indexes for spaces ' ' in a string eg:'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions("lighthouse in the house"), {l: [ 0 ], i: [ 1, 11 ], g: [ 2 ], h: [ 3, 5, 15, 18 ], t: [ 4, 14 ], o: [ 6, 19 ], u: [ 7, 20 ], s: [ 8, 21 ], e: [ 9, 16, 22 ], n: [ 12 ] });
  });

  it("returns one key per letter found in the string - i.e. is case insensitive", () => {
    assert.deepEqual(letterPositions("lightHouse in The hoUse"), {l: [ 0 ], i: [ 1, 11 ], g: [ 2 ], h: [ 3, 5, 15, 18 ], t: [ 4, 14 ], o: [ 6, 19 ], u: [ 7, 20 ], s: [ 8, 21 ], e: [ 9, 16, 22 ], n: [ 12 ] });
  });

  it("returns an empty object '{}' when provided with an empty string", () => {
    assert.deepEqual(letterPositions(""), {});
  });

});  
