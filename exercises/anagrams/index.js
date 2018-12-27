// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const removeSpaceAndPunctuation = str => {
  let outputStr = '';

  for (char of str) {
    if (char.toLowerCase() !== char.toUpperCase()) {
      outputStr += char;
    }
  }

  return outputStr;
};

const getCharCounter = str => {
  return str.split('').reduce((acc, char) => {
    if (acc[char] === undefined) {
      acc[char] = 1;
    } else {
      acc[char] += 1;
    }

    return acc;
  }, {});
};

function anagrams(stringA, stringB) {
  // * Consider capital letters to be the same as lower case
  // change string A, and string B to lower case
  // remove space and punctuation
  const shortStrA = removeSpaceAndPunctuation(stringA.toLowerCase());
  const shortStrB = removeSpaceAndPunctuation(stringB.toLowerCase());

  // make charCounter A and B
  const charCounterA = getCharCounter(shortStrA);
  const charCounterB = getCharCounter(shortStrB);

  // ! need to check char counter key len is same
  if (Object.keys(charCounterA).length !== Object.keys(charCounterB).length) {
    return false;
  }

  // compare count in char counter A and B
  for (let key in charCounterA) {
    if (charCounterA[key] !== charCounterB[key]) {
      return false;
    }
  }

  return true;
}

module.exports = anagrams;
