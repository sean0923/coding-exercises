// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  // near -> list.head
  let near = list.head;
  let far = list.head;

  // count = 0
  let count = 0;
  // while count <= n

  while (count < n) {
    // far = far.next
    far = far.next;
    // count++;
    count++;
  }

  // while far is node
  while (far.next) {
    // near = near.next
    near = near.next;
    // fast = fast.next
    far = far.next;
  }

  // return near
  return near;
}

module.exports = fromLast;

// a b c d e
// n     f
