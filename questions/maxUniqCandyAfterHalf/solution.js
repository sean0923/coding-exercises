const smallestPositiveInteger = A => {
  const uniqNumObj = {};
  A.forEach(num => {
    uniqNumObj[num] = num;
  });

  const uniqNums = Object.keys(uniqNumObj).map(str => parseInt(str));

  const sortedArr = uniqNums.sort((a, b) => a - b);

  let oneIdx = sortedArr.indexOf(1);

  if (oneIdx === -1) {
    return 1;
  }

  for (let i = oneIdx; i < sortedArr.length - 1; i++) {
    const currNum = sortedArr[i];
    const nextNum = sortedArr[i + 1];

    if (nextNum !== currNum + 1) {
      return currNum + 1;
    }
  }

  return sortedArr[sortedArr.length - 1] + 1;
};

module.exports = { smallestPositiveInteger };
