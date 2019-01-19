exports.createArrFromTo = (fromNum, toNum) => {
  const arr = [];

  for (let i = fromNum; i <= toNum; i++) {
    arr.push(i);
  }

  return arr;
};
