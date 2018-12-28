// write pascal triangle

// ex) 1 ->
// 1

// ex) 3 ->
// 1
// 1 2 1
// 1 3 3 1

// ex) 4 ->
// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1

const getNewRow = prevRow => {
  let inBtwArr = [];
  for (let i = 0; i < prevRow.length - 1; i++) {
    inBtwArr.push(prevRow[i] + prevRow[i + 1]);
  }
  return [1, ...inBtwArr, 1];
};

function pascalTriangle(n) {
  let outputNestedArr = [[1]];
  if (n === 1) return outputNestedArr;

  outputNestedArr.push([1, 1]);
  if (n === 2) return outputNestedArr;

  for (let rowNum = 3; rowNum <= n; rowNum++) {
    const prevRow = outputNestedArr[outputNestedArr.length - 1];
    outputNestedArr.push(getNewRow(prevRow));
  }

  return outputNestedArr;
}

module.exports = pascalTriangle;
