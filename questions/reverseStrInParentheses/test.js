const { reverseStrInParentheses } = require('./index');

test('reverseStrInParentheses is a function', () => {
  expect(typeof reverseStrInParentheses).toEqual('function');
});

test('"(123)" -> "321"', () => {
  const input = '(123)';
  const output = reverseStrInParentheses(input);
  const targetOutput = '321';

  expect(output).toEqual(targetOutput);
});

test('"(abc(123))" -> "123cba"', () => {
  const input = '(abc(123))';
  const output = reverseStrInParentheses(input);
  const targetOutput = '123cba';

  expect(output).toEqual(targetOutput);
});

test('"xyz(abc(123))" -> "xyz123cba"', () => {
  const input = 'xyz(abc(123))';
  const output = reverseStrInParentheses(input);
  const targetOutput = 'xyz123cba';

  expect(output).toEqual(targetOutput);
});
