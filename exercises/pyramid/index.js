// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// 1 -> 1
// 2 -> 3
// 3 -> 5

// * iterative
function pyramid(n) {
  const maxCol = n * 2 - 1;

  const colMidPoint = Math.floor(maxCol / 2);

  for (let row = 0; row < n; row++) {
    let str = '';
    for (let col = 0; col < maxCol; col++) {
      if (col >= colMidPoint - row && col <= colMidPoint + row) {
        str += '#';
      } else {
        str += ' ';
      }
    }
    console.log(str);
  }
}

// * my solution
// const getStrWithChar = (char, count) => {
//   let outputStr = '';

//   for (let i = 0; i < count; i++) {
//     outputStr += char;
//   }

//   return outputStr;
// };

// function pyramid(n) {
//   // just observing
//   // 2 1 2
//   // 1 3 1
//   // 0 5 0

//   // 3 1 3 | 1 | n - f, just 1 odd num, n - 1
//   // 2 3 2 | 2 | n - f, just 2 odd num, n - 2
//   // 1 5 1 | 3 | n - f, just 3 odd num, n - 3
//   // 0 7 0 | 4 | n - f, just 4 odd num, n - 4

//   // nOddNum
//   // n * 2 - 1
//   // 1 -> 1
//   // 2 -> 3
//   // 3 -> 5
//   for (let i = 1; i <= n; i++) {
//     const emptySpaces = getStrWithChar(' ', n - i);
//     const steps = getStrWithChar('#', i * 2 - 1);
//     console.log(emptySpaces + steps + emptySpaces);
//   }
// }

module.exports = pyramid;
