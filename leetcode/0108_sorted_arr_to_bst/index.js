function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const insertToBst = (node, val) => {
  
}

var sortedArrayToBST = function(nums) {
  // if nums.length === 0
  if (nums.length === 0) {
    // return null;
    return null;
  }

  // midIdx
  let midIdx = Math.floor(nums.length / 2);

  // tree with nums[midIdx]
  const treeNode = new TreeNode(nums[midIdx]);

  // rightIdx = midIdx + 1
  let rightIdx = midIdx + 1;
  // leftIdx = midIdx - 1
  let leftIdx = midIdx - 1;

  // while leftIdx > 0 right idx < len
  while (leftIdx >= 0 && rightIdx <= nums.length - 1) {
    if (leftIdx >= 0) {
      insertToBst(treeNode, nums[leftIdx]);
      leftIdx--;
    }

    if (rightIdx <= nums.length - 1) {
      insertToBst(treeNode, nums[rightIdx]);
      rightIdx++;
    }
  }
  // if leftIdx > 0
  // insert to bst
  // --

  // if rightIdx < len
  // insert to bst
  // ++

  // return treeNode
};

module.exports = { sortedArrayToBST, TreeNode };
