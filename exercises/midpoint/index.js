// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
  // slow -> 1 at a time
  // fast -> 2 at a time

  // if fast next or next next is null then slow is midpoint
  let slow = list.head;
  let fast = slow;

  while (fast) {
    if (!fast.next) {
      return slow;
    }

    if (fast.next && !fast.next.next) {
      return slow;
    }

    slow = slow.next;
    fast = fast.next.next;
  }
}

module.exports = midpoint;
