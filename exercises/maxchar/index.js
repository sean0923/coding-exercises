// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // make counter with reduce
  // make key value to nested arr of [objKey, objValue]
  // sort from low to high
  let charCounter = str.split('').reduce((acc, char) => {
    if (acc[char] === undefined) {
      acc[char] = 1;
    } else {
      acc[char] += 1;
    }

    return acc;
  }, {});

  let keyValuePairs = Object.entries(charCounter);

  let sortedKeyValuePairs = keyValuePairs.sort((arrA, arrB) => {
    return arrB[1] - arrA[1];
  });

  return sortedKeyValuePairs[0][0];
}

module.exports = maxChar;
