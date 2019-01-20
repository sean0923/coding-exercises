const { maxUniqCandyAfterHalf } = require('./index');

test('maxUniqCandyAfterHalf is a function', () => {
  expect(typeof maxUniqCandyAfterHalf).toEqual('function');
});

test('[3, 4, 7, 7, 6, 6] -> 3', () => {
  const input = [3, 4, 7, 7, 6, 6];
  const output = maxUniqCandyAfterHalf(input);
  const targetOutput = 3;

  expect(output).toEqual(targetOutput);
});

test('[1, 2, 3, 3, 3, 3, 3, 3, 3, 3] -> 3', () => {
  const input = [1, 2, 3, 3, 3, 3, 3, 3, 3, 3];
  const output = maxUniqCandyAfterHalf(input);
  const targetOutput = 3;

  expect(output).toEqual(targetOutput);
});
