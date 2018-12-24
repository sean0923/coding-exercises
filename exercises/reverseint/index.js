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
  const oneOrNegativeOne = n < 0 ? -1 : 1;
  const positiveInt = n * oneOrNegativeOne;
  return reversePositiveInt(positiveInt) * oneOrNegativeOne;
}

module.exports = reverseInt;
