// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function calculateBranchSum (node, runingSum, sums) {
  
  let newRunningsum = runingSum + node.value;
  if (!node.left && !node.right) {
    sums.push(newRunningsum);
    return;
  }

  if(node.left){
  calculateBranchSum(node.left, newRunningsum, sums);
  }
   if(node.right){
  calculateBranchSum(node.right, newRunningsum, sums);}
};

function branchSums(root) {
  const sums = [];
  calculateBranchSum(root, 0, sums);
  return sums;
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
