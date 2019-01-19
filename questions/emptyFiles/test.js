const { func } = require('./index');
// const { createArrFromTo } = require('../testHelper');

test('func is a function', () => {
  expect(typeof func).toEqual('function');
});

test('[1, 3, 6, 4, 1, 2] -> 5', () => {
  const input = [1, 3, 6, 4, 1, 2];
  const output = func(input);
  const targetOutput = 5;

  expect(output).toEqual(targetOutput);
});
