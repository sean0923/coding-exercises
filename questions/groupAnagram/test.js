const { groupAnagram } = require('./index');
// const { createArrFromTo } = require('../testHelper');

test('groupAnagram is a function', () => {
  expect(typeof groupAnagram).toEqual('function');
});

test('test for groupAnagram', () => {
  const input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
  const output = groupAnagram(input);
  const targetOutput = [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']];

  expect(output).toEqual(targetOutput);
});
