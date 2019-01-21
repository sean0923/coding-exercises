// ------------

// [ minCol                        maxCol
//   ['#', '#', '#', '#', '#', '#', '#'], minRow
//   ['#', ' ', ' ', ' ', ' ', ' ', ' '],
//   ['#', ' ', '#', '#', '#', '#', '#'],
//   ['#', ' ', '#', ' ', ' ', ' ', '#'],
//   ['#', ' ', '#', '#', '#', ' ', '#'],
//   ['#', ' ', ' ', ' ', ' ', ' ', '#'],
//   ['#', '#', '#', '#', '#', '#', '#'], maxRow
// ]

// [           minCol              maxCol
//   ['#', '#', '#', '#', '#', '#', '#'], 
//   ['#', ' ', ' ', ' ', ' ', ' ', ' '],
//   ['#', ' ', '#', '#', '#', '#', '#'], minRow
//   ['#', ' ', '#', ' ', ' ', ' ', '#'],
//   ['#', ' ', '#', '#', '#', ' ', '#'],
//   ['#', ' ', ' ', ' ', ' ', ' ', '#'],
//   ['#', '#', '#', '#', '#', '#', '#'], maxRow
// ]

// there should be minRow, maxRow, minCol, maxCol
// direction should start from left, down, right, top, ...
// should be create matrix filled by '#'

// limit
// left -> minCol
// down -> maxRow
// right -> maxCol
// up -> minRow

// movingWall
// left maxRow - 2
// down minCol + 2
// right minRow + 2
// up maxCol - 2

// ------------
// createMaxtix
const createMatrix = n => {
  const nestedArr = [];

  for (let i = 0; i < n; i++) {
    const tempArr = [];
    for (let j = 0; j < n; j++) {
      tempArr.push('#');
    }
    nestedArr.push(tempArr);
  }

  return nestedArr;
};

const spiralPath = n => {
  // matrix
  const matrix = createMatrix(n);

  // minRow = 1
  let minRow = 0;
  // maxRow = n - 1;
  let maxRow = n - 1;
  // minCol = 1
  let minCol = 0;
  // maxCol = n - 1;
  let maxCol = n - 1;

  // startRow = 1
  let startRow = 1;
  // startCol = n - 1
  let startCol = n - 1;

  // row = startRow
  let row = startRow;
  // col = startCol
  let col = startCol;

  while (minRow < maxRow && minCol < maxCol) {
    // for col -> greaterThan minCol c--
    for (col; col > minCol; col--) {
      // replace matrix[row][col] = ' '
      matrix[row][col] = ' ';
    }
    col++;
    minRow = minRow + 2;

    // for row -> lessThan maxRow r++
    for (row; row < maxRow; row++) {
      matrix[row][col] = ' ';
    }
    // minRow += 2
    row--;
    minCol = minCol + 2;
    // console.log('row: ', row);

    // for col -> maxCol col++
    for (col; col < maxCol; col++) {
      matrix[row][col] = ' ';
    }
    col--;
    maxRow = maxRow - 2;

    // for row -> minRow row--
    for (row; row > minRow; row--) {
      matrix[row][col] = ' ';
    }
    row++;
    maxCol = maxCol - 2;
  }

  return matrix;
};

console.log('spiralPath(5): ', spiralPath(7));

module.exports = { spiralPath };
