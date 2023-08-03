const countOnly = require('../countOnly');
const assert = require('chai').assert;


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const vips = { 
  "Jason": true,  
  "Fang": true, 
};

const vips2 = {  
  "Karima": true,   
};

const vips3 = {    
  "Agouhanna": false, 
};



describe("#countOnly", () => {
  it("returns '{ Jason: 1, Fang: 2, }' for '[Fang, Jason, Fang]' where '{Jason: true, Fang: true}' ", () => {
    assert.deepEqual(countOnly(firstNames, vips), { "Jason": 1, "Fang": 2, } );
  });

  it("returns an empty object '{}' if no truthy object values are present in the array", () => {
    assert.deepEqual(countOnly(firstNames, vips2), {} );
  });

  it("returns an empty object '{}' if there are no truthy object values", () => {
    assert.deepEqual(countOnly(firstNames, vips3), {} );
  });

});
