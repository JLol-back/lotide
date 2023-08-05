/**
 * countOnly takes in an array and an object and returns counts of a subset of the array's items as defined by the input object.
 * @param {array} allItems
 * @param {object} itemsToCount
 * @returns a NEW object containing counts for how many times each key listed in the itemsToCount object appeared within the allItems array.
 */
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;
