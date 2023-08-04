const without = function(source, itemsToRemove) {

  const result = Array.from(source, x => x);

  for (let i = 0; i < result.length; i++) {
    if (itemsToRemove.includes(result[i])) {
      result.splice(i, 1);
    }   
  }
  return result;
};

without([1, 2, 3], [4, 5, 1]) 

module.exports = without;



