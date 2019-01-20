// find the smallest positive integer htat array dose not have

// [1, 3, 6, 4, 1, 2] -> 5

const smallestPositiveInteger = A => {
  // find uniq nums by putting into obj
  const uniqNumObj = A.reduce((acc, num) => {
    if (acc[num] === undefined) {
      acc[num] = num;
    }

    return acc;
  }, {});

  const uniqAndSortedNums = Object.values(uniqNumObj).sort((a, b) => a - b);

  const oneIdx = uniqAndSortedNums.indexOf(1);
  // find indexOf 1

  // if indexOf 1 not exist
  if (oneIdx === -1) {
    // return 1;
    return 1;
  }

  // startFrom idxOne -> len - 1
  for (let i = oneIdx; i < uniqAndSortedNums.length - 1; i++) {
    // currNum
    const currNum = uniqAndSortedNums[i];
    // nextNum
    const nextNum = uniqAndSortedNums[i + 1];

    // if(nextNum !== currNum + 1)
    if (nextNum !== currNum + 1) {
      return currNum + 1;
    }
  }

  return uniqAndSortedNums[uniqAndSortedNums.length - 1] + 1;
};

module.exports = { smallestPositiveInteger };
