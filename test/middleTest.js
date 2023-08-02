const middle = require('../middle');
const assert = require('chai').assert;


describe("#middle", () => {
  it("returns 'Error: Not an array' if provided anything other than an array", () => {
    assert.strictEqual(middle("string"), "Error: Not an array");
  });

  it("returns an empty array when provided with an array with two or less elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  

  it("returns an array with a single element when provided with an array with an ODD number of elements", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns an array with the TWO middle elements when provided with an array with an EVEN number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

});  
