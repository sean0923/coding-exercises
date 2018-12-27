// write pascal triangle

// ex) 1 ->
// 1

// ex) 3 ->
// 1
// 1 2 1
// 1 3 6 3 1

// ex) 4 ->
// 1
// 1 2 1
// 1 3 6 3 1
// 1 4 9 9 4 1

const pascalTriangle = require('./index');

test('1', () => {
  expect(pascalTriangle(1)).toEqual([[1]]);
});

test('3', () => {
  expect(pascalTriangle(3)).toEqual([[1], [1, 1], [1, 2, 1]]);
});

test('4', () => {
  expect(pascalTriangle(4)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]);
});
