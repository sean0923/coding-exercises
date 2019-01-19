const deleteNode = (head, data) => {
  if (!head) {
    return null;
  }

  if (head.data === data) {
    head = head.next;
    return head;
  }

  let prev = head;
  let curr = prev.next;
  let next = curr.next;

  while (curr) {
    if (curr.data === data) {
      prev.next = next;
      return head;
    }

    prev = curr;
    curr = next;
    next = next.next;
  }

  return head;
};

module.exports = { deleteNode };
