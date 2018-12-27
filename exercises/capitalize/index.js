// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

const capStr = str => {
  return str[0].toUpperCase() + str.slice(1);
};

function capitalize(str) {
  // split with ' '
  // go through str by map and make str[0] capital then combine res with slice
  return str.split(' ').map(chars => capStr(chars)).join(' ');
}

module.exports = capitalize;
