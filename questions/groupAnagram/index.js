function groupAnagram(words) {
  const obj = {};

  words.forEach(word => {
    const sortedWord = word.split('').sort().join('');
    if (obj[sortedWord] === undefined) {
      obj[sortedWord] = [word];
    } else {
      obj[sortedWord].push(word);
    }
  });

  return Object.values(obj);
}

module.exports = { groupAnagram };
