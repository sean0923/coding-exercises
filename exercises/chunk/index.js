// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let outputNestedArr = [];
  let subArr = [];

  let arrLen = array.length;

  for (let i = 0; i < arrLen; i++) {
    subArr.push(array[i]);

    if (subArr.length === size) {
      outputNestedArr.push(subArr.slice());
      subArr = [];
    }
  }

  if (subArr.length !== 0) {
    outputNestedArr.push(subArr.slice());
  }

  return outputNestedArr;
}

module.exports = chunk;
