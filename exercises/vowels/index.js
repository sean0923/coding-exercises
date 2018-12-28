// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// isVoel func
// return true if a e i o u
// else return false

const isVowel = char => {
  return 'aeiou'.includes(char);
};

function vowels(str) {
  // count start with 0
  // for each char in str
  // if is vowel then count + 1

  // return vowelCount
  let vowelCount = 0;
  str.split('').forEach(char => {
    if (isVowel(char.toLowerCase())) vowelCount++;
  });

  return vowelCount;
}

module.exports = vowels;
