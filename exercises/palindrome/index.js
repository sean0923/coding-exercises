// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   let strLen = str.length;

//   for (let i = 0; i < Math.round(strLen / 2) - 1; i++) {
//     let charFromBeg = str[i];
//     let charFromEnd = str[strLen - 1 - i];
//     if (charFromBeg !== charFromEnd) {
//       return false;
//     }
//   }

//   return true;
// }

function palindrome(str) {
  return str === str.split('').reverse().join('');
}

module.exports = palindrome;
