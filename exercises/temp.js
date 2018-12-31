// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

// 1 2
// 2 1

// 1 2 3 4 5
// 1 2 3 4 5

class Queue {
  constructor() {
    this.sStack = new Stack();
    this.qStack = new Stack();
  }

  add(item) {
    while (this.qStack.peek()) {
      this.sStack.push(this.qStack.pop());
    }

    this.qStack.push(item);

    while (this.sStack.peek()) {
      this.qStack.push(this.sStack.pop());
    }
  }

  peek() {
    this.qStack.peek();
  }

  remove() {
    return this.qStack.pop();
  }
}

let queue = new Queue();
queue.add(1);
queue.add(2);
console.log(queue.remove());
console.log(queue.remove());

module.exports = Queue;
