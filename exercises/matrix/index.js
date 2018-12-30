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

// minRow maxRow minCol max Row

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

// right
// minRow
// minCol -> maxCol
// minRow++
const right = ([nestedArr, num, minRow, maxRow, minCol, maxCol]) => {
  for (let col = minCol; col < maxCol; col++) {
    nestedArr[minRow][col] = num;
    num++;
  }

  minRow++;

  return [nestedArr, num, minRow, maxRow, minCol, maxCol];
};

// down
// maxCol
// minRow -> maxRow
// maxCol --
const down = ([nestedArr, num, minRow, maxRow, minCol, maxCol]) => {
  for (let row = minRow; row < maxRow; row++) {
    nestedArr[row][maxCol - 1] = num;
    num++;
  }

  maxCol--;

  return [nestedArr, num, minRow, maxRow, minCol, maxCol];
};

// left
// maxRow
// maxCol -> minCol
// maxRow --
const left = ([nestedArr, num, minRow, maxRow, minCol, maxCol]) => {
  for (let col = maxCol - 1; col >= minCol; col--) {
    nestedArr[maxRow - 1][col] = num;
    num++;
  }

  maxRow--;

  return [nestedArr, num, minRow, maxRow, minCol, maxCol];
};

// up
// minCol
// maxRow -> minRow
// minCol ++
const up = ([nestedArr, num, minRow, maxRow, minCol, maxCol]) => {
  for (let row = maxRow - 1; row >= minRow; row--) {
    nestedArr[row][minCol] = num;
    num++;
  }

  minCol++;

  return [nestedArr, num, minRow, maxRow, minCol, maxCol];
};

function matrix(n) {
  let nestedArr = getNestedArr(n);

  let minRow = 0;
  let maxRow = n;
  let minCol = 0;
  let maxCol = n;

  let num = 1;

  while (minRow <= maxRow && minCol <= maxCol) {
    [nestedArr, num, minRow, maxRow, minCol, maxCol] = right([
      nestedArr,
      num,
      minRow,
      maxRow,
      minCol,
      maxCol,
    ]);

    [nestedArr, num, minRow, maxRow, minCol, maxCol] = down([
      nestedArr,
      num,
      minRow,
      maxRow,
      minCol,
      maxCol,
    ]);

    [nestedArr, num, minRow, maxRow, minCol, maxCol] = left([
      nestedArr,
      num,
      minRow,
      maxRow,
      minCol,
      maxCol,
    ]);

    [nestedArr, num, minRow, maxRow, minCol, maxCol] = up([
      nestedArr,
      num,
      minRow,
      maxRow,
      minCol,
      maxCol,
    ]);
  }

  return nestedArr;
}

// while minCol <= maxCol && minRow <= maxRow

// * my solution
// reachToLimit
// right col > maxCol
// down row > maxRow
// left col < 0
// up row < 0

// const occupied = (row, col, nestedArr) => {
//   return nestedArr[row][col] ? true : false;
// };

// const reachToLimit = (row, col, maxRow, maxCol) => {
//   if (row < 0) return true;
//   if (row >= maxRow) return true;
//   if (col < 0) return true;
//   if (col >= maxCol) return true;

//   return false;
// };

// const getNextRowCol = (direction, [row, col]) => {
//   if (direction === 'R') return [row, col + 1];
//   if (direction === 'D') return [row + 1, col];
//   if (direction === 'L') return [row, col - 1];
//   if (direction === 'U') return [row - 1, col];
// };

// const changeDirection = direction => {
//   if (direction === 'R') return 'D';
//   if (direction === 'D') return 'L';
//   if (direction === 'L') return 'U';
//   if (direction === 'U') return 'R';
// };

// const getNestedArr = n => {
//   let outputNestedArr = [];
//   for (let i = 0; i < n; i++) {
//     let subArr = [];
//     for (let j = 0; j < n; j++) {
//       subArr[j] = '';
//     }

//     outputNestedArr.push(subArr);
//   }

//   return outputNestedArr;
// };

// function matrix(n) {
//   // num start from 1
//   // row start 0
//   // col start 0
//   // direction = right;

//   // while num is not n * n
//   // get next row col
//   // if next row col reach to limit or occupied then
//   // change direction
//   // else
//   // put num inside to nested Arr => nestedArr[row][col] = num;
//   // num++;
//   // row = nextRow, col = nextCol
//   const outputNestedArr = getNestedArr(n);

//   let row = 0;
//   let col = 0;
//   let num = 1;
//   outputNestedArr[row][col] = num;

//   num++;

//   let maxRow = n;
//   let maxCol = n;

//   let direction = 'R';

//   while (true) {
//     const [nextRow, nextCol] = getNextRowCol(direction, [row, col]);

//     const hasReachLimit = reachToLimit(nextRow, nextCol, maxRow, maxCol);

//     if (hasReachLimit) {
//       direction = changeDirection(direction);
//     } else if (occupied(nextRow, nextCol, outputNestedArr)) {
//       direction = changeDirection(direction);
//     } else {
//       outputNestedArr[nextRow][nextCol] = num;
//       if (num === n * n) break;
//       num++;
//       row = nextRow;
//       col = nextCol;
//     }
//   }

//   return outputNestedArr;
// }

module.exports = matrix;
