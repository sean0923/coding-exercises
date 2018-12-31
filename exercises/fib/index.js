// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// * recursive with memoize
let storage = [0, 1];
function fib(n) {
  // base
  // n = 0 -> 0
  // n = 1 -> 1

  // return fib(n - 1) + fib(n - 2)

  if (storage.length > n) {
    return storage[n];
  }

  const res = fib(n - 1) + fib(n - 2);
  storage.push(res);

  return res;
}

// * recursive
// function fib(n) {
//   // base
//   // n = 0 -> 0
//   // n = 1 -> 1

//   // return fib(n - 1) + fib(n - 2)

//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   return fib(n - 1) + fib(n - 2);
// }

// * iterative
// function fib(n) {
//   const nums = [0, 1];
//   const idx = n;

//   if (idx < 2) {
//     return nums[idx];
//   }

//   let i = 2;
//   while (i <= idx) {
//     nums.push(nums[i - 2] + nums[i - 1]);
//     i++;
//   }

//   return nums[idx];
// }

module.exports = fib;
