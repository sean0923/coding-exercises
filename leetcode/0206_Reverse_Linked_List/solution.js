const reverseLinkedList = head => {
  let prev = null;
  let curr = head;
  let next = head && head.next;

  while (curr) {
    curr.next = prev;

    prev = curr;
    curr = next;
    if (next) {
      next = next.next;
    }
  }

  return prev;
};

module.exports = { reverseLinkedList };
