const flatten = function(array) {
  let flatArray = [];
  array.forEach((item) => {
    if (Array.isArray(item)) {
      flatArray = flatArray.concat(flatten(item));
    } else {
      flatArray.push(item);
    }
  });
  return flatArray;
}

module.exports = flatten;
