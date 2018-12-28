// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// reachToLimit
// right col > maxCol
// down row > maxRow
// left col < 0
// up row < 0

const occupied = (row, col, nestedArr) => {
  return nestedArr[row][col] ? true : false;
};

const reachToLimit = (direction, row, col, maxRow, maxCol) => {
  if (direction === 'R' && col >= maxCol) return true;
  if (direction === 'D' && row >= maxRow) return true;
  if (direction === 'L' && col < 0) return true;
  if (direction === 'U' && row < 0) return true;

  return false;
};

const getNextRowCol = (direction, [row, col]) => {
  if (direction === 'R') return [row, col + 1];
  if (direction === 'D') return [row + 1, col];
  if (direction === 'L') return [row, col - 1];
  if (direction === 'U') return [row - 1, col];
};

const changeDirection = direction => {
  if (direction === 'R') return 'D';
  if (direction === 'D') return 'L';
  if (direction === 'L') return 'U';
  if (direction === 'U') return 'R';
};

const getNestedArr = n => {
  let outputNestedArr = [];
  for (let i = 0; i < n; i++) {
    let subArr = [];
    for (let j = 0; j < n; j++) {
      subArr[j] = '';
    }

    outputNestedArr.push(subArr);
  }

  return outputNestedArr;
};

function matrix(n) {
  // num start from 1
  // row start 0
  // col start 0
  // direction = right;

  // while num is not n * n
  // get next row col
  // if next row col reach to limit or occupied then
  // change direction
  // else
  // put num inside to nested Arr => nestedArr[row][col] = num;
  // num++;
  // row = nextRow, col = nextCol
  const outputNestedArr = getNestedArr(n);
  console.log('outputNestedArr: ', outputNestedArr);

  let row = 0;
  let col = 0;
  let num = 1;
  outputNestedArr[row][col] = num;

  num++;

  let maxRow = n;
  let maxCol = n;

  let direction = 'R';

  while (true) {
    const [nextRow, nextCol] = getNextRowCol(direction, [row, col]);

    const hasReachLimit = reachToLimit(direction, nextRow, nextCol, maxRow, maxCol);

    if (hasReachLimit) {
      direction = changeDirection(direction);
    } else if (occupied(nextRow, nextCol, outputNestedArr)) {
      direction = changeDirection(direction);
    } else {
      outputNestedArr[nextRow][nextCol] = num;
      console.log('outputNestedArr: ', outputNestedArr);
      if (num === n * n) break;
      num++;
      row = nextRow;
      col = nextCol;
    }
  }

  return outputNestedArr;
}

console.log(matrix(2));

module.exports = matrix;
