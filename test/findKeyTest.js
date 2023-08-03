const findKey = require('../findKey');
const assert = require('chai').assert;

// Test Data

results1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}


results2 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

// Tests

describe("#findKey", () => {
  it("returns the first key for which the callback returns a truthy value", () => {
    assert.strictEqual((findKey(results1, x => x.stars === 2)), "noma");
  });

  it("returns undefined if the callback does not return a truthy value for ANY keys", () => {
    assert.strictEqual((findKey(results2, x => x.stars === 4)), undefined);
  });

});
