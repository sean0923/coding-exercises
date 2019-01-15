// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  if (min !== null && node.data < min) {
    return false;
  }

  if (max !== null && node.data > max) {
    return false;
  }

  if (node.left) {
    const res = validate(node.left, min, node.data);
    if (res === false) {
      return res;
    }
  }

  if (node.right) {
    const res = validate(node.right, node.data, max);
    if (res === false) {
      return res;
    }
  }

  if (min === null && max === null) {
    return true;
  }
}

module.exports = validate;
