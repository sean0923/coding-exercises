// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

// isQueEmpty
// if(queue.peek() === undefined)
// ture

// false
const isQueueEmpty = queue => {
  if (queue.peek() === undefined) return true;
  return false;
};

function weave(sourceOne, sourceTwo) {
  // start with empty thridQueue
  // const thirdQueue = new Queue()
  // emptyNum = 0

  // sourceOneEmpty = false
  // sourceTwoEmpty = false

  // while true ( if source one and two is empty then break)
  // if (queue1 empty then )
  // sourceOneEmpty = true
  // else
  // put value to que1

  // if que 2 empty then
  // que 2 empty true
  const thirdQueue = new Queue();

  let isOneEmpty = false;
  let isTwoEmpty = false;

  while (true) {
    if (isOneEmpty && isTwoEmpty) break;

    if (!isOneEmpty) {
      if (isQueueEmpty(sourceOne)) {
        isOneEmpty = true;
      } else {
        thirdQueue.add(sourceOne.remove());
      }
    }

    if (!isTwoEmpty) {
      if (isQueueEmpty(sourceTwo)) {
        isTwoEmpty = true;
      } else {
        thirdQueue.add(sourceTwo.remove());
      }
    }
  }

  return thirdQueue;
}

module.exports = weave;
