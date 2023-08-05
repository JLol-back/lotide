/**
 *
 * @param {array} source
 * @param {array} itemsToRemove
 * @returns
 */
const without = function(source, itemsToRemove) {

  const result = Array.from(source, x => x);

  for (let i = 0; i < result.length; i++) {
    if (itemsToRemove.includes(result[i])) {
      result.splice(i, 1);
      i--;          // If item removed from results array, decrement 'i' to account for the newly shortened results array length so our for loop doesn't end before iterating over every value.
    }
  }
  return result;
};

module.exports = without;