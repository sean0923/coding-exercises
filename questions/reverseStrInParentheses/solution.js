// reverseStrInParentheses

// "(123)" -> "321"
// "(abc(123))" -> "123cba"
// "xyz(abc(123))" -> "xyz123cba"

// -- general notes --
// see open paren remember idx
// close paren idx
// then reverse word

// let say "(123)" split by getting openIdx, closeIdx + 1
// actually don't remove until very end all the parens

// if there are leftover idx
// then arr does not have valid parenthesis

const reverseStrInParentheses = str => {
  // parenIdxs = []
  const parenIdxs = [];

  // chars = str.split('')
  let chars = str.split('');

  // idx = 0
  let idx = 0;
  // while idx < chars.length
  while (idx < chars.length) {
    const char = chars[idx];
    // if char === '('
    if (char === '(') {
      // push idx to parenIdxs
      parenIdxs.push(idx);
    } else if (char === ')') {
      // openParenIdx = pop from parenIdxs
      const openParenIdx = parenIdxs.pop();
      // closeParenIdx = idx
      const closeParenIdx = idx;
      // frontChars
      const frontChars = chars.slice(0, openParenIdx);
      // midChars
      const midChars = chars.slice(openParenIdx, closeParenIdx + 1);
      // endChars
      const endChars = chars.slice(closeParenIdx + 1);
      // chars = [...frontChars, ...reverse(midChars), ...endChars]
      chars = [...frontChars, ...midChars.reverse(), ...endChars];
    }

    // idx++
    idx++;
  }

  // remove '(' and ')'
  return chars.join('').split('(').join('').split(')').join('');
};

module.exports = { reverseStrInParentheses };
