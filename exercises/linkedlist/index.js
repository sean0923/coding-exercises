// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insertFirst(item) {
    this.head = new Node(item, this.head);
  }

  size() {
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;

    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;

    while (node) {
      if (!node.next) {
        previous.next = null;
        return;
      }

      previous = node;
      node = node.next;
    }
  }

  insertLast(item) {
    const newNode = new Node(item);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let node = this.head;

    while (node) {
      if (!node.next) {
        node.next = newNode;
        return;
      }
      node = node.next;
    }
  }

  getAt(targetIdx) {
    let node = this.head;
    let idx = 0;

    while (node) {
      if (idx === targetIdx) {
        return node;
      }

      idx++;
      node = node.next;
    }

    return null;
  }

  removeAt(targetIdx) {
    if (!this.head) {
      return;
    }

    if (targetIdx === 0) {
      this.head = this.head.next;
      return;
    }

    let prevNode = this.head;
    let node = this.head.next;
    let idx = 1;

    while (node) {
      if (idx === targetIdx) {
        prevNode.next = prevNode.next.next;
        return;
      }

      idx++;
      prevNode = node;
      node = node.next;
    }
  }

  insertAt(item, targetIdx) {
    let newNode = new Node(item);
    // empty
    if (!this.head) {
      this.head = newNode;
      return;
    }
    // a
    // at zero

    if (targetIdx === 0) {
      newNode.next = this.head;
      this.head = newNode;
    }

    let idx = 1;
    let prev = this.head;
    let node = this.head.next;

    // a -> 'b'
    // prev node
    while (node) {
      if (idx === targetIdx) {
        newNode.next = node;
        prev.next = newNode;
        return;
      }
      idx++;
      prev = node;
      node = node.next;
    }

    prev.next = newNode;
  }

  forEach(cb) {
    let node = this.head;

    while (node) {
      cb(node);
      node = node.next;
    }
  }
}
module.exports = { Node, LinkedList };
