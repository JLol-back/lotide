const assert = require('chai').assert;
const countLetters = require('../countLetters');


describe("#countLetters", () => {
  it("returns '{ t: 2, e: 1, s: 1 }' for 'test'", () => {
    assert.deepEqual(countLetters("test"), { t: 2, e: 1, s: 1 });
  });

  it("returns no counts for spaces between words ' ' ", () => {
    assert.deepEqual(countLetters("lighthouse in the house"), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });
  });

  it("does not separate letter counts by case eg: 't' and 'T' ", () => {
    assert.deepEqual(countLetters("Test Test"), { t: 4, e: 2, s: 2 });
  });

});  