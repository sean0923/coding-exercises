// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data, children = []) {
    this.data = data;
    this.children = children;
  }

  add(data) {
    const newNode = new Node(data);
    this.children.push(newNode);
  }

  remove(data) {
    this.children = this.children.filter(item => {
      return item.data !== data;
    });
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  traverseBF(cb, arr = [this.root]) {
    const nextArr = [];
    arr.forEach(node => {
      cb(node);
      node.children.forEach(child => {
        nextArr.push(child);
      });
    });

    if (nextArr.length) {
      this.traverseBF(cb, nextArr);
    }
  }

  traverseDF(cb, node = this.root) {
    cb(node);
    node.children.forEach(child => this.traverseDF(cb, child));
  }
}

module.exports = { Tree, Node };
