// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data = null, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  insert(data, node = this) {
    // if(data <= this.data)
    if (data <= node.data) {
      // if(nothing on left)
      if (!node.left) {
        // this.left = data
        node.left = new Node(data);
      } else {
        // this.insert(data, this.left)
        this.insert(data, node.left);
      }
    } else {
      // if nothing on right
      if (!node.right) {
        // node.right = data
        node.right = new Node(data);
      } else {
        // this.insert(data, this.right)
        this.insert(data, node.right);
      }
    }
  }

  contains(data, node = this) {
    if (!node) return null;

    if (node.data === data) return node;

    // if data < node.data
    if (data < node.data) {
      return this.contains(data, node.left);
    } else {
      return this.contains(data, node.right);
    }
  }
}

module.exports = Node;
