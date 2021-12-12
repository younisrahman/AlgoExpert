class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const branchSums = (root) => {
  let sums = [];
  calculatBranchSum(root, 0, sums);
  return sums;
};
const calculateBranchSum = (node, runingSum, sums) => {
  if (!node) return;

  let newRunningsum = runingSum + node.value;
  if (node.left && node.right) {
    sums.push(newRunningsum);
    return;
  }

  calculateBranchSum(node.left, newRunningsum, sums);
  calculateBranchSum(node.right, newRunningsum, sums);
};
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
