const removeFromArray = function (array, ...toRemove) {
  const filteredArray = array.filter((item) => !toRemove.includes(item));

  return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
