const { spiralPath } = require('./index');
// const { createArrFromTo } = require('../testHelper');
test('spiralPath is a function', () => {
  expect(typeof spiralPath).toEqual('function');
})
test('create spiral path in 7 by 7 matrix', () => {
  const input = 7;
  const output = spiralPath(input);
  const targetOutput = [
    ['#', '#', '#', '#', '#', '#', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', ' '],
    ['#', ' ', '#', '#', '#', '#', '#'],
    ['#', ' ', '#', ' ', ' ', ' ', '#'],
    ['#', ' ', '#', '#', '#', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', '#'],
    ['#', '#', '#', '#', '#', '#', '#'],
  ];

  expect(output).toEqual(targetOutput);
});
