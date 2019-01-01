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
    // make new node
    // if head is empty plugin new node
    // else node.next = original node
    // then head becomes new node
    const newNode = new Node(item);
    const originalNode = this.head;

    if (this.head !== null) {
      newNode.next = originalNode;
    }

    this.head = newNode;
  }

  size() {
    // count = 0;
    // tempNode
    // start with this.head
    // while tempNode is not null
    // tempNode = tempNode.next
    // count++

    let count = 0;
    let tempNode = this.head;

    while (tempNode !== null) {
      tempNode = tempNode.next;
      count++;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    // set to tempNode
    // if tempNode.next = null
    // then it is a last node
    let tempNode = this.head;

    while (tempNode.next !== null) {
      tempNode = tempNode.next;
    }

    return tempNode;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head === null) return;

    this.head = this.head.next;
  }

  removeLast() {
    // get size

    // count start with 1
    // tempNode

    // while loop to last node (while count less than size)
    // count++
    // tempNode = tempNode.next

    // tempNode.next = null
    const size = this.size(this);

    if (size === 0) return;
    if (size === 1) {
      this.head = null;
      return;
    }

    let count = 1;
    let tempNode = this.head;

    while (count < size - 1) {
      count++;
      tempNode = tempNode.next;
    }

    tempNode.next = null;
  }
}

module.exports = { Node, LinkedList };
