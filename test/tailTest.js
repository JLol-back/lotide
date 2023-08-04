const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns an empty array '[]' when provided an array with only one element", () => {
    assert.deepEqual(tail(["Hello"]), []);
  });

  it("returns an empty array '[]' when provided an empty array '[]'", () => {
    assert.deepEqual(tail([]), []);
  });

  it("does not modify the original array that is passed in", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words, ["Yo Yo", "Lighthouse", "Labs"]);
  });

});  
