const removeFromArray = function (array, ...toRemove) {
  const filteredArray = array.filter((item) => !toRemove.includes(item));

  return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;

// Understand
// Write a function that takes N parameters from an array and returns
// the array from which the values have been removed.
// Plan
// Iterate through the arguments that should be removed. If one is
// found in the array, delete it.
// Pseudocode
// Loop through remove
// Check through findIndex if the item is in array.
// If so, splice it with (index, 1)
// ---
//
