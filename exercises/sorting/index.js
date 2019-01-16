// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

const swap = (arr, currIdx, nextIdx) => {
  const temp = arr[currIdx];
  arr[currIdx] = arr[nextIdx];
  arr[nextIdx] = temp;
  return arr;
};

function bubbleSort(arr) {
  // nextIdxLimit = arr.length
  let nextIdxLimit = arr.length;

  // while (nextIdxLimit !== 0)
  while (nextIdxLimit !== 0) {
    // for currIdx 0 -> nextIdxLimit - 1
    for (let currIdx = 0; currIdx < nextIdxLimit - 1; currIdx++) {
      // nextIdx = currIdx+1
      const nextIdx = currIdx + 1;

      // if(currNum > nextNum)
      if (arr[currIdx] > arr[nextIdx]) {
        swap(arr, currIdx, nextIdx);
      }
    }

    nextIdxLimit--;
  }

  return arr;
}

function selectionSort(arr) {
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

function mergeSort(arr) {
  // really split into smaller pieces

  // if (arr.length === 1)
  if (arr.length === 1) {
    // return arr
    return arr;
  }

  // midIdx
  const midIdx = Math.floor(arr.length / 2);

  // leftArr
  const leftArr = arr.slice(0, midIdx);
  // rightArr
  const rightArr = arr.slice(midIdx);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(left, right) {
  // assume left and right is sorted

  // storage arr
  const storage = [];

  // while both length !== 0
  while (left.length && right.length) {
    // if first element of right smaller
    if (left[0] < right[0]) {
      // shift right and push to storage
      storage.push(left.shift());
    } else {
      // else
      // shift left and push to storage
      storage.push(right.shift());
    }
  }

  // return [...storage, ...left, ...right]
  return [...storage, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
