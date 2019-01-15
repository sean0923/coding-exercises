// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

const swap = (arr, currIdx, nextIdx) => {
  const temp = arr[currIdx];
  arr[currIdx] = arr[nextIdx];
  arr[nextIdx] = temp;
  return arr;
};

function bubbleSort(arr) {
  // from i: 0 -> arr.length - 2
  for (let i = 0; i < arr.length - 1; i++) {
    // from j : i + 1 -> arr.lengh
    for (let j = i + 1; j < arr.length; j++) {
      // if i > j
      if (arr[i] > arr[j]) {
        // swap
        swap(arr, i, j);
      }
    }
  }

  return arr;
}

function selectionSort(arr) {}

function mergeSort(arr) {}

function merge(left, right) {}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
