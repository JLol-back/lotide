

// countOnly takes in an array and an object and returns an object containing counts of every truthy value that the input object listed found in the array.

const countOnly = function (allItems, itemsToCount) {
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
  }

module.exports = countOnly;
