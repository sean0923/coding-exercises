// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   let outputStr = '';
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     outputStr = char + outputStr;
//   }
//   return outputStr;
// }

function reverse(str) {
  return str.split('').reduce((acc, char) => {
    return char + acc;
  });
}

module.exports = reverse;
