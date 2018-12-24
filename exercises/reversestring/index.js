// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // start with output str ''
  // for each char
  // outputStr = char + outputStr

  // ex 'abcd'

  // char 0 = a
  // outputStr = a + ''
  // outputStr = a

  // char 1 = b
  // outputStr = b + a
  // outputStr = ba

  // ...
  let outputStr = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    outputStr = char + outputStr;
  }
  return outputStr;
}

module.exports = reverse;
