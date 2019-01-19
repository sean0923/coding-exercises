const reverseLinkedList = head => {
  let prev = null;
  let curr = head;
  let next = head.next;

  while (curr) {
    curr.next = prev;

    prev = curr;
    curr = next;
    if (next) {
      next = next.next;
    }
  }

  console.log('prev: ', prev);
  return prev;
};

module.exports = { reverseLinkedList };
