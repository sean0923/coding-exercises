// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reversePositiveInt = positiveInt => {
  return parseInt(positiveInt.toString().split('').reverse().join(''));
};

function reverseInt(n) {
  let isNegative = n < 0;

  let positiveInt = n;

  if (isNegative) {
    positiveInt = -1 * positiveInt;
  }

  let reversedPositiveInt = reversePositiveInt(positiveInt);

  if (isNegative) {
    return reversedPositiveInt * -1;
  }

  return reversedPositiveInt;
}

module.exports = reverseInt;
