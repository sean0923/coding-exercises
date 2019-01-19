const { smallestPositiveInteger } = require('./index');
const { createArrFromTo } = require('../helpers/testHelper');

test('smallestPositiveInteger is a function', () => {
  expect(typeof smallestPositiveInteger).toEqual('function');
});

test('[1, 3, 6, 4, 1, 2] -> 5', () => {
  const input = [1, 3, 6, 4, 1, 2];
  const output = smallestPositiveInteger(input);
  const targetOutput = 5;

  expect(output).toEqual(targetOutput);
});

test('[1, 2, 3] -> 4', () => {
  const input = [1, 2, 3];
  const output = smallestPositiveInteger(input);
  const targetOutput = 4;

  expect(output).toEqual(targetOutput);
});

test('[-1, -3] -> 1', () => {
  const input = [-1, -3];
  const output = smallestPositiveInteger(input);
  const targetOutput = 1;

  expect(output).toEqual(targetOutput);
});

test('[...createArrFromTo(0, 100), ...createArrFromTo(102, 200)] -> 101', () => {
  const input = [...createArrFromTo(0, 100), ...createArrFromTo(102, 200)];
  const output = smallestPositiveInteger(input);
  const targetOutput = 101;

  expect(output).toEqual(targetOutput);
});
