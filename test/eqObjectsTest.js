const eqObjects = require('../eqObjects');
const assert = require('chai').assert;


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };



describe("#eqObjects", () => {
  it("returns TRUE if the two objects are exactly equal - { color: 'red', size: 'medium' } === { size: 'medium', color: 'red' }", () => {
    assert.strictEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });

  it("returns FALSE if the two objects have a different number of keys - { color: 'red', size: 'medium' } !== { size: 'medium', color: 'red', sleeveLength: 'long' }", () => {
    assert.strictEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  });

  it("returns TRUE if the two objects contain array values and are exactly equal - { colors: ['red', 'blue'], size: 'medium' } === { size: 'medium', colors: ['red', 'blue'] }", () => {
    assert.strictEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  });
  
  it("returns FALSE when comparing - '{a:[1,2], b:2}' and '{a:[2,2], b:2}}'", () => {
    assert.strictEqual(eqObjects({a:[1,2], b:2}, {a:[2,2], b:2}), false);
  });
 
});
