// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  // stopper = '|'
  const stopper = '|';
  // counts = []
  const counts = [];
  // queue with [root, stopper]
  const queue = [root, stopper];

  // count start with 0
  let count = 0;
  // while(queue.length > 1)
  while (queue.length > 1) {
    // takeout from front
    const item = queue.shift();
    // if item === stopper
    if (item === stopper) {
      // push stopper to the end of queue
      queue.push(stopper);
      // push count to counts
      counts.push(count);
      // count = 0
      count = 0;
    } else {
      // push children to queue
      queue.push(...item.children);
      // count++
      count++;
    }
  }

  if (count) {
    counts.push(count);
  }

  return counts;
}

module.exports = levelWidth;
