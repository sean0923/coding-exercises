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
  console.log('charCounter: ', charCounter);

  let keyValuePairs = Object.entries(charCounter);
  console.log('keyValuePairs: ', keyValuePairs);
  let sortedKeyValuePairs = keyValuePairs.sort((arrA, arrB) => {
    return arrB[1] - arrA[1];
  });
  console.log('sortedKeyValuePairs: ', sortedKeyValuePairs);

  return sortedKeyValuePairs[0][0];
}

let str = 'abbccccda';
maxChar(str);
