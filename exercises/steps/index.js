// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// * recursive solution
function steps(n, row = 0, stair = '') {
  if (row === n) return;

  if (stair.length === n) {
    console.log(stair);
    steps(n, row + 1, '');
    return;
  }

  const char = row >= stair.length ? '#' : ' ';
  steps(n, row, stair + char);
}

// * iterative solution
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let str = '';

//     for (let col = 0; col < n; col++) {
//       if (row >= col) {
//         str += '#';
//       } else {
//         str += ' ';
//       }
//     }
//     console.log(str);
//   }
// }

// * solution by me
// const addChars = (char, count) => {
//   let outputStr = '';
//   for (let i = 0; i < count; i++) {
//     outputStr += char;
//   }
//   return outputStr;
// };

// function steps(n) {
//   // looking at output ex) 4
//   //  looks like  1 # and 3 space
//   // 1 3
//   // 2 2
//   // 3 1
//   // 4 0
//   // so will use for loop start from stepCount 1 -> n
//   // spaceCount = n - stepCount
//   // will have add chars helper func (char, count)
//   // in for loop it will be
//   // printing addChars('#', idx) + addChars('#', spaceCount)

//   for (let stepCount = 1; stepCount <= n; stepCount++) {
//     const spaceCount = n - stepCount;
//     const str = addChars('#', stepCount) + addChars(' ', spaceCount);
//     console.log(str);
//   }
// }

module.exports = steps;
