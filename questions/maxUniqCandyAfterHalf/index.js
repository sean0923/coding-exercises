const makeTwoArrLenSame = (arr1, arr2) => {
  while (arr1.length !== arr2.length) {
    if (arr1.length > arr2.length) {
      arr2.push(arr1.pop());
    } else {
      arr1.push(arr2.pop());
    }
  }
};

const maxUniqCandyAfterHalf = T => {
  // make duplicates arr
  const duplicates = [];
  // make couter to count
  const counter = {};
  T.forEach(num => {
    if (counter[num] === undefined) {
      counter[num] = 1;
    } else {
      duplicates.push(num);
    }
  });

  const arr1 = Object.keys(counter).map(str => parseInt(str));

  makeTwoArrLenSame(arr1, duplicates);

  const uniq = {};

  arr1.forEach(num => {
    uniq[num] = num;
  });

  const len = Object.keys(uniq).length;
  return len;
};

module.exports = { maxUniqCandyAfterHalf };
