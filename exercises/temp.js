let nestedArr = [];
let arr = [1, 2];
nestedArr.push(arr.slice(0, 1));

console.log('nestedArr: ', nestedArr);
arr.push(3);
console.log('nestedArr: ', nestedArr);
