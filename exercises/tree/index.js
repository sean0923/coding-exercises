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

  traverseBF(cb) {
    if (!this.root) return null;
    if (this.root && !this.root.data) return null;

    const recurFunc = (currQueue = [this.root]) => {
      let nextQueue = [];
      // console.log('currQueue: ', currQueue);

      while (currQueue.length > 0) {
        const firstItem = currQueue.shift();
        cb(firstItem);
        if (firstItem.children) {
          nextQueue = nextQueue.concat(firstItem.children);
        }
      }

      if (nextQueue.length > 0) {
        recurFunc(nextQueue);
      }
    };

    recurFunc();
  }
}

module.exports = { Tree, Node };
