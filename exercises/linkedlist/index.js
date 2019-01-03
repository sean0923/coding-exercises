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
    // count = 0

    // oneBeforeTargetNode
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
    const size = this.size();

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

  insertLast(item) {
    const size = this.size();
    const newNode = new Node(item);

    if (size === 0) return (this.head = newNode);
    if (size === 1) return (this.head.next = newNode);
    // when count = size
    // break;

    // then tempNode.next add new node
    let count = 1;
    let tempNode = this.head;

    while (true) {
      count++;
      tempNode = tempNode.next;
      if (count === size) break;
    }
    tempNode.next = newNode;
  }

  getAt(targetIdx) {
    // if targetIdx > size - 1
    // return null;

    // idx 0
    // tempNode = this.head

    // while true
    // idx++;
    // tempNode = tempNode.next
    // if idx = targetIdx
    // break;

    // return tempNode
    const size = this.size();
    if (targetIdx > size - 1) {
      return null;
    }

    let idx = 0;
    let tempNode = this.head;

    while (idx < targetIdx) {
      idx++;
      tempNode = tempNode.next;
    }

    return tempNode;
  }

  removeAt(targetIdx) {
    // if targetIdx > size - 1
    // return;

    const size = this.size();

    if (targetIdx > size - 1) return;

    let prevIdx = targetIdx - 1;

    if (prevIdx < 0) {
      this.head = this.head.next;
      return;
    }

    let idx = 0;
    let prevNode = this.head;

    if (idx === prevIdx) {
      prevNode.next = prevNode.next.next;
      return;
    }

    while (true) {
      idx++;
      prevNode = prevNode.next;
      if (idx === prevIdx) {
        prevNode.next = prevNode.next.next;
        return;
      }
    }

    // if targetIdx === 0
    // head = null

    // if targetIdx === 1
    // head.next = null

    // a -> b -> c
    // 1
    // b.next = null
    // a -> c

    // last ?
    // if targetIdx === size - 1
    // is last

    // if is last
    // get to one before last
    // one before last .next = null

    // not last
    // get one before targetIdx
    // one before last .next = one before last.next.next;
  }

  insertAt(item, idx) {
    // a -> b -> c
    // x -> a -> ...

    // a -> x -> b -> c ->
    // grab one before n one after

    // newNode
    const newNode = new Node(item);

    // this.head = null
    // this.head = newNode
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    // idx < 1
    // newNode.next = this.head
    // this.head = newNode
    // return;
    if (idx < 1) {
      newNode.next = this.head;
      this.head = newNode;
    }

    // 1 <= idx < size - 1
    // means one before
    // one after
    if (idx >= 1 && idx < this.size() - 1) {
      let count = 1;
      let nodeOneBefore = this.head;
      let nodeOneAfter = this.head.next;

      while (true) {
        if (count >= idx) {
          nodeOneBefore.next = newNode;
          newNode.next = nodeOneAfter;
          break;
        }

        nodeOneBefore = nodeOneBefore.next;
        nodeOneAfter = nodeOneAfter.next;
        count++;
      }
      return;
    }

    // idx <= size - 1
    this.insertLast(item);
  }
}

module.exports = { Node, LinkedList };
